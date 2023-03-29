const jokes = [
  {
    category: "Misc",
    type: "single",
    joke: "What did the shy pebble with for? That she was a little boulder.",
    id: 2,
  },
  {
    category: "Misc",
    type: "single",
    joke: "A ghost walks into a bar and asks for a glass of vodka. The bartender says, \"Sorry, we don't serve spirits.",
    id: 3,
  },
  {
    category: "Misc",
    type: "single",
    joke: "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
    id: 4,
  },
  {
    category: "Misc",
    type: "single",
    joke: "What’s the longest word in the dictionary? Smiles. Because there’s a mile between the two Ss",
    id: 1,
  },
  {
    category: "Misc",
    type: "single",
    joke: "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
    id: 5,
  },
  {
    category: "Misc",
    type: "single",
    joke: 'A neutron walks into a bar and asks for a price on a drink.\nThe barkeeper says: "For you... no charge!"',
    id: 6,
  },
  {
    category: "Animal",
    type: "single",
    joke: 'There\'s two fish in a tank. One turns to the other and says, "Do you know how to drive this thing?"',
    id: 7,
  },
  {
    category: "Animal",
    type: "single",
    joke: "What did the Buffalo say to his little boy when he dropped him off at school? \nBison.",
    id: 8,
  },
  {
    category: "Animal",
    type: "single",
    joke: "Which side of the chicken has more feathers? \nThe outside.",
    id: 9,
  },
  {
    category: "Animal",
    type: "single",
    joke: "Why do cows wear bells? \nBecause their horns don't work!",
    id: 10,
  },
  {
    category: "Plant",
    type: "single",
    joke: "What did the big flower say to the littler flower? Hi, bud!",
    id: 11,
  },
  {
    category: "Plant",
    type: "single",
    joke: "which flower is most fierce? Dandelion",
    id: 12,
  },
  {
    category: "Cat",
    type: "single",
    joke: "What do you call a pile of cats? \nA meowtain.",
    id: 13,
  },
];

const randomJoke = function randomJoke() {
  const rand = Math.floor(Math.random() * jokes.length);
  
  return jokes[rand];
}

module.exports = randomJoke;
