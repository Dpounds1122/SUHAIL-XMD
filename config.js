 const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066307706";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_43_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDM3LFxuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPaTN1YUNiM0I5WksreXZSSkJhNTVVVDNmUnFna1QxZTh5SDFQaGpYdDg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRRUZGNmY4dlM5bV9oNjFock1Mc1BRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlZjE2ZTJmLTUxZTQtNDM2Ni1iMWJhLTcwNmFjNGI4ZDQyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDI0NixcbiAgICAgIDE1NCxcbiAgICAgIDIxMCxcbiAgICAgIDU5LFxuICAgICAgODksXG4gICAgICAxNzcsXG4gICAgICAxNTUsXG4gICAgICAyLFxuICAgICAgMTU1LFxuICAgICAgMTgzLFxuICAgICAgMTg4LFxuICAgICAgNDcsXG4gICAgICAyMTMsXG4gICAgICA3LFxuICAgICAgMTQ0LFxuICAgICAgMTA2LFxuICAgICAgMTcsXG4gICAgICA2MyxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICA4MCxcbiAgICAgIDEzMyxcbiAgICAgIDE2NyxcbiAgICAgIDIyNSxcbiAgICAgIDE1NyxcbiAgICAgIDI2LFxuICAgICAgOTQsXG4gICAgICA5NixcbiAgICAgIDE2MixcbiAgICAgIDE3MCxcbiAgICAgIDEsXG4gICAgICAzOSxcbiAgICAgIDIwNixcbiAgICAgIDM2LFxuICAgICAgMTE2LFxuICAgICAgMTI4LFxuICAgICAgMzQsXG4gICAgICAyNixcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNaR1JUMUxRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MzA3NzA2OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueSBQb3VuZHNcIixcbiAgICBcImxpZFwiOiBcIjIwNTk0NzIwNTMwNTc4OjY2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pVDZQNE1FTnlFbUxrR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXQxbG5ZVmI3c2RzcXVMUjZWVXpFcDdKNnhzSDBBZDhRRTdOdFA4RXpSQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwWnFjQlhFN1ZzbUJuWnFSM3U5VlB1RUN0L3JBR0l2d201T3hYYVBpUERUSGpFeVcwNkl0bTVPRjJabHhjaHNGTkpqdEkyV2ZRU0VzbFJkc3J0VllqZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzaW5aeS9HUWRSYkJESG96M1Z5MndZQVBaRHlIdEhrb0NmRVQ5bG10UkQyTC9XeFJzdjJaRUgrN2dCeVlDMzVhUlZ0cnYxc1JUWXR5UDBualIwakNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzA3NzA2OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU0NDIyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBRGtBQUhaL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFEa0FBSFovLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
