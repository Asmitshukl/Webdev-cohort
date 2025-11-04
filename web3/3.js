// function arraytohex(bytearray){
//     let hexstring='';
//     for(let i=0;i<bytearray.length;i++){
//         hexstring+=bytearray[i].toString(16).padstart(2,'0');
//     }
//     return hexstring;
// }
// const str="hello";
// const  bytearray=new TextEncoder().encode(str);
// const hexstring=arraytohex(bytearray);
// console.log(hexstring);

function arraytohex(bytearray) {
  let hexstring = '';
  for (let i = 0; i < bytearray.length; i++) {
    hexstring += bytearray[i].toString(16).padStart(2, '0');
  }
  return hexstring;
}

const str = "hello";
const bytearray = new TextEncoder().encode(str);
const hexstring = arraytohex(bytearray);
console.log(hexstring);
