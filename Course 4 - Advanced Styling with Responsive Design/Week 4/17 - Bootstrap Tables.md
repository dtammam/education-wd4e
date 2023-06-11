# 17 - Bootstrap Tables

---

### Bootstrap Tables
- Many people use Bootstrap for styling their tables
- This is an example of using many classes on a single element
- The `table` class is the foundation

### Classes
- `.table`: some padding and horizontal dividers
- `.table-striped`: zebra stripes your table with an odd/even look where odd rows have light color
- `.table-bordered`: add borders to table and cells
- `.table-hover`: adds hover state styling

### Responsive tables
- There is only one breakpoint for responsive tabes
- Default (under 768px) allows horizontal scrolling
    - Requires `responsive` class on the parent container to work
- Larger screens are just the default view

### Row, header and cell classes
- It is possible to use Bootstrap to style smaller 
    - active, success, info
    - warning, danger
- Since these are classes, not tags, they are not semantic

### Should you use them?
- The Bootstrap styles for tables are very nuanced
- If you want style with more impact you can write your own rules or overwrite some elements of the Bootstrap style