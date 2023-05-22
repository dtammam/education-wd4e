#  16 - Advanced Conditionals

---

### Complex Boolean Situations
- Decision points aren't always simple
    - What if you need to check for two conditions?
    - What if one condition depends upon the value of another?

### Nested If Statements
- It is possible to "nest" statements
    - Put one statement inside another - different from part of the same block

    ```
    if (boolean-expression) {
        statements;
        if (new-boolean) {
            statements to execute if both true;
        }
    }
    ```

### Please, please, please...
- Careful planning is key to making sure you get the desired result

### What about else statements?
- An else statement always matches the most recent open `if` statement
- Indentation has nothing to do with it

### Example Code
```js
// Prompt for user's input
var name = prompt("What is your name?")

// If the name's length is not 0...
if (name.length != 0){
    // Nested if to see if the 
    if (name == "Dean") {
        document.write ("What a beautiful name, " + name + "!");
    }
    // Write "Hello, name!"
    else {    
        document.write("Hello, " + name + "!");
    }
}
// Otherwise...
else
    // Ask if they're feeling shy :)
    document.write("Feeling shy?");
```

### Review
- It is possible to create complex flow-of-control in a program
- Understanding this code is crucial, writing it yourself... not so much