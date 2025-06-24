const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();
// const {fetchNeko} = require("nekos-best.js");
const fetch = require('cross-fetch');
const path = require('path');
const math = require('mathjs')
const Tesseract = require('tesseract.js')
const fs = require('fs');

// For the sake of Prefix
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
let prefix = config.prefix || '.';

// const{ActivityType} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.MessageContent
    ]
});
// const welcome = require("./welcome");

client.once('ready', () => {
    console.log('code name');
    client.user.setActivity('Custom Message goes hard', { type: 'PLAYING', state: 'Start with `.help` command' });
  //  welcome(client);
});

client.login(process.env.BOTTOKEN);

/*const welcomeChannelId = "894571100565020682"

client.on("guildMemberAdd", (member) => 
{
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Konnichiwa <@${member.id}> Welcome to the server!`})
})*/

const jokes = [
    'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
    '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
    'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
    'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
    'Why do Java programmers have to wear glasses? Because they do not C#.',
    `What’s the best thing about Switzerland?: I don’t know, but the flag is a big plus.`,
    `I invented a new word!: Plagiarism!`,
    `Hear about the new restaurant called Karma?: There’s no menu - You get what you deserve.`,
    `Where are average things manufactured?:  The satisfactory.`,
    `Why should the number 288 never be mentioned?: It’s two gross.`,
    `What did the bald man exclaim when he received a comb for a present?: Thanks— I’ll never part with it!`
 ];

 const baseball = [
    'Foul Ball!',
    'Hit by pitch! (you go to first base😩)',
    'Ground Ball. ERROR THROW!!! (Single)',
    'Homerun!!',
    'Triple!',
    'Double!',
    'Single!',
    'Ball.',
    'Ground ball.', 
    'Swung and miss!',
    'Foul tipped into catchers glove. (Strike)',
    'Line Drive caught.',
    'Foul tipped into catchers glove.',
    'Ground Rule Double.',
    'Ground ball ERROR.',
    'Hit by pitch.',
    'Swung too early.',
    'Swung wayyy too late.',
    'Fly out.',
    'Pop up.',
 ]
 
 // fetchNeko('hug', 15).then(console.log);

 /*client.setActivity(`Currently in ${client.guilds.cache.size} servers`);
 module.exports.run = async (client, msg, arguments) => {
    const guild = client.guilds.get("566596189827629066");
    setInterval(function() {
       var memberCount = guild.members.filter(member => !member.user.bot).size;
       var memberCountChannel = client.channels.get("626462657817477131");
       memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
 };*/

const replies = [
    `Geez don't make me work hard`,
    `Kawaii Emilia-Tan's my best friend!`,
    `Please stay by my side forever...`,
    `How can I help you?`,
    `I'm not cute? Isn't it a bit harsh?`,
    `Yes, I am frighteningly cool`,
    `私はただのかわいいじゃない`,
    `私はいつもあなたのためにそこにいます`
]

client.on('messageCreate', async (msg) => 
{
    console.log("Received message:", msg.content);

    // let tokens = msg.content.split('');

    // console.log(msg.content);
    if(msg.content === `${prefix}siesta`)
    {
        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);
    }
    else if(msg.content === `${prefix}joke`)
    {
        const index = Math.floor(Math.random() * jokes.length);
        msg.reply(jokes[index]);
    }
    else if(msg.content === `${prefix}swing`)
    {
        const index = Math.floor(Math.random() * baseball.length);
        msg.reply(baseball[index]);
    }
    else if(msg.content === `${prefix}help`)
    {
        msg.reply('PREFIX: ```.```' + 'SET PREFIX: ```.setprefix```' + 'SIESTA: ```.siesta```' + 'HELP: ```.help```' + 'JOKE: ```.joke```' + 'BASEBALL: ```.swing```' + 'BETA FEATURE: ```.math(text basic operating questions upto algebric equations, or attach the image of question)```' + 'INTERACTION GIF with {@ping}: ```.hug | .pat | .sigh | .dance | .sing | .blush | .cry | .smile | .cuddle | .snuggle | .sleep | .highfive | .jump | .bite | .run | .spank| .choke| .scare | .lick | .coffee | .icecream | .eat | .handhold | .kiss | .punch | .kick | .slap | .fumo | .poke | .boop | .pout | .yo | .bye | .protect | .hide | .lonely | .disappear | .lazy | .yeet | .fbi | .kill | .mad | .angry | .confuse | .scream | .love | .stare | .die | .smug | .smirk | .ok | .neko | .cookie | .cake | .laugh | .sad | .happy```' + 'DEMONSLAYER INTERACTION GIF with {@ping}: ```.breathof(thunder, water, mist and flame) | .hinokami kagura```' + 'MHA INTERACTION GIF with {@ping}: ```.smash | .boom```' + 'JJK INTERACTION GIF with {@ping}: ```.kokusen | .ryoiki tenkai | .hollow purple | .jackpot```' + 'BLEACH INTERACTION GIF with {@ping}: ```.bankai | .shikai | .getsuga tensho```' + 'DRAGON BALL INTERACTION GIF with {@ping}: ```.kamehameha | .transform | .kaioken```' + 'ONE PIECE INTERACTION GIF with {@ping}: ```.diable jambe | .oni giri | .gomu gomu no```' + 'NARUTO INTERACTION GIF with {@ping}: ```.rasengan | .chidori | .amaterasu | .susano | .edo tensei | .shinra tensei```' + "PRETTY GIRL INTERACTION GIF with {@ping}: ```.ve' | .emilia-tan | .aqua-sama```" + "FORGER INTERACTION GIF with {@ping}: ```.anya```" + 'VOLLEYBALL INTERACTION GIF with {@ping}: ```.spike | .set | .serve```' + "JOJO'S INTERACTION GIF with {@ping}: ```.za warudo | .star platinum```" + "HxH INTERACTION GIF WITH {@ping}: ```.nen | .godspeed | .jajanken```");
    }
    
    // Prefix block
    else if(msg.content.startsWith(`${prefix}setprefix`))
    {
        // Setup for prefix
        const args = msg.content.trim().split(/\s+/);
        if(args.length !== 2)
        {
            return msg.reply(`Usage: \`${prefix}setprefix <newPrefix>\``);
        }

        // Admins
        if(!msg.guild || !msg.member?.permissions.has('Administrator'))
        {
            return msg.reply("I apologize, however, only the individuals with the stature akin to esteemed purport of admininstrators can change the prefix.")
        }

        // New Prefix
        const newPrefix = args[1];
        if(!/^[^\s]{1,3}$/.test(newPrefix))
        {
            return msg.reply("My apologies, however, invalid Prefix.")
        }

        //Prefix set succesfully
        prefix = newPrefix;
        config.prefix = newPrefix;
        await fs.writeFileSync(`./config.json`, JSON.stringify(config, null, 2));
        
        msg.reply(`An Exalting congratulations, the Prefix was updated to \`${prefix}\``);
    }
    
/*    else if (msg.content === '.help') 
    {
        const helpMessage = `
        **Bot Commands Help**
    
        **Prefix:** `. `
    
        **General Commands:**
        - `.siesta` - Take a quick nap.
        - `.help` - Display this help message.
        - `.joke` - Hear a joke.
        - `.swing` - Swing a baseball bat.
    
        **Interaction GIFs:** Use these commands with @mention to interact with someone:
        - Basic: \`.hug\`, \`.pat\`, \`.sigh\`, \`.dance\`, \`.sing\`, \`.blush\`, \`.cry\`, \`.smile\`, \`.cuddle\`, \`.snuggle\`, \`.sleep\`, \`.highfive\`, \`.jump\`, \`.bite\`, \`.run\`, \`.scare\`, \`.lick\`, \`.handhold\`, \`.kiss\`, \`.punch\`, \`.kick\`, \`.slap\`, \`.fumo\`, \`.poke\`, \`.boop\`, \`.pout\`, \`.yo\`, \`.bye\`, \`.protect\`, \`.hide\`, \`.lonely\`, \`.disappear\`, \`.lazy\`, \`.yeet\`, \`.fbi\`, \`.kill\`, \`.mad\`, \`.angry\`, \`.confuse\`, \`.scream\`, \`.love\`, \`.stare\`, \`.die\`, \`.smug\`, \`.smirk\`, \`.ok\`, \`.neko\`, \`.laugh\`, \`.sad\`, \`.happy\`.
    
        **Anime-Specific Interaction GIFs:**
        - **Demon Slayer:** \`.breathof(thunder, water, mist, flame)\`, \`.hinokami kagura dance\`
        - **My Hero Academia:** \`.smash\`, \`.boom\`
        - **Jujutsu Kaisen:** \`.kokusen\`, \`.ryoiki tenkai\`, \`.hollow purple\`, \`.jackpot\`
        - **Bleach:** \`.bankai\`, \`.shikai\`, \`.getsuga tensho\`
        - **Dragon Ball:** \`.kamehameha\`, \`.transform\`, \`.kaioken\`
        - **One Piece:** \`.diable jambe\`
        - **Naruto:** \`.rasengan\`, \`.chidori\`, \`.amaterasu\`, \`.susano\`, \`.edo tensei\`, \`.shinra tensei\`
        - **Pretty Girl:** \`.ve'\`, \`.emilia-tan\`, \`.aqua-sama\`
        - **Forger:** \`.anya\`
        - **Volleyball:** \`.spike\`, \`.set\`, \`.serve\`
        - **JoJo's Bizarre Adventure:** \`.za warudo\`, \`.star platinum\`
    
        **Food-Specific Interaction GIFs:**
        - \`.icecream\`, \`.coffee\`, \`.eat\`, \`.cookie\`, \`.cake\`
    
        **Note:** Use these commands in the chat with the appropriate prefix and mention a user where applicable to interact with them using fun and engaging GIFs!
        `;
        msg.reply(helpMessage);
    }*/

    /*else if(msg.content == ".hug")
    {
       let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        /*let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url +
        `
        *Hugs*`
        );*/
    /*else if (msg.content.startsWith(".hug"))
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        if (mentionedMember) 
        {
            // msg.reply(`${mentionedMember} *Hugs* ${json.results[index].url}`);
            msg.reply(json.results[index].url + 
            `
            *Hugs* ${mentionedMember}`
            )
        } 
        else 
        {
            msg.reply(json.results[index].url +
            `
            *Hugs*`
        );
        }
    }*/
        // msg.reply(`${msg.author} hugs`);
    /*else if (msg.content.startsWith(".hug")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Hug!",
            description: `${msg.author}, ${mentionedMember ? `*Hugs* ${mentionedMember}` : "*Hugs*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: [embed]});
    }*/

    else if (msg.content.startsWith(`${prefix}hug`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Hug!",
                description: `${msg.author}, ${mentionedMember ? `*Hugs* ${mentionedMember}` : "*Hugs*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any hug GIFs at the moment.");
        }
    }
    /*else if (msg.content.startsWith(".hug")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
    
        // Construct the embed message
        const embed = {
            title: "Hugs!",
            description: mentionedMember ? `*Hugs* ${mentionedMember}` : "*Hugs*",
            color: 0xFFD700, // Gold color
            thumbnail: {
                url: json.results[index].media[0].gif.url,
                width: 500, // Adjust the width of the thumbnail (in pixels)
                height: 500 // Adjust the height of the thumbnail (in pixels)
            }
        };
    
        // Send the embed message
        msg.channel.send({ embed: embed });
    }*/

    else if (msg.content.startsWith(`${prefix}pat`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepatting&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Pat!",
                description: `${msg.author}, ${mentionedMember ? `*Pats* ${mentionedMember}` : "*Pats*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
    
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any pat GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}cry`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecrying&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Cry!",
                description: `${msg.author}, ${mentionedMember ? `..Their innocent eyes are crying ${mentionedMember}` : "*Cries*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
    
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any cry GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}cuddle`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecuddling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Cuddle!",
                description: `${msg.author}, ${mentionedMember ? `*Cuddles* with ${mentionedMember}` : "*Cuddles*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
    
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any cuddle GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}sleep`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesleeping&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Sleep!",
                description: `${msg.author}, ${mentionedMember ? `*Sleeps* along ${mentionedMember}` : "*Sleeps*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
    
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any sleep GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}slap`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeslapping&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Slap!",
                description: `${msg.author}, ${mentionedMember ? `*Slaps* poor ${mentionedMember}` : "*Slaps*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
    
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any slap GIFs at the moment.")
        }
    }

    else if (msg.content.startsWith(`${prefix}kick`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animekicking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Kick!",
                description: `${msg.author}, ${mentionedMember ? `*Kicks* poor ${mentionedMember}` : "*Kicks*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any kick GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}kiss`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animekissing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Kiss!",
                description: `${msg.author}, ${mentionedMember ? `*Kisses* ${mentionedMember}` : "*Kisses*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE**, couldn't find any kiss GIFs at the moment.")
        }
    }

    else if (msg.content.startsWith(`${prefix}bite`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animebiting&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Bite!",
                description: `${msg.author}, ${mentionedMember ? `*Bites* on ${mentionedMember}` : "*Bites*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any bite GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}punch`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepunching&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Punch!",
                description: `${msg.author}, ${mentionedMember ? `*Punches* poor ${mentionedMember}` : "*Punches*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any punch GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}dance`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animedance&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Dance!",
                description: `${msg.author}, ${mentionedMember ? `Shares the stage whilst **dancing** with ${mentionedMember}` : "*Dances*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any dance GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}fumo`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=fumos&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Fumo!",
                description: `${msg.author}, ${mentionedMember ? `**Fumo.. Fumo.. Fumo...** ${mentionedMember}` : "**Fumo.. Fumo.. Fumo...**"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any fumo GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}smash`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=smashMHA&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Smash!",
                description: `${msg.author}, ${mentionedMember ? `**One for all..** *Smashes* ${mentionedMember}` : "**One for all..** *Smashes*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any smash GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}breathofthunder`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=thunderbreathing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Thunder Breathing!",
                description: `${msg.author}, ${mentionedMember ? `*Uses Thunder Breathing* on  ${mentionedMember}` : "*Uses Thunder Breathing*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any thunder breathing GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}breathofwater`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=waterbreathing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Water Breathing!",
                description: `${msg.author}, ${mentionedMember ? `*Uses Water Breathing* on  ${mentionedMember}` : "*Uses Water Breathing*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any water breathing GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}hinokami kagura`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=hinokamikaguradance&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Sun Breathing!",
                description: `${msg.author}, ${mentionedMember ? `*Uses Sun Breathing* on  ${mentionedMember}` : "*Uses Sun Breathing*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        }

        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any sun breathing GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}breathofflame`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=flamebreathingdemonslayer&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Flame Breathing!",
                description: `${msg.author}, ${mentionedMember ? `*Uses Flame Breathing* on  ${mentionedMember}` : "*Uses Flame Breathing*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any flame breathing GIFs at the moment.")
        }
    }
        
    else if (msg.content.startsWith(`${prefix}breathofmist`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=mistbreathing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Mist Breathing!",
                description: `${msg.author}, ${mentionedMember ? `*Uses Mist Breathing* on  ${mentionedMember}` : "*Uses Mist Breathing*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any mist breathing GIFs at the moment.")
        }
    }
        
    else if (msg.content.startsWith(`${prefix}poke`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepoking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Poke!",
                description: `${msg.author}, ${mentionedMember ? `*Pokes* ${mentionedMember}` : "*Pokes*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
             msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any poke GIFs at the moment.")
        }
    }
        
    else if (msg.content.startsWith(`${prefix}boop`)) 
    {
         const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeboop&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Boop!",
                description: `${msg.author}, ${mentionedMember ? `Wholesomely *boops* at ${mentionedMember}` : "*Boops*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any boop GIFs at the moment.")
        }
    }
        
    else if (msg.content.startsWith(`${prefix}lick`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelicking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Lick!",
                description: `${msg.author}, ${mentionedMember ? `*Licks* ${mentionedMember}` : "*Licks*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any lick GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}snuggle`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesnuggling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Snuggle!",
                description: `${msg.author}, ${mentionedMember ? `Tightly *snuggles* with ${mentionedMember}` : "Tightly *snuggles*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any snuggle GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}blush`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeblushing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Blush!",
                description: `${msg.author}, ${mentionedMember ? `*Blushes* in presence of ${mentionedMember}` : "*Blushes*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any blush GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}kill`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animekilling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Kill!",
                description: `${msg.author}, ${mentionedMember ? `*Unalives* poor ${mentionedMember}` : "*Unalives*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any kill GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}handhold`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehandhold&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Handhold!",
                description: `${msg.author}, ${mentionedMember ? `Holds hands with.. ${mentionedMember}` : "Holds hands with.."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any handhold GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}highfive`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehighfive&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Highfive!",
                description: `${msg.author}, ${mentionedMember ? `*Directs* a highfive at ${mentionedMember}` : "*Highfives*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any highfive GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}yeet`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animethrowing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Yeet!",
                description: `${msg.author}, ${mentionedMember ? `*Yeets* ${mentionedMember} away` : "*Yeets*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any yeet GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}fbi`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animefbi&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "FBI!",
                description: `${msg.author}, ${mentionedMember ? `*Calls* the **FBI** at ${mentionedMember} (Lol, good luck).` : "*Calls* the **FBI**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any FBI GIFs at the moment.")
        }
    }
    
    else if (msg.content.startsWith(`${prefix}run`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animerunning&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
    
        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Run!",
                description: `${msg.author}, ${mentionedMember ? `*Runs* away from ${mentionedMember}` : "*Runs away*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            }
            msg.channel.send({ embeds: [embed] })
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any run GIFs at the moment.")
        }
    }
        
    else if (msg.content.startsWith(`${prefix}pout`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepouting&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Pout!",
                description: `${msg.author}, ${mentionedMember ? `Adorably *pouts* at ${mentionedMember}` : "*Adorably pouts*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any pout GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}disappear`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animedisappear&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Disappear!",
                description: `${msg.author}, ${mentionedMember ? `*Disappears* from the sight of ${mentionedMember}` : "*Disappears from the sight*."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any disappear GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}yo`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehello&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Yo!",
                description: `${msg.author}, ${mentionedMember ? `*Says*, "Yo Cutie" to ${mentionedMember}` : `*Says*, "Yo Cutie"`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any yo GIFs at the moment.");
        }
    }
    
    else if (msg.content.startsWith(`${prefix}bye`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesayonara&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Bye!",
                description: `${msg.author}, ${mentionedMember ? `*Bids* a bye, ${mentionedMember}` : "*Bids* a bye."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any bye GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}protect`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=nanamikentojjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Protect!",
                description: `${msg.author}, ${mentionedMember ? `*Proceeds to Protect*, Beloved Nanamin with ${mentionedMember}` : "*Proceeds to Protect*, Beloved Nanamin."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any protect GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}lonely`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelonely&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Lonely!",
                description: `${msg.author}, ${mentionedMember ? `*Feels Lonely* without, ${mentionedMember}` : "*Feels Lonely*."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any lonely GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}mad`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animemad&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Mad!",
                description: `${msg.author}, ${mentionedMember ? `Is mad at ${mentionedMember}` : "Is mad."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any mad GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}angry`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeangry&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Angry!",
                description: `${msg.author}, ${mentionedMember ? `Is angry with ${mentionedMember}` : "Is angry."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any angry GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}hide`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehide&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Hide!",
                description: `${msg.author}, ${mentionedMember ? `*Hides* from ${mentionedMember}` : "*Hides*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any hide GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}coffee`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecoffee&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Coffee!",
                description: `${msg.author}, ${mentionedMember ? `*Brews* and *Sips* coffee with ${mentionedMember}` : "*Brews* and *Sips* coffee."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any coffee GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}confuse`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeconfused&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Confuse!",
                description: `${msg.author}, ${mentionedMember ? `${mentionedMember}.. They're confused` : "Is confused."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any confused GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}scream`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animescreaming&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Scream!",
                description: `${msg.author}, ${mentionedMember ? `*Screams* at ${mentionedMember}` : "*Screams*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any screaming GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}scare`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animescaring&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Scare!",
                description: `${msg.author}, ${mentionedMember ? `BOOO *Scares* ${mentionedMember}` : "BOOO *Scares*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any scare GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}icecream`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeicecream&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Ice-cream!",
                description: `${msg.author}, ${mentionedMember ? `Gladly, *shares* their ice-cream with ${mentionedMember}` : "*Licks* their icecream."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any ice cream GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}jump`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animejumping&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Jump!",
                description: `${msg.author}, ${mentionedMember ? `*Jumps* on ${mentionedMember}` : "*Jumps*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any jumping GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}stare`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animestaring&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Stare!",
                description: `${msg.author}, ${mentionedMember ? `*Stares* at ${mentionedMember}` : "*Stares*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any staring GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}love`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeloving&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Love!",
                description: `${msg.author}, ${mentionedMember ? `*Makes* love with ${mentionedMember}` : "*Loves*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any love GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}ok`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animethumbsup&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Ok!",
                description: `${msg.author}, ${mentionedMember ? `*Okays'* with ${mentionedMember}` : "*Okays'*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any thumbs up GIFs at the moment.");
        }
    }
    
    else if (msg.content.startsWith(`${prefix}die`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animedeath&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Die!",
                description: `${msg.author}, ${mentionedMember ? `*Dies* along ${mentionedMember}` : "*Dies*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any death GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}smug`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesmugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Smug!",
                description: `${msg.author}, ${mentionedMember ? `*Smugs* at ${mentionedMember}` : "*Smugs*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any smug GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}smile`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesmiling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Smile!",
                description: `${msg.author}, ${mentionedMember ? `Their pastel lips **smile** at ${mentionedMember}` : "*Smiles*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any smiling GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}lazy`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelazy&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Lazy!",
                description: `${msg.author}, ${mentionedMember ? `Is too lazy to work.. ${mentionedMember}` : "Is too lazy to work.."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any lazy GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}sigh`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesighing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Sigh!",
                description: `${msg.author}, ${mentionedMember ? `*Sighs* on ${mentionedMember}` : "*Sighs*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any sighing GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}kokusen`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=blackflashjjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Kokusen!",
                description: `${msg.author}, ${mentionedMember ? `Lands a **BLACK FLASH** on ${mentionedMember}` : "Lands a **BLACK FLASH**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            // msg.channel.send({ embeds: [embed] });

            const audioPath = path.join(__dirname, 'Black Flash sound redesign.mp3'); // Ensure the audio file is in the same directory as your bot script

            msg.channel.send({
                embeds: [embed],
                files: [audioPath]
            });
        }
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any BLACK FLASH GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}ryoiki tenkai`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=domainexpansionjjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Ryoiki Tenkai!",
                description: `${msg.author}, ${mentionedMember ? `Casts their **DOMAIN**.. Trapping ${mentionedMember}` : "Casts their **DOMAIN**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any DOMAIN EXPANSION GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}bankai`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=bankaibleach&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Bankai!",
                description: `${msg.author}, ${mentionedMember ? `Unleashes their **Ban.. KAIII** against ${mentionedMember}` : "Unleashes their **Ban.. KAIII**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any BANKAI GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}shikai`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=shikaibleach&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Shikai!",
                description: `${msg.author}, ${mentionedMember ? `Unleashes their **SHIKAI** in ${mentionedMember}'s presence` : "Unleashes their **SHIKAI**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any SHIKAI GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}rasengan`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=rasengannaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Rasengan!",
                description: `${msg.author}, ${mentionedMember ? `Uses **RASENGAN** on ${mentionedMember}` : "Uses **RASENGAN**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any RASENGAN GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}chidori`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=chidorinaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Chidori!",
                description: `${msg.author}, ${mentionedMember ? `Counters by using **CHIDORI** on ${mentionedMember}` : "Counters by using **CHIDORI**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any CHIDORI GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}sing`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesinging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Sing!",
                description: `${msg.author}, ${mentionedMember ? `*Jams* and *Sings* with ${mentionedMember}` : "*Jams* and *Sings*."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any SINGING GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}kamehameha`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=kamehameha&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Kamehameha!",
                description: `${msg.author}, ${mentionedMember ? `Uses the Legendary **KAA.. MEE.. HAAA.. MEEE... HAAAAAA...** on ${mentionedMember}` : "Uses the Legendary **KAA.. MEE.. HAAA.. MEEE... HAAAAAA...**"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any KAMEHAMEHA GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}diable jambe`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=diablejambeonepiece&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Diable Jambe!",
                description: `${msg.author}, ${mentionedMember ? `Rocks by using **DIABLE JAMBE** against ${mentionedMember}` : "Rocks by using **DIABLE JAMBE**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any DIABLE JAMBE GIFs at the moment.");
        }
    }
    
    else if (msg.content.startsWith(`${prefix}jackpot`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=hakarijjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Jackpot!",
                description: `${msg.author}, ${mentionedMember ? `Hits a **JACKPOT**, against the odds of ${mentionedMember} !!` : "Hits a **JACKPOT** !!"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any JACKPOT GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}ve'`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=nobarakugisakijjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Ve'!",
                description: `${msg.author}, ${mentionedMember ? `${mentionedMember}, no kidding, **Ve's the BEST GIRL.**` : "**Ve's the BEST GIRL.**"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any VE' GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}transform`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=dragonballtransformation&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Transform!",
                description: `${msg.author}, ${mentionedMember ? `*Transforms* against  ${mentionedMember}. They're **MAJESTIC** in all their forms.` : "They're **MAJESTIC** in all their forms."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any TRANSFORMATION GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}getsuga tensho`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=getsugatenshobleach&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Getsuga Tensho!",
                description: `${msg.author}, ${mentionedMember ? `Uses mystical.. **GETSUGA.. TENSHOOO** on ${mentionedMember}` : "Uses mystical.. **GETSUGA.. TENSHOOO**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any GETSUGA TENSHO GIFs at the moment.");
        }
    }
    
    else if (msg.content.startsWith(`${prefix}kaioken`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=dragonballkaioken&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Kaioken!",
                description: `${msg.author}, ${mentionedMember ? `Applies the **KAIO.. KEN** on a battle against ${mentionedMember}` : "Applies the **KAIO.. KEN**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any Kaioken GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}eat`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeeating&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Eat!",
                description: `${msg.author}, ${mentionedMember ? `Enjoys their meal with ${mentionedMember}` : "Enjoys their meal."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any eating GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}anya`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=anyaforger&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Anya!",
                description: `${msg.author}, ${mentionedMember ? `${mentionedMember}, *(Likes Penuts.)*` : "*(Likes Penuts.)*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any Anya GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}emilia-tan`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=emiliarezero&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Emilia-Tan!",
                description: `${msg.author}, ${mentionedMember ? `${mentionedMember}, did you know, **Emilia-Tan's a MAJOR FAIRY !!**` : "**Emilia-Tan's a MAJOR FAIRY !!**"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any Emilia-Tan GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}spike`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=haikyuuspike&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Spike!",
                description: `${msg.author}, ${mentionedMember ? `*Spikes* at **FULL TEMPO** to ${mentionedMember}` : "*Spikes* at **FULL TEMPO**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any Spike GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}set`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=haikyuuset&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Set!",
                description: `${msg.author}, ${mentionedMember ? `*Sets* with **MAXIMUM ANALYSIS** to ${mentionedMember}` : "*Sets* with **MAXIMUM ANALYSIS**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any Set GIFs at the moment.");
        }
    }
    
    else if (msg.content.startsWith(`${prefix}serve`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=haikuuserve&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Serve!",
                description: `${msg.author}, ${mentionedMember ? `*Serves* at **FULL FLARE** to ${mentionedMember}` : "*Serves* at **FULL FLARE**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any Serve GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}smirk`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesmirking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Smirk!",
                description: `${msg.author}, ${mentionedMember ? `*Smirks* at ${mentionedMember}` : "*Smirks*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Smirk GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}hollow purple`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=gojohollowpurple&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Cursed Technique Amplification: Hollow Purple!",
                description: `${msg.author}, ${mentionedMember ? `*Chants*, "Nine ropes".. "Polarized Lights".. "Crow and Declaration".. "Between Front and Back". **HOLLOW PURPLE**, which cuts through ${mentionedMember}` : `*Chants*, "Nine ropes".. "Polarized Lights".. "Crow and Declaration".. "Between Front and Back". **HOLLOW PURPLE**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Hollow Purple GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}aqua-sama`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=aquakonosuba&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Aqua-Sama!",
                description: `${msg.author}, ${mentionedMember ? `*Exclaims*, behold **the beauty of the useless goddess, Aqua-Sama**. ${mentionedMember}, Funfact, she's Lady Rara's favorite- Wait was it Megumin?` : `*Exclaims*, behold **the beauty of the useless goddess, Aqua-Sama**. Funfact, she's Lady Rara's favorite- Wait was it Megumin?`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Aqua-Sama GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}neko`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecat&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Neko!",
                description: `${msg.author}, ${mentionedMember ? `*Purrs* like a cat in ${mentionedMember}'s presence.` : `*Purrs* like a cat.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Neko GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}za warudo`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=zawarudojojo&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Za Warudo!",
                description: `${msg.author}, ${mentionedMember ? `Activates, **ZA WARUDO** against ${mentionedMember}` : `Activates, **ZA WARUDO**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Za Warudo GIFs at the moment.");
        }
    }
     
    else if (msg.content.startsWith(`${prefix}star platinum`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=starplatinumjojo&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Star Platinum!",
                description: `${msg.author}, ${mentionedMember ? `Unleashes their stand **STAR PLATINUM** on ${mentionedMember}` : `Unleashes their stand **STAR PLATINUM**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Star Platinum GIFs at the moment.");
        }
    }


    else if (msg.content.startsWith(`${prefix}boom`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=bakugoexplosionmha&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Explosion!",
                description: `${msg.author}, ${mentionedMember ? `Activates their quirk **EXPLOSION** and goes **BOOM** on ${mentionedMember}` : `Activates their quirk **EXPLOSION** and goes **BOOM**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Explosion GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}amaterasu`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=amaterasunaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Amaterasu!",
                description: `${msg.author}, ${mentionedMember ? `Opens their eye, and chants **AMATERASU** on ${mentionedMember}` : `Opens their eye, and chants **AMATERASU**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Amaterasu GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}susano`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=susanonaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Susano!",
                description: `${msg.author}, ${mentionedMember ? `Unleashes their **SUSANO** against ${mentionedMember}` : `Unleashes their **SUSANO**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Susano GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}edo tensei`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=reanimationjutsunaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Edo Tensei!",
                description: `${msg.author}, ${mentionedMember ? `Uses **EDO TENSEI** to resurrect ${mentionedMember}` : `Uses **EDO TENSEI** to resurrect themself?`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Edo Tensei GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}shinra tensei`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=almightypushnaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Shinra Tensei!",
                description: `${msg.author}, ${mentionedMember ? `Chants **SHINRA TENSEI** against ${mentionedMember}` : `Chants **SHINRA TENSEI**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Shinra Tensei GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}cookie`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecookie&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Cookie!",
                description: `${msg.author}, ${mentionedMember ? `*Treats* ${mentionedMember} with a cookie` : `*Noms* on a cookie.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Cookie GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}cake`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecake&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Cake!",
                description: `${msg.author}, ${mentionedMember ? `*Serves* ${mentionedMember} a finely-iced cream cake.` : `*Serves* themselves a finely-iced cream cake.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Cake GIFs at the moment.")
        }
    }

    else if (msg.content.startsWith(`${prefix}laugh`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelaugh&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Laugh!",
                description: `${msg.author}, ${mentionedMember ? `*Laughs* at ${mentionedMember}` : `*Laughs*`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Laugh  GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}sad`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesad&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Sad!",
                description: `${msg.author}, ${mentionedMember ? `Is sad.. ${mentionedMember}` : `Is sad..`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Sad GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}happy`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehappy&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Happy!",
                description: `${msg.author}, ${mentionedMember ? `Is really happy.. ${mentionedMember}` : `Is really happy..`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Happy GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}nen`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=nenhunterxhunter&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Nen!",
                description: `${msg.author}, ${mentionedMember ? `Quickly activates their **NEN** against ${mentionedMember}` : `Quickly activates their **NEN**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Nen GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}godspeed`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=killuagodspeed&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Godspeed!",
                description: `${msg.author}, ${mentionedMember ? `Goes **GODSPEED** on ${mentionedMember}` : `Goes **GODSPEED**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Godspeed GIFs at the moment.");
        }
    }

    /*else if (msg.content.startsWith(".izuvani")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=kurapikachainhunterxhunter&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Izuvani!",
                description: `${msg.author}, ${mentionedMember ? `Unleashes their chain.. **IZUVANI** in presence of ${mentionedMember}` : `Unleashes their chain.. **IZUVANI**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Izuvani GIFs at the moment.");
        }
    }*/

    else if (msg.content.startsWith(`${prefix}jajanken`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=gonpunch&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Jajanken!",
                description: `${msg.author}, ${mentionedMember ? `*Saisho wa..* Lands a **JAJANKEN** on ${mentionedMember}` : `*Saisho wa..* Lands a **JAJANKEN**.`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I couldn't find any Jajanken GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}oni giri`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=onigirionepiece&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Oni Giri!",
                description: `${msg.author}, ${mentionedMember ? `Shouts **ONI GIRI** against ${mentionedMember}` : "Shouts **ONI GIRI**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any ONI GIRI GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}gomu gomu no`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=gomugomunoonepiece&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Gomu Gomu No!",
                description: `${msg.author}, ${mentionedMember ? `Hits **GOMU GOMU NO** on ${mentionedMember}` : "Hits **GOMU GOMU NO**."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any GOMU GOMU NO GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}spank`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animespanking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Spank!",
                description: `${msg.author}, ${mentionedMember ? `*Spanks* poor ${mentionedMember} (Strange, indeed.)` : "*Spanks*, however, whom?"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any SPANK GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}choke`)) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animechoking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();

        if (json.results && json.results.length > 0) 
        {
            const index = Math.floor(Math.random() * json.results.length);
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = 
            {
                title: "Choke!",
                description: `${msg.author}, ${mentionedMember ? `*Chokes* poor ${mentionedMember} (How rude..)` : "*Chokes*, Pardon me, who again?"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embeds: [embed] });
        } 
        else 
        {
            msg.reply("My apologies, I, the **GREATEST DETECTIVE** couldn't find any CHOKE GIFs at the moment.");
        }
    }

    else if (msg.content.startsWith(`${prefix}math`)) 
    {
        const expression = msg.content.slice(6).trim();
        
        if (expression)
        {
            processMathExpression(expression, msg);
        } 
        else if (msg.attachments.size > 0) 
        {
            const attachment = msg.attachments.first();
            processMathImage(attachment.url, msg);
        } 
        else 
        {
            msg.reply('Please provide a mathematical expression or an image containing a mathematical equation.');
        }
    }
});

async function processMathExpression(expression, msg) 
{
    try 
    {
        const isEquality = expression.includes('=');

        if (isEquality) 
        {
            const sides = expression.split('=');
            const lhs = sides[0].trim();
            const rhs = sides[1].trim();

            const scope = {};
            const variables = extractVariables(lhs + ' ' + rhs);
            variables.forEach(variable => 
            {
                scope[variable] = 0; 
            });

            const compiledLHS = math.compile(lhs);
            const compiledRHS = math.compile(rhs);

            const evaluatedLHS = compiledLHS.evaluate(scope);
            const evaluatedRHS = compiledRHS.evaluate(scope);

            const result = math.equal(evaluatedLHS, evaluatedRHS);

            if (result === true) {
                msg.reply(`Case closed. For \`${expression}\`, the solution is \`${scope[Object.keys(scope)[0]]}\``);
            }

            else 
            {
                msg.reply(`Case failed successfully. For \`${expression}\`, the equation does not have a solution.`);
            }
        } 
        
        else 
        {
            const result = math.evaluate(expression);
            msg.reply(`Case closed. The result of \`${expression}\` is \`${result}\``);
        }
    } 
    
    catch (error) 
    {
        console.error('Failure cracking the case:', error);
        msg.reply('Sorry, there was a failure cracking the case. Please check your input.');
    }
}

function extractVariables(expression) 
{
    const regex = /[a-zA-Z]+/g;
    const variables = new Set();
    let match;
    while ((match = regex.exec(expression)) !== null) 
    {
        variables.add(match[0]);
    }
    return Array.from(variables);
}

async function processMathImage(imageUrl, msg) 
{
    try 
    {
        const { data: { text } } = await Tesseract.recognize(imageUrl, 'eng');
        console.log('OCR Result:', text);
        const cleanedText = text.replace(/\s+/g, '');
        processMathExpression(cleanedText, msg);
    } 
    
    catch (error) 
    {
        console.error('Error processing image:', error);
        msg.reply('Sorry, there was an error processing the image. Please try again with a clearer image.');
    }
}