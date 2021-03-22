import React from 'react'

import './NavByCategory.css'
import navIcons from '../utils/navIcons'
import { ProductConsumer } from '../../context'

export default function NavByCategory() {
    return (
        <section className="categories">
            <div className="container-fluid bg-purple">
                <div className="row pl-3 py-2 align-items-center justify-content-between main-icon-wrapper">
                        {
                            navIcons.map((icon, index) => (
                                <div className="icon-wrapper mx-1 mt-1 mb-1" key={index}>
                                    <ProductConsumer>
                                        {value => {
                                            const { setCategory, setPage } = value.state
                                            return (
                                                <div
                                                    className="icon"
                                                    onClick={() => {
                                                        setPage(1)
                                                        setCategory(icon.text)
                                                    }}
                                                >
                                                    <p className='small'>{icon.text}</p>
                                                </div>
                                            )
                                        }}
                                    </ProductConsumer>
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}
