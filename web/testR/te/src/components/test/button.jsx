import { useState } from "react";

const Button = () =>{


    const [myValues, setInput] = useState('');

    return(
        <>

            <p>{myValues}</p>
            <input type="color" value={myValues} onChange={(event) =>{setInput(event.target.value)}} />
        </>
    )
}

export default Button