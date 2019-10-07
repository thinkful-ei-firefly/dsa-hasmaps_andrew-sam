const hashmap = require('./HashMap')

function main1() {

    const lor = new hashmap
    lor.MAX_LOAD_RATIO = 0.5
    lor.SIZE_RATIO = 3


    chars = [{ "Hobbit": "Bilbo" }, { "Hobbit": "Frodo" },
    { "Wizard": "Gandolf" }, { "Human": "Aragon" }, { "Elf": "Legolas" }, { "Maiar": "The Necromancer" },
    { "Maiar": "Sauron" }, { "RingBearer": "Gollum" }, { "LadyOfLight": "Galadriel" }, { "HalfElven": "Arwen" },
    { "Ent": "Treebeard" }]

    for (let i=0; i<chars.length; i++){
        let thisKey = Object.keys(chars[i])[0]
        let thisValue = chars[i][thisKey]
        lor.set(thisKey, thisValue)
    }

    console.log(lor._hashTable)
    console.log(lor.get("Maiar"))
    console.log(lor.get("Hobbit"))

    //"Maiar" is getting overwritten when we fun lor.set("Maiar", "Sauron"). The same is happening for the "Hobbit" key. We are overwriting their values because we are using the same key.

    //Capacity is 24, since the HashTable now has 24 slots, with 9 being filled.

}

