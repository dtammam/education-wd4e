#  4 - Variables

---

### Storing Data
- Part of learning to program is learning to store data
- In JavaScript, data is stored in variables
- To use a variable, you have to declare it
```js
var name;
```
keyword, variable name

### Variable Names
- Consists of letters, digits, underscores and dollar signs ($)
- Cannot start with a digit
- Are case-sensitive. All of these are different:
    - name
    - Name
    - naMe
    - NAME
- Should be mnemonic (meaningful)

### Variable Assignments
- It is silly to have a variable if you are never going to use it
- You can assign values using the `=` operator

```js
var name ="Colleen";
```

### Assignment Statements
- I like to refer to the LHS and RHS of statements
- LHS - the variable being updated
- RHS - the new value that will be stored in the variable

### Example

```js
var name - prompt("What is your name?");
document.write(name);
var date = Date();
document.write(date);
var location = window.location;
document.write(location);
```

### Review
- Variables are a key component of creating interactive programs
- We will be using them in the remaining lectures so practice them and feel comfortable