#  04-03 Accessible Navigation

---

###  Navigation
- Navigation is a critical aspect of accessibility
- Sighted users have tried and true visual cues to orient them on a page
    - Banner
    - Search box
    - Main navigation box
    - Content well
- Blind and low-vision users rely on proper coding of a page for orientation

### What if you can't see?
- Title of page lets you know what page you're on when page loads
- Proper heading placement and hierarchy conveys organization of page and allows SR users to skip navigation
- Link descriptions convey content of page and organization of site

### Proper heading hierarchy
- Headings need to be nested to convey organization of the page
- h2 tags follow the h1 tag, the h3 tags follow the h2 tags, etc.

        <h1></h1>
            <h2></h2>
                <h3></h3>
                <h3></h3>
            <h2></h2>
            <h2></h2>

### Off-page headings
- Useful when you want to give SR users a navigational aid without cluttering presentation
- Use CSS to position headings off-page

        .offpage
        {   
            position: absolute;
            left: -100px;
        }

- Don't use {display: none} or {visibility: hidden}

### Meaningful link text
- Screen readers can find and list links
- Descriptions for the links must be meaningful out of context, via tabbing or presented in a list
- Don't use "here", "click here", "read this", and "more"
- Don't use URL as a link description - will sound like gibberish, unless very short and intuitive

### Review
- How easy is it to navigate your page?
- What would happen if the colors weren't there?
- What would happen if you couldn't use a mouse?
- Plan for everyone