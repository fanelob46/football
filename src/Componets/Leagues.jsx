import React,{useState,useEffect} from 'react'
import LeagueListing from './LeagueListing';
import axios from 'axios';
import leagues from '../Leagues.json'

const Leagues = () => {


  console.log(leagues);

  const [search, SetSearch] = useState('');
   /* const [data, setData] = useState([]); //state that stors fetched data
    

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
      
    }, [])*/
   


  return (
    
   <>
   <div>
    <form>
      <input 
      placeholder='search league'
      onChange={(e) => SetSearch(e.target.value)}/>
    </form>
   </div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8 justify-items-center'>
  {
    leagues.filter((leg) => {
      return search.toLocaleLowerCase() === ''
      ? leg
      : leg?.league?.name.toLocaleLowerCase().includes(search);
    }).map((leg) => 
      < >
    
      <div key={leg.id} leg={leg}>
      <img  src={leg?.league?.logo}  className='w-20 h-20'/>
      <h1> {leg?.league?.name}</h1>
      </div>
      
      </>
    )
  }
     
      
    </div>
    </>
    
   
  )
}

export default Leagues