/*
First go to shell and install discord.js@12.5.3
Then paste this code and replace the target user ID and target word
Then run the project
For any quories contact- https://dsc.bio/alonearif
*/
//

//Discord
const Discord = require('discord.js') //Declaring Discord
const client = new Discord.Client() //Declaring Discord Client

//Google
const GoogleImages = require('google-images');
const googleClient = new GoogleImages('515e1c56003f440b1', 'AIzaSyA0ERnbSiIXyOhw7tBQ4l5rPDLEqiHV9I0');

//Delete message from a specific user!

const targets = ["794773955910959105", "157666307188326400", "432610292342587392"]; //Replace the target user ID
const bot = "1076973319355637811"
const words = ["Each kakera reaction consumes 100% of your reaction power.", "Upvote Mudae to reset the timer: $vote.", "Next $dk reset in", "\✅", "You are not married to", "Syntax:", "no character found.", "the roulette is limited to", "DM sent!", "Kakera rewards", "This will remove the character from your harem", "How to collect kakera in your server", "You can restart your tower and be refunded with $destroy", "Next rolls reset in", "Unlock the full capacities of your waifu/husbando!", "I am unable to send the message, please check your privacy settings for this server.", "How to collect kakera in your server"]



client.on('message', async message => { //making an event
  cleanMessage = message.content.toLowerCase()
  console.log(cleanMessage)

  //Check if any of the sentences are in the message
  var containsMessage = words.some(element => {
    return cleanMessage.includes(element.toLowerCase());
  });

  //If any of the sentences in the list are detected, delete the message
  if (targets.includes(message.author.id) && containsMessage) {
    message.delete({ timeout: 5000 })
    message.channel.send(`${message.author} 5 Seconds remaining until the message gets deleted.`)
  }
  //Google API Logic
  else if (cleanMessage.includes('%nino')) {

    try {
      googleClient.search('nino nakano').then(images => {
        //Get a random image from the returned list
        var randIndex = Math.floor(Math.random() * images.length);

        //Embed the image to a message
        const embed = new Discord.MessageEmbed()
          .attachFiles([{ name: 'file.jpg', attachment: images[randIndex].url.toString() }])
          .setImage('attachment://file.jpg');
        message.channel.send(embed);
      });
    } catch (err) {
      console.log(err)
    }

  }
  //Delete the bot's message
  else if (message.author.id == bot && message.embeds.length == 0) {
    message.delete({ timeout: 5000 })
  }
})

//Define token in secrets tab
const token = process.env['token']
client.login(token)


