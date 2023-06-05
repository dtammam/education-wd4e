# 6 - Media Queries

---

### Media Queries
- Media queries allow the style to depend upon the media properties
- CSS 2.1 used media types:
```css
<link rel="stylesheet" ... href="style.css" media="screen" />
<link rel="stylesheet" ... href="print.css" media="print" />
```
- For example, the style.css will only be applied for content delivered to a 'screen'

### CSS3
- CSS3 increased the capabilities, style can depend on many features now
    - width
    - height
    - orientation
    - resolution
- Boolean operators can also be applied to increase power
    - "If it's a screen and..."

### The two query components
1. The media type
    - Screen
    - Printout
    - Braille
    - Television
    - All = every possible media type
- The actual query of the media feature and the "trigger" size
    - width
    - height
    - orientation
    - resolution
- Example:
    - `screen and (max-device-width: 480px) and (resolution: 163dpi)`

### How to implement media queries
- Use the @import rule
    - `@import url(smallstyle.css) screen and (min-width:600px)`

- Put media query directly in the style sheet
    - `@media screen and (min-width:500px){..}`

- Include query in the link
    - `<link rel = "Stylesheet" media = "screen and (min-width:400px)"> and (orientation:portrait)>`

### Review
- Example directly in CSS:

```css
/* Styles a specific way if it's a specific size screen */
@media screen and (min-width:500px) {
    p.desc {
        display: block;
        font-size: 150;
    }
}
/* Applies additional styling if it's at least a specific larger size as well */
@media screen and (min-width: 900px) {
    p.desc {
        display: inline-block;
        width: 35%;
        font-size: 125%;
    }
}
```