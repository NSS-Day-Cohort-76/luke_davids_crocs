
const getFlips = (crocs) => {
    let flips = ''
    for (const shoe of crocs) {
        if (shoe.type === 'Flip') {
            flips += `\t${shoe.name}\n`
        }
    }
    return flips
}

const getPuffBoots = (crocs) => {
    let puffs = ''
    for (const croc of crocs) {
        if (croc.type === 'Puff Boot') {
            puffs += `\t${croc.name}\n`
        }
    }
    return puffs
}

const getCrushSandals = (crocs) => {
    let crushSandals = ''
    for (const croc of crocs) {
        if (croc.type === 'Crush Sandal') {
            crushSandals += `\t${croc.name}\n`
        }
    }
    return crushSandals
}

const getClassicClogs = (crocs) => {
    let classicClogs = ''
    for (const croc of crocs) {
        if (croc.type === 'Classic Clog')
            classicClogs += `\t${croc.name}\n`
    }
    return classicClogs
}

const getClassicBoots = (crocs) => {
    let classicBoots = ''
    for (const croc of crocs) {
        if (croc.type === 'Classic Boot')
            classicBoots += `\t${croc.name}\n`
    }
    return classicBoots
}

const getSlides = (crocs) => {
    let slides = ''
    for (const croc of crocs) {
        if (croc.type === 'Slide')
            slides += `\t${croc.name}\n`
    }
    return slides

}


module.exports = {getFlips, getPuffBoots, 
    getCrushSandals, getClassicClogs,
    getClassicBoots, getSlides
}