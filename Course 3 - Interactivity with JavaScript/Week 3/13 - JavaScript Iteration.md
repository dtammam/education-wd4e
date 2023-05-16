#  13 - JavaScript Iteration

---

### Faster accessing of Arrays
- The upside of arrays it that hey can store a lot of data
- The downside of arrays is that they can store a lot of data
- What do you do if you want to access all of it?

### Iteration / Looping
- The best way to access all the data in an array is with iteration, also called "looping"
- When you loop through an array you look at each element, usually starting at 0 and ending at the last element

### Finding the average

```
80 87 94 82 62 98 81 81 74 91
0  1  2  3  4  5  6  7  8  9
```
- What would you do it you wanted to find the average of all the grades?
- Sum up all of the elements and then divide by the number of elements

### for loop
- We will use a for loop
- The syntax is:

```js
for (j = 0; j < array.length; j++) {
    // The steps in here are repeated
}
```

### Breaking Down the for Loop
- Initializer, boolean condition to either be true/false, and some increment variable
- Start with the keyword `for`
1. Set a variable to the initial value
- (usually `index = 0`, `counter = 0` or `i = 0`)
2. Run a boolean test case (`true`/`false`)
3. Run the code
4. Update your variable, then go back to 2.

### Example
```js
for (index = 0; index < array.length; index++) {
    document.write(array[index])
}
```
- If the array has 10 elements, the for loop will run 10 times and stop as soon as `index = 10`

### Finding the average

```
80 87 94 82 62 98 81 81 74 91
0  1  2  3  4  5  6  7  8  9
```

```js
var sum = 0;
for (index = 0; index < grades.length; index++) {
    sum += grades[index];
}
document.write(sum/grades.length);
```

### Loop breakdown
- Why use grades.length instead of "10"? It's because we want to maintain flexibility
- What happens if you subtracted 1 instead of adding? an infinite loop!
- What would happen if you used <= instead of <? JavaScript will crash

### Review
- Looping is used for much more than arrays!
- You can loop from low number to high number, high number to low number, or even just a subset
- Practice, practice, practice