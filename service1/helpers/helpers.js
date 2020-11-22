const { first, middle, end, time, buzzNouns, buzzAdjectives, buzzVerbs, buzzPlaces, buzzNums, features, types } = require('./data');

var randomizer = (arr) => {
  let i = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[i];
};

var randomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

var getRandomIndex = (arr) => {
  return Math.floor(Math.random() * Math.floor(arr.length));
};

const generateName = () => {
  return randomizer(first) + (exists() ? '-' : '') + randomizer(middle) + (exists() ? '-' : '') + randomizer(end);
};

const exists = () => {
  return Math.floor(Math.random() * Math.floor(2));
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const generateType = () => {
  return randomizer(types);
}

const generateFeatures = () => {
  let feat = [];
  let copy = features.slice();
  feat.push(copy.splice(getRandomIndex(copy), 1)[0]);
  feat.push(copy.splice(getRandomIndex(copy), 1)[0]);
  if (exists()) feat.push(copy.splice(getRandomIndex(copy), 1)[0]);
  if (exists()) feat.push(copy.splice(getRandomIndex(copy), 1)[0]);

  return feat.map(x => capitalize(x));
}

const generateDescription = (productName) => {
  const sentences = [
    `Do you need this? Debatable. Will you enjoy it? Yes. Why? Because ${randomizer(buzzNouns)}.`,
    `The ${productName} will bring ${randomizer(time)} of enjoyment to you and your loved ones.`,
    `If you want to be as productive as possible, the ${productName} will ${randomizer(buzzVerbs)} all of your ${randomizer(buzzNouns)} so it's as ${randomizer(buzzAdjectives)} as possible.`,
    `There's only one real ${productName}. All others are fake and obsolete.`,
    `Don't spend countless ${randomizer(time)} trying to bring ${randomizer(buzzNouns)} to your household. Instead have the ${productName} ${randomizer(buzzVerbs)} all the surfaces of your ${randomizer(buzzPlaces)}.`,
    `Countless people agree, the only way to really ${randomizer(buzzVerbs)} and bring ${randomizer(buzzNouns)} to a ${randomizer(buzzPlaces)} is to use ${productName}.`,
    'Treat yourself, you deserve it!',
    `For ${randomizer(buzzNums)} of ${randomizer(time)}, the ${productName} has been the go to product for ${randomizer(buzzNums)} of blue collar families.`,
    `Now with 11 new, ${randomizer(buzzAdjectives)} features.`,
    `Cut the time it takes to ${randomizer(buzzVerbs)} in half.`,
    `The answer to every question you have yet to ask. The ${productName}.`,
    `Nine out of ten moms agree, ${productName} is a must have in the ${randomizer(buzzPlaces)}.`,
    `The ${productName} is designed with a front-mount design to make loading and unloading easier.`,
    `The ergonomic design means ${randomizer(time)} of ${randomizer(buzzAdjectives)} comfort.`
  ];

  let sentance1 = sentences.splice(getRandomIndex(sentences), 1);
  let sentance2 = sentences.splice(getRandomIndex(sentences), 1);
  let sentance3 = sentences.splice(getRandomIndex(sentences), 1);

  return `${sentance1} ${sentance2}` + `${exists() ? ' ' + sentance3 : ''}`;
};

module.exports = {
  generateName,
  randomizer,
  randomNumber,
  exists,
  generateDescription,
  generateFeatures,
  generateType,
  randomNumber
}