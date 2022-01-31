// import axios from "axios";
// import { useEffect, useReducer } from "react";

// const initialState ={
//   loading: true,
//   error: "",
//   post:  {}
// }

// const reducer = (state, action) =>{
//   switch(action.type){
//     case "FETCH_SUCCESS" :
//       return{
//         loading: false,
//         post: action.payload,
//         error: ""
//       }

//     case "FETCH_ERROR" :
//       return{
//         loading: false,
//         post: {},
//         error: "Somthing Went Wrong!"
//       } 
      
//      default:
//        return state 
//   }
// }


// export default function Data() {
//  const [state, dispatch] = useReducer(reducer, initialState)
//  useEffect (() => {
//     axios
//     .get("https://api.fbi.gov/wanted/v1/list?page=1")
//       .then(res =>{console.log(res.data.items); console.log(res);
//       dispatch({type: "FETCH_SUCCESS", payload: res.data.items[0]})}) 
      
//       .catch((err) => {
//         console.log(err);
//         dispatch({type: "FETCH_ERROR"})
//       })
//   }, [])

// return (
//     <div>
//        {state.loading ? "Loading..." : state.post.title}
//        {state.loading ? "Loading..." : state.post.subjects}
//        {state.error ? state.error : null}
//     </div>
// )

// }