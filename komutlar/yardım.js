const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'e!'
let müzik = new Discord.RichEmbed()  
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('RANDOM')
.addField('Wisky Code | Müzik Komutları',`
**e!çal <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**e!duraklat** : Çalan Şarkıyı Durdurur
**e!devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**e!tekrar** : Çalan Şarkıyı Tekrarlar
**e!geç** : Bi Sonraki Şarkıya Geçiş Yapar
**e!durdur** : Şarkıyı Durdurur 
**e!çek** : Botu Sese Çeker 
**e!ses** : Ses Seviyesini Belirler`)
.setFooter('Wisky Code')
 message.channel.send(müzik) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["müzik","yardım","help"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
  