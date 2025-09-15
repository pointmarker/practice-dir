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

function findLongestWordLength(targetFile: string): number{
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

    const words = text.split("/\s+/")
    return Math.max(...words.map(w => w.length))
}