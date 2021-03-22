import React, { useState, useEffect } from 'react'
import api from './services/api'

const ProductContext = React.createContext()

function ProductProvider(props) {
    const [errors, setErrors] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [form, setForm] = useState(false)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState([])
    const [category, setCategory] = useState('')

    const state = {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        isAuthenticated,
        form,
        setForm,
        products,
        page,
        setPage,
        pagination,
        setPagination,
        setCategory,
    }



    useEffect(() => {
        const authorization = localStorage.getItem('Authorization')
        const _id = localStorage.getItem('_id')
        if(authorization && _id) {
            setIsAuthenticated(true)
        }
    }, [])

    useEffect(() => {
        const loadProducts = async () => {
            if(category === 'Wszystkie kategorie') setCategory('')
            const products = `/products?page=${page}`
            const productByCategory = `/products/category?page=${page}&category=${category}`
            const response = await api.get(`${category !== '' ? productByCategory : products}`)

            setProducts(response.data.products)
            setPagination(response.data.pagination)
        }

        loadProducts()
    }, [page, category])

    const login = async (event, history) => {
        event.preventDefault()

        if(!email || !password) {
            return alert('Wypełnij wszystkie pola!')
        }

        const response = await api.post('/authentication', {
            email,
            password
        })

        if(response.data.error) {
            setErrors(response.data)
        } else {
            setIsAuthenticated(true)
            const { token } = response.data
            const { _id } = response.data.user
            localStorage.setItem('Authorization', `Bearer ${token}`)
            localStorage.setItem('_id', _id)
            history.push('/dashboard')
        }
    }

    const logout = async () => {
        localStorage.removeItem('Authorization')
        localStorage.removeItem('_id')
        setIsAuthenticated(false)
    }

    console.log("children",props)
    return (
        <ProductContext.Provider
            value={{
                login,
                logout,
                state,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer
console.log("ProductConsumer",ProductConsumer)

export { ProductProvider, ProductConsumer }