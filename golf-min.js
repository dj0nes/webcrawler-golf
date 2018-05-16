let {p} = require(process.argv[2]);
let links = [].concat(...(p.map(e => e.links))); // flattens links into single array
let addresses = p.map(e => e.address); // packs addresses into single array
let success = links.map(i => addresses.includes(i) ? i : 0);
let error = new Set(links.filter(i => !new Set(addresses).has(i)));
let temp = {};
let skipped = links.sort().reduce((duplicates, value) => {
    temp[value] ? duplicates.push(value) : temp[value] = 1; return duplicates;
}, []);
console.log('success:', new Set(success.filter((i) => i)),  'error:', error, 'skipped:', new Set(skipped).add(addresses[0]));