/**
 * 
 * It will be a practice file to
 * practice my clean code practices...
 * 
 */


/**
 * 
 * this is my first code
 */

function findLongestWordLengthh(targetFile: string): number{
    /**
     * this function will find longest word in the file
     * 
     * warning, if you use unacceptable format, it will return
     * zero which equals false
     */
    if(!targetFile ||targetFile.trim() === "") return 0

    let longestWordCount: number = 0
    const targetWords: string[] = targetFile.split(" ");
    for(const word of targetWords){
        if(word.length > longestWordCount){
            longestWordCount = word.length
        }
    }
    return longestWordCount
}

/**
 * 
 * this is the second one,
 * better for f-ck chatgpt !!
 */

function findLongestWordLength(text: string): number{
    if(!text || text.trim() == "") return 0

    const words = text.split(/\s+/)
    return Math.max(...words.map(w => w.length))
}



/***
 * these will do basic string manipulations
 * 
 * 
 */


function reverseString(text: string): string{
    return text.split("").reverse().join("")
}

// isPalindrom
function isPalindrome(text:string): boolean{
    return text === reverseString(text)
}

// how many words in a given text
function countWords(text:string): number{
    const words = text.trim().split(/\s+/)
    return words[0] === "" ? 0 : words.length
}

// make all words' first char to upperCase on given text
function capitalizeWords(text:string): string{
    return text.split(" ")
               .map(w => w.charAt(0).toUpperCase() + w.slice(1))
               .join(" ")
}

// create a new object that refers char counts from given text
function getCharFrequency(text:string): Record<string,number>{
    const freq: Record<string,number> = {}
    for(const char of text){
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
}




