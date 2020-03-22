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
	});

  
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

/*
{(state.results && state.results.length>0)?<Results results={state.results} openPopup={openPopup} />:
		<div className="nothing"> Nothing to show. Please, use the search function </div>
		<img src={result.Poster} alt=""/>
		{result.Poster ? <img src={result.Poster} alt=""/> : <img src="fractal-dark.png" alt=""/>}
{(typeof result.Poster != "undefined") ? <img src={result.Poster} alt=""/> : <img src="fractal-dark.png" alt=""/>}
  console.log(result.Poster)
  <img src={result.Poster ? result.Poster} alt="" />

  <img src={result.Poster == N/A} alt="" /> <img src={result.Poster} alt="" /> : <img src="fractal-dark.png" alt=""/>}




  <img src={result.Poster} alt="" /> !== "N/A" ? <img src={result.Poster} alt="" /> : <img src={`fractal-dark.jpg`} alt="" />
		*/