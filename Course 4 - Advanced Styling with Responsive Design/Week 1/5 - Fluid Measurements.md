# 5 - Fluid Measurements

---

### Background readings
- [Responsive Web Design: Using Fonts Responsibly by Annarita Tranfici](http://www.sitepoint.com/understanding-responsive-web-design-how-to-manage-fonts/)
    - Pixels were the preffered unit of measurement for a long time
    - An `em` is the equivalent of the size (in pixels) defined in the CSS rule *font size* - if we build a `<div>` and include text with a font-size of 16 pixels, 1 em will correspond to 16 pixels, 2 em to 32 pixels, and so on
    - Percentages are another way, and are similar to em
    - Another unit is `rem` or Root EEm. It's an em but with its' value being relative to the root element of the document and not to any of the other elements associated to it
    - Principles to consider:
        - Convert all elements with a fixed size into something that ensures higher fluidity
        Always keep in mind the proportions of the elemtns of the page and implement careful changes so that these proportions are preserved
- [Web Design Basics: Rem vs. Em vs. PX - Sizing Elements in CSS by Matthew Davis (** Material here is used in Week Two Assessment**) ](https://www.futurehosting.com/blog/web-design-basics-rem-vs-em-vs-px-sizing-elements-in-css/)
    - Link was dead, used [Which is Better to Use in CSS: px, em, or rem
](https://www.w3docs.com/snippets/css/which-is-better-to-use-in-css-px-em-or-rem.html)
    - Three primary options:
        - `px` - based on pixel size
        - `em` - based on computed font-size of parent element
        - `rem` - based on root HTML element's font-size

    - Example use of px and em for the font-size:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Title of the document</title>
        <style>
        .content-container{
            font-size: 20px;
        }
        .content {
            font-size: 1.5em;
        }
        </style>
    </head>
    <body>
        <div id="content-container" class="content-container">
        Parent element
        <div id="outerChild" class="content">
            Outer child element
            <div id="innerChild" class="content">
            Inner child element
            </div>
        </div>
        </div>
    </body>
    </html>
    ```

    - Example use of em with the layout:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Title of the document</title>
        <style>
        .menu {
            font-size: 25px;
        }
        .menu-item {
            font-size: 0.9em;
            padding-left: 12px;
        }
        </style>
    </head>
    <body>
        <div class="menu">
        <div class="menu-item">
            Books
        </div>
        <div class="menu-item">
            Quizzes
            <div class="menu-item">
            Snippets
            <div class="menu-item">HTML Snippets</div>
            <div class="menu-item">CSS Snippets</div>
            </div>
            <div class="menu-item">Tools</div>
        </div>
        </div>
    </body>
    </html>
    ```

    - Example use of rem for the font-size:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Title of the document</title>
        <style>
        :root {
            font-size: 62.5%;
        }
        body {
            margin: 0;
            font-size: 1.6rem;
        }
        .header {
            font-size: 2.4rem;
            padding: 0.8rem;
            background-color: lightgreen;
            text-align: center;
        }
        .flex {
            display: flex;
        }
        .sidebar-left {
            font-size: 1.8rem;
            padding: 0.8rem;
            width: 20vw;
            background-color: pink;
        }
        .content-right {
            padding: 0.8rem;
            background-color: lightblue;
            width: 80vw;
        }
        </style>
    </head>
    <body>
        <div class="main">
        <div class="header">Lorem Ipsum</div>
        <div class="flex">
            <div class="sidebar-left">
            <div>First item</div>
            <div>Second item</div>
            <div>Third item</div>
            <div>Fourth item</div>
            </div>
            <div class="content-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores obcaecati quibusdam hic eos quod, praesentium consectetur reprehenderit facere iusto accusamus fugit quidem suscipit facilis voluptatem fuga maiores quo vel?
            </div>
        </div>
        </div>
    </body>
    </html>
    ```

    - General guidelines:
        - Use `px` for small, fixed-size elements like borders or shadows
        - Use `em` for typography and other scalable elements that need to change size relative to their parent element
        - Use `rem` for scalable typography and responsive layouts that need to change size relative to the root element

- [What's the Deal with Em and Rem?  (** Material here is used in Week Two Assessment**)](https://codemyviews.com/blog/whats-the-deal-with-em-and-rem)
    - The concept of ems is based on the size of an uppercase M in any typeface, and was originally a consideration about proportional spacing in print media
    - By changing just the parent size you can change all of the type sizes simultaneously
    - An example of an em breakdown with a 14px parent font size:
        - 1 em = 14 pixels: This is the parent type, based on a common type size for main body copy
        - .5 em = 7 pixels
        - 1.5 em = 21 pixels
        - 2 em = 28 pixels

    - Rem functions hte same way but there is no defined parent size
        - The root html element defines the relationship with the rem
        - You would define a font size on the html element and define rem units as percentages of that
        - The font size will always be relative to the root html size, rather than adjusting as you nest containers with different sizes
        - After groking, it's much more straight forward
        - Here's a [calculator for the formula](http://pxtoem.com/)

- [Font Size Idea: px at the Root, rem for Components, em for Text Elements by Chris Coyier ](https://css-tricks.com/rems-ems/)
    - ![Rem Example](images/Rem%20Example.webp)
    - Code behind the image above:
        ```css
        /* Document level adjustments */
        html {
        font-size: 17px;
        }
        @media (max-width: 900px) {
        html { font-size: 15px; }
        }
        @media (max-width: 400px) {
        html { font-size: 13px; }
        }

        /* Type will scale with document */
        h1 {
        font-size: 3rem;
        }
        h2 {
        font-size: 2.5rem;
        }
        h3 {
        font-size: 2rem;
        }
        ```

### Fluid measurements
- Your content should fit the size constraints of the viewport
- Vertical scrolling (up/down) is about content, horizontal scrolling (left/right) is bad design

### Absolute measurements
- px
    - One device pixel (dot) of the display
    - 1 pixel used to equal 1/96th of an inch
- mm, cm, in
    - Relevant for things to print out and to be relative for an 8.5/11 piece of  paper
- pt
    - One point is equivalent of 1/72nd of an inch
- pc
    - One pica is equivalent to 12 points

### Relative measurements
- %
    - Percentage values are always relative to another value (for example, a length)
- em
    - Font size of the element
- rem
    - Font size of the *root* element
- vw
    - Viewport's width, 1/100th of the width of the Viewport
- vh
    - Viewport's height, 1/100th of the height of the Viewport
    - Really handy for header/footer exact positions

### One em in context
- 1em = 12pt = 16px = 100%
    - In this example, if you were to resize the screen, only em and % would adjust to the size of the screen
- 1in = 2.54cm = 24.5mm = 72pt = 12pc

### Review
- There are times that you will want to hardcode
- Fluid/relative measurements will respond to viewport size