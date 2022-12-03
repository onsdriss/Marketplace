import React from 'react'
import Products from '../Products/Products'
import './list.css'
import ProductList from './ProductList/ProductList'
import styled from "styled-components";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const List = ({list}) => {
  return (
    
    <div className='l-cards'>
        {list.map((item) => (
          <ProductList key={item._id} item={item} />
        ))}
    </div>
   
  )
}

export default List
