#  03-01 Pseudo Classes and Elements

---

### Pseudo-Classes
-Elements that are dynamically populated or dependent on tree structure
- You have seen this before...

		a:hover{ }

### Types of Pseudo-Classes
- Link
	- :link
	- :visited
- User Action
	- :hover
	- :active
	- :focus
- Forms (interfaces)
	- :enabled
	- :checked
	- :disabled

### More Types of Pseudo-Classes
- Structural/Positional
	- :first-child
	- :last-child
	- :nth-child()
	- :only-child
	- :first-of-type
	- :last-of-type
	- :only-of-type

			li:first-child{ }
			li:nth-child(4){ }
			p:empty{ }
			img:only-of-type{ }
			p:last-of-type{ }

### Types of Pseudo-Elements
- Textual
	- :first-letter
	- :first-line
- Positional/Generated
	- :before
	- :after
- Fragments
	- ::selection

### Review
- Pseudo-elements and classes are just one more way to add style to your page
- I haven't covered every combination so make sure to do some investigation on your own