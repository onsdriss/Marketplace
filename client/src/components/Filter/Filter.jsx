import React, { useEffect, useState } from 'react'
import './filter.css'
import {  ratingList } from '../../data/data'
import { categories } from '../../data'
import MainCategory from '../Partials/MainCategory/MainCategory'
import Brand from '../Partials/Brand/Brand'
import Application from '../Partials/Application/Application'
import Price from '../Partials/Price/Price'
import Product from "../Products/Product";
import axios from 'axios'

const Filter = ({selectedCategory, selectToggle, selectedRating, selectRating, brands,applications, changeChecked,changeChecked2, selectedPrice, changePrice, cat, rating}) => {
  
    const [categoryList,setCategoryList] = useState([]);
    //const [ setRatingList] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios.get('http://localhost:5000/api/category');
            const resultTwo = await axios.get('http://localhost:5000/api/products');

            setCategoryList(result.data);
            setProducts(resultTwo.data);
        }
        fetchData();
    }, [cat,rating]);
    
    return (
    <div className='f-container'>
        <div className="filter-group">
            <h3 className="f-category">Category</h3>
            <MainCategory options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
        </div>
        
        <div className="filter-group">
            <h3 className="f-category">Brand</h3>
            {brands.map((brand) => <Brand key={brand.label} brand={brand} changeChecked={changeChecked} />)}
        </div>

        <div className="filter-group">
            <h3 className="f-category">Application</h3>
            {applications.map((application) => <Application key={application.label} application={application} changeChecked2={changeChecked2} />)}
        </div>

        <div className="filter-group">
            <h3 className="f-category">Price</h3>
            <Price value={selectedPrice} changePrice={changePrice} products={products} />
        </div>

        <div className="filter-group">
            <h3 className="f-category">Star Rating</h3>
            <MainCategory options={ratingList} value={selectedRating} selectToggle={selectRating} />
        </div>
    </div>
  )
}

export default Filter
