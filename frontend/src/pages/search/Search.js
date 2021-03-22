import React, {useEffect, useState} from 'react'
import ProductItem from "../../components/product-item/ProductItem";
import {ProductConsumer} from "../../context";
import api from '../../services/api'


function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="App">
            <ProductConsumer>
                {value => {
                    const { products } = value.state
                    console.log("productssss",products)
                    return (
                        <>
                            <div>
                                <div>
                                    <input type="text"
                                    placeholder='search...'
                                    onChange={(e) => setSearchTerm(e.target.value)}/>
                                </div>
                                {
                                    products.filter((val) => {
                                        if (searchTerm === '') {
                                            return val
                                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map((val, key) => {
                                        return (
                                            <div key={key}>
                                                {products.length > 0 && products.map(product => (
                                                    <ProductItem key={product._id} values={product} />
                                                ))}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {products.length < 1 &&

                            (
                                <div className="container my-5">
                                    <div className="row my-5 text-center">
                                        <div className="col">
                                            <h3 className="text-purple">Brak produktów zarejestrowanych w tej kategorii ...</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </>

                    )

                }}
            </ProductConsumer>
        </div>
    );
}

export default Search;