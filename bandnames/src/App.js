import React, { useState, useEffect } from 'react';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';
import { useSocket } from './hooks/useSocket';

function App() {
	const [bands, setBands] = useState([]);

	const { socket, online } = useSocket('http://localhost:8080');

	useEffect(() => {
		socket.on('current-bands', (bands) => {
			console.log(bands);
			setBands(bands);
		});
	}, [socket]);

	const vote = (id) => {
		socket.emit('vote-band', id);
	};

	const toDelete = (id) => {
		socket.emit('delete-band', id);
	};

	const changeName = (id, name) => {
		socket.emit('change-name-band', { id, name });
	};

	return (
		<div className='container'>
			<div className='alert'>
				<p>
					Service status:
					{online ? (
						<span className='text-success'> Online</span>
					) : (
						<span className='text-danger'> Offline</span>
					)}
				</p>
			</div>

			<h1>BandNames</h1>
			<hr />

			<div className='row'>
				<div className='col-8'>
					<BandList
						data={bands}
						vote={vote}
						toDelete={toDelete}
						changeName={changeName}
					></BandList>
				</div>
				<div className='col-4'>
					<BandAdd></BandAdd>
				</div>
			</div>
		</div>
	);
}

export default App;
