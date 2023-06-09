# 12 - Bootstrap Breakpoints

---

### Default Breakpoints
- Bootstrap hardcodes the breakpoints for different viewpoirts
- The intention is to use the mobile-first paradigm
    - Plan for the smallest screen and make adjustments as the size gets larget

### Custom, iPhone Retina
- The smallest size deals with a width of 0-320px
- Problematic since some browsers don't return a size this small (even when screen size is very small)

### Extra Small Devices and Phones
- Referred to as xs-
- Ajny device that has a minimum width of 480px
- Most phones fall into this category, even in landscape position

### Small Devices and Tablets
- Referred to as sm-
- Any devices that has a minimum width of 768px
- Most tablets fall into this category, as well as desktop browsers that are opened in a smaller size

### Medium Devices and Desktops
- Referred to as md-
- Any device that has a minimum width of 992px
- This is beyond the size of most tablets or phones BUT it is possible that people have set their smaller devices to use a larger number (e.g. 992px) to trigger this viewport

### Large Devices and Wide Screens
- Referred to as lg-
- Any device that has a minimum width of 1200px
    - The trend toward smaller, smaller, smaller is often reversed to larger, larger, larger
- Again, some users may have settings to magnify content, this will trigger the larger views

### Setting your own breakpoints
- It is possible to change these default values
    - Customize before downloading
    - Modify the .css files
    - Write your own media queries

### Conclusion
- Knowing the *exact* values of the breakponts isn't important
- More important to know that Bootstrap refers to xs-, sm-, md-, and lg- screen sizes
- You can always modify to your own needs