import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

interface Props {
  stripe?: ReactStripeElements.StripeProps
  cart: ({ item: string; category: string; price: number; } | number)[]
}

const PaymentForm: React.FC<Props> = (props) => {
  const [name, setName] = React.useState<string>("");

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); e.preventDefault(); }
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => { 
    e.preventDefault();
    try {
      let token = await props.stripe.createToken({ name, });
      console.log(token);
    } catch(e) { throw e; }
  }

  return (
    <div>
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><input type="text" value={name} onChange={updateName}/>
        <label>Amount:</label><span>${Number(props.cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2)}</span>
        <label>Credit Card Information</label><CardElement />
        <button>Charge!</button>
      </form>
    </div>
  );
}

export default injectStripe(PaymentForm);