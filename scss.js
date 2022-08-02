const sass = require('node-sass');
const fs = require('fs');

sass.render({
  file: './preview/main.scss',
  outputStyle: 'compressed'
}, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile('./public/main.css', result.css);
  }
});
