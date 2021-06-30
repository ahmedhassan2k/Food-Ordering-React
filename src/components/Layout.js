import React from 'react'
import Header from './Header'
import Footer from './footer'

const Layout =({children})=>{
    return(
        <div className = 'layout'>
            <Header />
            <span>{children}</span>
            
            <Footer />
        </div>
    )
}

export default Layout