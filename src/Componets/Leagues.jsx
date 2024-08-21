import React,{useState,useEffect} from 'react'
import LeagueListing from './LeagueListing';
import axios from 'axios';

const Leagues = () => {
    const [data, setData] = useState([]); //state that stors fetched data
    

   useEffect(() => {
    const fetchTeams = async () => {
      const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2503c33039msh8f40da65d80bf75p12f058jsn52c9fe118d3e',
		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setData(result.response)
	console.log(result.response);
  console.log(result.response[5]?.league?.name);
} catch (error) {
	console.error(error);
}
        
        
      }
      fetchTeams();
      
    }, [])
   


  return (
    <>
<div>
  {
    data.map((leg) => 
      < >
    
      <h1> {leg?.league?.name}</h1>
      <img  src={leg?.league?.logo}  className='w-20 h-20'/>
      </>
    )
  }
     
      
    </div>
    </>
    
   
  )
}

export default Leagues