import fruits from "./foods";
import { choice, remove } from "./helpers";

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
let fruitsLeft = remove(fruits, randomFruit);
console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`);
