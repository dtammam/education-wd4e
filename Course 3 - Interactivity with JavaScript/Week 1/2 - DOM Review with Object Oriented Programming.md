#  2 - DOM Review with Object Oriented Programming

---

### Web pages are built upon the DOM
- Document Object Model
- Structures documents like a tree
- Every node has one parent, and possibly many children
- Nodes have properties, methods and events

### The DOM and JavaScript
- Page content is represented by the DOM
- Scripting languages (JavaScript) use the DOM to interact with the document

### How does it work?
- Accessing the DOM is done with an API - Application Programming Interface
- No matter which browser, no matter which scripting language, the API is the same

### The DOM objects/elements
- document - the root of the page
    - `document.URL`
    - `document.height`
    - `document.links`
    - `document.bgColor`
- element - a node in the tree
    - Returned by a member of the API
- nodeList - an array (group) of elements
    - `document.getElementByTagName('p')` would return a set of nodes
- attribute
    - A node in the DOM, though rarely used that way.
    - Another way to manipulate/change the document

### Specific APIs
- `document.getElementById(id)`
- `document.getElementsByClassName(class)`
- `element.innerHTML`
- `element.style`
- `element.setAttribute(attribute, value)`
- `element.removeAttribute(attribute)`

### Review
- As you learn more JavaScript, you will be able to use the APIs
- We will start slow, buyt the important part is to eventually feel comfortable searching for these tools