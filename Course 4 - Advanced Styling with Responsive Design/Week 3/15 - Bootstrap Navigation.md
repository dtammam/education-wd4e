# 15 - Bootstrap Navigation

---

### Navigation Bars
- One of the components that gives Bootstrap its familiar "look and feel" is the navigation options
- The nav calss is combined with other classes to create each style

### Making a navigation bar
- Decide what type of links you want:
    - nav-tabs
    - nav-pills
- Decide on layout (horizontal, stack, justified, etc.)

### Nav-tabs
- Simulate an old-school filing system you flip through
![Nav-tabs](images/nav-tabs.png)

```html
<ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
</ul>
```

### Nav-pills
- Similar to nav-tabs, but can be colored with `class=active`
![Nav-pills](images/nav-pills.png)

```html
<ul class="nav nav-pills" role="navigation">
<!-- <ul class="nav nav-pills nav-stacked" role="navigation"> stacks the items on top of eachother  -->
<!-- <ul class="nav nav-pills nav-justified" role="navigation"> takes as many links as you have and spreads them out proportionally  -->
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
</ul>
```

### Drop downs
- To add dropdown menus you need to include the Bootstrap js files AND a link to the jQuery
- Check [this link for an example](http://getbootstrap.com/components#pills-with-dropdowns)

```html
<ul class="nav nav-pills">
    <li>
        <a href="#">Regular Link</a>
    </li>
    <li> 
        <a href="#">Regular Link</a>
    </li>
    <li role="presentation" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        Dropdown <span class="caret"></span>
        </a>
      
        <ul class="dropdown-menu">
            <li> <a href ="#">Option One</a>
            <li> <a href ="#">Option Two</a>
        </ul>
    </li>
    <li> 
        <a href="#">Regular Link</a>
    </li>
</ul>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
```

### Navbar class
- The navbar class serves as a navigation header for your application or site
- Positioning includes:
    - `navbar-static-top`
    - `navbar-fixed-top`
    - `navbar-fixed-bottom`

```html
<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        <ul class="nav nav-pills">
            <li> <a href="#">Link One</a></li>
            <li> <a href="#">Link Two</a></li>
            <li> <a href="#">Link Three</a></li>
            <li> <a href="#">Link Four</a></li>
        </ul>
    </div>
</nav>

<div>1 Lots and lots of Content!!!</div>
<div>2 Lots and lots of Content!!!</div>
<div>3 Lots and lots of Content!!!</div>
<div>4 Lots and lots of Content!!!</div>
<div>5 Lots and lots of Content!!!</div>
<div>6 Lots and lots of Content!!!</div>
```

### Accessibility
- Using a "nav" class does not convey semantics
- Use thge <nav> tag or ARIA attribute role="navigation"

### Review
- [This is a good resource](https://www.sitepoint.com/responsive-web-design-tips-bootstrap-css/) for demystifying Bootstrap