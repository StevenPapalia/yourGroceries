import * as React from 'react';
import { ajax } from 'jquery';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { Input } from './styles';

interface Props {
  stripe?: ReactStripeElements.StripeProps,
  closeModal: () => void,
  emptyCart: () => void,
  cart: ({ item: string, category: string, price: number; } | number)[]
}

const PaymentForm: React.FC<Props> = ({ stripe, cart, closeModal, emptyCart }) => {
  const [name, setName] = React.useState<string>("");
  const [receiptURL, setReceiptURL] = React.useState<string>("");

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); e.preventDefault(); }
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => { 
    e.preventDefault();
    try {
      let { token } = await stripe.createToken({ name });
      let amount = Number(cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2);
      if (!amount) { return; }
      ajax({
        method: 'POST',
        url: '/purchase',
        data: JSON.stringify({ token, amount }),
        contentType: 'application/json',
        success: (receipt: string) => { setReceiptURL(receipt); },
        error: (err: JQuery.jqXHR<any>) => { console.log(err); },
      });
    } catch(err) { throw err; }
  }

  return (
    <div>
      <h1>Payment Form</h1>
      {receiptURL.length ? <div><div>Thank you for your purchase!</div><a href={receiptURL}>To view your receipt please click here!</a></div> :
      <form onSubmit={handleSubmit}>
        <div><label>Name: </label><Input type="text" value={name} onChange={updateName} placeholder="name" required /></div>
        <div><label>Amount: </label><span>${Number(cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2)}</span></div>
        <div><label>Credit Card Information: </label><CardElement /></div>
        <div><button>Submit Payment</button></div>
      </form>}
      <button onClick={() => { closeModal(); if (receiptURL) { emptyCart(); } }}>close</button>
    </div>
  );
}

export default injectStripe(PaymentForm);