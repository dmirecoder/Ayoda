const { exec } = require('child_process');
const { runtime } = require('./lib/myfunc')

//Start
exec(`pm2 start index.js && pm2 save && pm2 logs`, (err, stdout) => {
  if (err) console.log(err)
  console.log(stdout)
  })
  
  //Set Interval 1 jam
setInterval(() => {
exec(`pm2 restart index.js`, (err, stdout) => {
  if (err) console.log(err)
  console.log(stdout)
  })
}, 6 * 60 * 60 * 1000);

//Log uptime
setInterval(async() => {
let anu = await runtime(process.uptime())
console.log(anu)
}, 1 * 5000);
