
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `β³οΈ Ingrese un link de Tiktok\n\n π Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMFV3HA3J`
if (!args[0].match(/tiktok/gi)) throw `β verifica que el link sea de tiktok`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
βββ· TIKTOK
β’ *Username:* ${p.author}
β’ *DescripciΓ³n:* ${p.title}
ββββββββββββ`
    conn.sendButton(m.chat, te, fgig, p.nowm, [['β Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['β« Audio', `${usedPrefix}tomp3`]], m)
    m.react(done)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'β Error al descargar el video'
    conn.sendButton(m.chat, `
βββ· TIKTOK
β’ *Nickname:* ${nickname} ${description ? `\nβ’ *DescripciΓ³n:* ${description}` : ''}
ββββββββββββ`, fgig, url, [['β« Audio', `${usedPrefix}tomp3`]], m)
m.react(done)
} catch {
    m.reply(`β Error al descargar el video`)
}
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler
