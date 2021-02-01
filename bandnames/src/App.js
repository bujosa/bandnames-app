import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

const connectSocketServer = () => {
	const socket = io.connect('http://localhost:8080/');
	return socket;
};

function App() {
	const [socket] = useState(connectSocketServer());
	const [online, setOnline] = useState(false);
	const [bands, setBands] = useState([]);

	useEffect(() => {
		console.log(socket);
		setOnline(socket.connected);
	}, [socket]);

	useEffect(() => {
		socket.on('connect', () => {
			setOnline(true);
		});
	}, [socket]);

	useEffect(() => {
		socket.on('disconnect', () => {
			setOnline(false);
		});
	}, [socket]);

	useEffect(() => {
		socket.on('current-bands', (bands) => {
			console.log(bands);
			setBands(bands);
		});
	}, [socket]);

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
					<BandList data={bands}></BandList>
				</div>
				<div className='col-4'>
					<BandAdd></BandAdd>
				</div>
			</div>
		</div>
	);
}

export default App;
