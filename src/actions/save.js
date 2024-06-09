export const save = (bpm, exact, count) => {
	const data = `BPM: ${bpm}\nExact BPM: ${exact}\nCount: ${count}`;
	const blob = new Blob([data], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = 'bpm_data.txt';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
