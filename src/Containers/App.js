import React, {Component} from 'react';
import RoboList from '../Components/RoboList';
import SearchBox from '../Components/SearchBox';
//import {robo} from './robo';
import Scroll from '../Components/Scroll';
import './App.css';



class App extends Component {
constructor() {
	super()
	this.state= {
		robo: [],
		searchfield: ''
	}
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>this.setState({robo: users}));
}


onSearchChange =(event) =>{
	this.setState({searchfield: event.target.value})
}
render() {
	const {robo, searchfield}=this.state;
	const filterRobot= robo.filter(
		robo =>{
			return robo.name.toLowerCase().includes(
				searchfield.toLowerCase());
		})
	//if(robo.length === 0) {
		//return <h1 className='tc'>Loading...</h1>
	//}
	//else {

	return (
		<div className='tc'>
			<h1 className='f2'>RoboBuddies</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<RoboList robo = {filterRobot} />
			</Scroll>
		</div>
			);
		}
	}

export default App;