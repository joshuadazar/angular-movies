const webp = require('webp-converter');
const fs = require('fs');
const path = require('path');

const localPath = '../app/assets/img/'
let imagePath = path.resolve(__dirname, localPath);

const files = fs.readdirSync(imagePath);

const formatFile = (file)=> {
  const name= file.replaceAll(" ","_");
  fs.rename(imagePath+'/'+file, imagePath+'/'+name, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  return name
}

files.forEach((file, i)=> {

  let fileClean=formatFile(file)
  const result = webp.cwebp(imagePath+'/'+fileClean, imagePath+'/'+fileClean.replace( /\.(png|jpg)$/i,'.webp'), "-q 80",logging="-v");
  result.then((response) => {
    if(i === files.length-1){
      console.log(fs.readdirSync(imagePath))
    }
  });
  
})

