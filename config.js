import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['523931678470', 'AngelYT', true],
  ['523931806576'], 
  ['5492622271736'] 
] //Numeros de owner 

global.mods = ['523931678470'] 
global.prems = ['523931678470', '523931678470', '523931806576']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Toxic-Bot' 
global.author = '@AngelYT' 
global.fgig = '▢ CREADOR ANGEL YT' 
global.dygp = 'https://chat.whatsapp.com/GNgvKstDSQg3xeEGdXTQMu'
global.fgsc = 'https://chat.whatsapp.com/GNgvKstDSQg3xeEGdXTQMu' 
global.fgyt = 'https://chat.whatsapp.com/GNgvKstDSQg3xeEGdXTQMu'
global.fgpyp = 'https://paypal.meAngelyt'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
