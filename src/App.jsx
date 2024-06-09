import { useState } from 'react';
import './App.css';
import metronomeLogo from './assets/svg/metronome.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { computeBpm } from './actions/computeBpm';
import { reset } from './actions/reset';
import { save } from './actions/save';

function App() {
	const [bpm, setBpm] = useState(0);
	const [exact, setExact] = useState(0);
	const [count, setCount] = useState(0);
	const [clickTimes, setClickTimes] = useState([]);
	const [firstText, setFirstText] = useState('Click here to start!');

	return (
		<div className="container">
			<div>
				<img src={metronomeLogo} className="logo" alt="Metronome logo" />
			</div>
			<h1>BPM Counter</h1>
			<div className="button-container">
				<button onClick={() => computeBpm(setClickTimes, setBpm, setExact, setFirstText, setCount)}>
					{bpm ? `BPM: ${bpm} \n Exact: ${exact} \n Count: ${count}` : firstText}
				</button>
			</div>
			<div className="actions-container">
				<button
					onClick={() => reset(setClickTimes, setBpm, setExact, setFirstText, setCount)}
					disabled={count < 2}
				>
					<FontAwesomeIcon className="icon" icon={faRotate} size="sm" />
					Reset
				</button>
				<button onClick={() => save(bpm, exact, count)} disabled={count < 2}>
					<FontAwesomeIcon className="icon" icon={faFloppyDisk} size="sm" />
					Save
				</button>
			</div>
		</div>
	);
}

export default App;
