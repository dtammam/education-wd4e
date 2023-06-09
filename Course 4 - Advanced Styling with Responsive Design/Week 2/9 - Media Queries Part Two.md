# 9 - Media Queries Part Two

---

### Easier Watched than Done
- Using/understanding media queries is key to responsive design.
- This lecture will describe the process in three steps

### Step 1: Grab information
- The meta viewport tag tells the mobile browser's viewport how to behave
- Include it in your head

```html
<meta name = 'viewport' content='width=device-width, initial-scale=1'>
```

- If you can't zoom in, it's because it was disallowed:
```html
<meta name = 'viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>
```

### Step 2: Fluid layout
- If you use breakpoints, some absolute measurements are not unusual.
- percentages vs ems
    - ems are measuremene of typography
    - 1em is width of one letter M in current typeface
- paddings and margins are affected by width, not height

### Step 3: Media queries
- Flid layout that is triggered by certain sizes.
- Design for small screen and work bigger.
- Some sites strip out information, hiding certain aspects of the site that they deem less important. There are two issues with this:
    1. It penalizes mobile users browsing the website
    2. It doesn't mean the content doesn't get downloaded and this can affect performance

### Ordering your rules
- Bad logic below, will always be gree:

```css
@media only screen and (min-width: 1024px) {
    body {
        background: blue;
    }
}

@media only screen and (min-width: 780px) {
    body {
        background: yellow;
    }
}

body {
    background: green;
}
```

- It's better if we do it this way, the global rule and then properly sorted from minimum to maximum size

```css
body {
    background: green;
}

@media only screen and (min-width: 780px) {
    body {
        background: yellow;
    }
}

@media only screen and (min-width: 1024px) {
    body {
        background: blue;
    }
}
```

### Concept Check
- Should your media queries be at the top or bottom of the page?
- Trick question - depends upon if you are using max-width or min-width
- Assuming min-width, put the rules on the bottom