//Requirement Variable
const auth = require('./auth.json');
const cli = require("./ClientID.json");
const { REST, Routes, ChannelType } = require('discord.js');
const CLIENT_ID = cli.ClientID;
const rest = new REST({ version: '10' }).setToken(auth.token);
const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, getVoiceConnections } = require('@discordjs/voice')
// Start module
module.exports = (client) => {
  //Create slashcommand
  const Music = new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play music')
    .addChannelOption((option) => 
    option
      .setName('channel')
      .setDescription('เลือกช่องที่จะให้บอทเข้า')
      .setRequired(true)
      .addChannelTypes(ChannelType.GuildVoice)
    )
  const Leave = new SlashCommandBuilder().setName('leave').setDescription('ออกจากห้อง')
  .addChannelOption((option) => 
  option
    .setName('channel')
    .setDescription('เลือกช่องที่บอทอยู่ขณะนี้')
    .setRequired(true)
    .addChannelTypes(ChannelType.GuildVoice)
  );
  const rawleave = Leave.toJSON();
  const rawjson = Music.toJSON();
  //contain SlashCommand
  const commands = [rawjson, rawleave];
  //Load SlashCommand And Check Error
  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.isChatInputCommand) {
      if (interaction.commandName === 'play') {
        
        const voiceChannel = interaction.options.getChannel('channel');
        const connection = joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: interaction.guild.id,
          adapterCreator: interaction.guild.voiceAdapterCreator,
          
        });
        await interaction.reply({content: `${voiceChannel.guild.name} ได้เข้ามาในห้อง: ${voiceChannel.name} แล้ว`})
      }
      if (interaction.commandName === 'leave') {
        const voiceChannel = interaction.options.getChannel('channel');
        const connection = joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: voiceChannel.guild.id,
          adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        });
        // ออกจากห้องพูด
        if (connection) {
          connection.destroy();
          await interaction.reply({ content: 'บอทได้ออกจากห้องแล้ว' });
        }else {
          await interaction.reply({ content: 'ไม่พบบอทในห้องนี้' });
        }
      }
    }
  })
  //Create Action for SlashCommand
};