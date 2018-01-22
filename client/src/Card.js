import React, { Component } from 'react'
import Comments from './Comments';
const Card = ({ results }) => {
	return (
		<React.Fragment>
			{results.map(person =>
				<li key={person.name} className = "card">
					<div className = "button">{person.name}</div>
					<div className = "info">Height: {person.height}</div>
					<div className = "info">Birth Year: {person.birth_year}</div>
					<div className = "info">Hair Color: {person.hair_color} </div>
					<div className = "info">Skin Color: {person.skin_color} </div>
					<Comments />
					{/* {<p><button onClick={getCharacter(person.url)}>Details</button></p>} */}
				</li>
			)}
		</React.Fragment>
	);
};

export default Card;