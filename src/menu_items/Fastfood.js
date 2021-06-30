import React, { useState, useEffect} from 'react';
import { items } from './item';
function Fastfood(){
    let [fastFood] = useState(items.Fastfood)
    console.log(fastFood);
    return (
        <div>
            <h1>Fast Food</h1>
            <div className='Container'>

            {fastFood.map((value,index) => {
                return(
                    <div className = 'Boxes'>
                        <img src = {value.image} width = '200px' height = '200px' /><br/>
                        <strong>{value.Name}</strong><br/>
                        <strong>{value.Description}</strong><br/>
                        Price: {value.Price}<br/>
                        GST: {value.GST}<br/>
                        Total: {value.Total}<br/>         
                    </div>
                )
            })}

            
            </div>
        </div>
    )


}
export default Fastfood;