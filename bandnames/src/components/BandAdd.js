import React, { useState } from 'react';

export const BandAdd = ({ addBand }) => {
	const [value, setValue] = useState('');

	const onSubmit = (ev) => {
		ev.preventDefault();
		if (value.trim().length > 0) {
			addBand(value);
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
