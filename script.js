// Function 1: Convert Text to Uppercase
function uppercase(){
    let value = document.getElementById("textbox").value
     //change to uppercase
   let newValue = value.toUpperCase()
   document.getElementById("result").innerHTML = newValue;
}

// Function 2: Convert Text to Lowercase
function lowercase(){
    let value = document.getElementById("textbox").value
     //change to lowercase
   let newValue = value.toLowerCase()
   document.getElementById("result").innerHTML = newValue;
}

// Function 3: Capitalize Each word
function capitalize(){
    let value = document.getElementById("textbox").value
    let newValue = value 
        .split(" ")
        .map((word)=> word[0].toUpperCase() + word.slice(1))
        .join(" ");
document.getElementById("result").innerHTML = newValue
}

// Function 4: Remove Extra Spaces
function removeSpaces(){
    let value = document.getElementById("textbox").value
     //change to remoce extra spaces
   let newValue = value.trim()
   document.getElementById("result").innerHTML = newValue;
}

// Function 5: Replace a Word
function replaceWord(){
    let value = document.getElementById("textbox").value
     //change to replace words
    let word1 = prompt("Enter a word you wanna replace");
    let word2 = prompt("Enter a new word");
   let newValue = value.replace(word1, word2)
   document.getElementById("result").innerHTML = newValue;
}

// Function 6: Count Characters

function countCharacters(){
    let value = document.getElementById("textbox").value
     //change to count character
   let newValue = value.length

   document.getElementById("result").innerHTML = newValue;

}