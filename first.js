const simpleIcons = require("simple-icons");
const icon = simpleIcons.Get("hive");

console.log(Object.getOwnPropertyNames(icon).toString());
console.log(icon.title);
console.log(icon.path);
