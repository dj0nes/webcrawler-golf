let {p} = t = require(process.argv[2]);
let addresses = p.map(e => e.address);
let links = [].concat(...(p.map(e => e.links)), addresses[0]); // cheat to add first link to skipped set unconditionally
let makeSet = arr => new Set(arr); // for efficiency of minification, otherwise not needed
let s = makeSet();
let e = makeSet();
let k = makeSet(links.map(e => t[e] ? e : t[e]=1)); // a set of all the duplicates, plus '1', which represents non-dupes
k.delete(1); // remove that '1' since printing it wouldn't be to spec
links.map(i => addresses.includes(i) ? s.add(i) : e.add(i)); // populate the 'success' and 'error' sets
console.log('success:', s, 'error:', e, 'skipped:', k);
