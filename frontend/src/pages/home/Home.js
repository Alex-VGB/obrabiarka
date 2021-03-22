import React, {useState} from 'react'
import './Home.css'

import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import NavByCategory from '../../components/nav-category/NavByCategory'
import ProductItem from '../../components/product-item/ProductItem'
import Footer from '../../components/footer/Footer'
import Pagination from '../../components/pagination/Pagination'

import {ProductConsumer} from '../../context'

import noImg from "../../assets/no-image-icon.png";
import {Link} from "react-router-dom";

export default function Home(props) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <div className="slider-main">
                <Navbar/>
                <Slider/>
                <div className="container-search-btn ">
                    <div className='search-btn-icon'>
                    <div className='search-icon'/>
                    <input type="text"
                           className="search-btn"
                           placeholder='search...'
                           onChange={(e) => setSearchTerm(e.target.value)}/>
                    </div>
                </div>
            </div>
            <NavByCategory/>

            <div className="container">
                <div className="row pt-3">
                    <ProductConsumer>
                        {value => {
                            const {products, page, setPage, pagination} = value.state
                            return (
                                <>
                                    {
                                        products.filter((val) => {
                                            if (searchTerm === '') {
                                                return val
                                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val
                                            }
                                        }).map((val, key) => {
                                            return (
                                                <div key={key} className="card-product-main">
                                                    <Link className="product-item"
                                                          to={`/details?_id=${val._id}`}>
                                                        <img
                                                            src={val.img ? `https://limitless-reaches-05484.herokuapp.com/files/${val.img}` : noImg}
                                                            className="img-fluid img-product"
                                                            alt="produkt na sprzedaż"/>
                                                        <p className='product-item-title'>{val.title}</p>
                                                        <p className='product-item-date'>
                                                            {val.date.slice(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1')}
                                                        </p>
                                                        <div className='product-item-icon-price'>
                                                            <strong className='product-item-price'>{val.price} zł</strong>
                                                            <div className='product-item-icon'/>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }

                                    {products.length < 1 &&

                                    (
                                        <div className="container my-5">
                                            <div className="row my-5 text-center">
                                                <div className="col">
                                                    <h3 className="text-purple">Brak produktów zarejestrowanych w tej
                                                        kategorii ...</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                    {products.length > 0 &&
                                    <Pagination page={page} setPage={setPage} pagination={pagination}/>}
                                </>

                            )

                        }}
                    </ProductConsumer>
                </div>
            </div>

            <Footer/>
        </>
    )
}
