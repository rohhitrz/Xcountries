import { useEffect, useState } from "react"

const CountryCard=({name,flag,altText })=>{
    return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"4px",
        alignItems:"center",
        border: "1px solid black",
        borderRadius:"8px",
        height:"200px",
        width:"200px",
        margin:"10px",
        padding:"10px"

    }}>

        <img src={flag} alt={altText } style={{height:"100px", width:"100px"}} />
        <h2>{name}</h2>  


    </div>)
}

const API_URL= "https://xcountries-backend.azurewebsites.net/all"

function Countries(){

    // const temp= [1,2,3,4,5,6,7,8];
    const [countries, setCountries]= useState([]);

    useEffect(()=>{
        try{
            const fetchData= async ()=> {
               const response= await fetch(API_URL);
               const jsonResponse= await response.json(); 
               setCountries(jsonResponse);

            };
            fetchData();


        }
        catch(e){
            console.log("Error fetching data");
            

        }

    },[])
     
    

    return (
        <div style={{display:"flex",
            flexWrap:"wrap",

        }}>

      {
        countries.map((country)=><CountryCard key={country.abbr} name={country.name} flag={country.flag} altText={country.abbr}/>)
        
    }


        </div>
       
    )

}

export default Countries;