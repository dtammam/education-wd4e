# 4 - Benefits of Responsive Design

---

### "Responsive" options
- Responsive Web Design (RWD) - fluid measurements, flexible grids, and variying CSS rules
- Adaptive Design (dynamic serving) - returns one of multiple version fo a page based on the type of device
- Separate Mobile Site (.m) - a separate page URL for the mobile site

### RWD
- Is it responsive? If the server is sending back the same code regardless of the device, you are using RWD.
- This can be detected automatically, by looking for `meta name = "viewport"`

### Adaptive Design
- Server returns different code (HTML and CSS) depending on the device requesting the page
- The same URL is used

### Separate URL
- Separate URLs serve different code to desktop and mobile devices (and perhaps even tablets), and on different URLs
- You can relate the URLs with a `<link>` tag and `rel = "canonical"` and `rel = "alternate"` elements

### Why RWD?
- Easier to share your data with a single URL
- Easier for search engines (such as Google) to index the page
- Fewer files = less maintenance
- Less redirection = lower load time

### Why this is important
- If you are interested in web design, the importance of responsive design may be obvious
- If you need to convince someone to pay you to make their site responsive, some facts help