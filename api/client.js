import axios from "axios";

const BACKEND_URL='https://vote-app-a4e8b-default-rtdb.firebaseio.com'

export function addUser(data){

    axios.post(BACKEND_URL+'/users.json',data);
}

export function updateUser(id,data){

    axios.put(BACKEND_URL+`/users/${id}.json`,data);
}


export async function fetchUser(username){
    const response=await axios.get(BACKEND_URL+'/users.json',username);
    const users =[];

    for (const key in response.data){
        const userObj={
            id:key,
            username:response.data[key].username,
            email:response.data[key].email,
            result:response.data[key].result,
            birthdate:response.data[key].birthdate,
            password:response.data[key].password
        };
        users.push(userObj);
        
        
    }
    return users;
}