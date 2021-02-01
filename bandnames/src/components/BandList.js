import React, { useEffect, useState } from 'react';

export const BandList = ({ data, vote, toDelete, changeName }) => {
	const [bands, setBands] = useState(data);

	useEffect(() => {
		setBands(data);
	}, [data]);

	const changedName = (event, id) => {
		const newName = event.target.value;

		setBands((bands) =>
			bands.map((band) => {
				if (band.id === id) {
					band.name = newName;
				}
				return band;
			})
		);
	};

	const onPerdioFoco = (id, nombre) => {
		changeName(id, nombre);
	};

	const createRows = () => {
		return bands.map((band) => (
			<tr key={band.id}>
				<td>
					<button className='btn btn-primary' onClick={() => vote(band.id)}>
						{' '}
						+1{' '}
					</button>
				</td>
				<td>
					<input
						className='form-control'
						value={band.name}
						onChange={(event) => changedName(event, band.id)}
						onBlur={() => onPerdioFoco(band.id, band.name)}
					/>
				</td>
				<td>
					{' '}
					<h3> {band.votes} </h3>{' '}
				</td>
				<td>
					<button className='btn btn-danger' onClick={() => toDelete(band.id)}>
						Borrar
					</button>
				</td>
			</tr>
		));
	};

	return (
		<>
			<table className='table table-stripped'>
				<thead>
					<tr>
						<th></th>
						<th>Nombre</th>
						<th>Votos</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>{createRows()}</tbody>
			</table>
		</>
	);
};
