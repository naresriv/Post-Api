import React, { useState } from 'react'

const PostApi = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [coment, setComent] = useState("");

    const AddUserData = () => {
        let data = {name, email, coment}
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then((result) => result.json()
        .then((resp) => console.log("res", resp)))
    }

    return (
        <div>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }}  type="email"/>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={coment} onChange={(e) => setComent(e.target.value)} />
            <button type='button' onClick={AddUserData}>add User</button>
        </div>
    )
}

export default PostApi
