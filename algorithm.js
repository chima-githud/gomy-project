// Initialize counters
let length = 0;
let word_count = 0;
let vowel_count = 0;
let in_word = False;
let vowels = "aeiouAEIOU"

// Read the sentence
let sentence = prompt("Enter a sentence ending with a point: ");

// Process character by character
for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    length++;
    // Count vowels
    if (vowels.includes(ch)); {
        vowel_count++;
    }
    // Count words
    if (ch !== ' ' && ch !== '.') {
        if (!in_word) {
            word_count++
            in_word = true;
        } 
    } else {
        in_word = false
    }
    // Stop at the point
    if (ch === '.') {
        break;
    }
}
// Output the results
print("Length of sentence:", length)
print("Number of words:", word_count)
print("Number of vowels:", vowel_count)