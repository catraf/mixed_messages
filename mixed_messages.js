// A catchphrase generator that will generate a random catchphrase.

// starting bank of catchphrase parts
const catchphraseParts = {
  start_word: ['howzat', 'look at that', 'you', 'wow', 'gabba', 'jazza'],
  silly_word: ['jazzle', 'balloo', 'jingle', 'bingle', 'balong',
      'malarkey'],
  end_word: ['boo', 'it', 'ha', 'zang'],
};

const catchprhaseArray = [];

Object.values(catchphraseParts).forEach (val => {
  num = Math.floor(Math.random() * val.length);
  catchprhaseArray.push(val[num].toUpperCase());
})

let generatedCatchphrase = `${catchprhaseArray.join(" ")}!!!`;
console.log(generatedCatchphrase);


