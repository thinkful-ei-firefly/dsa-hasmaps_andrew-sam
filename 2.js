const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap(); //creates a new hashmap
    map1.set(str1,10); //sets the 'Hello World.' key to the value of 10
    map1.set(str2,20); //overwrites the 'Hello World.' key to the value of 20
    let map2 = new HashMap(); //creates a new hashmap
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);  //sets the 'Hello World.' key to the value of 20
    map2.set(str4,10); //overwrites the 'Hello World.' key to the value of 10

    console.log(map1.get(str1)); //should return 20, since that was the most recent written value to that key in map1
    console.log(map2.get(str3)); //should return 10, since that was the most recent written value to that key in map2
}

