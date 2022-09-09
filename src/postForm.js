
import React from "react";
import axios from "axios";
import { useState } from "react";


function FrontEnd() {
    const url = (`http://localhost:3009/person`)
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('')


    async function handelSubmit(e) {

        e.preventDefault();
        console.log(name, age, gender)

        try {

            const sendPost = await axios.post(url, { name, age, gender })

            console.log(sendPost.data)
            console.log(typeof (sendPost.data))
        } catch (error) {
            console.log(error)
        }

    }





    return (
        <>

            <form onSubmit={handelSubmit}>

                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                <button type="submit" >submit</button>
            </form>

        </>

    )
}
export default FrontEnd