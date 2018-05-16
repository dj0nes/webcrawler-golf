const data = require('./data.json');
data.forEach(crawl);

function crawl(internet) {
    const visited = new Set(),
        skipped = new Set(),
        error = new Set();
    const firstPage = internet.pages[0].address;
    visit(firstPage);
    function visit(address) {
        if (visited.has(address)) {
            skipped.add(address);
            return;
        }
        const page = internet.pages.find(p => p.address === address);
        if (!page) {
            error.add(address);
            return;
        }

        visited.add(address);
        page.links.forEach(visit);
    }

    console.log('Visited', visited, '\nSkipped', skipped, '\nError', error, '\n');
}