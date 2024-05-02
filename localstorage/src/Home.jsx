import React, { useEffect, useRef, useState } from 'react'

const Home = () => {

    const name = useRef();
    const password = useRef();
    const [data, setData] = useState([]);
    const[view,setView]=useState({});
    const[index,setIndex]=useState();



    /* ----------------------------------- get ---------------------------------- */
    const arr = localStorage.getItem("details")
        ? JSON.parse(localStorage.getItem("details"))
        : [];

    /* ----------------------------------- add ---------------------------------- */
    function handleSubmit() {
        const newData = {
            name: name.current.value,
            password: password.current.value,
        };

        arr.push(newData);
        localStorage.setItem("details", JSON.stringify(arr));
        setData([...arr]);
    }

    useEffect(() => {
        setData([...arr]);
    }, []);

    /* --------------------------------- delete --------------------------------- */
    const deleteData=(index)=>{
        arr.splice(index,1);
        localStorage.setItem("details",JSON.stringify(arr));
        setData([...arr]);
    }

    /* --------------------------------- update --------------------------------- */
let handleView=(val,ind)=>{
    setView(val)
    setIndex(ind)
}
const handle=(e)=>{
    setView({...view,[e.target.name]:e.target.value})

}

const updateData=()=>{
    arr.splice(index,1,view)
    localStorage.setItem("details",JSON.stringify(arr))
    setData([...arr]);
}


    return (
        <>
            <form>
                <input type="text " name='name' placeholder='your name' ref={name} onChange={handle} value={view.name || ""}/>
                <input type="password " name='password' placeholder='your password' ref={password} onChange={handle} value={view.password || ""}/>
                <button onClick={handleSubmit}>submit</button>
                <button onClick={updateData}>update</button><br /><br />

            </form>

            <div className="row">
                {
                    data.map((val, ind) => (
                        <div className="col-2" key={index}>
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{val.name}</h5>
                                    <p class="card-text">{val.password}</p>
                                    <button onClick={()=>deleteData(ind)} className='btn btn-danger'>Delete</button>
                                    <button onClick={()=>handleView(val,ind)} className='btn btn-primary mx-5'>View</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default Home
