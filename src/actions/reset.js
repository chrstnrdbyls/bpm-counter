export const reset = (setClickTimes, setBpm, setExact, setFirstText, setInputFirstText, setCount) => {
	setClickTimes([]);
	setBpm(0);
	setExact(0);
	setFirstText('Click here to start!');
	setInputFirstText('Or press any key on this input...');
	setCount(0);
};
