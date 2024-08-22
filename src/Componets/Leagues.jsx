import React,{useState,useEffect} from 'react'
import LeagueListing from './LeagueListing';
import axios from 'axios';
import leagues from '../Leagues.json'
import Paginations from './Paginations';
import ReactPaginate from 'react-paginate';


const Leagues = () => {


  console.log(leagues);

  const [search, SetSearch] = useState('');
  //const [currentPage, setCurrentPage] = useState(1);
  //const [postsPerPage, setPostsPerPage] = useState(16);

  const [league, setLeague] = useState(leagues.slice(0,100));
  const [pageNumber, setPageNumber] = useState(0);

  const leaguesPerPage = 8;
  const pagesVisited = pageNumber * leaguesPerPage;

 const displayLeagues = league
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

const pageCount = Math.ceil(league.length / leaguesPerPage);

const changePage = ({selected}) => {

setPageNumber(selected);

};
 
  


  //const lastPostIndex = currentPage * postsPerPage;
  //const firstPostIndex = lastPostIndex - postsPerPage;
  //const popularLeagues = leagues.slice(firstPostIndex, lastPostIndex);
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
   displayLeagues
    
    
  }
  <ReactPaginate 
  
  previousLabel={"Previous"}
  nextLabel ={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"flex"}
  previousLinkClassName={""}
  nextLinkClassName={""}
  disabledClassName={""}
  activeClassName={""}
  />
      
      
      {/*<Paginations 
        totalPosts={popularLeagues.length} 
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}/>*/}
    </div>
    
    </>
    
   
  )
}

export default Leagues