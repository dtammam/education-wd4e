#  18 - Simple Forms

---

### Forms 
- One place where you often see JavaScript is in form validation
- Forms add a new layer to the Request-Response cylce
- Forms are used to pass data
- Different input elements can be used (strings, numbers, files)
- Forms must have a server associated with them

### Web Development
- Front end
    - What we are developing
    - What happens on the client side
    - HTML, CSS, JavaScript
- Back end
    - What the server is handling
    - Python, Ruby, PHP, Perl, Java


### HTML Form Tags
- Three tags, `form` `label` and `input`
```html
<form>
    <!-- For each field, we create a label that is linked to it -->
    <label for='name'>Name</label>
    <input type='text' id='name' name='name'><br/>

    <!-- Another way to do it is with everything on one line -->
    <label>Email:<input type='email' name ='email'></label><br/>

    <!-- All of these three examples have different types -->
    <label for='birth'>Birth</label>
    <input type='date' id='birth' value='birth'><br/>

    <!-- We must use the 'submit' type to actually pass the data -->
    <input type='submit' value="Click here">

</form>
```

### Usage
- On Chrome, the date field is associated with a nice menu for picking a date
![Simple Form Example](images/Simple%20Form%20Example.png)
- On other browsers (like Safari) we may see little differences, like the lacking of a menu

### Form elements have attributes
- `type`
- `name`
- `id`

### Input Types
- Each of these are restrictive for what the user can put in:
    - `textfield`
    - `email`
    - `password`
    - `radiobutton`
    - `checkbox`
    - `submit`
    - `number`
    - `range`
    - `color`
    - `date`
    - `url`
- On mobile, different keyboards can be brought up based on which input type 
was coded 
![More Input Types](images/More%20Input%20Types.png)

### Attributes
- `name`
    - Almost all input types should have a name attribute
    - The name attribute is assigned whatever value is input
- `id`
    - Used for labels
    - Used for by JavaScript

- `value`
    - `button`: text inside the button
    - `textfield`: provides a default value
        - *If not changed, will be the value passed to the server*

- `placeholder`
    - Provides a suggestion
    - Not an "official" value

### Review
- HTML provided new tags for forms
- Make sure you can create a basic form before you try to add extra functions