import React, { Component } from 'react';
import axios from 'axios';

class Images extends Component {
	state = { images: [] }
	componentDidMount() {
		axios.get('https://api.adorable.io/avatars/285/abott@adorable.png')
			.then(res => {
				const images = res;
				console.log(images);
			})
			.catch(res => {
				console.log(res)
			})

	} // end of componentDidMount
	render() {
		return (
			<div>Images Component!</div>

		)
	}

} //end of class

export default Images;
