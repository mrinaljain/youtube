const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
  "Kathy",
  "Leo",
  "Mona",
  "Nina",
  "Oscar",
  "Paul",
  "Quincy",
  "Rachel",
  "Steve",
  "Tina",
];
const messages = [
  "Hello, how are you?",
  "It's a beautiful day today!",
  "I'm excited about the new project.",
  "Let's meet up this weekend.",
  "Did you watch the game last night?",
  "I love reading books in my free time.",
  "What are your plans for the holidays?",
  "That movie was amazing!",
  "I'm learning to cook new recipes.",
  "Have you ever traveled to Europe?",
  "The meeting went well today.",
  "I'm thinking about adopting a pet.",
  "Let's go for a hike this Saturday.",
  "I've started a new workout routine.",
  "The weather has been crazy lately.",
  "I'm trying out a new hobby.",
  "What's your favorite restaurant?",
  "I just finished a great book.",
  "How's work going for you?",
  "I'm planning a road trip next month.",
];

function generateMessage() {
  const namesLength = names.length;
  const num = Math.floor(Math.random() * namesLength);
  return {
    name: names[num],
    message: messages[num],
  };
}

export default generateMessage;
