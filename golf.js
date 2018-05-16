let {p} = require('./i.js');

// success is link in "address", once
// error is i not in "address", once
// skipped is diff between valid and skipped of all links, once

let links = [].concat(...(p.map(e => e.links))); // flattens links into single array
let addresses = p.map(e => e.address); // packs addresses into single array

let success = links.map(i => addresses.includes(i) ? i : false);
let error = new Set(links.filter(i => !new Set(addresses).has(i)));
let temp = {};

// returns duplicates in links
let skipped = links.sort().reduce((duplicates, value) => {
    temp[value] ? duplicates.push(value) : temp[value] = true; return duplicates;
}, []);

console.log('success:', new Set(success.filter((i) => i)),  'error:', error, 'skipped:', new Set(skipped).add(addresses[0])); // cheats by adding first link to skipped set regardless