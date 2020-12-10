const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '<'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}komutlar | ${client.guilds.size} sunucudan ${client.users.size} kullanıcıya hizmet veriyoruz!`,
    'Made By Melih <3',
    
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 1000)
}