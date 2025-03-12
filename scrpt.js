const { REST, Routes } = require("discord.js");
require('dotenv').config();

const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Clearing all global slash commands...");
    await rest.put(Routes.applicationCommands(clientId), { body: [] });
    console.log("Global slash commands cleared.");
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] });
  } catch (error) {
    console.error("Error clearing global commands:", error);
  }
})();
