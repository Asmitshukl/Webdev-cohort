function isanagram(str1,str2){
    const charArray = str1.split('');
    const charArray2 = str2.split('');
    charArray.sort();
    charArray2.sort();
    const sortedString = charArray.join('');
    const sortedString2 = charArray2.join('');
    if(sortedString==sortedString2)return true;
    return false;
}
console.log(isanagram("abc","bca"));