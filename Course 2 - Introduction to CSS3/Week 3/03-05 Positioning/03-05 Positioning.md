#  03-05 Positioning

---

### Position Properties
- The four position properties are:
    - static
    - relative
    - absolute
    - fixed
- Position are modified by the properties: 
    - top
    - right
    - bottom
    - left

### Static
- Default value for elements
- Place in the next available position
- Not affected by the top, bottom, left, and right properties

### Relative
- Positioned "relative to itself"
- Take the static position, but add offsets.
- The new positioning does NOT affect any other element. It is possible to move an element and leave a big hole where it would have been.
- Relatively positioned elements are often used as container blocks for other elements.

### Absolute
- Element is removed from the document flow and positioned relative to it's *nearest ancestor* (or the root)
- Other elements behave as if element does not exist
- Can end up on top of another element

### Fixed
- Positioned relative to the *browser window*
- Will not move, even if the window is scrolled
    - IE7 and IE8 supported the fixed value only if a !DOCTYPE is specified
- Think of popup boxes that won't go away
- Or a navigation bar that is always visible on the top

### Z-index
- Multiple elements may be placed in the same position.
- z-index is a numeric value, positive or negative, that dictates stacking order

### Review
- Positioning elements is key to achieving desired layouts
- Proper planning will make this easier