
import "./products.css"
import { Grid } from '@mui/material'
import data from "./productobj.js";

import Product from "./Product.jsx"




export default function Products() {
    // eslint-disable-next-line no-unused-vars
    const products = data

    
    return (
        <main >
            <Grid container spacing={3}
            justify ="center"
            className="products">
                {products.map((product) => {
                    return (
                        <Grid className="product" item xs={12} sm={6} md={4} key={product.id}>
                            <Product product={product} />
                        </Grid>
                    )
                })}
            </Grid>
            
        </main>
    )
}