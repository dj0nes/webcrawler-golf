# Web Crawler Golf

In this project I solved the GE Digital "Web Crawler" code challenge in as few characters as possible. My final solution 
is golf-min3.js, which comes out to 258 bytes (plus newline) when mangled and minified with the `uglify3`
npm script.

`golf.js` was my first attempt at a terse solution. `golf-min.js` and `golf-min2.js` were iterations on the way to my 
final solution 

`golf-min3.js` is both human-readable (and has comments!) and is the source for the smallest uglified file, 
`golf-ugly3.js`

I'm sure further work can be done to reduce the generated file size, but I'm out of ideas and time. I want to keep node 
as the execution environment, the "internet" file as a command-line argument, and to leave the input datasets alone 
other than changing the top-level property name. At this point, more bytes are spent loading data and printing results 
than doing the actual processing. 

## Getting Started

```bash
npm install
npm run internet1_v3         # run the human-readable code
npm run uglify3              # uglify golf-min3.js and print the mangled js size in bytes
npm run internet1_uglified3  # run the uglified code
```

## Design Choices

Given that the goal was to generate the correct answers with as few bytes of code as possible, some shortcuts were 
taken.

The example "internets" are not traversed in a tree-like fashion - the list of addresses and links are pooled, and
valid, skipped, and missing links are determined from there.

There is a minor hack to get the correct answer on the first internet. The address of the first page in internet1 is
manually added to the list of links before processing, which results in that page being duplicated in the pooled list 
of links. This works because the first link a destination address in both internet test cases, which is all this 
solution is concerned with. Correcting this hack would add the first page in the internet to the skipped list only if 
the first page also shows up in the list of links to visit, rather than uconditionally adding it.

The internet object imported in the first line is assigned to the variable t as a placeholder hashmap for detecting 
duplicates. In that role, the contents of it are irrelevant as long as they don't conflict with values that will be 
inserted later.

## Resources

https://gist.github.com/jed/964769

https://github.com/jed/140bytes/wiki/Byte-saving-techniques

https://codegolf.stackexchange.com/questions/136713/find-the-first-duplicated-element/137192

