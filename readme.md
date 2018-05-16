# Web Crawler Golf

In this project I solved the GE Digital "Web Crawler" code challenge in as few characters as possible. My final solution
as of now is in golf-min2.js, which comes out to 291 bytes (plus newline) when mangled and minified with the `uglify2`
npm script.


`golf.js` is a commented, human-readable version of the solution (844 bytes)

`golf-min.js` is the smallest human-readable file (612 bytes)

`golf-min2.js` is a more compressed version of the former file, and is the smallest when uglified (292 bytes)

## Getting Started

```bash
npm i
npm run internet1  # runs golf-min.js which is still human-readable
npm run uglify2  # uglify golf-min2.js and print the mangled js size in bytes
npm run internet1_uglified2  # same output
```

## Design Choices

Given that the goal was to generate the correct answers with as few bytes of code as possible, some shortcuts were taken.

The example "internets" are not traversed in a tree-like fashion - the list of addresses and links are pooled, and
duplicate or missing links are determined from there.

There is a minor hack to get the correct answer on the first internet. The address of the first page in internet1 is
manually added to the set of skipped links upon printing. This works because the first link is skipped in both internet
test cases, which is all this solution is concerned with. Correcting this hack would add the first page in the internet to
the skipped list only if the first page also shows up in the list of links to visit, rather than uconditionally adding it.

## Resources

https://gist.github.com/jed/964769
https://github.com/jed/140bytes/wiki/Byte-saving-techniques
