
exports.h2k = (number) => {
	var SI_POSTFIXES = ['', ' K', ' M', ' G', ' T', ' P', ' E'];
	var tier = Math.log10(Math.abs(number)) / 3 | 0;
	if (tier == 0) return number;
	var postfix = SI_POSTFIXES[tier];
	var scale = Math.pow(10, tier * 3);
	var scaled = number / scale;
	var formatted = scaled.toFixed(1) + '';
	if (/\.0$/.test(formatted))
		formatted = formatted.substr(0, formatted.length - 2);
	return formatted + postfix;
};
exports.msConvert = (millis) => {
	let sec = Math.floor(millis / 1000);
	let hrs = Math.floor(sec / 3600);
	sec -= hrs * 3600;
	let min = Math.floor(sec / 60);
	sec -= min * 60;
	sec = '' + sec;
	sec = ('00' + sec).substring(sec.length);
	if (hrs > 0) {
		min = '' + min;
		min = ('00' + min).substring(min.length);
		return hrs + ':' + min + ':' + sec;
	} else {
		return min + ':' + sec;
	}
};