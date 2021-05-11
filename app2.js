var fs=require('fs');
var {conv}=require('./convter.js');

console.log('Thanks for using this!');

function midiToAdofai(midiFile,BPM,track,saveFileName=midiFile+'.adofai',artist='',song='')
{
  fs.writeFileSync('./'+saveFileName,JSON.stringify(conv(fs.readFileSync('./'+midiFile),BPM,track,artist,song)));
}

if (!fs.existsSync('./fd.mid')) {
    console.log('Please save midi file to fd.mid');
    return;
}

if (fs.existsSync('./converted.adofai')) {
    console.log('converted.adofai is aleady exists.');
    return;
}

try {
var sec = 'false';
console.log('Working...');
for(var track = 0; sec === 'false'; track++) {
    if (fs.existsSync('./converted.adofai')) {
        var sec = 'true';
        console.log('Successfully converted fd.mid to converted.adofai');
        console.log('Tiles: ' + JSON.parse(fs.readFileSync('./converted.adofai')).pathData.length)
    } else {
  midiToAdofai('fd.mid', 222.2, track, 'converted.adofai', 'Maded by wa-sans', 'Edited by Icetang0123');
  var convertedfile = JSON.parse(fs.readFileSync('./converted.adofai'));
if (convertedfile.pathData.length === 2) {
    fs.unlinkSync('./converted.adofai');
}
}
}
} catch (err) {
    console.log('Failed to convert midi to adofai');
}