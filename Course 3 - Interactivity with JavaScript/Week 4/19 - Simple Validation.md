#  19 - Simple Validation

---

### What to Validate
- The type of input
    - You want a number instead of a string...
- The format of the input
    - Is it a valid email address or URL?
    - Does the phone number have spaces?
- The value of the input
    - Should it be required input?
    - Do the email values match?

### How Do You Want to Validate
- Use the new HTML5 input types
    - `email`, `number`, `url`
- Use HTML5 attributes
    - `required`, `placeholder`, `min`, `max`
- Use JavaScript functions
    - Write custom code to validate

### Input Types
- The input types require that the browser validate the format of the input
- When supported, it will halt the submit process for non-valid input
- The first non-valid input is put into focus
![Example of Failed Input 1](images/Example%20of%20Failed%20Input%201.png)
![Example of Failed Input 2](images/Example%20of%20Failed%20Input%202.png)
![Example of Failed Input 3](images/Example%20of%20Failed%20Input%203.png)
- If not supported, the input type is just text

### Input Attributes
- `required`
    - Halts the submit process if any of the required elements are empty
    - Example use case is a password
    - Can cause issues when you are developing your code, so sometimes paird with the form attribute `novalidate` for initial testing
- `pattern`
    - Works with the `input type = text` and requires the input have a specific form:
        - [0-9]{5}
            - Only numbers between 0 and 9, and there have to be five of them
        - [0-9]{13-16}
            - Only numbers, and needs to be thirteen to sixteen of them
            - Usecase is credit cards
        - [a-zA-Z]+
            - Lowercase a-z, uppercase a-z and there must be at least one character
    - Best if used with placefolder and supporting text
    - http://html5pattern.com is a good resource
    - Get comfortable using patterns, not necessary to get comfortable designing them right now

### Limiting number
- `min`, `max` and `step` can place limit on number inputs
- The `range` attribute also has a `max` and `min`, just a different look

### Pattern vs Max/Min
- What if you want a zip code?
- What do you want to check?
    - That the input is five digits
- How do you want to check it?
    - Use input = number + min and max
    - Use input = text + pattern
    - Reference [JS - Patterns.html](code/JS%20-%20Patterns.html)
- Issue with `min` and `max` is that the `min` might not be five digits

### Validation with JavaScript
- There isn't always a guarantee that the browser will support the input type or pattern attribute
- It is possible to add extra validation using the Events and custom JavaScript functions

### Email comparison
![Email Comparison 1](images/Email%20Comparison%201.png)

### Validating Input
- What?
    - Compare that two emails are the same
- How?
    - HTML: email `input` type and `required` attribute
    - JavaScript: ensure values are the same
- When?
    - As soon as the second email is entered

### Validating at Input Time
- Which event?
    - `oninput` and `onchange` are both options
- What should we compare?
    - Is it the inputs, or some attribute of the inputs?
- What is the output?
    - How do we communicate the result of the comparison
    ![Email Comparison 2](images/Email%20Comparison%202.png)

### Initial Code
- Reference [JS - Validate Email Matches (general).html](code/JS%20-%20Validate%20Email%20Matches%20(general).html)
- Pops up an alert when they don't match

### Hmm...
- We check, but it doesn't have "teeth"
- How can we stop the form submission?
- Reference [JS - Validate Email Matches (with Return).html](code/JS%20-%20Validate%20Email%20Matches%20(with%20Return).html)
- Our new code will now return `false` from the function, and when the input type `submit` sees a false, it'll know that it can't continue
- Pops up an alert when they don't match and also pops up an alert if the submit button is pressed with a `false` return

### "return"
- Functions can return values (Numbers, Strings, Booleans, Objects, Arrays...)
- We can use a boolean return value to halt an action

### Review
- You want to be careful of what you are comparing and when
- JavaScript is still a great tool for verifying the input
- Make sure you can create a basic form before you try to add interactivity