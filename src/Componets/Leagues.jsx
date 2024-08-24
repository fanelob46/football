import React,{useState,useEffect} from 'react'
import LeagueListing from './LeagueListing';
import axios from 'axios';
import leagues from '../Leagues.json'
import Paginations from './Paginations';
import ReactPaginate from 'react-paginate';
import { data } from 'autoprefixer';


const Leagues = () => {


  console.log(leagues);

  const [search, SetSearch] = useState('');
 //const [league, setLeague] = useState(leagues.slice(0,50));

  
 const  [data, setData] = useState([]); //state that stores fetched data
 

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



  const [pageNumber, setPageNumber] = useState(0);

  const leaguesPerPage = 16;
  const pagesVisited = pageNumber * leaguesPerPage;

 const displayLeagues = data
 .slice(pagesVisited, pagesVisited + leaguesPerPage)
 .filter((leg) => {
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

const pageCount = Math.ceil(data.length / leaguesPerPage);

const changePage = ({selected}) => {

setPageNumber(selected);

};
 
  


  

    const filterItems = (catItem) => 
    {
      const updatedItems = data.filter((curItem) => {
        return curItem?.league?.type === catItem
      });
      setData(updatedItems);
    }

  
   


  return (
    
   <>
   <div className="w-72 pt-7 pb-7 pl-7">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-[#2b2eff] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-[#2b2eff] disabled:border-0 transition-all  placeholder-shown:border-[#2b2eff] placeholder-shown:border-t-[#2b2eff] border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#2b2eff]"
      placeholder=" " onChange={(e) => SetSearch(e.target.value)}/><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-[#2b2eff] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#2b2eff] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-[#2b2eff] peer-focus:text-[#2b2eff] before:border-[#2b2eff] peer-focus:before:!border-[#2b2eff] after:border-[#2b2eff] peer-focus:after:!border-[#2b2eff]">Search League
    </label>
  </div>
</div> 
   <div className='flex justify-around'>
    <button className='bg-transparent  hover:bg-[#2b2eff] text-[#2b2eff] font-semibold hover:text-white py-2 px-4 border border-[#2b2eff] hover:border-transparent rounded' onClick={()=> setData(data)} >All Leagues</button>
    <button className='bg-transparent hover:bg-[#2b2eff] text-[#2b2eff] font-semibold hover:text-white py-2 px-4 border border-[#2b2eff] hover:border-transparent rounded' onClick={()=>filterItems("League")}>League</button>
    <button className='bg-transparent hover:bg-[#2b2eff] text-[#2b2eff] font-semibold hover:text-white py-2 px-4 border border-[#2b2eff] hover:border-transparent rounded' onClick={()=>filterItems("Cup")}>Cup</button>
   </div>
   
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8 justify-items-center'>
  
  {
   displayLeagues
    
    
  }
  <ReactPaginate 
  
  previousLabel={"Previous"}
  nextLabel ={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  disabledClassName={"paginationDisabled"}
  activeClassName={"paginationActive"}
  />
      
      
      
    </div>
    
    </>
    
   
  )
}

export default Leagues