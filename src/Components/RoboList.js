import React from 'react';
import Robots from './Robots';


const RoboList = ({robo}) => { 
return (
	<div>
    {
    	robo.map((user,i) =>
		{
			return (
			<Robots 
			key={i} 
			id={robo[i].id} 
			name={robo[i].name} 
			email={robo[i].email}/>
			);
		})
    }
   </div>
   );
}

export default RoboList;