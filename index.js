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
  else if (cleanMessage == '%nino') {
    searchGoogle('nino nakano', message);
  }
  else if (cleanMessage == '%quints') {
    searchGoogle('quintessential quintuplets', message)
  }
  else if (cleanMessage == '%yotsuba') {
    searchGoogle('yotsuba nakano', message)
  }
  else if (cleanMessage == '%itsuki') {
    searchGoogle('itsuki nakano', message)
  }
  else if (cleanMessage == '%ichika') {
    searchGoogle('ichika nakano', message)
  }
  else if (cleanMessage == '%miku') {
    searchGoogle('miku nakano', message)
  }
  //Help Response
  else if (cleanMessage == '%help') {
    message.channel.send(':wave: Hello! I was created to filter Mudae bot\'s messages.\n\n'
      + ':computer: List of Available Commands:\n\n'
      + ':information_source: %help: Confused? Ask for help!\n'
      + ':cowboy: %nino: returns random images of myself, Nino!\n'
      + ':medal: %yotsuba: returns random images of my sister, Yotsuba!\n'
      + ':hamburger: %itsuki: returns random images of my sister, Itsuki!\n'
      + ':cinema: %ichika: returns random images of my sister, Ichika!\n'
      + ':crossed_swords: %miku: returns random images of my sister, Miku!\n'
      + ':family_woman_girl_girl: %quints: returns random images of my sisters and I.\n\n'
      + 'BAKA! It\'s not like a like you or anything.')
  }
  //Delete the bot's message
  else if (message.author.id == bot
    && message.embeds.length == 0
    && !cleanMessage.includes('returns random images of myself')) {
    message.delete({ timeout: 5000 })
  }
})

function searchGoogle(keyword, message) {
  try {
    googleClient.search(keyword).then(images => {
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

//Define token in secrets tab
const token = process.env['token']
client.login(token)


