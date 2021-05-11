const fs = require('fs');

try {
fs.unlinkSync('./converted.adofai');
console.log('Successfully removed converted.adofai');
} catch (err) {
    console.log('Cannot find converted.adofai');
}