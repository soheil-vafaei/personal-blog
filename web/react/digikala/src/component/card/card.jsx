import './card.css'


const Card = (props) =>{
    return (
    <dev class="container">
        <dev class='container-card'>
            <dev class='imgContainer'>
                <img class='image' src={props.src}/>
            </dev>
            <dev class='container-discription'>
                <p class='discription'>{props.discriptions}</p>
            </dev>
            <dev class='container-price'>
                <h3 class='price'>{props.price}</h3>
                <p class='discount'>{props.discount}%</p>
            </dev>
            <dev class="container-real">
                <del class="real-price" >{props.realPrice}</del>
            </dev>
        </dev>
    </dev>
    )
}

export default Card