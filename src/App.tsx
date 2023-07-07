import { FC, useState } from 'react';
import reactLogo from './assets/react.svg';

const App: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<img src="/vite.svg" className="logo vite" alt="Vite logo" />
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</div>
	);
};

export default App;
