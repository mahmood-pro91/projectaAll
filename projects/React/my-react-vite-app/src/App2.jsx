import React from "react";





export default function App2(){

    const fruitList = ["apple","banana","orange",'lemon'];

    return( 
    <>
        <ul >
            {fruitList.map((fr,index) => 
            
                // eslint-disable-next-line no-undef
                <li  key={`${fr}-${index}`}>{fr.toUpperCase()}</li>
            

            )}
        </ul>
        
    </>
    )
}