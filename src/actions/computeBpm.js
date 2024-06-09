export const computeBpm = (setClickTimes, setBpm, setExact, setFirstText, setCount) => {
	setCount((count) => count + 1);

	const currentTime = Date.now();
	setClickTimes((prevClickTimes) => {
		const newClickTimes = [...prevClickTimes, currentTime];

		if (newClickTimes.length === 1) {
			setFirstText('First Beat. Click again!');
		} else {
			const intervals = [];
			for (let i = 1; i < newClickTimes.length; i++) {
				intervals.push((newClickTimes[i] - newClickTimes[i - 1]) / 1000); // Time in seconds
			}

			const averageInterval = intervals.reduce((a, b) => a + b) / intervals.length;
			const newBpmExact = 60 / averageInterval;
			const newBpm = Math.round(newBpmExact);
			setBpm(newBpm);
			setExact(newBpmExact.toFixed(2));
		}

		return newClickTimes;
	});
};
