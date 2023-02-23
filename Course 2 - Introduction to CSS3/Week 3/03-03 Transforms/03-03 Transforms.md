#  03-03 Transforms

---

### 2D Transform Options
- Options
    - translate
    - rotate
    - scale
    - skew
    - matrix

### translate
- transform:translate(x,y);
    - Move x pixels to the left/right and y pixels up/down
    - x - if positive, move right, negative, move left
    - y - if positive, move down, negative, move up

### rotate
- transform:rotate(deg);
    - Rotate/spin the elemnt a certain number of degrees

### scale
- transform:scale(width, height);
    - Change the width and height of the element
    - x times as wide, and x times as high

### skew
- transform:skew(x-angle, y-angle);
    - Rotate the element a certain number of degrees along the x and y axis

### matrix
- matrix() - combines all of the 2D transform methods into one
    - Complex!

### 3D Rotate
- You can rotate along the x, y, or z dimension along a given degree
    - transform:rotateY(deg)
    - transform:rotateX(deg)
    - transform:rotateZ(deg)
    - transform:rotate3d(x, y, z)

### Review
- Transforms are one more way to modify the look of your page.
- Often combined with state changes.
- Will typically require browser prefixes.