"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test1", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*Hello* 👋 \n\n ' + "i'm a whatsapp bot multi-device created by Leonard Tech";
    let d = '                                                                           𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐋𝐄𝐎𝐍𝐀𝐑𝐃 𝐓𝐄𝐀𝐌✨';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/awcix5.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
