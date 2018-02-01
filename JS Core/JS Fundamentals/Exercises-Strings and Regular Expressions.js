// 1.	Split a String with a Delimiter
// Write a JS function that splits a string with a given delimiter.
// The input comes as 2 string arguments. The first one is the string you need to split and the second one is the delimiter.
// The output should consist of all elements you’ve received, after you’ve split the given string by the given delimiter. Each element should be printed on a new line.

function splitAstringWithAdelimiter(string,delimeter){

    string.split(`${delimeter}`).forEach(element => {
        console.log(element)
    });
}

// 2.	 Repeat a String N Times
// Write a JS function that repeats a given string, N times.
// The input comes as 2 arguments. The first argument is a string that will represent the one you need to repeat. The second one is a number will represent the times you need to repeat it.
// The output is a big string, containing the given one, repeated N times.

function repeatAstringNtimes(string,numberOfReps){

    console.log(string.repeat(numberOfReps))
}

// 3.	Check if String starts with a given Substring.
// Write a JS function that checks if a given string, starts with a given substring.
// The input comes as 2 string arguments. The first string will represent the main one. The second one will represent the substring.
// The output is either “true” or “false” based on the result of the check.
// The comparison is case-sensitive!

function checkIfStringStartsWithAgivenSubstring(text, textOfCheck){
    console.log(text.startsWith(textOfCheck))
}

// 4.	Check if String ends with given Substring.
// Write a JS function that checks if a given string, ends with a given substring.
// The input comes as 2 string arguments. The first string will represent the main one. The second one will represent the substring.
// The output is either “true” or “false” based on the result of the check.
// The comparison is case-sensitive!

function checkIfStringEndsWithGivenSubstring(text, textOfCheck){
    console.log(text.endsWith(textOfCheck))
}

// 5.	*Capitalize the Words
// Write a JS function that capitalizes the given words. You need to make every word’s first letter – uppercase and all other letters – lowercase. 
// The input comes as a single string, containing words, separated by a space.
// The output is the same string, however with all of its words capitalized.
// Note: The words can contain any ASCII character. You need to affect only the letters.

function capitalizeTheWords(text){
    let result = ""
    text.split(' ').forEach(element => {
        result += capitalizeFirstLetter(element.toLowerCase()) + " "
    })

    console.log(result)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// 6.	Capture the Numbers
// Write a JS function that finds all numbers in a sequence of strings.
// The input comes as array of strings. Each element represents one of the strings.
// The output is all the numbers, extracted and printed on a single line – each separated by a single space.

function captureTheNumbers(input){
    console.log(input.join('').match(/\d+/g).join(' '));
}

// 7.	Find Variable Names in Sentences
// Write a JS function that finds all variable names in a given string. A variable name starts with an underscore (“_”) and contains only Capital and Non-Capital English Alphabet letters and digits. Extract only their names, without the underscore. Try to do this only with regular expressions.
// The input comes as single string, on which you have to perform the matching.
// The output consists of all variable names, extracted and printed on a single line, each separated by a comma.

function findVariableNamesInSentences(input){
    let regEx = /\b_([A-Za-z0-9]+)\b/g;

    let empty = [];
    let match;

    while ( match = regEx.exec(input)) {
        empty.push(match[1]); // вземаме първия член защото така работи match
    }
    console.log(empty.join(','))
}

// 8.	Find Occurrences of Word in Sentence
// Write a JS function that finds, how many times a given word, is used in a given sentence. Note that letter case does not matter – it is case-insensitive. 
// The input comes as 2 string arguments. The first one will be the sentence, and the second one – the word.
// The output is a single number indicating the amount of times the sentence contains the word.

function findOccurrencesOfWordInSentence(text,word){    
    let regex = text.match(new RegExp(`\\b${word}\\b`, `gi`))
    console.log(regex ? regex.length : 0)
}

// 9.	*Extract the Links
// Write a JS function that extracts links from a given text. The text will come in the form of strings, each representing a sentence. You need to extract only the valid links from it. Example:
// “www.internet.com”
// 				Sub-Domain									Domain name										Domain extension
// The Sub-Domain must always be “www”. The Domain name can consist of English alphabet letters (uppercase and lowercase), digits and dashes (“–“). The Domain extension consists of one or more domain blocks, a domain block consists of a dot followed by one or more lowercase English alphabet letters, a Domain extension must have at least one domain block in order to be valid. The Sub-Domain and Domain name must be separated by a single dot. Any link that does NOT follow the specified above rules should be treated as invalid.
// Example incorrect links:  
// •	"ww.justASite.bg"
// •	"lel.awesome.com"
// •	"www.stamat_gosho.hit.bg"
// •	"www.no-symb#^ols-allow%ed.com"
// •	"www.pesho.12"
// •	"www.gosho-site."
// •	"www.example-site._*^#"
// Example correct links:  
// •	"Some textwww.softuni.bg"
// •	"Just a link in a www.sea-of-text.bg-swimming around"
// •	"Instruments www.Instruments.rom.com.trombone2000 Instrument here"
// •	"All your ice cream flavors-www.scream.for.ice.cream(We  also have squirrels)"
// The input comes as array of strings. Each element represents a sentence.
// The output is all valid links you’ve found, printed – each on a new line.

function extractTheLinks(input){
    const regex = /www\.[A-Za-z0-9.-]+\.[a-z]+/g;
    input.forEach(str => {
        let m;
        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match) => {
                console.log(match);
            });
        }
    })
}

// 10.	**Secret Data
// Write a JS function that hides essential client data from secret documents that went public. You have to hide people’s names, phone numbers, ids and secret base names. 
// •	The names of the clients will be preceded by a single asterisk (“*”), they will always be exactly one word, they will contain only English alphabet letters, they will start with a capital letter and they will always be followed by either a space, a tabulation or the end of the string. Anything else is NOT to be considered as a name.
// •	The phone numbers of the clients will be preceded by a single plus sign (“+”) and will consist of exactly 10 symbols. The phone numbers can consist only of digits and dashes and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as a phone number.
// •	The IDs of the clients will be preceded by a single exclamation mark (“!”). The IDs of the clients will consist only of Lowercase and Uppercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as an ID.
// •	The names of the secret bases will be preceded by a single underscore (“_”) and will consist only of Uppercase and Lowercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the string. Anything else is NOT to be considered as a secret base name.
// Constraints
// •	Usernames, phone numbers, IDs and names of secret bases can start glued to other text.
// •	Usernames, phone numbers, IDs and names of secret bases will never be split given across 2 lines.
// •	Usernames, phone numbers, IDs and names of secret bases will always have a space, tabulation or the end of the string after them.
// The input comes as an array of strings. Each string represents a sentence of the secret document. You need to find every client data element that is supposed to be secret, and hide it, by replacing it with a string of vertical bars (“|”) with the same length, as the discovered element. 
// NOTE: The preceding symbol counts towards the discovered element’s length when deciding how many pipes to use to cover it.
// The output should be the same document, with the sensitive client data replaced by pipes.  See the example for more info.

function secretData(input) {
    let f = input.forEach
    (l => console.log(l.replace
    (/(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
        (m) => '|'.repeat(m.length))));
}

secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796...',
    'I can\'t really remember...',
    'He said something about "finishing work with subject !2491a23BVB34Q and returning to Base _Aurora21".',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']); 