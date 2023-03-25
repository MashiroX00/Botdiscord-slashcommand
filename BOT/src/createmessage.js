//Requirement Variable

//Start Module
module.exports = (client) => {
    // Chat Bot mudule
  client.on('messageCreate', async(message) => {
      if (message.content === 'ping') {
        message.reply('pong');
      }
    });
    //Check File Loaded
    client.on('ready', () => {
      console.log(`Loaded Message File!`);
  });
  //  client.on('messageCreate', async(message) => {
  //   if (message.author.bot) return

  //   message.channel.send(message);
  //  } )
  };
  