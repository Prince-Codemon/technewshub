import { useContext, useReducer, useEffect} from "react";
import React from 'react';
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    query : "HTML",
    nbPages:0,
    page : 0,
    hits : [],
    isLoading : true
}
const AppContext = React.createContext('name')

// to create a provider funciton 

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const fetchApiData = async (url) => {
        dispatch({type : 'SET_LOADING'})
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({type : 'GET_STORIES',
        payload: {hits:data.hits, 
        nbPages : data.nbPages
    }})
        } catch (error) {
            console.log(error);
        }
    };

    // to remove post 

 const removePost = (ID) => {
     dispatch({type : 'REMOVE_POST', payload:ID} )
   }


 const searchPost = (squery) => {
     dispatch({type : 'SEARCH_QUERY', payload:squery} )
   }
 

const getNextPage = () => {
    dispatch({type:"NEXT_PAGE"})
  }
const getPrevPage = () => {
    dispatch({type:"PREV_PAGE"})
  }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return (

    <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage}}> {children} </AppContext.Provider>
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }