#  7 - Functions

---

### Functions
- Functions are bits of codes that you can reuse
- Functions have a special syntax

```js
function functionName(parameters) {
    code you want to run
}
```

### Function Declaration
```js
function welcomeMsg() {
    alert("Welcome to JavaScript!");
}

function welcomeMsg(msg) {
    alert(msg);
}
```

### Function Call
- Declaring a function doesn't actually do anything
- You need to *call* a function
- Calling a function changes the program flow

```js
function welcomeMsg(msg) {
    alert(msg);
}

var x = "Hello";
welcomeMsg(x);
x = "Goodbye";
welcomeMsg(x);
```

### Parameters
- Sometimes functions need some information in order to perform its' "function"
- The name of the parameters are not important, as long as you are consistent

### Return Values
- Some functions return values
- These values can be used in assignment statements or conditional expressions

```js
function welcomeMsg(msg) {
    alert(msg);
    var name = prompt("What is your name?");
    return name;
}

var firstName = welcomeMsg("Hi");
```

### Review
- Whenever possible, use built-in functions
- When you need to write your own function, don't be too specific
- Function parameters can have any name