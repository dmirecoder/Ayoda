/*const { createCanvas, loadImage } = require('canvas');
const {
	getBuffer,
	getJson,
	runtime,
	sizeFormat,
	h2k,
	getRandom,
	getNumberAdminsGroups,
	exif,
	uploader
} = require("./../functions");
const os = require("os");

//__________checkchat canvas________
async function checkChatsCanvas(group, private, totalchat) {
	return new Promise(async(resolve, reject) => {
		canvas =  createCanvas(720, 720);
		ctx = canvas.getContext('2d');
		bg = await loadImage('https://telegra.ph/file/f498c9f1b3866108a477e.jpg');
		ctx.drawImage(bg, 0, 0);
		ctx.textAlign = 'center';
		ctx.font = 'bold 40px Lemon Grass Regular';
		ctx.fillStyle = 'white';
		ctx.fillText(`${totalchat}`, 250, 145, 524, 400);
		ctx.fillText(`${group}`, 440, 375, 524, 400);
		ctx.fillText(`${private}`, 270, 595, 524, 400);
		buff = canvas.toBuffer();
		resolve(buff);
	});
}
//_________runtime canvas________
async function runTimeCanvas(latensi, runtime) {
	return new Promise(async(resolve, reject) => {
		canvas =  createCanvas(810, 353);
		ctx = canvas.getContext('2d');
		bg = await loadImage('https://i.ibb.co/Hry3t5F/IMG-20211002-WA0003.jpg');
		ctx.drawImage(bg, 0, 0);
		//speednya
		ctx.textAlign = 'center';
		ctx.font = 'bold 70px Chakra Petch';
		ctx.fillStyle = 'black';
		ctx.fillText(`${latensyi.toFixed(4)} `, 420, 175, 524, 300);
		ctx.save();
		//runtime rdp/vps
		ctx.translate(30, 285);
		ctx.rotate(20 * Math.PI / 550);
		ctx.textAlign = 'center';
		ctx.font = 'bold 17px Lemon Grass Regular';
		ctx.fillStyle = 'black';
		ctx.fillText(`${""+ runtime(require('os').uptime()) +""}`, 400, -100, 600, 300);
		ctx.restore();
		ctx.save();
		//runtime aktif bot
		ctx.textAlign = 'center';
		ctx.font = 'bold 20px Lemon Grass Regular';
		ctx.fillStyle = 'black';
		ctx.translate(30, 285);
		ctx.rotate(-Math.PI / 40);
		ctx.fillText(`${""+runtime(run) +""}`, 420, -160, 524, 300);
		buff = canvas.toBuffer();
		resolve(buff);
	});
}
//______afk canvas________
async function afkCanvas(pushname2, reason = "tanpa alasan") {
	return new Promise(async(resolve, reject) => {
		canvas =  createCanvas(738, 415);
		ctx = canvas.getContext('2d');
		bg = await loadImage('https://telegra.ph/file/ce66d2ec4dad99462b51d.jpg');
		ctx.drawImage(bg, 0, 0);
		ctx.textAlign = 'center';
		ctx.font = 'bold 25px Lemon Grass Regular';
		ctx.fillStyle = 'white';
		ctx.fillText(`Anda ${pushname2} Sedang Afk alasan : _${reason}_`, 300, 300, 524, 300);
		buff = canvas.toBuffer();
		resolve(buff);
	});
}
//________suit canvas___________
async function suitCanvas(pptb, ppimg, args, vit) {
	return new Promise(async(resolve, reject) => {
		canvas =  createCanvas(555, 260)
		ctx = canvas.getContext('2d')
		//layer 1
		const canvasAva = createCanvas(700, 600)
		const avaCtx = canvasAva.getContext('2d')
		var gradient = ctx.createLinearGradient(0, 0, 400, 350);
		const avatar = await loadImage('https://telegra.ph/file/076fc18034484c0a7dea4.jpg')
		avaCtx.beginPath()
		avaCtx.lineWidth = 10
		avaCtx.strokeStyle = 'red'
		avaCtx.arc(105, 105, 100, 0, Math.PI * 2, true)
		avaCtx.stroke()
		avaCtx.clip()
		avaCtx.drawImage(avatar, 0, 0, 215, 215)
		//layer 2
		const canvasAva2 = createCanvas(700, 600)
		const avaCtx2 = canvasAva2.getContext('2d')
		const avatar2 = await loadImage(ppimg)
		avaCtx2.beginPath()
		avaCtx2.lineWidth = 10
		avaCtx2.strokeStyle = 'black'
		avaCtx2.arc(105, 105, 100, 0, Math.PI * 2, true)
		avaCtx2.stroke()
		avaCtx2.clip()
		avaCtx2.drawImage(avatar2, 0, 0, 215, 215)
		//bg
		bg = await loadImage('https://telegra.ph/file/b68504170369446e2e6fe.jpg')
		ctx.drawImage(bg, 0, 0)
		//text player 1
	  ctx.font = 'bold 40px ariel';
	  ctx.font = 'bold 30px ariel';
      gradient.addColorStop(2, "white");
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, "white");
      ctx.fillStyle = gradient;
		ctx.fillText(`Bot Whatsapp`, 120, 210, 100, 100)
				ctx.restore();     
		ctx.textAlign = 'center'
	    ctx.font = 'bold 15px Lemon Grass Regular'
		ctx.fillStyle = 'black'
		ctx.fillText(`${args}`, 210, 235, 100, 100)
		//text player 2
		ctx.font = 'bold 25px ariel';
      gradient.addColorStop(2, "white");
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, "white");
      ctx.fillStyle = gradient;
      ctx.fillText(`${pushname2}`, 370, 210, 80, 80)
				        ctx.restore();     
	ctx.textAlign = 'center'
    ctx.font = 'bold 15px Lemon Grass Regular'
    ctx.fillStyle = 'black'
    ctx.fillText(`${pptb}`, 345, 235, 100, 100)
		//wins/lose
    ctx.textAlign = 'center'
    ctx.font = 'bold 25px Lemon Grass Regular'
   ctx.fillStyle = 'black'
   ctx.fillText(`${vit}`, 270, 30, 400, 400)
				//gambarAva
		ctx.drawImage(canvasAva, 100, 30, 400, 400)
		ctx.drawImage(canvasAva2, 320, 30, 400, 400)
		buffnya = canvas.toBuffer();
		resolve(buffnya);
	});
}

module.exports = { checkChatsCanvas, runTimeCanvas, afkCanvas, suitCanvas };
*/