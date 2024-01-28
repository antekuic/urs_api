// class for crypto

import crypto from 'crypto'

export async function verifyHash(hash: string, salt: string):Promise<string> {
  return new Promise((reslove, reject) => {
    crypto.pbkdf2(hash, salt, 10000, 256, 'sha512', (err, derivedKey) => {
      if(err) reject(err);
      reslove(derivedKey.toString('hex'));
    })
  })
}

export async function makeHash(values: string[], salt: string): Promise<string> {

  let input = '';
  input = values[0];
  if(values.length > 1) 
    // make for loop
    for(let index = 1; index < values.length; index++) 
      // xor next in array
      input = xorStrings(input, values[index]);
    
  // make hmac from input
  return await makeHMAC(input, salt, 10000, 256, 'sha512');
}

// function for xor two strings
function xorStrings(string1: string, string2: string) {
  let result = '';
  const maxLength = Math.max(string1.length, string2.length);
  for (let i = 0; i < maxLength; i++) {
      const charCode1 = i < string1.length ? string1.charCodeAt(i) : 0;
      const charCode2 = i < string2.length ? string2.charCodeAt(i) : 0;
      const xorResult = charCode1 ^ charCode2;
      result += String.fromCharCode(xorResult);
  }
  return result;
}

// function to make hash! 
export async function makeHMAC(string: crypto.BinaryLike, salt: crypto.BinaryLike, iterations: number, keylen: number, digest: string):Promise<string> {
  return new Promise((reslove, reject) => {
    crypto.pbkdf2(string, salt, iterations, keylen, digest, (err, derivedKey) => {
      if(err) reject(err);
      reslove(derivedKey.toString('hex'));
    })
  })
}

export async function getRandomBytes(byteSize:number):Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(byteSize, (err, buffer) => {
      if (err) reject(err);
      resolve(buffer.toString('hex'));
    });
  });
}
