#  3 - Output

---

### Interactivity
- HTML5 and CSS3 are not really interactive
- New elements and pseudo-classes can only go so far

### What can JavaScript do?
- Read and write HTML elements
- Reacts to events (mouse events, keyboard events, etc.)
- Validate data
- Detect the visitor's browser
- Create cookies

### JavaScript Output
- JavaScript doesn't have a built-in print function
- Data is displayed via:
    - an alert box using `window.alert()`
    - a prompt using `window.prompt()`
    - HTML output using `document.write()`
    - HTML element using `innerHTML()`
    - The browser console using `console.log()`

### alert()
- In JavaScript, an alert is a pop-up window that displays information
        
        alert("My Message Here");

### prompt()
- Very similar to alert, but wants input

        prompt("Enter your name: ");

### document.write()
- What if we want something permanent?
- `document.write()` writes directly to the page
- Not usually recommended since it can easily be misused

        document.write("Time to learn JavaScript ");

### innerHtml()
- To change the contents of the DOM, use innerHTML combined with the element you want to change
- The element will come from the API

        element.innerHTML = "Time to learn JavaScript ";

### console.log()
- This option write the data to the browser console
- The console is a place to see what is going on during the execution of your program

        console.log("Leave a secret mesage");

### The console
- You should be utilizing the console by now
- Does more than take "print" statements, also provides debugging information for JavaScript, HTML and CSS

### Debugging
- F12 for DevTools

### Review
- Right now, we are doing simple things with output
- As you learn more, the power grows