import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ QUIERES SER PREMIUN*
▢ PRECIO 2 USD
•TE CONVERTIRAS EN PREMIUM  CUANDO TU PAGO SE RECIBA
•AYUDARIAS MUCHO EN LA FUNCIONES  DEL BOT
• TODO EL DINERO QUE DONES O DE COMPRAS PREMIUN  SE INVIERTE EN ERRAMIENTAS PARA  EL BOT
•TENERLO 24/7 ACTIVO

TENEMOS FORMAS DE PAGO✅️
PAYPAL 
TRANFERENCIA MX

PIDELE A wa.me/523931678470 el metodo por el que vas a pagar el premium 
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['serpremiun', 'pm', 'comprarpremiun'] 

export default handler
