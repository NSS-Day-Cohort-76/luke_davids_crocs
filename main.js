
const {getFlips, getPuffBoots, getCrushSandals, getClassicClogs, getSlides, getClassicBoots,} = require("./functions.js")
const {crocCollection} = require("./data.js")

console.log('ALL CROCS:')
console.log('---------------------------------')

//Display croc Details
for (const croc of crocCollection) {
    console.log(`${croc.color} ${croc.type} ${croc.type}`)
}

console.log('')

console.log('STYLES:')
console.log('---------------------------------')

console.log('FLIP CROCS:')
console.log(getFlips(crocCollection))

console.log('PUFF BOOTS:')
console.log(getPuffBoots(crocCollection))

console.log("CRUSH SANDALS:")
console.log(getCrushSandals(crocCollection))

console.log("CLASSIC CLOGS")
console.log(getClassicClogs(crocCollection))

console.log("CLASSIC BOOTS")
console.log(getClassicBoots(crocCollection))

console.log("SLIDES:")
console.log(getSlides(crocCollection))
