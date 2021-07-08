function rot13(str) {
  let codes = [];
  let res = [];
  let charCodes = [];

  //find out the non-alphabetic character
  const regex = /[\W]/ig;
  
  let punc = str.matchAll(regex);
  let arr = [...punc];
  let indexes = arr.map(ele => ele.index)

  //push UTF-16 codes + 13 of each letter
  for(let i=0; i<str.length; i++) {  
      let code = str.charCodeAt(i);
      codes.push(code+13);        
  }    

  //if code is bigger than 90, it's restarting from the beggining of alphabet
  codes.forEach(code => {
    if(code > 90) {
      let diff = code - 90;
      diff+=64;
      charCodes.push(diff);
    } else {
      charCodes.push(code);
    }
  })

  
  for(let i=0; i<charCodes.length; i++) {
    res.push(String.fromCharCode(charCodes[i]));
  } 

  //put punctuation back
  let strArr = str.split(""); 
  for(let i=0; i<indexes.length; i++) {
   res[indexes[i]] = strArr[indexes[i]];
  }

  console.log(res.join(""));
  return res.join("");
}

let str = "Jul qvq gur puvpxra pebff gur ebnq?";
rot13(str.toUpperCase());
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")