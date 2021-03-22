import React from 'react'

export default function Error({ error }) {
    console.log(error)
    return (
        <p className="alert alert-warning text-center">
            {error}
        </p>
    )
}
