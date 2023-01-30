# 01.02 - Cascading Style Sheets
Referencing [this style guide](https://www.markdownguide.org/basic-syntax/ "Basic syntax") for best practice note taking.
___

### Browser Default Styling
- The same html file may look different when viewed on different browsers
	- Some tags are supported, some aren't
	- An example is the \<details> tag
	- Browsers may have different *default styles*
- In general, default looks are plain

### Adding Style
- As styling tags were phased out of html, styling was done with the style attribute
	<h1 style = "color:blue">Styled Heading</h1>
- Breaks rule of separating content from style

### Cascading Style Sheet
- CSS defined generic rules that can apply to multiple elements
- Skeleton:
	selector {
		property: value;
	}
- Example:
<style>
	h1{
		color:blue;
	}
</style>

### Rule Syntax
- Brackets and semicolons are very important
- This is where a good editor can make a BIG difference
	/* This is how comments are written */

### Multiple Properties
<style>
	h2{
		color:blue;
		background-color: yellow;
}
</style>

### Internal Style Sheet
- Styling is defined within \<head>
- Rules are defined within \<style>
	<head>
		<meta charset="UTF-8">
		<title>Title here</title>
		<style>
			h1{
				color: blue;
			}
		</style>
	</head>

### External Style Sheet
- You can put rules in an external file (don't use the style tag!!)
- A link to the style sheet is put in the head section
	<link rel="stylesheet" href="style.css">
- Styles are applied to all elements in all files that link to the style sheet


### The "Cascading" part of CSS
- 1st. Browser default
- 2nd. *External* style sheets
- 3rd. *Internal* style (in the head section)
- Finally. *Inline* style (inside an HTML element)

### Rule precedence
- What if one selector is defined in two external files?
	- The rules from the most recent file have precedence
- What if one selector has more than one rule in the same file?
	h1{
		color: blue;
		font-family: Arial;
	}

	h1{
		font-family: Times;
	}
	- The most recent rule has precedence.

### !important
- It is possible to override later rules, use !important
	h1{
		color: blue;
		font-family: Arial !important;
	}

	h1{
		font-family: Times;
	}

### Review
- Why do we want/need to separate content from formatting?
- How does this also tie into external/internal style sheets?
- Understand that this is very powerful. See http://www.csszengarden.com/