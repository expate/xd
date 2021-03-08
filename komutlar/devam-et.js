const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCFZghTZDoyZwCwrqCyk1_62M0tU2gv2LQ');

exports.run = async (client, message, args) => {
  const queue = client.queue;
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const a = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Lütfen Bir Ses Kanalına Geçiniz`)
    .setFooter('Wisky Code')
  if (!voiceChannel) return message.channel.send(a)

    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Şarkı Devam Ettiriliyor`)
    .setFooter('Wisky Code')
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Şuan Herhangi Bir Şarkı Çalmıyor`)
    .setFooter('Wisky Code')
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['devam'],
    permLevel: 0
};

exports.help = {
    name: 'devam',
    description: 'Duraklatılmış şarkıyı devam ettirir.',
    usage: 'devam'
};
   