
import {Card ,CardMedia ,CardContent , CardActions,IconButton ,Typography ,Box} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';




export default function Product(props) {
    
    const product = props.product;
    console.log(props)

    return (
    <Card className='root'> 
        <CardMedia className='media' image={product.image} title={product.name}/>
        <CardContent>
            <div className='cardContent'>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {product.price}
                </Typography>
            
            </div>
            <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
        </CardContent>
        <CardActions className='cardActions'
            disableSpacing  >
            <IconButton aria-label="add to cart" color="primary">
                <AddShoppingCart />
            </IconButton>
        </CardActions>

    </Card>
      
    
  );
}