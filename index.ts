// Import stylesheets
import './style.css';

interface Person {
  name: string;
  age?: number;
}

type PersonType = {
  name: string;
  age?: number;
};

// Write TypeScript code!
const appDiv: HTMLElement | null = document.getElementById('app');
const text = greet({ name: 'Daniel', age: 45 });
if (appDiv) {
  appDiv.innerHTML = '<h1>' + text + '</h1>';
}

function greet(person: PersonType) {
  return 'Hello ' + person.name + '!';
}
