import React from 'react'

var Popup = ({selected, closePopup}) => {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating} </p>
				<p className="rating">Genre: {selected.Genre} </p>
				<p className="rating">Released: {selected.Released} </p>
				<p className="rating">Country: {selected.Country} </p>
				<p className="rating">Click on the picture to see more</p>
				<div className="plot">
				<a href={"https://www.google.com/search?q=" + selected.Title}>
				<img src={selected.Poster} alt="" />
				</a>
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup