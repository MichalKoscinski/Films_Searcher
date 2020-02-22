import React, { useEffect, useState } from "react";
import axios from "axios";

function Result({ result, openPopup }) {
	const [state, setState] = useState({});
	useEffect(() => {
	  axios(`http://www.omdbapi.com/?apikey=dfe6d885&i=${result.imdbID}`).then(
		({ data }) => {
		  setState(data);
		}
	  );
	});
  
	return (
	  <div className="result" onClick={() => openPopup(state)}>
		<div class="upcircle" id="upcircle">
		<div class="up" id="up">
        	<i> {state.imdbRating} </i>
        </div>
		</div>
		<img src={result.Poster} alt=""/>
		<h3> {result.Title} </h3>
	  </div>
	);
  }
export default Result