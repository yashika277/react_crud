import React, { useRef, useState } from 'react'

const Crud = () => {

    let name = useRef();
    let age = useRef();

    const [data, setData] = useState([
        {
            id: 1,
            name: "yashika",
            age: 20,
        },
        {
            id: 2,
            name: "Freny",
            age: 21,
        },
        {
            id: 3,
            name: "Grecy",
            age: 23,
        }

    ])


    let submit = () => {
        let user = {
            id: 4,
            name: name.current.value,
            age: age.current.value,
        }
        setData([...data, user])
    }


    let deleteData = (id) => {
        console.log(id);

        setData(data.filter((val) => val.id !== id))
    }

    // let deleteData = (index) => {
    //     setData(data.slice(0, index));
    // }


    return (
        <div>
            <input type="text" ref={name} />
            <input type="number" ref={age} />
            <button onClick={submit}>add</button>

            {
                data?.map((val, ind) => {
                    return (
                        <>
                            <p>{val.id}</p>
                            <h1>{val.name}</h1>
                            <h2>{val.age}</h2>
                            <button onClick={() => deleteData(ind)}>Delete</button>
                        </>
                    )
                })
            }
        </div>

    )
}

export default Crud
