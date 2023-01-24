import React from 'react'

export default function Navbar(props) {
    console.log(props)
    return(
        <nav className='navbar bg-body-tertiary' data-bs-theme='dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href="/">How to organize your life</a>
            </div>
        </nav>
    )
}