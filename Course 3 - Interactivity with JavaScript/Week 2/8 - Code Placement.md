#  8 - Code Placement

---

### Where To Place the Code
- Now that you are going to start to write your own functions, it is easier to separate code from content
- JavaScript code can be placed in the body, head or in an external file

### In the head
- When JavaScript functions are declared in the head section they are separated from the content
- Use the script tag
- Have access to all of the document information (ids, classes, etc.)


### Code can be placed in the head
```html
<head>
    <script>
    function message(){
        alert("This alert box was called with the onload event");
    }
    </script>
</head>
<body>
    <h1>Functions</h1>
    <script>
        message();
    </script>
</body>
```

### In an external file
- When JavaScript functions are in a separate file it is possible to reuse the code in multiple files
- Don't use the script tag

### Code can be placed in an external file
```html
<head>
    <script src="js/two-external.js"></script>
</head>
<body>
    <h1>Functions</h1>
    <script>
        message();
    </script>
</body>
```

### Debugging Your Code
- As your code becomes more complex, make sure that you are using your debugger
- The console is your friend

### CodePen
- If you work on your code on an online editor (e.g. CodePen) the software lets you separate HTML, CSS and JavaScript without any links

### Review
- JavaScript can appear in the head or body of your code
- Code can also be placed in an external JavaScript file
- Personally, I develop in the same file and move to external after testing