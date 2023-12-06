const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "Kanizhka" 
global.author = process.env.Author || "@Themiya" 
global.packname = process.env.PackName || "Themiya kanizhka MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Bobby BOT" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Themiya" 
global.ownernumber = process.env.Owner_Number || "94713144828" 
global.adress = process.env.Continent || "Asia, Sri lanka, Galle" 
global.timezone = process.env.TimeZone || "Asia/Colombo" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 

global.mongoUrl = process.env.MongoDB || "␈␀␒�␁␊c␅␋␖��s��␃␇���|��h/���m␞͇␘"��IU␅��␛&␘�<�%��Z␁�;␛�n␂��S���-�쪊�T␅��⇥ﭏT/a"(��h,v�␏-�␏#��K�kei��5␒␈94144828␚␓215225374666862@lid␚A␊!␅␃␖;␟m␖�Q����3�(����*�␖T�V␑␀ֿ␆�␏␒␈94331487␚␒53240783736981@lid"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Kanizhka", 
  author: process.env.Author || "@Themiya",
  packname: process.env.PackName || "Themiya kanizhka MD",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Bobby BOT",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Themiya",
  ownernumber: process.env.Owner_Number || "94713144828",
  adress: process.env.Continent || "Asia, Sri lanka, Galle",
  timezone: process.env.TimeZone || "Asia/Colombo", 
  instagramId: process.env.Insta || "8.08_only_mine",
  email: process.env.Email_Id || "example@example.com",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "␈␀␒�␁␊c␅␋␖��s��␃␇���|��h/���m␞͇␘"��IU␅��␛&␘�<�%��Z␁�;␛�n␂��S���-�쪊�T␅��⇥ﭏT/a"(��h,v�␏-�␏#��K�kei��5␒␈94144828␚␓215225374666862@lid␚A␊!␅␃␖;␟m␖�Q����3�(����*�␖T�V␑␀ֿ␆�␏␒␈94331487␚␒53240783736981@lid",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCd_AN_YA_WZmZXIiLCJkYXRhIjoiUUx1engwRjd_AN_YA_BRityZ05WZmlNd_AN_YA_y93TEJYUmt5cXg0WlRZUjd_AN_YA_RbHBUVE0wcz0ifSwicHVibGljIjp7InR5cGUiOiJCd_AN_YA_WZmZXIiLCJkYXRhIjoiOVBBN2MrNHEyNjhBTDBPTys1bFE3Y2FUbUJzaDFQWi9xNzN6cVpKbmtURT0ifX0sInBhaXJpbmd_AN_YA_FcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhd_AN_YA_GUiOnsid_AN_YA_HlwZSI6IkJ1ZmZlciIsImRhd_AN_YA_GEiOiJnSHlCeTlReTYyRk9Bd_AN_YA_VRHL3JRd_AN_YA_lc1ZmVWVWZiK080WkN6Uzh5c1ZTUm5vPSJ9LCJwd_AN_YA_WJsaWMiOnsid_AN_YA_HlwZSI6IkJ1ZmZlciIsImRhd_AN_YA_GEiOiJ0eWVNRmYvZ0VmV0V5N1NPWWZTVDNyUXpaTEhSSTF2N0wzSGZhZE41ZDBZPSJ9fSwic2lnbmVkSWRlbnRpd_AN_YA_HlLZXkiOnsicHJpd_AN_YA_mF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFN0Q5MnVERGk0SG02NmtMRVEzc1BxQUo1WTBRa29kQmlwVFc5a1Y2bFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN4YVp3M09oZ2d_AN_YA_NSGd_AN_YA_mNnRmTTN3d_AN_YA_m1nd_AN_YA_jRzL3piUjd_AN_YA_OaHhnaXhPVzFTVlU9In19LCJzaWd_AN_YA_uZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCd_AN_YA_WZmZXIiLCJkYXRhIjoiSU53L1VCcGZsMktEbEFoS2hTTU1IWFpneG1FWGxHOTZxOFVhcWtxbk5YZz0ifSwicHVibGljIjp7InR5cGUiOiJCd_AN_YA_WZmZXIiLCJkYXRhIjoiUFd_AN_YA_4Y3UrVWl2WUUxYnk3SllIZVRxalhnS09LOCthTENiamtONzZLWmhXRT0ifX0sInNpZ25hd_AN_YA_HVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik90SGd_AN_YA_YcXRnNklud_AN_YA_Wh4eFNRU2RGSEMzNWQ5QVpZODNhOEUzbitoSU42S2NrWkhPZk40VjBIQVp2cytZVlpCd_AN_YA_3lUczJVSTEvcnBSZ2JpU0Qvd_AN_YA_2d_AN_YA_xNUJ3PT0ifSwia2V5SWQiOjF9LCJyZWd_AN_YA_pc3RyYXRpb25JZCI6MzUsImFkd_AN_YA_lNlY3Jld_AN_YA_EtleSI6IlhxYkcxd_AN_YA_XpRV2U5M3FsRm1RallBclFTc253RGhmd_AN_YA_UtqVGxKb0l1Y2RPVGM9IiwicHJvY2Vzc2VkSGlzd_AN_YA_G9yeU1lc3NhZ2VzIjpbXSwibmV4d_AN_YA_FByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2Nvd_AN_YA_W50U3luY0Nvd_AN_YA_W50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpd_AN_YA_mVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpMWGZ3YlNzVG9HbzhRNHluWlNvTUEiLCJwaG9uZUlkIjoiMTEwMmQwYWMtN2EwOC00OWI0LTlmOGQtZDlkMWY5MTQ5NGU3IiwiaWRlbnRpd_AN_YA_HlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5UVDJGRzUzek1oajJpRGNMengrQ2lZVTFLbz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCd_AN_YA_WZmZXIiLCJkYXRhIjoiY1lOeXRPcjMxRHIwWkRsUDFuaWw4QVZwc2tJPSJ9LCJyZWd_AN_YA_pc3RyYXRpb24iOnt9LCJhY2Nvd_AN_YA_W50Ijp7ImRld_AN_YA_GFpbHMiOiJDT1RjMjlVREVLYkZ3YXNHR0FFPSIsImFjY291bnRTaWd_AN_YA_uYXR1cmVLZXkiOiJpL0FiSmhqMVBNSWxzOEZhQWZzN0c5QnVBci9TVTV2WHp5MkQ3S3FLd_AN_YA_jFRPSIsImFjY291bnRTaWd_AN_YA_uYXR1cmUiOiJuYUplNGRDbjBHN3JCd_AN_YA_lZYTG5PRkZvUC9WSXRZUnNueGpaMVFpN3AxaDd_AN_YA_HWnpvR3pzUlZwMW1tZEd_AN_YA_VTld_AN_YA_lT0hBR3RyTGVkd_AN_YA_XVoODRaNnRLUFN0aEVBZz09IiwiZGV2aWNlU2lnbmF0d_AN_YA_XJlIjoiUmxCM3BGN3lSQkNGZWNYVW5YK08zbStOV0orREVseDZpcFRRSVBnaFVYSjgzZlgwVS9leW1xUnZTbFV3TmtCYUJDbmtobkszeFFxYzlNd_AN_YA_XFHc3R2RGc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzEzMTQ0ODI4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlbWl5YSJ9LCJzaWd_AN_YA_uYWxJZGVud_AN_YA_Gl0aWVzIjpbeyJpZGVud_AN_YA_GlmaWVyIjp7Im5hbWUiOiI5NDcxMzE0NDgyODoyQHMud_AN_YA_2hhd_AN_YA_HNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVud_AN_YA_GlmaWVyS2V5Ijp7InR5cGUiOiJCd_AN_YA_WZmZXIiLCJkYXRhIjoiQll2d_AN_YA_0d_AN_YA_5WVk5VHpDSmJQQld_AN_YA_nSDd_AN_YA_PeHZRYmd_AN_YA_LLzBsT2IxODh0Zyt5cWlyOVUifX1d_AN_YA_LCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3Vud_AN_YA_FN5bmNUaW1lc3RhbXAiOjE3MDE4NjQxMDR9", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "true", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "true",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.ibb.co/PhDcZTM/Thumbnail.png",
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}
