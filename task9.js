function findVowelsInString(text){
    console.log(`Vowels: ${[... new Set(text.toLowerCase())].filter(letter => 'aeiuo'.includes(letter))}`)
    }


findVowelsInString('Umuzi');