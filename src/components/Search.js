import React from 'react'

var Search = ({handleInput, search}) => {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a film..." 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search