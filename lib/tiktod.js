/**
 * Author   : Farhannnnn
 * Name     : Tiktok Fetcher
 * Tools    : Search, Download, Stalker, Hashtag
 * Version  : 1.1
 * Update   : 03 March 2022
 * 
 * If you are a reliable programmer or the best developer, please don't change anything.
 * If you want to be appreciated by others, then don't change anything in this script.
 * Please respect me for making this tool from the beginning.
 */

//External Modules
const { default: axios } = require('axios');
const _ = require('lodash');
const cheerio = require('cheerio');
const moment = require('moment-timezone');

//Internal Modules
const fakeUserAgent = require('./fakeUa');
const regexURL = require('./regex');

// create shortner url make https://tinyurl.com
const shortUrl = async (url) => {
	let { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
	let result;
	try {
		result = data; // if true
	} catch (err) {
		result = url; // if false
		(err);
	} finally {
		return result; // return
	}
};

// Class Constructor JavaScript Method
class Tiktok {
	constructor() {
		this.BASE_URL = 'https://m.tiktok.com/';
		this.TRENDING_URL = `${this.BASE_URL}api/recommend/item_list/`;
		this.HASHTAG_URL = `${this.BASE_URL}api/challenge/item_list/`;
		this.HASHTAG_DESCRIPTION_URL = `${this.BASE_URL}node/share/tag/`;
		this.headers = {
			'User-Agent': 'Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36'
		};
		this.defaultParams = ({
			aid: 1988,
			verifyFp: 'verify_kvfr3riz_HLYxKN3N_v4jk_4hWM_86jq_mrti859vrj0R',
			app_name: 'tiktok_web',
			device_platform: 'web_mobile',
			screen_width: '1920',
			screen_height: '1080',
			region: 'ID',
			language: 'id',
			priority_region: '',
			os: 'Linux',
			referer: '',
			root_referer: '',
			cookie_enabled: 'true',
			browser_language: 'id-ID',
			browser_platform: 'Android',
			browser_name: 'Mozilla',
			browser_version: '5.0+(Linux%3B+Android+9%3B+CPH1923)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F93.0.4577.62+Mobile+Safari%2F537.36',
			browser_online: 'true',
			timezone_name: 'Asia/Jakarta',
			is_page_visible: 'true',
			focus_state: 'true',
			is_fullscreen: 'false',
			history_len: Math.floor(Math.random() * 30)
		});
	}

	getHashtagParams(challengeID) {
		return ({
			...this.defaultParams,
			challengeID,
			count: 24,
			cursor: 4
		});
	}

	async getHashtagDescription(tag) {
		const { data } = await axios.get(this.HASHTAG_DESCRIPTION_URL + tag, {
			headers: this.headers,
			withCredentials: true
		});
		return data;
	}

	stalker(username) {
		return new Promise(async (resolve, reject) => {
			await axios.request({
				method: 'GET',
				url: `https://tiktok.com/@${username}`,
				headers: {
					...this.headers,
					'Cookie': 'tt_webid_v2=7023321823367792130;tt_webid=7023321823367792130;tt_csrf_token=Ko3eYWlaA81BtC_6ezxMN4qf;R6kq3TV7=AHwiLLx8AQAAlTgrDyev4OA6MBZL078p4m5wG5CZEK8rU7kHUbizioKGVR8j|1|0|5839bf36b909a5e044847442b7d4dc0390a72e59;ttwid=1%7C3p7mb0Z4EWtFfmmqArdM4PqSNcyXZe23Vy0tPgsbyyI%7C1635244602%7C5fb19e46484c8c4f840b7c941ff4edea0fdcd8b6ea13576295a0268f37080669;s_v_web_id=verify_kv7yey5z_ZCLcdnz5_Mmf4_4XZZ_9ZFw_ZEjGJdo9qi62;msToken=p0SYyf1ujFiJcET1HDLeL2j4-2760D8ueZK-hU4TBTYI9NPKlB3IMnO9GXHm3GK2wi7xJoMGlsz9Kta1ls13_Vgt9izMlk2bBiOe8EmdRd5UrGaJMZn3oBTfwmiMexhYBC8d'
				}
			}).then(({ data }) => {
				const $ = cheerio.load(data);
				const script = $('script#__NEXT_DATA__').get();
				let parse;
				for (let anu of script) {
					if ((anu.children && anu.children[0] && anu.children[0].data) !== undefined) {
						const json = anu.children[0].data;
						parse = JSON.parse(json);
					}
				}
				const userInfo = parse.props.pageProps.userInfo;
				const time = moment(userInfo.user.createTime * 1000).tz('Asia/Jakarta').locale('id').format('dd, DD - MM - yy, HH:mm');
				const verif = userInfo.user.verified;
				const privAkun = userInfo.user.privateAccount;
				resolve({
					username: userInfo.user.uniqueId,
					nickname: userInfo.user.nickname,
					signature: userInfo.user.signature || '-',
					createTime: time,
					verified: verif === false ? 'Not Verified' : 'User Verified',
					privateAccount: privAkun === false ? 'Public Account' : 'Private Account',
					followers: userInfo.stats.followerCount,
					followings: userInfo.stats.followingCount,
					hearts: userInfo.stats.heart,
					heartsCount: userInfo.stats.heartCount,
					videoCount: userInfo.stats.videoCount,
					diggCount: userInfo.stats.diggCount,
					profile: userInfo.user.avatarThumb
				});
			}).catch(reject);
		});
	}
	async snaptik(link) {
		try {
			var _0xc38e = [
				'',
				'split',
				'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/',
				'slice',
				'indexOf',
				'',
				'',
				'.',
				'pow',
				'reduce',
				'reverse',
				'0',
			];
			function _0xe48c(d, e, f) {
				var g = _0xc38e[2][_0xc38e[1]](_0xc38e[0]);
				var h = g[_0xc38e[3]](0, e);
				var i = g[_0xc38e[3]](0, f);
				var j = d[_0xc38e[1]](_0xc38e[0])
				[_0xc38e[10]]()
				[_0xc38e[9]](function (a, b, c) {
					if (h[_0xc38e[4]](b) !== -1)
						return (a += h[_0xc38e[4]](b) * Math[_0xc38e[8]](e, c));
				}, 0);
				var k = _0xc38e[0];
				while (j > 0) {
					k = i[j % f] + k;
					j = (j - (j % f)) / f;
				}
				return k || _0xc38e[11];
			}

			function decoder(h, u, n, t, e, r) {
				r = '';
				for (var i = 0, len = h.length; i < len; i++) {
					var s = '';
					while (h[i] !== n[e]) {
						s += h[i];
						i++;
					}
					for (var j = 0; j < n.length; j++) s = s.replace(new RegExp(n[j], 'g'), j);
					r += String.fromCharCode(_0xe48c(s, e, 10) - t);
				}
				return decodeURIComponent(escape(r));
			}
			function clean(value) {
				return value.split(/\\|"/g).join('');
			}
			let { data } = await axios.get(`https://snaptik.app/abc.php?url=${encodeURIComponent(link)}&lang=en`)
			const [h, u, n, t, e, r] = /\("(.*?)\)\)/g.exec(data)[1].split(/,/g).map(a => a.replace(/"/g, ''));
			const decrypt = decoder(h, u, n, t, e, r);
			const script = /document\.write\('(.*?)'\);}}/g.exec(decrypt)[1];
			const $ = cheerio.load(script);
			const getData = $('script').get().map(a => a.children[0].data)[0];
			const _ = cheerio.load(getData);
			const title = clean(_('p').eq(0).text());
			const thumbnail = clean(_('img').attr('src'));
			const username = clean(_('h3').text());
			let resultUrl = new Array();
			_('a').get().map(a => {
				let pushUrl = $(a).attr('href');
				if (/\/[A-Za-z]+/.test(clean(pushUrl))) {
					resultUrl.push(pushUrl.includes('http') ? clean(pushUrl) : 'https://snaptik.app' + clean(pushUrl));
				}
			});
			let result = {
				title,
				username,
				thumbnail,
				resultUrl
			};
			return result;
		} catch (er) {
			console.error(er);
			throw er;
		}
	}
	download(url) {
		return new Promise(async (resolve, reject) => {
			if (!regexURL.tiktok(url)) ('invalid Url');
			const getDataInput = await axios.get('https://musicaldown.com/id');
			const $ = cheerio.load(getDataInput.data);
			let inputData = new Array();
			$('form').find('input').get().map(map => {
				inputData.push({
					name: $(map).attr('name'),
					value: $(map).attr('value')
				});
			});
			await axios.request({
				method: 'POST',
				url: 'https://musicaldown.com/id/download',
				data: `${inputData[0].name}=${encodeURIComponent(url)}&${inputData[1].name}=${inputData[1].value}&${inputData[2].name}=${inputData[2].value}`,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					...this.headers,
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
					'Origin': 'https://musicaldown.com',
					'Referer': 'https://musicaldown.com/id',
					'Cookie': getDataInput.headers['set-cookie']
				}
			}).then(async response => {
				await axios.request({
					method: 'POST',
					url: 'https://musicaldown.com/id/mp3',
					headers: {
						...this.headers,
						'Cookie': getDataInput.headers['set-cookie']
					}
				}).then(async ({
					data
				}) => {
					const $ = cheerio.load(response.data);
					const _ = cheerio.load(data);
					let video = new Array();
					let audio = new Array();
					$('a[target="_blank"]').get().map(async map => {
						video.push($(map).attr('href'));
					});
					_('a.waves-effect').get().map(map => {
						audio.push($(map).attr('href'));
					});
					const result = {
						title: $('title').text().trim(),
						title_audio: _('title').text().split(' |')[0],
						thumbnail: $('img.responsive-img').attr('src'),
						video,
						audio: audio.filter(a => a !== '/id/?ref=more')
					};
					resolve(result);
				}).catch(reject);
			}).catch(reject);
		});
	}
	search(query) {
		return new Promise(async (resolve, reject) => {
			const baseURL = 'https://tiktokder.com/tiktok-video-search?q=';
			await axios.request({
				method: 'GET',
				url: baseURL + query,
				headers: {
					'User-Agent': fakeUserAgent()
				}
			}).then(async ({
				data
			}) => {
				const $ = cheerio.load(data);
				let result = new Array();
				$('div.videos-grid > div.video-card').each(function (a, b) {
					result.push('https://tiktokder.com' + $(this).find('a:nth-child(2)').attr('href'));
				});
				const randomUrl = result[Math.floor(Math.random() * result.length)];
				await axios.get(randomUrl).then(({
					data
				}) => {
					const _ = cheerio.load(data);
					const nickname = _('div.profile > a.user-nickname').text();
					let results = {
						username: _('div.profile > a.username').text(),
						nickname,
						views: _('ul.video-stats > li > span').text(),
						description: _('meta[name="description"]').attr('content').split(nickname)[1],
						thumbnail: _('div.profile > img').attr('src'),
						url: _('div.result > div > video > source').attr('src')
					};
					resolve(results);
				}).catch(reject);
			}).catch(reject);
		});
	}
	async getHashtagVideo(tag, sortBy = '') {
		const { statusCode, challengeInfo } = await this.getHashtagDescription(tag);
		if (statusCode !== 0) {
			return new Array();
		}
		const response = await axios(this.HASHTAG_URL, {
			headers: this.headers,
			params: this.getHashtagParams(Number(challengeInfo.challenge.id)),
			withCredentials: true
		});
		if (!response.data.hasOwnProperty('itemList')) throw 'not found';
		let data = response.data.itemList;
		if (sortBy == 'date') {
			data.sort((a, b) => new Date(a.createTime) - new Date(b.createTime));
			return data;
		} else if (sortBy == 'views') {
			return data.sort((a, b) => a.stats.playCount - b.stats.playCount);
		} else if (sortBy == 'followers') {
			return data.sort((a, b) => a.authorStats.followerCount - b.authorStats.playCount);
		} else if (sortBy == 'shuffle' || sortBy == 'random') {
			return _.shuffle(data);
		} else {
			return data;
		}
	}
	async shorten(url) {
		const { data } = await axios.get('https://tokurlshortener.com/api/shorten?url=' + url);
		return data;
	}
}

module.exports = {
	Tiktok
};