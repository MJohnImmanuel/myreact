import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Dummy() {

    const [Data,Setdata]= useState([]);

    useEffect( ()=>{
        async function getData() {

            const responce= await fetch('https://dummyjson.com/products');

            let myData= await responce.json();
            let newData=myData.products;
            Setdata(newData);
        }
        getData();
    })
        return(
                Data.map((products)=>{
                return(
                    <div><Link to={'/dummy'} ></Link>
                        <img src={products.images} alt="" /> 
                        <h1>{products.id}</h1>
                    </div>
                )
            })
        )
}

export default Dummy
