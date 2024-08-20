import React,{useState,useEffect} from 'react'
import LeagueListing from './LeagueListing';

const Leagues = () => {
    const [league, setLeagues] = useState([]);
    console.log(league);

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
            const result = await response.text();
            setLeagues(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        
        
      }
      fetchTeams();
      
    }, [])
   


  return (
    <div>
        {league.map((team) => {
         <LeagueListing key={team.id} team={team}/>
        })}
    </div>
   
  )
}

export default Leagues