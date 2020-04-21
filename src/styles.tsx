import styled from 'styled-components';

export const Header = styled("h1")`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  text-align: center;
  font-size: 3em;
  color: white;
  background: #404040;
  padding: 1.5em;
`;

export const HeaderDiv = styled("div")`
  text-align: center;
  font-size: 2em;
  color: white;
  background: #404040;
  padding: 1em;
  margin-bottom: 0.5em;
`;

export const Input = styled("input")`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: 8898aa;
  border: 1.5px solid #565656;
`;

export const Select = styled("select")`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: 8898aa;
  border: 1.5px solid #565656;
`;

interface LabelProps { payment?: boolean };

export const Label = styled("label")<LabelProps>`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 1.2em;
  color: 8898aa;
  margin-left: ${(p) => p.payment ? "0em" : "1em"};
  margin-bottom: 0.5em;
`;

export const PaymentFormDiv = styled("div")`
  margin-left: 0.5em;
  margin-bottom: 1em;
`;

export const CartMargin = styled("div")`
  margin-top: 1em;
`;

export const GroceryItemDiv = styled("div")`
  font-size: 0.8em;
  align-items: center;
  margin: 1em;
  padding: 10px;
  border-radius: 3px;
  color: 8898aa;
  border: 0.5px solid black;
  width: 90%;
  left: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
    "colum-one" "colum-two" "colum-three" "colum-four"
`;

export const GroceryItemItem = styled("span")`
  grid-area: "colum-one";
`;

export const GroceryItemCategory = styled("span")`
  grid-area: "colum-two";
`;

export const GroceryItemPrice= styled("span")`
  grid-area: "colum-three";
`;

export const GroceryItemButtonPrice = styled("span")`
  grid-area: "colum-four";
  justify-self: end;
`;

export const CartItemDiv = styled("div")`
font-size: 0.8em;
  align-items: center;
  margin: 1em;
  padding: 10px;
  border-radius: 3px;
  color: 8898aa;
  border: 0.5px solid black;
  width: 90%;
  left: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
    "colum-one" "colum-two" "colum-three" "colum-four"
`;

export const Wrapper = styled("div")`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "row-one" "row-two"
`;

export const GroceryWrapper = styled("div")`
  grid-area: "row-one";
`;

export const CartWrapper = styled("div")`
  grid-area: "row-two";
`;

export const SearchSort = styled("div")`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "row-one" "row-two"
`;

export const Sort = styled("div")`
  grid-area: "row-one";
`;

export const Search = styled("div")`
  grid-area: "row-two";
`;

export const TotalPrice = styled("span")`
  justify-self: end;
`;

export const AddToCartButton = styled("button")`
  justify-self: end;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #494949;
  text-transform: uppercase;
  background: #ffffff;
  padding: 5px;
  border: 1px solid #494949;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.4s ease 0s;
  :hover {
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
  }
`;

export const ActionButton = styled("button")`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  border: none;
  background: #404040;
  color: #ffffff;
  font-weight: 100;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  :hover {
    color: #404040;
    font-weight: 700;
    letter-spacing: 3px;
    background: none;
    box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.3s ease 0s;
  }
`;