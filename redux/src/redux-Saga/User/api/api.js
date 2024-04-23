import axios from "axios"
import { DELETE_USER, GET_USER, POST_USER, PUT_USER, base_url } from "../../constant";

let get_user = (action) => {
    // console.log(action, "action from api");
    return axios.get(base_url + GET_USER).then((res) => {
        // console.log(res, "api");
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};

// post

let post_user = (action) => {
    // console.log(action, "action from api");
    return axios.post(base_url + POST_USER, action.payload).then((res) => {
        // console.log(res, "api");
        let data = res.data;
        let status = res.status;
        return { data, status };
    })

}

// DELETE
let delete_user = (action) => {
    // console.log(action, "action from api");
    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        console.log(res, "api");
        let data = res.data;
        let status = res.status;
        return { data, status };
    })
}

// UPDATE
let update_user = (action) => {
    console.log(action, "action form api");
    return axios.put(base_url + PUT_USER + action.payload.id, action.payload).then((res)=>{
        console.log(res,"api");
        let data=res.data;
        let status=res.status;
        return{data,status};
    })
}
export { get_user, post_user, delete_user, update_user };