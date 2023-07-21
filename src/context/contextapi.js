import React ,{createContext,useState,useEffect} from "react";
import {fetchdatafromapi} from "../utils/api";
export const Context =createContext();
export const  AppContext=(props)=>{
     const [loading,setloading]=useState(false)
     const [Searchresult,setSearchresult]=useState([])
     const [SelectCategories,setSelectCategories]=useState("New")
     const [MobileMenu,setMobileMenu]=useState(false);
     useEffect(()=>{
  
       Fetchcollecteddata(SelectCategories);

     },[SelectCategories]);

     const Fetchcollecteddata=(query)=>{

        setloading(true);
        fetchdatafromapi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchresult(contents)
            setloading(false);
        })
     }
     return (
        <Context.Provider value={{
            loading,setloading,
            Searchresult,
            setSearchresult,
            SelectCategories,
            setSelectCategories,
            MobileMenu,setMobileMenu
        }}>
          {props.children}
        </Context.Provider>
     )
}