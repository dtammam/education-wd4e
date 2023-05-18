#  14 - Flow of Control

---

### Dynamic Execution
- Sometimes it is helpful to put decision points into your code
    - Add some variety to the program
    - React to good/bad user input
    - Avoid potential errors

### Flow-of-control
- Break your program into blocks
- Efficient algorithms execute only the blocks needed
- The execution of these blocks is called *flow of control*

### Decision Points
- When we wrote the for loop earlier, we set up a decision point
    - End of the array? Stop summing
    - Not? Add the next number
- There are many methods for changing the flow of control

### if
- An `if` statement evaluates a boolean expression before performing an action
    - If expression is true, execute code
    - If expression is false, skip it

    ```
    if (boolean-expression) {
        statement;
    }
    ```

### Syntax and Logic of the if statement
- `if` is a reserved word
- *boolean expression* must evaluate to either true or false
- If the *condition* is true, the statement(s) is executed.
- If it is false, the *statement* is skipped.

### Blocks
- In JavaScript, statements enclosed in curly brackets `{...}` are considered a single statement
- Indentation is not required, but it is very important for readability

### Else statement
- An `else` can be added toa n `if` statement to make an `if-else statement`:
    ```
    if (boolean)
        statement1;
    else
        statement2;
    ```

### Review
- Use `if` to specify a block of code to be executed, if a specified condition is true
- Use `else` to specify a block of code to be executed, if the same condition is false