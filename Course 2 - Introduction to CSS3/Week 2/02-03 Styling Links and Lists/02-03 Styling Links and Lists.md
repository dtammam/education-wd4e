# 02.03 - Styling Links and Lists
Referencing [this style guide](https://www.markdownguide.org/basic-syntax/ "Basic syntax") for best practice note taking.
___

### Anchor Links
- Links can take on all of the usual styles as well as *text-decoration*

		a {
			display: block;
			font-weight: bold;
			color: #ffffff;
			background-color: #0006CC;
			width: 200px;
			text-align: center;
			padding: 4px;
			text-decoration: none;
		}

### "Buttons"
- Many designers try to make their links look like buttons.
- Be semantic, if you want a button use the \<button> element instead.

		<button>Click me!</button>

### States
- Some links are blue, some are purple, etc. Why?
	- *a:link* is a normal, unvisited link
	- *a:visited* is a link that has been visited
	- *a:hover* is activated by hovering over a link
	- *a:focus* is activated with the keyboard (think tabbing over)
	- *a:active* is being clicked

### Precedence of Rules
- *a:hover* MUST come after *a:link* and *a:visited*
- *a:active* MUST come after *a:hover*

### Styling Lists
- Number of properties beyond font, margin, etc.
	- list-style-type
	- list-style-image
	- list-style-position
	- list-style

#### list-style-type
- list-style-type
	- ordered lists
		- lower-roman
		- upper-roman
		- decimal
		- decimal-leading-zero
		- upper-alpha
		- lower-alpha
		- hebrew
		- armenian
		- ...

#### List styles
- list-style-type
	- unordered lists
		- Override the default marker with circles, discs or squares
	- list-style-image
		- Use a custom image instead of a traditional marker	

				ul {
					list-style-image: square url('icon.gif');
				}

### Review
- At this point you have learned how to write rules for the *tags*.
- Embrace the many tools that are available to help you design your site.
- http://chrispederick.com/work/web-developer/
- http://css3generator.com/
- Do a web search for "Developer Tools"