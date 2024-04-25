/*

 /$$   /$$  /$$$$$$     /$$$$$    /$$$$$  /$$$$$$   /$$$$$$  /$$$$$$
| $$$ | $$ /$$__  $$   |__  $$   |__  $$ /$$__  $$ /$$__  $$|_  $$_/
| $$$$| $$| $$  \ $$      | $$      | $$| $$  \ $$| $$  \__/  | $$  
| $$ $$ $$| $$$$$$$$      | $$      | $$| $$$$$$$$| $$        | $$  
| $$  $$$$| $$__  $$ /$$  | $$ /$$  | $$| $$__  $$| $$        | $$  
| $$\  $$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$| $$    $$  | $$  
| $$ \  $$| $$  | $$|  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$/ /$$$$$$
|__/  \__/|__/  |__/ \______/  \______/ |__/  |__/ \______/ |______/
                                                                    
                                                                    
*/


module.exports = {
  TOKEN: "",
  ownerID: ["1232865935443103824", ""],
  botInvite: "https://discord.com/oauth2/authorize?client_id=1232870839423078470&permissions=8&scope=bot",
  supportServer: "1232871354840256574",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'PLay Me',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://youareanidiot.com",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
/*

 /$$   /$$  /$$$$$$     /$$$$$    /$$$$$  /$$$$$$   /$$$$$$  /$$$$$$
| $$$ | $$ /$$__  $$   |__  $$   |__  $$ /$$__  $$ /$$__  $$|_  $$_/
| $$$$| $$| $$  \ $$      | $$      | $$| $$  \ $$| $$  \__/  | $$  
| $$ $$ $$| $$$$$$$$      | $$      | $$| $$$$$$$$| $$        | $$  
| $$  $$$$| $$__  $$ /$$  | $$ /$$  | $$| $$__  $$| $$        | $$  
| $$\  $$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$| $$    $$  | $$  
| $$ \  $$| $$  | $$|  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$/ /$$$$$$
|__/  \__/|__/  |__/ \______/  \______/ |__/  |__/ \______/ |______/
                                                                    
                                                                  

*/

