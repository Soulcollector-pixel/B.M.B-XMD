const _0x5dbf87=_0x1fcb;(function(_0x8902c7,_0x4e742f){const _0x438ed6=_0x1fcb,_0x4d1c56=_0x8902c7();while(!![]){try{const _0x15963d=-parseInt(_0x438ed6(0x7d))/0x1+-parseInt(_0x438ed6(0x77))/0x2+-parseInt(_0x438ed6(0x95))/0x3+-parseInt(_0x438ed6(0x85))/0x4*(parseInt(_0x438ed6(0x7c))/0x5)+-parseInt(_0x438ed6(0x93))/0x6+-parseInt(_0x438ed6(0x86))/0x7*(parseInt(_0x438ed6(0x8c))/0x8)+-parseInt(_0x438ed6(0x92))/0x9*(-parseInt(_0x438ed6(0x88))/0xa);if(_0x15963d===_0x4e742f)break;else _0x4d1c56['push'](_0x4d1c56['shift']());}catch(_0x3e17f4){_0x4d1c56['push'](_0x4d1c56['shift']());}}}(_0x40b6,0xb224c));const axios=require(_0x5dbf87(0x94)),FormData=require(_0x5dbf87(0x91)),fs=require('fs'),os=require('os'),path=require(_0x5dbf87(0x79)),{cmd}=require(_0x5dbf87(0x8a));cmd({'pattern':'tourl','alias':[_0x5dbf87(0x76),'img2url',_0x5dbf87(0x73)],'react':'🖇','desc':_0x5dbf87(0x82),'category':'utility','use':_0x5dbf87(0x80),'filename':__filename},async(_0x11fcbd,_0xeb2ddf,_0x8fb60c,_0x420753)=>{const _0x46f4de=_0x5dbf87,{from:_0x5dc538,quoted:_0x60f7d6,reply:_0x546d43,sender:_0x2a0da5}=_0x420753;try{const _0xba91c8=_0xeb2ddf[_0x46f4de(0x87)]?_0xeb2ddf[_0x46f4de(0x87)]:_0xeb2ddf,_0x32c322=(_0xba91c8[_0x46f4de(0x7a)]||_0xba91c8)[_0x46f4de(0x7b)]||'';if(!_0x32c322||!_0x32c322['startsWith'](_0x46f4de(0x75)))throw _0x46f4de(0x81);const _0x188a50=await _0xba91c8[_0x46f4de(0x8e)](),_0x10a0ad=path['join'](os[_0x46f4de(0x90)](),'hanstz');fs['writeFileSync'](_0x10a0ad,_0x188a50);const _0x4ed04a=new FormData();_0x4ed04a[_0x46f4de(0x72)](_0x46f4de(0x75),fs['createReadStream'](_0x10a0ad));const _0x273773=await axios['post']('https://api.imgbb.com/1/upload?key=f07b8d2d9f0593bc853369f251a839de',_0x4ed04a,{'headers':{..._0x4ed04a[_0x46f4de(0x89)]()}});if(!_0x273773[_0x46f4de(0x78)]||!_0x273773[_0x46f4de(0x78)][_0x46f4de(0x78)]||!_0x273773['data']['data'][_0x46f4de(0x73)])throw _0x46f4de(0x8b);const _0x2b8216=_0x273773[_0x46f4de(0x78)]['data']['url'];fs[_0x46f4de(0x7f)](_0x10a0ad);const _0x5c611d={'mentionedJid':[_0x2a0da5],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x46f4de(0x74),'newsletterName':_0x46f4de(0x7e),'serverMessageId':0x8f}};await _0x11fcbd[_0x46f4de(0x84)](_0x5dc538,{'text':'*ɪᴍᴀɢᴇ\x20ᴜᴘʟᴏᴀᴅᴇᴅ\x20sᴜᴄᴄᴇsғᴜʟʟʏ\x20📸*\x0aSize:\x20'+_0x188a50[_0x46f4de(0x8f)]+'\x20Byte(s)\x0a*URL:*\x20'+_0x2b8216+_0x46f4de(0x8d),'contextInfo':_0x5c611d});}catch(_0x534416){_0x546d43('Error:\x20'+_0x534416),console[_0x46f4de(0x83)](_0x534416);}});function _0x1fcb(_0x56b7ff,_0x17c6f4){const _0x40b6cd=_0x40b6();return _0x1fcb=function(_0x1fcbaf,_0x160c75){_0x1fcbaf=_0x1fcbaf-0x72;let _0x3b7b6d=_0x40b6cd[_0x1fcbaf];return _0x3b7b6d;},_0x1fcb(_0x56b7ff,_0x17c6f4);}function _0x40b6(){const _0x13a4f7=['.tourl','🌻\x20Please\x20reply\x20to\x20an\x20image.','Convert\x20an\x20image\x20to\x20a\x20URL\x20using\x20imgbb.','error','sendMessage','551632EHUyBm','5184718FUUZXi','quoted','64668660SKQvtS','getHeaders','../command','❌\x20Failed\x20to\x20upload\x20the\x20file.','8ntuEnI','\x0a\x0a>\x20⚖️\x20ᴜᴘʟᴏᴀᴅᴇᴅ\x20ᴠɪᴀ\x20ᴄᴀsᴇʏʀʜᴏᴅᴇs\x20xᴍᴅ','download','length','tmpdir','form-data','9pQVafI','5895564VNQVnx','axios','3927003ZlQTjZ','append','url','120363351424590490@newsletter','image','imgtourl','734196YGXzuC','data','path','msg','mimetype','50JweFug','958743lHcedc','Vortex\x20ᴜʀʟ🔗','unlinkSync'];_0x40b6=function(){return _0x13a4f7;};return _0x40b6();}
