import React, { useEffect, useState } from 'react';
import axios from "axios";
import defaultImg from './no_photo.jpg';


var Result = ({result, openPopup}) => {
	const [state, setState] = useState({});
	useEffect(() => {
	  axios(`https://www.omdbapi.com/?apikey=dfe6d885&i=${result.imdbID}`).then(
		({ data }) => {
		  setState(data);
		}
		);
	  }, []);

  
	return (
		
	  <div className="result" onClick={() => openPopup(state)}>
		<div class="upcircle" id="upcircle">
		<div class="up" id="up">
        	<i> {state.imdbRating} </i>
        </div>
		</div>
		<img src={result.Poster !== "N/A" ? result.Poster : defaultImg} alt="" />

		<h3> {result.Title} </h3>
	  </div>
	);
  }
export default Result
