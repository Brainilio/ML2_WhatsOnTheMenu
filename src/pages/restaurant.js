import React, {useState, useEffect} from 'react'; 


const Restaurant = (props) => { 
    useEffect(() => { 
        setItems(props.location.state);
     
    }, [props.location.state])

    const [items, setItems] = useState([])

   console.log(items.categories)
    


    return (
        <>
        <h1>{items.name}</h1>
        <ul>
           
        </ul>
        </>
    )
}

export default Restaurant; 