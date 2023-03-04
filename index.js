/*
First go to shell and install discord.js@12.5.3
Then paste this code and replace the target user ID and target word
Then run the project
For any quories contact- https://dsc.bio/alonearif
*/
//
const Discord = require('discord.js') //Declaring Discord
const client = new Discord.Client() //Declaring Discord Client

//Delete message from a specific user!

const targets = ["794773955910959105", "157666307188326400", "432610292342587392"]; //Replace the target user ID
const bot = "1076973319355637811"
const words = ["Each kakera reaction consumes 100% of your reaction power.", "Upvote Mudae to reset the timer: $vote.", "Next $dk reset in", "\✅", "You are not married to", "Syntax:", "no character found.", "the roulette is limited to" ] 



client.on('message', async message => { //making an event
  cleanMessage = message.content.toLowerCase()
  console.log(cleanMessage)
  
  var containsMessage = words.some(element => {
  return cleanMessage.includes(element.toLowerCase());
});
  
  if(targets.includes(message.author.id) && containsMessage) {
    message.delete({ timeout: 5000 })  
    message.channel.send(`${message.author} 5 Seconds remaining until the message gets deleted.`)
  }
  else if(message.author.id == bot)
  {
    message.delete({ timeout: 5000 })  
  }
})

//Define token in secrets tab
const token = process.env['token']
client.login(token)
 