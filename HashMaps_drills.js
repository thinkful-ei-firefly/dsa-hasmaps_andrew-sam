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
    
    function removeDuplicateChars(s) {
        const map = new hashmap
        let exit = []
        for (let i = 0; i < s.length; i++) {
            try {
                map.get(s[i])
            }
            catch{
                map.set(s[i], true)
                exit.push(s[i])
            }
        }
        exit = exit.join('')
        console.log(exit)
    
    }
    
    removeDuplicateChars('hello')
    removeDuplicateChars('google')
    removeDuplicateChars("google all that you think can think of")

}

function main5() {
  function palindromeChecker(string) {
    let map = new hashmap;
    let unpairedLetters = 0;
    for (let i=0; i< string.length; i++) {
      let value
      try {
        value = map.get(string[i])
        if (value) {
          unpairedLetters--
          map.set(string[i], !value)
        } else {
          unpairedLetters++
          map.set(string[i], !value)
        }
      }
      catch {
        unpairedLetters++
        map.set(string[i], true)
      }
    }
    if (string.length % 2 === 0 && unpairedLetters === 0) return true
    if (string.length % 2 !== 0 && unpairedLetters === 1) return true
    return false
  }
  console.log(palindromeChecker('acecarr'))
}

function main6() {
  function anagramGrouper(arr) {
    let map = new hashmap
    let exit = []
    for (let i=0; i<arr.length; i++) {
      let sorted = arr[i].split('').sort().join('');
      try {
        let value = map.get(sorted)
        exit[value].push(arr[i])
      }
      catch {
        map.set(sorted, exit.length)
        exit.push([arr[i]])
      }
    }
    return exit
  }
  console.log(anagramGrouper(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
}

main6()