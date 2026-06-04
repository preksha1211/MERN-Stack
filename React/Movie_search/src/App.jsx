import { useState } from "react";
import {movies} from "./utils/movies.js"
import AllMovies from "./AllMovies"

function App(){
  const [data,setData]=useState("");
  const [filmovie, setMovies] = useState(movies);

function searchHandler() {
   let res = movies.filter((item) =>
    item.title.toLowerCase().includes(data.toLowerCase())
   );
   setMovies(res)

     
    // setMovies se filtered result save karo
}
  return(
  
    <div>
      <div>
        <input type="text" placeholder="movie likho" 
        onChange={function(e){
          setData(e.target.value)
        }}>

        </input>
        <button onClick={searchHandler}>Search</button>
        
      </div>
      <AllMovies data={filmovie} />
    </div>
  )
}

export default App
