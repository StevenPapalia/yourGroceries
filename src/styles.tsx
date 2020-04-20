import styled from 'styled-components';

export const Header = styled("h1")`
  text-align: center;
  color: 8898aa;
`;

export const Input = styled("input")`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: 8898aa;
  border: 2px solid black;
`;

export const GroceryItemDiv = styled("div")`
  font-size: 0.8em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: 8898aa;
  border: 0.5px solid black;
  width: 90%;
  left: 0px
`;

export const CartItemDiv = styled("div")`
  font-size: 0.8em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: 8898aa;
  border: 0.5px solid black;
  width: 90%;
  right: 0px;
`;

export const Wrapper = styled("div")`
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
