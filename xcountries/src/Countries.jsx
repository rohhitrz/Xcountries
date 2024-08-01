import { useEffect } from "react"

const CountryCard=()=>{
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

        <img src="myFlag.jpg" alt="myFlag" style={{height:"100px", width:"100px"}} />
        <h2>India</h2>


    </div>)
}

const API_URL= "https://restcountries.com/v3.1/all"

function Countries(){

    // const temp= [1,2,3,4,5,6,7,8];

    useEffect(()=>{
        try{
            const fetchData= async ()=> {
               const response= await fetch(API_UR);
               const jsonResponse= await response.json(); 
               return jsonResponse; 

            };
            fetchData();


        }
        catch(e){

        }

    },[])
     
    

    return (
        <div style={{display:"flex",
            flexWrap:"wrap",

        }}>

      {
        temp.map((value)=><CountryCard key={value}/>)
        
    }


        </div>
       
    )

}

export default Countries;