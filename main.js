// Project: Magical Astral Spell generator.
console.log("Welcome to the Astral Tome!");

// git push origin master => Command to push commits to the remote repo. Reminder: init with a proper name next time.
const spellPrefix = ['Astral', 'Void', 'Stellar', 'Prism', 'Cosmic', 'Ether', 'Nebula', 'Stary'];
const spellSuffix = ['Echo', 'Pulse', 'Shackle', 'of Doom', 'Bind', 'Blast'];

// Create function to join spellnames and display message.
const spellJoin = (prefix, suffix) => {return console.log(`You chant out one of the many magical tome's entries: ${prefix} ${suffix}!`);}

// Create variables for random indexes.
let randSpellPrefix = spellPrefix[Math.floor(Math.random() * spellPrefix.length)]
let randSpellSuffix = spellSuffix[Math.floor(Math.random() * spellSuffix.length)]

// Utilize Random generation plus function to create message.
spellJoin(randSpellPrefix, randSpellSuffix);

// EXTRA: Create a random entry about the random spell. :D
const randYear = Math.floor(Math.random() * 2026);
const reasonFor = ['the original caster wished to bind the stars.', 'the spell was designed to pierce the heavens.', 'they simply wished for it.', 'of the extreme peril within their situation.']
const randReasonFor = reasonFor[Math.floor(Math.random() * reasonFor.length)]
const spellEntry = (prefix, suffix, year, reason) => {return console.log(`The spell ${prefix} ${suffix} originates from the year ${year} because ${reason}`);}
spellEntry(randSpellPrefix, randSpellSuffix, randYear, randReasonFor);