import React from 'react'
import './Pagination.css'

export default function Pagination({ page, setPage, pagination }) {
    return (
        <div className="container">
            <div className="row my-2 justify-content-center">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item cursor-pointer">
                            <span className="page-link" onClick={() => page > 1 && setPage(page - 1)}>Poprzednia</span>
                        </li>
                        {pagination.map(item => {
                            return (
                                <li key={item} className={`page-item cursor-pointer ${page === item && 'active'}`} onClick={() => setPage(item)}>
                                    <span className="page-link">{item}</span>
                                </li>
                            )
                        })}
                        <li className="page-item cursor-pointer">
                            <span className="page-link" onClick={() => page < pagination.length && setPage(page + 1)}>Następna</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>      
    )
}
