const {Telegraf} = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();
// console.log(process.env);
const bot = new Telegraf(process.env.BOT_TOKEN);


try{
bot.start((ctx)=>{
    const msg="Thanks for showing interest to know about me. You can try /help for commands";
    ctx.reply(msg);
});


bot.command('help',(ctx)=>{
    ctx.reply(`
    Choose from below options:
    1) /Linkedin :- To get my Linkedin Profile Link
    2) /Github :- To get my Github profile Link
    3) /Codechef :- To get Codechef Link of my resume
    4) /Leetcode :- To get my Leetcode Profile Link
    `);
});

bot.command('Linkedin',(ctx)=>{
    const msg1="https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/";
    ctx.reply(msg1);
});

bot.command('Github',(ctx)=>{
    const msg2="https://github.com/bhavesh-03";
    ctx.reply(msg2);
});

bot.command('Codechef',(ctx)=>{
    const msg3="https://www.codechef.com/users/bhavesh_3";
    ctx.reply(msg3);
});

bot.command('Leetcode',(ctx)=>{
    const msg4="https://leetcode.com/bmmankar25/";
    ctx.reply(msg4);
});

bot.on('text', (ctx) => {
    ctx.reply('Sorry, I don\'t understand that command. Type /help to see the available commands.');
});

bot.on('text', (ctx) =>{
    console.log(ctx);
    ctx.reply('Hello');
}) ;

bot.launch();
}
catch(err)
{
    console.log("Error is "+ err);
} 