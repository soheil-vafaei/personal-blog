import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Basket from '../../basket/basket';
import CardProduct from '../../Card/card';
import './index.css'

const HomePage = () =>{
    const [productList, setProductList] = useState([])

    const [basketList, setBasketList] = useState([])
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((data)=>
        {
            setProductList(data.data)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    },[])

    function DiscountTag(price) {
            if (price >= 100)
            {
                return `تخفیف ویژه`
            }
            else{
                return ``
            }
    }

    
    return(
       

        <dev className='d-flex' dir='rtl'>  
             
            <dev className='basketContainer'>
                <Basket
                    basketList = {basketList}
                    setBasketList = {setBasketList}
                />
            </dev>
            <dev className='w-75 h-100 d-flex gap-2 flex-wrap justify-content-center align-items-center'>
            {productList.map(item=>{
                    return(
                        <>  
                            <dev>
                            <CardProduct
                                Id = {item.id}
                                title={item.title} 
                                massege={DiscountTag(item.price)} 
                                srcImg={item.image}
                                discription={item.description} 
                                category = {item.category} 
                                rate = {item.rating.rate}
                                comments ={item.rating.count}
                                price={item.price}
                                basketList = {basketList}
                                setBasketList = {setBasketList}
                            />
                            </dev>
                            
                        </>
                    )
                })}
                
            
            </dev>
            {/* <p>{item.category}</p> */}
            
        </dev>

    )
}

export default HomePage