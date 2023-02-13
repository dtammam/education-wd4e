#  02-05 - Browser Capabilities

---

### Browsers Differ
- Even though browsers are moving to a consistent implementation of HTML, they differ in display and adherence.
- It is your responsibility to make sure your page works for a large audience.

### Handling Stylistic Differences
- "Easiest" way to eliminate browser difference is to use a default style sheet
- Default style sheets reset all of the values for the page
- Will make your page look worse!

### Handling Unsupported Properties
- Not all browsers support all HTML5 tags
- Not all browsers support all CSS3 properties
- Browser prefixes (or vendor prefixes) provide a quick fix for handling unsupported CSS3 options.

### Browser Prefixes
- -webkit-: Android, Chrome, iOS, Safari
- -moz-: Firefox
- -ms-: Internet Explorer
- -o-: Opera

### Often Unsupported Properties
- column-count
- border-radius
- gradient
- Sites such as http://caniuse.com/ will tell you when you need to use prefixes

### Automated Ways to include Prefixes
- For now, manually add them by hand
- There are ways to automate the addition of prefixes
	- Editor add-ons (You have most of the control)
	- Use outside programs to dynamically add appropriate prefixes bsed on browser

### Review
- Default style sheets remove stylistic differences
	- Should default style sheet be internal or external?
	- Where should it go in relation to other style sheets?
- Browser prefixes can help remove some differences caused by unsupported options
	- Shouldn't be overused