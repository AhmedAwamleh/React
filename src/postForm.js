import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";

export default function Postform() {
    const [name, setName] = useState('ahmed');
    const [age, setAge] = useState('30');
    const [gender, setGender] = useState('male')

    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeAge(e) {
        setAge(e.target.value)
    }
    function handleChangeGender(e) {
        setGender(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            "name": e.target.name.value,
            "age": e.target.age.value,
            "gender": e.target.gender.value,
        }

        const newAge = await axios.post(`http://localhost:3008/person`, data).catch(function (error) { console.log(error) })
        setAge(newAge.data)
        e.target.name.value = ''
        e.target.age.value = ''
        e.target.gender.value = ''
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <input type="text" id='name' placeholder="Enter name" onChange={handleChangeName} />
                <input type="text" id='age' placeholder="Enter age" onChange={handleChangeAge} />
                <input type="text" id='gender' placeholder="Enter gender" onChange={handleChangeGender} />

                <Button variant="primary" type="submit">   Submit </Button>

            </Form.Group>


        </Form>

    )
}