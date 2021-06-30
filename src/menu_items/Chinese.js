import React, { useState, useEffect} from 'react';
import { items } from './item';
function Chinese(){
    let [chinese] = useState(items.Chinese)
    console.log(chinese);
    return (
        <div>
            <h1>Chinese</h1>
            <div className='Container'>

            {chinese.map((value,index) => {
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
export default Chinese;