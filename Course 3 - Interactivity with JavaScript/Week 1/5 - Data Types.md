# 5 - Data Types

---

### Assignments
```js
var name = prompt("What is your name?");
var name = Date();
var name = window.location;
```

### Types
- In many programming languates, variables need to have a single type
- In JavaScript, a variable can take on many different types
- What are these types?

### Number
- Numerical values
- With or without decimals

```js
var width = window.innerWidth;
var pi = 3.14;
```

### String
- A string is a collection of characters (letters, numbers, punctuation)
- To create a string you put the value in quotes

```js
var location = window.location;
var name = "Colleen";
```

### Boolean
- In programming, a boolean value is one that is either true or false
- Later, we will learn how to write our own boolean expressions to check if things are true or false

```js
var status=false;
var windowStatus=window.closed;
```

### Object
- Sometimes the variables are more complex
    - A node in the DOM is a good example
- Nodes are more than a single value, they have attributes

```js
var topic = document.getElementById('myID');
```

### Array
- How can a function return more than one value?

```js
var links = document.getElementsByTagName('a');
```

### Accessing Array Elements
- Arrays store multiple value using a variable name, and an index for each element in the array

```js
var links = document.getElementsByTagName('a');
document.write(links[0]);
```

### Review
- Luckily in JavaScript you have a lot of flexibility with the types of data
- For now, focus on learning the types of data returned by the most common APIs