

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://Domemano:<db_password>@discordbot.bzl2dnd.mongodb.net/?retryWrites=true&w=majority&appName=DiscordBot",
  spotifyClientId : "mongodb+srv://Domemano:<db_password>@discordbot.bzl2dnd.mongodb.net/?retryWrites=true&w=majority&appName=DiscordBot",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
