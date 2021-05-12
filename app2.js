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

var sec = 'false';
var ar = [];
var preprg = 0
console.log('Working...');
for(var track = 0; sec === 'false'; track++) {
    try {
    if (fs.existsSync('./converted.adofai')) {
        var sec = 'false';
        ar.push(JSON.parse(fs.readFileSync('./converted.adofai')).pathData.length);
        fs.unlinkSync('./converted.adofai');
    } else {
  midiToAdofai('fd.mid', 222.2, track, 'converted.adofai', 'Maded by wa-sans', 'Edited by Icetang0123');
  var convertedfile = JSON.parse(fs.readFileSync('./converted.adofai'));
  ar.push(JSON.parse(fs.readFileSync('./converted.adofai')).pathData.length);
if (convertedfile.pathData.length === 2) {
    fs.unlinkSync('./converted.adofai');
}
}
var prgg = 18 - track;
var prg = Math.round(100 / prgg);
if (preprg === prg) {
    } else {
console.log('Progress: ' + prg + '%');
}
var preprg = prg
} catch (err) {
    if (track === 18) {
        var ft = ar.indexOf(Math.max.apply(null, ar));
        midiToAdofai('fd.mid', 222.2, ft, 'converted.adofai', 'Maded by wa-sans', 'Edited by Icetang0123');
        console.log('Successfully converted fd.mid to converted.adofai\n', 'Tiles: ' + JSON.parse(fs.readFileSync('./converted.adofai')).pathData.length);
        return;
    }
    var prgg = 18 - track;
var prg = Math.round(100 / prgg);
if (preprg === prg) {
    } else {
console.log('Progress: ' + prg + '%');
}
}
}