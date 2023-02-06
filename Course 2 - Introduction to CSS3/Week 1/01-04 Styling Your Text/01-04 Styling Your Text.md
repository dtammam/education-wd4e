# 01.04 - Styling Your Text
Referencing [this style guide](https://www.markdownguide.org/basic-syntax/ "Basic syntax") for best practice note taking.
___

### Options
- Many options for styling your text:
	- Font (family, style, variant, size)
	- Color and background
	- Alignment
	- Line-height

### font-family
- Font families are styles of text
- Examples:
	- Helvetica
	- Courier
	- "Courier New"
	- "Comic Sans MS"
	- Cursive
	- Verdana

		h1{
			font-family: Arial;
		}

- Not all font-families supported by all of the operating systems, so you can provide alternatives. Goes in order from left to right.

		h1{
			font-family: Courier, Impact, Arial;
		}

### font-family Considerations
- Some fonts are not as user-friendly, use 

### Custom fonts
- To expand beyond "web-safe" fonts use @font-face

		@font-face{
			font-family: mySpecialFont;
			src: url('Colleen.ttf');
		}

		h1{
			font-family: mySpecialFont;
		}

### font-style
- Font-style
	- normal
	- italic
	- oblique

### font-variant
- font-variant
	- normal
	- small-caps

			h1{
				font-variant: small-caps;
			}

			<h1>Small caps variation</h1>

### font-size
- This is only the beginning of our discussion on sizes...
- Options:
	- xx-small, x-small, small, smaller
	- medium
	- larger, x-large, xx-large, larger
	- Use pixel

### color and background-color
- The color attribute is the color of the foreground
- The background-color is the color of the background

		h1, span{
			color:#0000FF;	/* Blue */
			background-color: #B3B3B3;	/* Grey */
		}

### text-align
- Aligning text is simple!
- text-align
	- left
	- right
	- center
	- justify

### line-height
- As you can guess, doesn't affect cont
- Adjusts the space between the lines of text

		h1{
			line-height: 50%;
		}
		
		h1{
			line-height: 200%;
		}

### Review
- The number of options for styling text can seem overwhelming
- Practice on toy problems!
- Design larger projects on paper first!