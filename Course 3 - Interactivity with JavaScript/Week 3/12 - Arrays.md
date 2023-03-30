#  12 - Arrays

---

### Storing lots of data at once
- The variables I have used to this point store a single piece of information
    - Number
    - String
    - Boolean
    - Object

- What do you do if you want to use multiple, *related* pieces of information?
- Store them in arrays

### Declaring An Array
- Declaring an array

```js
var grades = [80, 87, 94, 82, 62, 81, 81, 74, 91];
var foods = ['bananas', 'apples', 'pizza'];
var images = document.getElementsByClassName['imgs'];
var listitems = document.getElementsByTagName['li'];
```

### Arrays
- An array is a collection of values
- Give it a name, and then assign as many values as you'd like
- Items inside are called 'elements'
- Each element has a numeric index

### Accessing An Array
- Each value is called an element
- Elements are referenced by index[0]

### Arrays
- The elements in the array DON'T have to be all of the same type

```js
var info = ["Colleen", 1715, "Walnut", 44004];
```

### JavaScript Arrays are Objects
- They have attributes and methods
- grades.length
- grades.sort()
- grades.push(element)
    - grades[grades.length] = element

### Review
- Learning to declare and manipulate arrays will make your code more powerful
- We can now play with new API methods:
    - getElementsByTagName('t');
    - getElementsByClassName('c');