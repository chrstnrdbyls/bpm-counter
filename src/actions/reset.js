export const reset = (setClickTimes, setBpm, setExact, setFirstText, setCount) => {
	setClickTimes([]);
	setBpm(0);
	setExact(0);
	setFirstText('Click here to start!');
	setCount(0);
};
