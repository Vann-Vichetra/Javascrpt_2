function findVowel(str){
    const vowels = /[aieouAIEOU]/g;
    const matchs = str.match(vowels);
    return matchs ? matchs.join('') : '';
}

const text = 'Hello All Fan Fan';

console.log(findVowel(text));
