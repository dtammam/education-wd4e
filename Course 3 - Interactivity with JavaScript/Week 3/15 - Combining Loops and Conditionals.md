#  15 - Combining Loops and Conditionals

---

### Complex Boolean Situations
- Can you?
    - Identify *where* you need decision points?
    - Update existing code to give the best answer?

### Example Code
```js
// Array with null values (undefined)
var grades= [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;

// Check to see the length of the array
if (grades.length > 0){
    for (index = 0; index < grades.length; index++){
        // I only want to do this if it's a real number
        if (grades[index] != undefined) {
            sum += grades[index]; 
            count += 1;
        }
    }
    // Divide by the count of the 'good' values
    document.write(sum/count);
}

else
    document.write("Empty Array");
```