import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Card from "./WantedCards";

const initialState ={
  loading: true,
  error: "",
  post:  [],
  
}

const reducer = (state, action) =>{
  switch(action.type){
    case "FETCH_SUCCESS" :
      return{
        loading: false,
        post: action.payload,
        error: ""
      }

    case "FETCH_ERROR" :
      return{
        loading: false,
        post: [],
        error: "Somthing Went Wrong!"
      } 
      
      


     default:
       return state 
  }

}


export default function Data2() {
  const [page, setPage] = useState(1)
 const [state, dispatch] = useReducer(reducer, initialState)
 useEffect (() => {
    axios
    .get(`https://api.fbi.gov/wanted/v1/list?page=${page}`)
      .then(res =>{console.log(res.data); console.log(res.data.items);
      dispatch({type: "FETCH_SUCCESS", payload: res.data.items})}) 
      
      .catch((err) => {
        console.log(err);
        dispatch({type: "FETCH_ERROR"})
      })
  }, [page])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])



return (
    <div>
      <h2>FBI Most Wanted List</h2>
      <div id="container">
       {state.post.map((person, index)=> {
           return <Card person={person} key={index}/>
           })}
           </div>
           <div id="buttondDiv">
           <button onClick={() => setPage( 1)} className="button">First</button>
            <button onClick={() => setPage(prevPage => prevPage - 1)} className="button" disabled={page==1}>Back</button>
           <button onClick={() => setPage(prevPage => prevPage + 1)} className="button" disabled={page==48}>Next</button>
           <button onClick={() => setPage( 48)} className="button" >Last</button>
           <p>page {page}</p>
           </div>
    </div>
)

}