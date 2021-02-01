import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {
	const [value, setValue] = useState('');
	const { socket } = useContext(SocketContext);

	const onSubmit = (ev) => {
		ev.preventDefault();
		if (value.trim().length > 0) {
			socket.emit('add-band', value);
		}
	};

	return (
		<>
			<h3>Agregar Banda</h3>
			<form onSubmit={onSubmit}>
				<input
					className='form-control'
					placeholder='Nuevo nombre de banda'
					value={value}
					onChange={(ev) => setValue(ev.target.value)}
				></input>
			</form>
		</>
	);
};
