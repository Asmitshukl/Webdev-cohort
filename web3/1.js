function asciiToBytes(asciiString){
    const arr=[];
    for(let i=0;i<asciiString.length;i++){
        arr.push(asciiString.charCodeAt(i))
    }
    return new Uint8Array(arr);
}
const ascii="hello";
const bytearray=asciiToBytes(ascii);
console.log(bytearray);