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
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchData= async ()=> {
        try{
           
               const response= await fetch(API_URL);
               if(!response.ok){
                throw new Error(`Error: ${response.status} ${response.statusText}`);
               }
               const jsonResponse= await response.json(); 
               setCountries(jsonResponse);
            


        }
        catch(e){
            console.error("Error fetching data:",e.message);
            setError(e.message);
            

        }};
        fetchData();

    },[])

    //..
     
    

    return (
        <div style={{display:"flex",
            flexWrap:"wrap",

        }}>

           

      {
        error? (
            <p style={{color:"red"}}>"Error fetching data":{error}</p>
        ):
       
        countries.map((country)=><CountryCard key={country.abbr} name={country.name} flag={country.flag} altText={country.abbr}/>)
        
    }


        </div>
       
    )

}

export default Countries;