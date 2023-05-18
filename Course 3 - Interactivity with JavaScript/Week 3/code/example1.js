// Prompt for user's input
var name = prompt("What is your name?")

// If the name's length is not 0...
if (name.length != 0){
    // Write "Hello, name!"
    document.write("Hello, " + name + "!");
}
// Otherwise...
else
    // Ask if they're feeling shy :)
    document.write("Feeling shy?")