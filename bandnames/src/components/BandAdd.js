import React, { useState } from 'react';
import { useSocket } from './../hooks/useSocket';

export const BandAdd = () => {
	const [value, setValue] = useState('');
	const { socket } = useSocket('http://localhost:8080');

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
