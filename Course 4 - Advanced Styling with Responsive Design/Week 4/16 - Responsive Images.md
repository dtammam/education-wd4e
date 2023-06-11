# 16 - Responsive Images

---

### Making Your Images Responsobe
- So many webpages are pictorial, it only makes sense to talk about responsive images
- Two approaches:
    1. Write your own code
    2. Use Bootstrap

### Your Own Code
- In your own CSS you will want to use fluid measurements
    - `width: 100%`
    - `max-width: 750px;`
    - `min-width: 200px;`
    - Set height to `auto` or leave alone

### Using Bootstrap
- Bootstrap provides a number of image classes
    - `img-responsive`
    - `img-rounded`
        - Adds a little border radius to give a slight curved look
    - `img-circle`
        - Only shows the circular part of an image, cuts off corners
    - `img-thumbnail`
        - Give your image the look that is associated with thumbnails (bordered, small size)

### img-responsive
- A peek of Inspect Element when `img-responsive` kicks in
```
.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsovie, thumbnail>img {
    display: block;
    max-width: 100%;
    height: auto;
}
```

### Review
- Do not forget that even if undeclared, xs is always 12 (fuill screen, as we are mobile first)