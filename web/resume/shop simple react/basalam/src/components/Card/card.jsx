import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { BiCategory } from "react-icons/bi";

function CardProduct(props) {

  return (
    <Card className='CardContainer' style={{ width: '18rem' }}>
      <dev className='conainter-product'>
        <h1>{props.massege}</h1>
        <Card.Img variant="top" src={props.srcImg} /> 
      </dev>
      <Card.Body>
        <Card.Title className='Title'>{props.title}</Card.Title>
        <Card.Text className='CardText'>
            {props.discription}
        </Card.Text>
        <dev className='category'>
          <p><BiCategory/> {props.category}</p>
        </dev>
        <dev className='rating'>
          <h1><FaStar/> {props.rate}</h1>
          <p>نظرات ({props.comments})</p>
        </dev>
        <dev className='cardDis'>
            <Button 
            onClick={() => 
              props.setBasketList([...props.basketList, {productName : props.title, productPrice : props.price, productId : props.Id}])
            } variant='outline-warning' className='addButton'> + </Button>
            <dev>
                <dev className='price-real'>       
                  <h1>{props.price}$</h1>
                </dev>
            </dev>
        </dev>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;