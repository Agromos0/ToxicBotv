//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	
const sections = [
   {
	title: `â¡ Lista de Opciones`,
	rows: [
	{title: "ð® | Welcome", rowId: `${usedPrefix + command} welcome`},
	{title: "ð | Public", rowId: `${usedPrefix + command} public`},
	{title: "ð | Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "ð§¬ | OnlyLatinos", rowId: `${usedPrefix + command} onlylatinos`},
	{title: "ð | Antilink", rowId: `${usedPrefix + command} antilink`},
    {title: "ð« | Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "âï¸ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "ð£ï¸ | ChatBot", rowId: `${usedPrefix + command} chatbot`},
	{title: "ð | Detect", rowId: `${usedPrefix + command} detect`},
	{title: "ð | Document", rowId: `${usedPrefix + command} document`},
	{title: "ð¡ï¸ | Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "ð¬ | OnlyPv", rowId: `${usedPrefix + command} onlydm`},
	{title: "ð¥ | OnlyGp", rowId: `${usedPrefix + command} onlygp`}
	]
    },
]

const listMessage = {
  text: '\nAquÃ­ tiene una lista de lo que puede activar y desactivar',
  footer: fgig,
  title: `â¡ Lista de Opciones`,
  buttonText: "Click AquÃ­",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'sololatinos':
      case 'sololatino':
      case 'onlylatinos':
      case 'onlylat':
      case 'onlylatan':
      case 'sololatan':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
     case 'autosimi':
     case 'autosimsimi':
      isUser = true
      user.chatbot = isEnable
     break
     
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
      throw false
  }
  /*conn.sendButton(m.chat, `
â¡ *OPCIONES*
ââââââââââââ
â¢ ðï¸ *Tipo:* ${type} 
â¢ âï¸ *Estado:* ${isEnable ? 'Activo â' : 'Desactivado ð´'}
â¢ ð® *Para:* ${isAll ? 'Este bot' : isUser ? '' : 'Este chat'}
ââââââââââââ
`,fgig, null, [[`${isEnable ? 'ð´ Desactivar' : 'â Activar'}`, `${isEnable ? `${usedPrefix}off ${type}` : `${usedPrefix}on ${type}`}`], ['â¦â° Menu', `${usedPrefix}help`]],m)
*/

m.reply(`
â *${type}* Se *${isEnable ? 'ActivÃ³' : 'DesactivÃ³'}* ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
