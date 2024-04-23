import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


const Api = () => {
    let [data, setdata] = useState([]);
    const [view, setview] = useState([]);
    let name = useRef();
    let age = useRef();
    let fetchData = () => {
        axios.get('http://localhost:3001/post').then((res) => {
            setdata(res.data);
        })
    }
    let handleSubmit = () => {
        let dataa = {
            name: name.current.value,
            age: age.current.value

        }
        axios.post('http://localhost:3001/post', dataa).then((res) => {
            // fetchData();
            setdata([...data, res.data]);

        })
    }
    let deleteData = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3001/post/${id}`).then((res) => {
            console.log(res);
            setdata(data.filter((val) => val.id !== id));
        });

    }

    // ==================update=====================
    let viewData = (index) => {
        console.log(index);
        let user = data[index];
        setview(user)

    }
    let handleView = (e) => {
        setview({...view,[e.target.name]:e.target.value})
    }
    let handleUpdate = () => {
        console.log(view);
        axios.put(`http://localhost:3001/post/${view.id}`,view).then((res)=>{
            console.log(res.data,"rses");
            setdata(data.map((val,ind)=>{
                if(val.id==res.data.id){
                    return res.data
                }
                else{
                    return val
                }
            }))
        })
    }



    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <input type="text" name='name' ref={name} />
            <input type="text" name='age' ref={age} />
            <button onClick={handleSubmit}>Add</button><br/>

            {/* update */}

            <label htmlFor="">Update Data</label><br/>
            <input type="text" name='name' value={view.name} onChange={handleView} />
            <input type="number" name='age' value={view.age} onChange={handleView} />
            <button onClick={handleUpdate}>Update</button>
            <button>Cancel</button>



            <div className="row">
                {
                    data?.map((val, ind) => {
                        return (
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{val.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{val.age}</h6>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button onClick={() => deleteData(val.id)} className='card-link'>
                                        Delete
                                    </button>
                                    <button className='card-link' onClick={()=>viewData(ind)}>
                                        Update
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Api
