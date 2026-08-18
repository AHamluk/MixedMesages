// Project: Magical Astral Spell generator.
console.log("Welcome to the Astral Spell Generator!");
// git push origin master => Command to push commits to the remote repo. Reminder: init with a proper name next time.
const spellName = [];
const spellPrefix = ['Astral', 'Void', 'Stellar', 'Prism', 'Cosmic', 'Ether', 'Nebula', 'Stary'];
const spellSuffix = ['Echo', 'Pulse', 'Shackle', 'of Doom', 'Bind', 'Blast'];
// Create function to join spellnames and display message.
const spellJoin = (prefix, name, suffix) => {return console.log(`You chant out one of the many magical tome's entries: ${prefix}: ${name} ${suffix}!`);}