const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
client.login(config.token)
client.on('', readyDiscord);

function readyDiscord() {
    
    console.log("Login successfull");

}

const replies = [
    'Is a cool dude...',
    'Is a bot',
    'Sucks at everything',
    'Is best friends with Rye',
    'Is gay!'
]




client.on('message', gotMessage);

function gotMessage(msg){

    if (msg.content == 'what am i'){

        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);

    }

    if (msg.content == 'Rye'){
        msg.reply('Rye is gay');
        
    }
    else if (msg.content == 'Ralle'){
        msg.reply('Ralle is a cool dude');
    }


}