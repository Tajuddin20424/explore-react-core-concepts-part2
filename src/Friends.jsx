import { useEffect, useState } from 'react'
import './Friends.css'
export default function Friends() {

    const [Friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json)
        .then(data =>setFriends(data))

    }, [])

    return (
        <div className='box'>
            <h3>Friends: {Friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )

}

/**
 * 1.state to hold data
 * 2.use effect with dependency array 
 * 3.use effect to lode data
 * 4.set loaded data to the state
 * 5.display data on the component
 */