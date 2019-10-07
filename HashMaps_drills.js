const hashmap = require('./HashMap')

function main1() {

    const lor = new hashmap
    lor.MAX_LOAD_RATIO = 0.5
    lor.SIZE_RATIO = 3


    chars = [{ "Hobbit": "Bilbo" }, { "Hobbit": "Frodo" },
    { "Wizard": "Gandolf" }, { "Human": "Aragon" }, { "Elf": "Legolas" }, { "Maiar": "The Necromancer" },
    { "Maiar": "Sauron" }, { "RingBearer": "Gollum" }, { "LadyOfLight": "Galadriel" }, { "HalfElven": "Arwen" },
    { "Ent": "Treebeard" }]

    for (let i = 0; i < chars.length; i++) {
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
function main4() {
    //Both Andrew and Sam made our own functions for this on how we would code it. Both are shown and executed
    function removeDuplicateChars_andrew(s) {
        let arr = s.split('')
        for (let i = 0; i < arr.length; i++) {
            let thisValue = arr[i]
            for (let j = i + 1; j < arr.length; j++) {
                let checkValue = arr[j]
                if (thisValue === checkValue) {
                    arr[j] = ""
                }
                else { }
            }
        }
        let exit = arr.join("")
        console.log(exit)

    }

    function removeDuplicateChars_sam(string) {
      let output = ''
      for (let i=0; i<string.length; i++) {
        if (!output.includes(string[i])) output = output+string[i]
      }
      return output
    }

    removeDuplicateChars_andrew('hello')
    removeDuplicateChars_andrew('google')
    removeDuplicateChars_andrew("google all that you think can think of")

    console.log(removeDuplicateChars_sam('hello'))
    console.log(removeDuplicateChars_sam('google'))
    console.log(removeDuplicateChars_sam("google all that you think can think of"))

}

function main5() {
  function palindromeChecker(string) {
    let map = new hashmap;
    let unpairedLetters = 0;
    for (let i=0; i< string.length; i++) {
      let value = map.get(string[i])
      if (value) {
        unpairedLetters--
        map.set(string[i], !value)
      }
      map.set(string[i], true)
      unpairedLetters++
    }
    if (string.length % 2 === 0 && unpairedLetters === 0) return true
    if (string.length % 2 !== 0 && unpairedLetters === 1) return true
  }
  palindromeChecker('abc')
}

main5()