let {p} = t = require(process.argv[2]);
let makeSet = arr => new Set(arr);
let links = [].concat(...(p.map(e => e.links)));
let addresses = p.map(e => e.address);
console.log(
    'success:', makeSet(links.map(i => addresses.includes(i) ? i : 0).filter((i) => i)),
    'error:', makeSet(links.filter(i => !makeSet(addresses).has(i))),
    'skipped:', makeSet(links.sort().reduce((duplicates, value) => { t[value] ? duplicates.push(value) : t[value] = 1; return duplicates; }, [])).add(addresses[0]));