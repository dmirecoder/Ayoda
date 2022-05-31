/**
 * Author   : Farhannnnn
 * Name     : Joox Downloader
 * Tools    : Download
 * Version  : 1.0
 * Update   : 03 March 2022
 * 
 * If you are a reliable programmer or the best developer, please don't change anything.
 * If you want to be appreciated by others, then don't change anything in this script.
 * Please respect me for making this tool from the beginning.
 */


//External Modules
const axios = require("axios");


exports.download = function (query) {
	return new Promise(async (resolve, reject) => {
		const time = Math.floor(new Date() / 1000);
		await axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
			.then(({ data }) => {
				let result = new Array(),
					hasil = new Array(),
					promoses = new Array(),
					ids = new Array();
				data.itemlist.forEach(result => {
					ids.push(result.songid);
				});
				for (let i = 0; i < data.itemlist.length; i++) {
					const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i];
					promoses.push(axios.get(get, {
						headers: {
							Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
						}
					}).then(({
						data
					}) => {
						const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''));
						hasil.push({
							song: res.msong,
							album: res.malbum,
							singer: res.msinger,
							published: res.public_time,
							thumbnail: res.imgSrc ?? "https://api-xcoders.xyz/images/avatar.png",
							url: res.mp3Url
						});
						Promise.all(promoses).then(() => resolve(hasil[2] ?? hasil[1] ?? hasil[0] ?? hasil));
					}).catch(reject));
				}
			}).catch(reject);
	});
}