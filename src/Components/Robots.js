import React from 'react';

const Robots = ({name,email,id}) => {
	return(
		<div className='tc bg-light-blue dib br2 pa3 ma2 grow shadow-4 bw1'>
			<img alt='robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

	);
}

export default Robots;