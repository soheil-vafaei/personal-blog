import Button from 'react-bootstrap/Button';
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import './basket.css'
import { useState } from 'react';


const Basket = (props) => {
    // {console.log(idCounter)}

    // const Counter = () => {
    //     return (
    //         <dev className='d-flex basket--itemList'>
    //             <span className='priceProd m-1'>{item.productPrice}$</span>
    //             <Button className='btnBuy' variant="danger"
    //                 onClick={() => { 
    //                     setIdCounter (3) }}>-
    //             </Button>
    //             {
    //                 // if (props.setBasketList(props.basketList(product => product.productId != item.productId)))
    //             }
    //         </dev>
    //     )
    // }
    return (
        <dev className='cont'>
            <dev className='container'>
                <dev>
                    <a className='container-tag-basket-user' href='#'>
                        <dev className='basket-user'>
                            <FaShoppingBag size={30} />
                            <p >سبد خرید</p>
                        </dev>
                    </a>
                </dev>
                <dev className='basket-container'>
                    <dev>
                        {props.basketList.map(item => {
                            return (
                                <dev className='w-100 d-flex m-1'>
                                    <dev className='w-100 h-100 basket-bet'>
                                        <dev>
                                            <p className='nameProd'>{item.productName}</p>
                                        </dev>
                                        <dev className='d-flex basket--itemList'>
                                            <span className='priceProd m-1'>{item.productPrice}$</span>
                                            <Button className='btnBuy' variant="danger"
                                                onClick={() => { props.setBasketList(props.basketList.filter(product => product.productId != item.productId)) }}>-
                                            </Button>
                                            {/* <p>*2</p> */}
                                        </dev>
                                    </dev>
                                </dev>
                            )
                        })}
                    </dev>
                </dev>


                <dev className='w-100 h-25 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='text-center priceSums'>
                        <span>
                            {props.basketList.reduce((sum, current) => sum + current.productPrice, 0)}
                            $
                        </span>
                    </h3>
                    <Button className='w-100' variant="dark">پرداخت</Button>
                </dev>
            </dev>
        </dev>
    )
}

export default Basket