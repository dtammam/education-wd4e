#  03-02 Transitions

---

### Transitions 
- When elements transition from one state to another, you can alter their appearance
    - If you hover over the link, change the color
    - If an image comes into focus, change the size

### The Properties
- transition-property
    - What is you want to change (size, color, position, etc.)
- transition-duration
    - How long should each transition last?"
- transition-timing
    - Should it be a smooth transition (linear)? Or different?
- transition-delay
    - How long should the wait be before the transition begins?

### Setting Up
1. Define your element
2. Choose the elements for transition
3. Define the new values
    - You must combine this step with a pseudo-class

            div {
                color: #000000;
                background: #2db34a;
                line-height: 200px;
                text-align: center;
                width: 250px;
                height: 200px;
                border-radius: 6px;
                transition-property: color, width, background, border-radius;
                transition-duration: .5s;
                transition-timing-function: linear;
                transition-delay: .5s;
            }

            div:hover {
                color: #ffffff;
                width: 350px;
                background: #2D31B3;
                border-radius: 50%;
            }

            div:active {
                color: #000000;
                width: 150px;
                background: #00DDB3;
            }


### Using Shorthands
- If you have multiple properties transitioning, you can use shorthand:

            transition: background .2s linear, boirder-radius 1s ease-in 1s;

### Review
- Transitions can be used to create fun aspects to your page.
- Playing with them will help you better understand element states (active, focus, etc.)
- Accessibility, as always, is an issue.