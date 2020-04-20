import * as React from 'react';
import { ajax } from 'jquery';
import { CardElement, injectStripe, ReactStripeElements, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';

interface Props {
  stripe?: ReactStripeElements.StripeProps
  cart: ({ item: string; category: string; price: number; } | number)[]
}

const PaymentForm: React.FC<Props> = (props) => {
  const [name, setName] = React.useState<string>("");
  const [receiptURL, setReceiptURL] = React.useState<string>("");

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); e.preventDefault(); }
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => { 
    e.preventDefault();
    try {
      let { token } = await props.stripe.createToken({ name, });
      let amount = Number(props.cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2);
      ajax({
        method: 'POST',
        url: '/purchase',
        data: JSON.stringify({ token, amount }),
        contentType: 'application/json',
        success: (receipt) => { setReceiptURL(receipt) },
        error: (err) => { console.log(err); },
      });
    } catch(err) { throw err; }
  }

  return (
    <div>
      <h1>Payment Form</h1>
      {receiptURL.length ? <div><div>Thank you for your purchase!</div><a href={receiptURL}>To view your receipt please click here!</a></div> :
      <form onSubmit={handleSubmit}>
        <div><label>Name: </label><input type="text" value={name} onChange={updateName}/></div>
        <div><label>Amount: </label><span>${Number(props.cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2)}</span></div>
        <div><label>Credit Card Information: </label><CardElement /></div>
        <button>Charge!</button>
      </form>}
    </div>
  );
}

export default injectStripe(PaymentForm);