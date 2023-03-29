const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285172446692'] // no own
global.author = 'kakashi' // nama author 
global.packname = 'kakashi bot whatsapp' // nama pack sticker
global.namabot = 'kakashi' // nama bot mu
global.group = 'https://bit.ly/xdbotwhatsp' // grup mu
global.pic = 'https://telegra.ph/file/0f61f8e503d7135cd0123.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
