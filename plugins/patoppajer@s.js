let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`*_πTOP L@S MAS PAJER@S DEL GRUPOπ¦:_*
    
*_1.- ${toM(a)}ππ¦_*
*_2.- ${toM(b)}ππ¦_*
*_3.- ${toM(c)}ππ¦_*
*_4.- ${toM(d)}ππ¦_*
*_5.- ${toM(e)}ππ¦_*
*_6.- ${toM(f)}ππ¦_*
*_7.- ${toM(g)}ππ¦_*
*_8.- ${toM(h)}ππ¦_*
*_9.- ${toM(i)}ππ¦_*
*_10.- ${toM(j)}ππ¦_*`, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })
}
handler.help = ['toppt']
handler.tags = ['main']
handler.command = ['toppajeros','toppajeras','toppajera','toppajero','toppajer@s']
handler.group = true

module.exports = handler
