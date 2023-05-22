#  17 - Common Errors

---

### Debugging Your JavaScript Code
- Browsers try to hide your JavaScript errors, so you need to seek them out
- Two classes of errors:
    - Syntactical
    - Logic

### Syntactic Errors
- These errors break the "rules" of JavaScript
    - Typed something wrong: getElementsByID() (It's Element...)
    - Forgot to close a curly bracket {...
    - Using an undefined variable
- Will appear in the browser console if you are on a laptop/desktop
    - Unfortunately not available on mobile

### Logical Errors
- Your code is valid, you followed all the rules, but there is something wrong with your thought process
    - In the Array Average example you didn't check for zero or you used the length of the array instead of a count
- Some "logic" errors really are typos... they are typos that run

### Issues with Comparisons...
- Don't forget
    - `5 == '5'` is true
        - `===` compares value and type
    - `if (name = "Colleen")` wants to assign a value, not check for equality
        - Need to use `==`
    - `(age > 65) && (18 > age)` will never be true
    - `(age > 65) || (age > 18)` is silly, you only need to check the second condition

### Concatenation vs Addition
- The `+` operator peforms different actions based on the type...
    - 5 + 5 -> 10
    - '5' + '5' = '55'
    - '5' + 5 = '55'
        - As soon as it sees a single string, it concatenates
- This isn't always bad! Sometimes you want to concatenate a string and a variable
    - `src = "url(" + img.src + ")"`
        - Sometimes you might want to have a variable that grabs a new thing like using the string 'url' in parenthesis and it needs to end in another string (parenthesis)

### Issues with Nesting
- Make sure that your else statements match the appropriate if
- Make sure you don't end your flow of control by misplacing semicolons `;`
    ```js
    if (age < 18); // Will literally do nothing
        alert("Too young!");
    ```

    ```js
    for (c = 0, c < 5; c++); // Will literally do nothing
        document.write(c);
    ```

### Review
- Whenever possible, use the console
- Think about your code before you write it
- Code and test, code and test. Saving often!
- Ask for help. Someone else can often see your errors more quickly.