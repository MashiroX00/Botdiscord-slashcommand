# Botdiscord-slashcommand
Source code to make Bot discord<br/>
---------------------------Setup project--------------------------<br/>
1.install `discord.js`, `@discordjs/voice`, `@discordjs/builders`
```npm
npm i discord.js
npm i @discordjs/voice
npm i @discordjs/builders
```
2.Create project in dir BOT
```npm
npm init -y
```
3.Change `main` in `package.json` link to `DiscordMainBot.js`
```json
"main": "./src/DiscordMainBot",
```
4.Replace Bot Token in `auth.json` <br/>
5.Replace ClientID in `Clientid.json`

You can Create Slashcommand in `SlashCommand.js` and Create Message reply in `createmessage.js`<br/>
----------------------------Setup Bot-------------------------------<br/>
1.Go to [Discord devloper portal](https://discord.com/developers/applications) and Create application <br/>
2.Select application and Change name <br/>
3.Go to OAuth2 Client ID in here<br/>
4.Go to `Bot` click Reset token and copy it <br/>
5.How to invite Bot to server? <br/>Go to OAuth2 and click URL Generator Click Bot Check bot and Click Administrator check box Copy URL in bottom website<br/>
6 Go to Bot again and scroll down Enable `PUBLIC BOT` `PRESENCE INTENT` `SERVER MEMBERS INTENT` `MESSAGE CONTENT INTENT`<br/>
-----------------------------------------------------------------------<br/>
Done. :)

Document <br/>
[Discord.js Document](https://discord.js.org/#/docs/discord.js/main/general/welcome)
