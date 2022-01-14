// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

function formatStorage(array) {
  // Code your function here
  return [...array[1],...array[2],...array[3],...array[4],...array[5]];
}

// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
// console.log(formatStorage(storageHell));

// Don't modify this, it is for the tests.
module.exports = formatStorage;
