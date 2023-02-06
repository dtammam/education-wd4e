# 01.06 - Display and Visibility
Referencing [this style guide](https://www.markdownguide.org/basic-syntax/ "Basic syntax") for best practice note taking.
___

### Display is Key to Layout
- Every element is a box
- Display affects the layout of neighboring elements

### Common Values
- inline: sits next to other elements
	- takes up "just enough" width and height

- block: forces line break
	- default: take up all horizontal width and "just enough" height
	- rules can set height and width

- inline-block:
	- same as inline, but accepts height and width

- none: removed from page

### Complimentary Properties
- float
	- Reposition elements to the right or left
	- Elements are aware of one another and will not overlap
	- Values:
		- left
		- right

- clear
	- Used to keep floating elements away
	- Values:
		- left
		- right
		- both

### Element Overflow
- What happens when you set a height/width and the content doesn't fit any longer?
- Use overflow to determine access

### Overflow
- visible
	- Can cause text to show up "on top" of other text
- hidden
	- Hides anything that goes beyond bounding box
	- This can cause problems since if the user increases font size, they may not be able to see content
- scroll
	- Gives horizontal and vertical scroll bars
- auto
	- Adds scrollbars as needed

### Other Display Values
- New display properties are available, but not always supported
	- Table
	- Grid
	- Flexbox

### display:table
- Sometimes you want to have table-like layout without ussing table structure, use display:table along with display:table-cell for elements

### Visibility
- Specifies whether or not an element is visible
- Options include:
	- visible
	- hidden
	- collapse (only for table elements)

### Review
- Display is just one tool for positioning our elements on the page
- Early design will make the coding easier
- Utilize tools to see the different options