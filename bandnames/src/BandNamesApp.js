import React from 'react';
import App from './App';
import { SocketProvider } from './context/SocketContext';

export const BandNamesApp = () => {
	return (
		<SocketProvider>
			<App />
		</SocketProvider>
	);
};
