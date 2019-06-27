import React from 'react'
import NoProductimg from '../images/no_product.jpg'



const NoProducts = () => {
    return (
        <div className="row d-flex justify-content-center">
            <img src={NoProductimg} alt="No products Available" />
        </div>
    )
}


export default NoProducts