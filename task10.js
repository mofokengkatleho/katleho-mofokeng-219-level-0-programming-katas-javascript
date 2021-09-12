function commonCharacters(textA, textB){
   console.log(`Common Characters: ${[... textA.toLowerCase()]
    .filter(characterA => textB.toLowerCase().includes(characterA))}`)
    

}

commonCharacters('house','computers');