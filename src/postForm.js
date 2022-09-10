
import React from "react";
import axios from "axios";
import { useState } from "react";


function FrontEnd() {
    const url = (`http://localhost:3008/person`)
    const [name, setName] = useState('ahmed');
    const [age, setAge] = useState('25');
    const [gender, setGender] = useState('male')



    async function handelSubmit(e) {

        e.preventDefault();
        console.log(name, age, gender)

        try {

            const sendPost = await (await axios.post(url, { name, age, gender }))



            console.log(sendPost.data)

            console.log(typeof (sendPost.data.newAge))
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
                {/* <input type="text" onChange={handleAge} /> */}
            </form>
            <p data-testid="name">my name is {name}</p>
            <p data-testid="age">my age is {age}</p>
            <p data-testid="gender">my gender is {gender}</p>

        </>

    )
}
export default FrontEnd