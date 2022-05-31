/**
 * Author   : Farhannnnn
 * Name     : Twitter Downloader
 * Tools    : Download
 * Version  : 1.0
 * Update   : 03 March 2022
 * 
 * If you are a reliable programmer or the best developer, please don't change anything.
 * If you want to be appreciated by others, then don't change anything in this script.
 * Please respect me for making this tool from the beginning.
 */

const { default: axios, isAxiosError } = require('axios');
const cheerio = require('cheerio');

exports.download = function (url) {
	return new Promise(async (resolve, reject) => {
		const getUrl = new URL(url);
		const getID = getUrl.pathname.split('/status/')[1];
		let { data } = await axios.get('https://twitter-video-download.com/en/tweet/' + getID);
		if (isAxiosError()) return reject(Error('server internal error'));
		const $ = cheerio.load(data);
		const getData = $("script[id='__NEXT_DATA__']").get();
		for (let result of getData) {
			if (result && result.children && result.children[0] && result.children[0].data) {
				const json = result.children[0].data;
				const parse = JSON.parse(json);
				const stringify = (parse.props.pageProps.data.json);
				let results = {
					status: true,
					title: stringify.text,
					username: stringify.user ? stringify.user.name : '',
					nickname: stringify.user ? stringify.user.screen_name : '',
					verified: stringify.user ? stringify.user.verified : false,
					duration: stringify.video ? stringify.video.durationMs : '0',
					like_count: stringify.favorite_count,
					comment_count: stringify.conversation_count,
					view_count: stringify.video.viewCount,
					thumbnail: stringify.video.poster,
					type: stringify.video.variants[0].type ? stringify.video.variants[0].type : stringify.video.variants[1].type ? stringify.video.variants[1].type : stringify.video.variants[2].type ? stringify.video.variants[2].type : stringify.video.variants[3].type,
					url: stringify.video.variants[0].src ? stringify.video.variants[0].src : stringify.video.variants[1].src ? stringify.video.variants[1].src : stringify.video.variants[2].src ? stringify.video.variants[2].src : stringify.video.variants[3].src
				};
				resolve(results);
			}
		}
	});
};