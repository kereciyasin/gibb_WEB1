// String-Manipulation und Template-Literals in JavaScript

// 1. Erstelle eine neue Datei mit dem Namen string_manipulation.js

// 2. Erzeuge einen String, der die beiden Wörter "Hallo" und "Welt" enthält. Verwende dazu die +-Operator.
let greeting = "Hallo" + " " + "Welt";

// 3. Speichere diesen String in einer Variablen namens greeting.
console.log(greeting);

// 4. Füge eine neue Zeile mit einem weiteren Textabschnitt in den greeting-String hinzu. Verwende hierfür Back-Ticks.
greeting = `${greeting}! Wie geht es dir?`;

// 5. Erzeuge eine zweite Variablen namens name mit dem Wert "Student".
let name = "Student";

// 6. Füge den Wert der name-Variablen in den greeting-String ein. Verwende hierfür ebenfalls Back-Ticks.
greeting = `${greeting} Ich hoffe, du lernst gerne JavaScript, ${name}!`;

// 7. Speichere die Datei und führe sie in einem Browser oder in einer Konsole aus.

// 8. Stelle sicher, dass du die Ausgabe im Browser oder in der Konsole überprüfst, um zu sehen, ob du die Aufgabe richtig gelöst hast.
console.log(greeting);
