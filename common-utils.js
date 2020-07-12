// common-utils
const fs = require('fs');
// fs.readFile/promise get value
export function fsRead(path, encode) {
  if (typeof path === 'string' && typeof encode === 'string') {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, {encoding:encode}, function(data, err) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } else {
    console.log('path&encode must be string');
  }
};

// fsRead('./hello.txt').then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })