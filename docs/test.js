const http = require('http');
const fs = require('fs');
const path = require('path');

const url = 'http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg';

http.get(url, res => {
	res.pipe(fs.createWriteStream(path.join(__dirname, 'image.jpg')));
});
