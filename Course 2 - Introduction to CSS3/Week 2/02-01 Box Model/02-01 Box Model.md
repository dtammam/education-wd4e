# 02.01 - Box Model
Referencing [this style guide](https://www.markdownguide.org/basic-syntax/ "Basic syntax") for best practice note taking.
___

## Height and Width
- The default width of inline elements is the content
- Elements that are not inline can take width and height properties - we saw this in the 'Display' lecture.

### Border
- Any element can have a border around it
- border property specifies *style*, *width* and *color*
- The border style MUST be specified

		div{
			border: solid 1px #CC00AA;
		}

### Border-style
- none
- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset
- hidden

## Border width and color
- Width
	- Set in pixels or *thin*, *medium* or *large*
- Color
	- Name - "blue"
	- RGB - rgb(0,0,255)
	- hex - #0000FF
	- transparent

### Specifying Individual Sides
		// All sides
		border-width: 3px;

		// Two sides, left/right
		border-width: 3px 10px;

		// Three sides, left/right/bottom
		border-width: 3px 10px 20px; 

		// Four sides, left/right/bottom/top
		border-width: 3px 10px 20px 1px;

### Margin
- Margin is additional space *outside* your border - between you and your neighbor
- Positive margin
	- element moves right/down
- Negative margin
	- element moves left/upward

### Padding
- Padding is additional space *between* the element and its borders
- Positive padding
	- border moves outward from element

### Margin and Padding
- Neither takes a color (transparent)
- Can also be defined in 1-4 values like border

### Additive Height and Width
- margin + border + padding + width = actual width

### What is the width and height?

		div{
			width:100px;
			height: 50px;
			padding: 10px;
			margin: 5px;
			border: 1px solid black;
		}

		// width = 132px
		// height = 82px

### Centering an Element
- To horizontically center an element use:
	- margin: 0 auto;
- But...
	- The element must display: block
	- The element must not float
	- *The element must not have a fixed or absolute position*
	- The element must have a width that is not auto

### box-sizing
- box-sizing takes some of the "math" out
- Options:
	- content-box: default additive
	- border-box: width takes content, padding, and border into consideration

### Measurements
- Absolute - set to a specific size
	- px, mm, cm, pt, ...
- Fluid - sets size relative to surrounding elements
	- %, vw, vh
	- em (for font): lem is current size, .75 is 75% of the current size
	- rem (for font): lrem is current size of root element

### Review
- Design sketches should be done with box model (margin, border, padding, content) in mind
- Use box-model to reduce complexity
- Margin must always be considered