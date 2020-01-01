import React, {useState} from "react";
import { noop } from "./appLayout"
import styled from "styled-components";
  
  const isValid = (name, amount, price) => name.length > 0 && amount > 0 && price > 0; 
  
export function BagItemAdder({ onAddBagItem = noop }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);

    const submitItem = (name, amount, price) => {
      if (isValid(name, amount, price) ) {
        onAddBagItem(name, amount, price);
        setName("");
        setAmount(0);
        setPrice(0);
      }
    }
  
    return (
      <section>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitItem(name, amount, price);
          }}
        >
        Item: 
        <Input
            type="text" name="item"
            placeholder="Item" required onChange={e => setName(e.target.value)} value={name}
        />
        Amount: 
        <Input
            type="number" name="amount"
            placeholder="Amount" required  min="1" onChange={e => setAmount(e.target.value)} value={amount}
        />
        Price: 
        <Input
            type="number" name="price"
            placeholder="Price" required min="1" onChange={e => setPrice(e.target.value)} value={price}
        />
         $ 
          <Button disabled={!isValid(name, amount, price)}>Add Item</Button>
        </form>
      </section>
    );
  }

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  :active {
    cursor: grab;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: none;
  width: 180px;
`;