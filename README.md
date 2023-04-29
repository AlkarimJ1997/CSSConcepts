# CSS Concepts

This repository summarizes concepts of CSS that are easily forgotten. It is a work in progress.

It's important to note that the concepts covered are somewhat non-trivial. Concepts that are easily understandable and basic are not covered.

## Table of Contents

- [CSS Concepts](#css-concepts)
  - [Table of Contents](#table-of-contents)
  - [Modern CSS Techniques](#modern-css-techniques)
    - [Container Widths with `min()`](#container-widths-with-min)
    - [Vertical Padding on Sections with `min()`](#vertical-padding-on-sections-with-min)
    - [Padding and Margin with `max()`](#padding-and-margin-with-max)
    - [Typography with `clamp()`](#typography-with-clamp)
    - [`calc()`](#calc)
  - [CSS Selectors](#css-selectors)
    - [Universal Selector](#universal-selector)
    - [Direct Child Selector](#direct-child-selector)
    - [Adjacent Sibling Selector](#adjacent-sibling-selector)
    - [General Sibling Selector](#general-sibling-selector)
    - [Attribute Selectors](#attribute-selectors)
    - [:is() Selector](#is-selector)
    - [:where() Selector](#where-selector)
    - [:has() / Parent Selector](#has--parent-selector)
      - [Easier Theming](#easier-theming)
      - [Prevent Scrolling When Modal is Open](#prevent-scrolling-when-modal-is-open)
    - [Lobotomized Owl Selector](#lobotomized-owl-selector)
  - [CSS Units](#css-units)
    - [Which Unit to Use?](#which-unit-to-use)
      - [Font Sizes](#font-sizes)
      - [Widths](#widths)
      - [Heights](#heights)
      - [Padding / Margin](#padding--margin)
      - [Media Queries](#media-queries)
      - [Borders, Shadows, and Other Properties](#borders-shadows-and-other-properties)
    - [Absolute Units](#absolute-units)
    - [Relative Units](#relative-units)
    - [Viewport Units](#viewport-units)
  - [CSS Mythbusters](#css-mythbusters)
    - [Collapsing Margins](#collapsing-margins)
    - [`width: auto` vs `width: 100%`](#width-auto-vs-width-100)
    - [`height: auto` vs `height: 100%`](#height-auto-vs-height-100)
    - [Auto Margins](#auto-margins)
      - [Centering Elements](#centering-elements)
      - [Spreading Navigation Links](#spreading-navigation-links)
    - [Space Under Images](#space-under-images)
    - [Padding and Margin as a Percentage](#padding-and-margin-as-a-percentage)
  - [CSS Pseudo Elements](#css-pseudo-elements)
    - [::before and ::after](#before-and-after)
      - [Adding an Image/Icon](#adding-an-imageicon)
      - [Opening or closing quotes](#opening-or-closing-quotes)
      - [Tooltips](#tooltips)
      - [Counters](#counters)
    - [::first-letter and ::first-line](#first-letter-and-first-line)
    - [::marker](#marker)
    - [::selection](#selection)
    - [::placeholder](#placeholder)
  - [CSS Display](#css-display)
    - [Block](#block)
    - [Inline](#inline)
    - [Inline-Block](#inline-block)
    - [Flex](#flex)
    - [Grid](#grid)
  - [CSS Positioning](#css-positioning)
    - [Static](#static)
    - [Relative](#relative)
    - [Absolute](#absolute)
    - [Fixed](#fixed)
    - [Sticky](#sticky)
  - [CSS Centering](#css-centering)
    - [Tables](#tables)
    - [Absolute Positioning](#absolute-positioning)
    - [Flexbox](#flexbox)
    - [Grid](#grid-1)
    - [Auto Margins for Centering](#auto-margins-for-centering)
  - [CSS Box Shadow](#css-box-shadow)
    - [Syntax](#syntax)
    - [Multiple Shadows](#multiple-shadows)
    - [Tips for Using Box Shadow](#tips-for-using-box-shadow)
    - [Box Shadow Hacks](#box-shadow-hacks)
      - [Multiple Borders](#multiple-borders)
      - [Modal Background Fade](#modal-background-fade)
      - [Peeled Corners](#peeled-corners)
  - [CSS Background Images](#css-background-images)
    - [Syntax](#syntax-1)
    - [Cover](#cover)
  - [CSS Tricks](#css-tricks)
    - [Aspect Ratio](#aspect-ratio)
    - [Clipping an Image to Text](#clipping-an-image-to-text)
    - [Smooth Scrolling](#smooth-scrolling)
    - [Change Navigation Style on Scroll](#change-navigation-style-on-scroll)
    - [Lazy Loading Images](#lazy-loading-images)
    - [Outline Offsets](#outline-offsets)
    - [Dark Mode Media Query](#dark-mode-media-query)
    - [:focus-visible](#focus-visible)
    - [Skip to Main Content](#skip-to-main-content)
    - [Custom Scrollbars](#custom-scrollbars)
    - [Dialog Element](#dialog-element)
    - [Lowering Background Image Opacity](#lowering-background-image-opacity)
    - [Pill Shapes](#pill-shapes)
    - [Breaking out of Containers](#breaking-out-of-containers)
    - [Clamping Text](#clamping-text)
    - [Responsive Tables](#responsive-tables)
    - [Typewriter Effect](#typewriter-effect)

## Modern CSS Techniques

### Container Widths with `min()`

The `min()` function is a CSS function that returns the minimum value from a list of arguments.

It's useful for setting container widths. Consider the following CSS that is used often.

```css
.content {
	width: 70%;
	max-width: 70rem;
}
```

With the `min()` function, we can simplify this.

Notice we also use the `margin-inline` property and auto margins to center the element.

```css
.content {
	width: min(70%, 70rem);
	margin-inline: auto;
}
```

### Vertical Padding on Sections with `min()`

The `min()` function, as mentioned, is a CSS function that returns the minimum value from a list of arguments.

It's useful for setting responsive padding on sections. Rather than using media queries, we can utilize the `min()` function.

```css
section {
	padding-block: min(20vh, 10rem);
}
```

### Padding and Margin with `max()`

The `max()` function is a CSS function that returns the maximum value from a list of arguments.

Unlike entire sections with `min()`, we can use `max()` for padding and margin on individual elements.

```css
p {
	padding: max(3vh, 1.5rem);
}
```

It's important to note that while using `min()` with `width` is a great use case, it's not true for `max()`.

Consider the following CSS:

```css
.content {
	width: max(300px, 70%);
}
```

This is the same as setting a `min-width` of `300px` on the element. Typically, we do not want to set `min-width` on elements, as it creates responsiveness issues.

### Typography with `clamp()`

The `clamp()` function is a combination of the `min()` and `max()` functions. It clamps a property between a minimum and maximum value.

It takes three arguments: a minimum value, a preferred value, and a maximum value.

Often, the minimum and maximum values are rem or em values, and the preferred value is a vw value when it comes to `font-size` or a percentage when it comes to `width`.

It's amazing for responsive typography.

```css
h1 {
	font-size: clamp(2rem, 5vw, 4rem);
}

p {
	font-size: clamp(1rem, 1.25vw, 1.25rem);
}
```

It's also nice to add a base `rem` to the `vw` value so it's responsive at different zoom levels.

```css
h1 {
	font-size: clamp(3rem, 10vw + 1rem, 4rem);
}
```

Also, while not typical, it can be used for widths as well.

For the following CSS, the content wants to be 50% of its parent, but can be as small as 300px or as large as 20rem.

Remember to be careful as a min-width can cause issues on mobile.

```css
.content {
	width: clamp(300px, 50%, 20rem);
}
```

### `calc()`

The `calc()` function is the final modern CSS function and is used to perform calculations to determine CSS property values.

It takes a mathematical expression as its argument and can be used with any CSS property.

Typically, it's great for compressing the edges of a container so its content is not touching the edges.

```css
.container {
	width: min(1200px, calc(100% - 2rem));
}
```

## CSS Selectors

### Universal Selector

The universal selector `*` matches any element type except `::before` and `::after` pseudo-elements.

It's typically used for CSS resets.

```css
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

### Direct Child Selector

The direct child selector `>` matches an element that is a direct child of another.

Consider the following HTML:

```html
<div class="parent">
	<p>1</p>
	<p>2</p>
	<div class="child">
		<p>3</p>
	</div>
</div>
```

The following CSS will select the first two `p` elements, but not the third:

```css
.parent > p {
	color: red;
}
```

Whereas the following CSS will select all three `p` elements:

```css
.parent p {
	color: red;
}
```

### Adjacent Sibling Selector

The adjacent sibling selector `+` matches an element that is the next sibling of another.

Consider the following HTML:

```html
<div class="parent">
	<div class="box" />
	<div class="box" />
	<div class="box" />
</div>
```

The following CSS will select the second and third `div` elements, but not the first because the adjacent sibling selector checks if there is a sibling before the element.

In this case, there is no `div` with class `box` before the first `div` element.

```css
.parent .box + .box {
	margin-left: 1rem;
}
```

If the HTML was changed to the following, only the second and fourth `div` elements would be selected because the third `.box` element is now preceded by an `a` element.

```html
<div class="parent">
    <div class="box" />
    <div class="box" />
    <a href="#">Not a box<a/>
    <div class="box" />
    <div class="box" />
</div>
```

### General Sibling Selector

The general sibling selector `~` matches an element that is a sibling of another.

Unlike the adjacent sibling selector, the general sibling selector checks if there is a sibling before the element at any point, not just immediately before.

Consider the following HTML:

```html
<div class="parent">
    <div class="box" />
    <div class="box" />
    <a href="#">Not a box<a/>
    <div class="box" />
    <div class="box" />
</div>
```

The following CSS will select the second, third, and fourth `div` elements, but not the first.

```css
.parent .box ~ .box {
	margin-left: 1rem;
}
```

### Attribute Selectors

Attribute selectors allow you to select elements based on their attributes.

Consider the following HTML:

```html
<a href="#" class="another-link">Link 1</a>
<a href="https://google.com" target="_blank">Link 2</a>
<a href="http://google.ca" target="_blank">Link 3</a>
<a href="about.html">Link 4</a>
```

The following CSS will select the second and third `a` elements because they have a `target` attribute.

```css
a[target] {
	color: red;
}
```

These can be specified further by using the `=` operator.

The following CSS will select all `a` elements whose class begins with `another`, hence selecting the first `a` element.

```css
a[class|='another'] {
	color: red;
}
```

It's important to note that the `|=` operator looks for an exact match, not including a hyphen.

So the following CSS **will not work** because `a` elements' `href` attributes do not begin with exactly `http`, `http-`, `https`, or `https-`.

```css
a[href|='http'],
a[href|='https'] {
	color: red;
}
```

Instead, we can use the `^=` operator which will just check if the attribute begins with the specified value.

We also don't need to check for `https` explicitly because `http` is a substring of `https`.

```css
a[href^='http'] {
	color: red;
}
```

The `$=` operator checks if the attribute ends with the specified value.

The following CSS will select all `a` elements whose `href` ends with `.ca`.

```css
a[href$='.ca'] {
	color: red;
}
```

We can do more by combining other selectors. The following CSS will select all `a` elements whose href is not empty.

```css
a:not([href='#']) {
	color: red;
}
```

The `*=` operator checks if the attribute contains the specified value, regardless of where in the attribute it is.

The following CSS will select all `a` elements whose href contains `google`.

```css
a[href*='google'] {
	color: red;
}
```

### :is() Selector

The `:is()` compound selector allows you to specify multiple selectors in a single selector.

In other words, you can select multiple elements in a parent element with one selector.

Consider the following HTML:

```html
<header>
	<p>This is a title</p>
</header>
<div class="parent">
	<h1 class="heading">This is a heading</h1>
	<p>This is a paragraph</p>
	<p><a>This is a link</a></p>
</div>
```

Before, we would select the `h1` and `a` elements in `.parent` with the following CSS:

```css
.parent h1,
.parent a {
	color: red;
}
```

But this is repetitive and if there's an invalid selector, the entire selector is considered invalid and thrown out.

With `:is()`, we can select the `h1` and `a` elements with the following CSS and even with an invalid selector, the rest of the selectors will apply the CSS:

```css
.parent :is(h1, a) {
	color: red;
}
```

Class names are also valid in the `:is()` selector.

```css
.parent :is(.heading, a) {
	color: red;
}
```

Another use case for `:is()` is with hover states. With the same HTML, we can add a hover to all `p` elements in the `header` and `.parent` elements with the following CSS:

```css
:is(header, .parent) p:hover {
	color: red;
}
```

This is much less repetitive than repeatedly writing `p:hover` for each element.

One caveat to keep in mind is that `:is()` takes the specificity of the most specific selector. Consider the following CSS:

```css
.parent :is(.heading, a) {
	color: red;
}

.parent a {
	color: blue;
}
```

The `a` element will stay red because `.heading` is more specific than `a`.

### :where() Selector

The `:where()` compound selector is similar to the `:is()` selector, explained here, but it doesn't increase specificity.

It is interchangeable with `:is()` but it doesn't increase specificity.

Consider the following CSS:

```css
.parent :where(.heading, a) {
	color: red;
}

.parent a {
	color: blue;
}
```

The first CSS block selects the `.heading` and `a` elements in `.parent` and makes them red.

But, since the specificity isn't increased, the `a` element will be blue because it's more specific than the `:where()` selector.

### :has() / Parent Selector

The `:has()` selector allows you to select elements based on their children, or a parent selector.

Consider the following HTML:

```html
<div>
	<h1>This is a heading</h1>
</div>
<div>
	<p>This is a paragraph</p>
</div>
<div>
	<p>
		This is a paragraph with a
		<a href="#">link</a>
	</p>
</div>
<div>
	<p class="title">This is a paragraph with a class</h1>
</div>
```

The following CSS will select all `div` elements that have a `p` element as a child, in our case the last three `div` elements.

```css
div:has(p) {
	/* styles */
}
```

This can be taken a step further.

```css
/* Select div that has an element with class .title */
div:has(.title) {
	/* styles */
}

/* Select div that has an element with class .title and an a element */
div:has(.title, a) {
	/* styles */
}
```

It's important to remember that the `:has()` selector will end up selecting the parent, so we are styling the `div` itself, not the children.

But there's more! We can use the `:has()` selector for adjacent siblings.

Consider the following HTML:

```html
<article>
	<h1 class="article__title">This is a heading</h1>
	<h2 class="article__subtitle">This is a subtitle</h2>
</article>

<article>
	<h1 class="article__title">This is a heading</h1>
	<p class="article__paragraph">This is a paragraph</p>
</article>
```

If we only want to add a margin to the `h1` element if it has an adjacent sibling with the class `article__subtitle`, we can use the following CSS:

```css
.article__title:has(+ .article__subtitle) {
	margin-block-end: 2rem;
}
```

But the possibilities don't end there. Consider the implementation with states.

Let's look at the following HTML:

```html
<div class="image-gallery">
	<img src="https://picsum.photos/200/300" alt="Image 1" />
	<img src="https://picsum.photos/200/300" alt="Image 2" />
	<img src="https://picsum.photos/200/300" alt="Image 3" />
	<img src="https://picsum.photos/200/300" alt="Image 4" />
	<img src="https://picsum.photos/200/300" alt="Image 5" />
	<img src="https://picsum.photos/200/300" alt="Image 6" />
	<img src="https://picsum.photos/200/300" alt="Image 7" />
	<img src="https://picsum.photos/200/300" alt="Image 8" />
	<img src="https://picsum.photos/200/300" alt="Image 9" />
</div>
```

Let's pretend we have a grid layout where we have a 3x3 grid of images. We can use the `:has()` selector to scale down and fade out any image that **isn't being hovered** if we hover over a specific image

```css
.image-gallery {
	/* grid stuff */
}

.image-gallery > img {
	width: 100%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	transition: scale 350ms ease, opacity 350ms linear;
}

.image-gallery:has(img:hover) img:not(:hover) {
	scale: 0.9;
	opacity: 0.7;
}
```

There are more use cases to the `:has()` selector, here are a few:

-   Easier Theming
-   Prevent Scrolling When Modal is Open

#### Easier Theming

Consider the following html:

```html
<article>
	<h1 class="article__title">This is a heading</h1>
	<select class="article__select theme" name="" id="">
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
	<p class="article__paragraph">This is a paragraph</p>
</article>
```

We can use `:root` and `:has()` to change the theme of the page.

```css
:root {
	/* dark mode colors */
}

:root:has(.theme > [value='light']:checked) {
	/* light mode colors */
}
```

#### Prevent Scrolling When Modal is Open

Consider the following HTML:

```html
<button class="button" data-class="open">Open Modal</button>

<dialog class="dialog" id="modal">
	<h2>An interesting title</h2>
	<p>Some interesting text</p>
	<p>Some more interesting text</p>
	<button class="button" data-class="close">Close</button>
</dialog>
```

We can use the `:has()` selector to prevent scrolling when the modal is open.

```css
html:has(:modal) {
	overflow: hidden;
	padding-inline-end: 16px; /* Prevents the page from jumping */
}
```

### Lobotomized Owl Selector

The `* + *` or lobotomized owl selector is a combination of the universal selector and the adjacent sibling selector.

It selects all elements that are adjacent siblings of another element.

Remember it looks at siblings, not parents. This is amazing for adding margins to elements.

Consider the following HTML:

```html
<div class="parent">
	<h1 class="heading">This is a heading</h1>
	<p>This is a paragraph</p>
	<p><a>This is a link</a></p>
</div>

<div class="parent__2">
	<h1 class="heading">This is a heading</h1>
	<p>This is a paragraph</p>
	<p><a>This is a link</a></p>
</div>
```

The following CSS wll add a margin to all children of `.parent` and `.parent__2` except the first child.

```css
* + * {
	margin-top: 1.5rem;
}
```

## CSS Units

### Which Unit to Use?

There are many different units in CSS and it can be difficult to know which one to use. However, there are some general guidelines to follow.

#### Font Sizes

**_For font sizes, it's best to use `rem` units._**

`rem` is relative to the root element, and while there are exceptions where `em` can be used, it has a cascading effect that can be difficult to manage.

#### Widths

**_For width, it's best to use `%`, along with a `max-width`._**

However, for typography, `max-width` should be set with `ch` units.

In typography, it's best to keep the text length at around 40-70 characters or `ch`. By setting the `max-width` to `60ch`, the text will not be too long on larger screens.

This is also great for form inputs. A form input that should have a max of 10 characters can be set to `max-width: 10ch`.

`%` is relative to the parent element and is useful for responsive design. Typically, you will couple this with a `max-width` in `px` to prevent the element from getting too large on larger screens.

At times, `vw` can be used for widths, but it's not as common as `%`.

#### Heights

Before proceeding, always ask if you really need to set a height. The answer is usually no, and it makes for bad responsive design.

If you absolutely need a height, **_try to use `min-height`_** instead of `height`. This will allow the element to grow if the content is larger than the height.

**_For heights, it's best to use `%` or `rem` units._**

At times, `vh` can be used for heights, but be careful on mobile devices.

#### Padding / Margin

**_For padding and margin, it's best to use `em` units._**

If you want the padding and margin to be relative to the font size, use `em`.

If you want the padding and margin to be more consistent, use `rem`.

For padding on `button` elements specifically, always use `em` units so that the padding is relative to the font size.

For document flow, like setting `margin-top` on elements, there's no clear winner. `rem` will make the spacing consistent, but `em` will give more spacing for headings over body text, which can make your website more readable.

#### Media Queries

**_For media queries, it's best to use `em` units._**

This is for browser compatibility because Safari behaves differently with `rem` units.

#### Borders, Shadows, and Other Properties

**_For borders, shadows, and other properties, it's best to use `px` units._**

These properties are not affected by the font size, so `px` units are easy to use, but honestly, `rem` units can be used as well.

### Absolute Units

Absolute units are fixed and do not change based on the viewport or parent element.

They include the following units:

-   `cm` - centimeters
-   `mm` - millimeters
-   `in` - inches
-   `px` - pixels
-   `pt` - points
-   `pc` - picas

Typically, the only absolute unit used in CSS is `px`.

### Relative Units

Relative units are relative to something else, such as the viewport or parent element.

They include the following units:

-   `em` - relative to the font size of the element
-   `ex` - relative to the x-height of the current font (**rarely used**)
-   `ch` - relative to the width of the zero character
-   `rem` - relative to the font size of the root element
-   `%` - relative to the parent element

Other than `ex`, all of these units are used in CSS and have their own use cases.

### Viewport Units

Viewport units are a subset of relative units that are relative to the viewport.

They include the following units:

-   `vw` - relative to 1% of the viewport's width
-   `vh` - relative to 1% of the viewport's height
-   `vmin` - relative to 1% of the viewport's smaller dimension
-   `vmax` - relative to 1% of the viewport's larger dimension

Typically, `vw` and `vh` are used the most.

## CSS Mythbusters

### Collapsing Margins

When two elements are stacked on top of each other, the margins will collapse into one margin.

In other words, if we have a child element within a parent element, and both elements have a margin, the margins will collapse into one margin.

This is great, since we typically don't want double the margin.

However, this becomes an issue when we have a child within a parent, and try to set a
`margin-top` on the child.

The `margin-top` will get collapsed to the parent and cause the parent to shift down, without even adding the intended margin to the child.

To fix this, we can do one of the following:

-   Add `padding` to the parent
-   Use `display: grid` on the parent
-   Use `display: flow-root` on the parent

By adding `padding` to the parent, the child and parent will no longer be touching, so the margin will not collapse. This is the best solution.

While `display: grid` and `display: flow-root` will also work, they are not the best solutions because they have other side effects.

### `width: auto` vs `width: 100%`

By default, block elements have a width of `auto`.

`width: auto` basically tells the element to use the available space, or viewport, without overflowing.

`width: 100%` tells the element to use the entire width of the parent element, even if it overflows.

### `height: auto` vs `height: 100%`

It's important to understand that `height: 100%` tells the element to use the entire height of the parent element.

But consider the following HTML:

```html
<body>
	<div class="example">Hello World!</div>
</body>
```

If we have the following CSS, the `div` will still only fit the content because the `body` is the parent and has no height.

```css
body {
	font-size: 2rem;
	border: 3px solid red;
}

.example {
	background: #234;
	color: white;
	height: 100%;
}
```

As opposed to `width: auto` which tells the element to use the available space, `height: auto` tells the element to use the height of the content.

So, if there is no content, the element won't even show up. But this is great and is typically what you want.

When you set specific heights, responsive design becomes much more difficult.

So, if you ever need more height, **use `min-height` instead of `height`**.

### Auto Margins

The main use cases of auto margins are the following:

-   Centering elements
-   Spreading navigation links (i.e. in a navbar)

#### Centering Elements

Auto Margins are very useful for centering elements. For further detail, see [Auto Margins for Centering](#auto-margins-for-centering)

#### Spreading Navigation Links

Auto Margins are the go-to solution for spreading navigation links, especially in Flexbox or Grid.

Consider the following HTML:

```html
<nav class="nav">
	<ul class="nav__list">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Blog</a></li>
		<li><a href="#">Pricing</a></li>
		<li><a href="#">Contact</a></li>
		<li><a href="#">Login</a></li>
		<li><a href="#">Sign Up</a></li>
	</ul>
</nav>
```

Before doing anything, it's essential to make sure you tell the `ul` it has room to grow, because `display: flex` will default to fit the content.

```css
.nav__list {
	display: flex;
	gap: 1rem;
}

.nav {
	flex-grow: 1; /* This is the key */
}
```

Now we can use auto margins to spread the links into different sections

```css
.nav__list > li:nth-of-type(6) {
	margin-left: auto; /* Now Login and Signup are pushed all the way to the right */
}
```

If we added a second auto margin on the first `li` element, the first 5 links would be centered evenly in its space, and the last 2 links would be pushed to the right.

```css
.nav__list > li:first-of-type {
	margin-left: auto;
}
```

`margin-top: auto` and `margin-bottom: auto` can be used in the same way for vertical navigations on the sides of the page.

### Space Under Images

By default, images are inline elements, so they have space under them for descenders.

Basically, it is matching the baseline of the text.

To fix this issue, we can use the following CSS, and this should always be done in your CSS reset:

```css
img {
	display: block;
	max-width: 100%;
}
```

By setting the image to `display: block`, it will remove the space under the image.

By setting the image to `max-width: 100%`, it will make the image responsive.

### Padding and Margin as a Percentage

By default, if you set `padding` or `margin` as a percentage, it will be a percentage of the width of the parent element, or the viewport if the parent element is the `body`.

This is true for `margin-top`, `margin-bottom`, `padding-top`, and `padding-bottom`.

So, weirdly enough, `margin-top: 50%` for example, will be 50% of the width of the parent element, flipped vertically.

## CSS Pseudo Elements

### ::before and ::after

The `::before` and `::after` pseudo elements insert content before or after the content of the selected element.

By default, anything you do to a pseudo element will not show up or exist on the page.

You need to specify a `content` property for it to show up.

It's important to note that `img` elements cannot have pseudo elements, because they are replaced elements (the content of the element comes from `src` so it works differently).

Pseudo elements are also inline by default.

Some popular use cases for pseudo elements are the following:

-   Adding an Image/Icon
-   Opening or closing quotes
-   Tooltips
-   Counters

#### Adding an Image/Icon

The following CSS will add an image before all `h1` elements.

```css
h1::before {
	content: url('//unsplash.it/100/100');
}
```

The following CSS will add:

-   a Lightning Bolt before all headings
-   a PDF icon after all links that end in `.pdf`
-   an External Link icon after all links that start with `http`

Make sure to include Font Awesome in your HTML.

```html
<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
```

```css
h2::before {
	font-family: 'Font Awesome 5 Free';
	font-weight: 900;
	content: '\f0e7';
	display: block;
	margin-bottom: 0.5rem;
}

a[href$='.pdf']::after {
	font-family: 'Font Awesome 5 Free';
	content: '\f1c1';
}

a[href^='http']::after {
	font-family: 'Font Awesome 5 Free';
	content: '\f35d';
	font-size: 0.8em;
	font-weight: 900;
}
```

#### Opening or closing quotes

The following CSS will add opening and closing quotes before all `blockquote` elements.

```css
blockquote::before {
	content: open-quote;
}

blockquote::after {
	content: close-quote;
}
```

#### Tooltips

The following CSS will add a tooltip to the `a` element.

```html
<a href="#" data-tool-tip="This is a tooltip">Link</a>
```

```css
a[data-tool-tip] {
	position: relative;
}

a[data-tool-tip]::after {
	content: attr(data-tool-tip);
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 1em 3em;
	color: white;
	border-radius: 5px;
	font-size: 0.8em;
	white-space: nowrap;
	transform: scale(0); /* start at 0 size */
	transition: transform 0.15s ease-out, bottom 0.15s ease-out;
}

a[data-tool-tip]:hover::after {
	transform: scale(1); /* scale to 1 size on hover */
	bottom: 100%;
}
```

#### Counters

The first step is to add a `counter-reset` property to the parent element.

```css
.parent {
	counter-reset: myCounter;
}
```

Then, add a `counter-increment` property and `content` property to the child element's `::before` pseudo element.

```css
.child::before {
	counter-increment: myCounter;
	content: counter(myCounter);
}
```

We can take this a step further with the following CSS.

```css
.child {
	position: relative;
}

.child::before {
	counter-increment: myCounter;
	content: counter(myCounter);
	position: absolute;
	top: -0.5em;
	left: -2.5em;
	background: white;
	width: 2em;
	height: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 3px solid rgba(0, 0, 0, 0.7);
	color: rgba(0, 0, 0, 0.7);
	box-sizing: border-box; /* include border in width and height */
}
```

### ::first-letter and ::first-line

The `::first-letter` pseudo element selects the first letter of the first line of a block-level element.

The following CSS will enlarge and colorize first letter of all `p` elements

```css
p::first-letter {
	font-size: 5em;
	line-height: 1rem; /* to prevent line height from being outrageous*/
}
```

It's important to note that line-height should almost always be 1 without a unit to make it relative to the font size. Our case is the one exception.

However, this is also known as a raised cap. If you want a dropped cap, you can use the `float` property and the following CSS.

```css
p::first-letter {
	font-size: 6em;
	font-weight: 700;
	background-color: yellow;
	padding: 0.05em;
	margin-right: 0.05em;
	border: 5px solid black;
	float: left;
}
```

The `::first-line` pseudo element selects the first line of a block-level element.

The following CSS will make the first line of all `h3` elements bolded and uppercase.

```css
h3::first-line {
	font-weight: 700;
	text-transform: uppercase;
}
```

### ::marker

The `::marker` pseudo element selects the marker box of a list item.

Its styling is limited to the following properties:

-   `color`
-   `all font properties`
-   `white-space`
-   `content`
-   `animation`
-   `transition`

For modern use, the `::marker` pseudo element allows us to add an icon to a list item.

```css
li {
	list-style: none;
	padding-left: 0.5em; /* have to use padding for icon room */
}

li::marker {
	color: red;
	font-size: 1em;
	content: '\f13d';
	font-family: 'Font Awesome 5 Free';
	font-weight: 700;
}
```

### ::selection

The `::selection` pseudo element selects the portion of an element that is selected by a user.

```css
::selection {
	background-color: red;
	color: white;
}
```

### ::placeholder

The `::placeholder` pseudo element selects the placeholder text of an input element.

```css
input::placeholder {
	font-size: 0.8em;
	color: rgba(0, 0, 0, 0.5);
}
```

We can also use it to highlight required form fields.

Consider the following HTML.

```html
<input type="text" placeholder="First Name" required />
```

The following CSS will highlight the placeholder text of all required form fields.

```css
input[required]::placeholder {
	border-color: red;
}
```

We can also change the CSS of inputs once they are filled out.

```css
input:not(:placeholder-shown) {
	font-size: 1.2em;
}
```

## CSS Display

### Block

Most elements are block-level elements by default, meaning:

-   They have a width of 100%
-   They take up all the available space that they can (within their parent element).

Common block-level elements include `div`, `p`, and `h1`-`h6`.

Block-level elements will always stack on top of each other, even if there is room for them to fit side-by-side.

You can give a block-level element a width and height, and it will take up that space, but it will still stack on top of each other, regardless of the space available.

```css
p {
	width: 50%; /* will take up 50% of the parent element, but still stack */
}
```

### Inline

Inline elements are the opposite of block-level elements.

-   They have a width of the content inside of them
-   They will not create a new line, and only take up as much space as they need.
-   They will fit wherever they can fit.

Common inline elements include `span`, `a`, and `img`.

What's very important to understand about inline elements is their behavior with width, height, margin, and padding.

**Inline elements will not accept a `width` or `height`**

**Inline elements will not accept a `margin` or `padding` on the _top or bottom_.**

```css
a {
	width: 100px; /* will not work */
	height: 100px; /* will not work */

	margin-top: 10px; /* will not work */
	margin-bottom: 10px; /* will not work */

	padding-top: 10px; /* will not work */
	padding-bottom: 10px; /* will not work */
}
```

**But, they will accept a `margin` or `padding` on the left or right.**

```css
a {
	margin-left: 10px; /* will work */
	margin-right: 10px; /* will work */

	padding-left: 10px; /* will work */
	padding-right: 10px; /* will work */
}
```

However, in CSS, there are anonymous boxes that surround elements around inline elements.

This is important because there are unintended consequences to setting a `font-size` on an inline element, specifically if the `font-size` is larger than the surrounding text or container.

This will cause the anonymous boxes to match the height or size of the inline element, making everything bigger.

While difficult to fix, the best solutions are:

-   set the `font-size` on the parent element
-   give a `min-height` to the parent element
-   set `line-height: 1` on the inline element.

### Inline-Block

Inline-block elements are a combination of inline and block-level elements.

A `button` is a good example of an inline-block element.

Inline-Block elements are used when you need an inline element to have `padding` and `margin` on it, think of a `a` acting as a button or `svg` element.

By setting `display: inline-block` on an inline element, you can give it `padding` and `margin` on all sides.

```css
a {
	display: inline-block;
	padding: 1.25em 2.5em;
	background-color: #000;
	color: #fff;
	text-decoration: none;
}
```

It's also better than setting `display: block` on an inline element because it will not create a new line, if you want two buttons side-by-side.

### Flex

Flexbox is a modern CSS layout system that allows you to easily align and distribute space among elements in a container.

It's too much to cover in this guide. For specific information on Flexbox, see

[Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Grid

CSS Grid is a modern CSS layout system that allows you to easily align and distribute space among elements in a container.

It's slightly more complicated than Flexbox, intended for complex layouts.

It's too much to cover in this guide. For specific information on Grid, see

[Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## CSS Positioning

### Static

`position: static` in CSS is the default position for all elements. It basically just tells the element to follow the normal flow of the page.

In other words, the first element in the HTML will come first, the second element will come second, and so on.

It does not need to be explicitly set.

### Relative

On its own, `position: relative` in CSS doesn't do much.

Typically, it's used to position elements absolutely inside of it. For further explanation, see [Absolute](#absolute).

However, one use case for `position: relative` is to add a `z-index` to an element.

The `z-index` specifies the order in which elements are stacked on top of each other, with higher values being on top.

But to use `z-index`, you need to set `position` to something other than `static`.

`position: relative` is perfect because it doesn't change the position of the element.

The following CSS will position the element above all other elements on the page (assuming they have a `z-index` of 0).

```css
.box {
	position: relative;
	z-index: 1;
}
```

A second use case for `position: relative` is to position an element relative to its normal position in the document (if it was static) using `top`, `right`, `bottom`, and `left`.

It can also overflow and overlap other elements since it's taken out of the document flow.

For example, the following CSS will move the element 10px to the right and 20px down from its normal position.

Note that this is only for explanation purposes. You'll almost never use `position: relative` to position an element like this.

```css
.box {
	position: relative;
	top: 20px;
	left: 10px;
}
```

### Absolute

`position: absolute` in CSS takes an element out of the normal flow of the document.

By default, it will stay where it is but other elements may overlap it because it's not in the normal flow.

After setting `position: absolute`, you can use `top`, `right`, `bottom`, and `left` to position the element.

They correspond to how much distance there is between the element and the top, right, bottom, and left edges of the page, respectively.

For example, the following CSS will position the element at the top left corner of the page.

```css
.box {
	width: 50px;
	height: 50px;
	position: absolute;
	top: 0;
	left: 0;
}
```

You can also not specify a width or height and use positioning instead.

The following CSS will have the element take up the left half of the page.

```css
.box {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 50%;
}
```

By default, absolute positioning is relative to the body.

But typically, you would set `position: relative` on the parent element and then set `position: absolute` on the child element, so the child is positioned relative to the parent element.

Consider the following HTML:

```html
<div class="parent">
	<div class="child"></div>
</div>
```

The following CSS will position the child element at the top left corner of the parent element.

```css
.parent {
	position: relative;
}

.child {
	position: absolute;
	top: 0;
	left: 0;
}
```

### Fixed

`position: fixed` in CSS is similar to `position: absolute` except it's relative to the viewport instead of its parent element.

This means that it will stay in the same position even if the user scrolls.

For example, a navigation bar can stay on top of the page even if the user scrolls down.

```css
.nav {
	position: fixed;
	top: 0;
}
```

### Sticky

`position: sticky` in CSS is a combination of `position: relative` and `position: fixed`.

It's relative to the parent element until it reaches a certain point, then it becomes fixed. It's used to create elements that will 'stick' to the top of the page when the user scrolls down, i.e. a navigation bar.

Remember that it's relative to the parent, so your navigation bar needs to have the body as its parent, otherwise it will just slide off the page after a certain point.

TL;DR: `position: sticky` is like `position: relative` as long as the parent is in view, then it becomes `position: fixed`.

```css
.nav {
	position: sticky;
	top: 0;
}
```

## CSS Centering

There are 5 main ways to center an element in CSS:

-   Tables
-   Absolute Positioning
-   Flexbox
-   Grid
-   Auto Margins

It's important to note that Tables and Margins can only center one element.

### Tables

This is the old-school way of centering an element. It should not be used anymore, but it's good to know how it works.

First, set the `display` property of the parent element to `table`.
Second, set the `display` property of the child element to `table-cell`.
Finally, set the `vertical-align` property of the child element to `middle`.

```css
.parent {
	display: table;
}

.child {
	display: table-cell;
	vertical-align: middle;
}
```

### Absolute Positioning

This utilizes absolute positioning and the `transform` property. It's a bit hacky, but it works. It should not be the first choice, but is there if you need it.

First, set the `position` property of the parent element to `relative`.
Second, set the `position` property of the child element to `absolute`.
Third, set the `top` and `left` properties of the child element to `50%`.
Finally, set the `transform` property of the child element to `translate(-50%, -50%)`.

```css
.parent {
	position: relative;
}

.child {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

### Flexbox

This is the most common way to center an element. It's easy to use, works in most cases, and should be the first choice.

First, set the `display` property of the parent element to `flex`.
Second, set the `justify-content` property of the parent element to `center`.
Finally, set the `align-items` property of the parent element to `center`.

```css
.parent {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

### Grid

This is another common way to center an element. It's easy to use, works in most cases, and is interchangeable with flexbox. However, flexbox is simpler, so it should be the first choice.

First, set the `display` property of the parent element to `grid`.
Second, set the `place-items` property of the parent element to `center`.

Note that `place-items` is a shorthand for `align-items` and `justify-items`.

```css
.parent {
	display: grid;
	place-items: center;
}
```

### Auto Margins for Centering

This solution uses the magic of auto margins in flexbox and grid.

First, set the `display` property of the parent element to `flex` or `grid`.
Second, set the `margin` property of the child element to `auto`.

```css
.parent {
	display: flex; /* or grid */
}

.child {
	margin: auto;
}
```

You can also utilize auto margins with `position: fixed` to center an element in the viewport.

```css
.element {
	position: fixed;
	inset: 0;
	margin: auto;
}
```

Similarly, if you have a child you want to center in the parent, you can use auto margins with `position: absolute`.

```css
.parent {
	position: relative;
}

.child {
	position: absolute;
	inset: 0;
	margin: auto;
}
```

## CSS Box Shadow

It's important to note that the `box-shadow` property is as the name sounds, it's a shadow on the box, not the content inside the box.

Therefore, if you're trying to add a shadow to a star for example, use `filter: drop-shadow()` instead.

### Syntax

The `box-shadow` property in CSS adds a shadow to an element. It takes 2 to 6 values.

The most basic usage specifies the horizontal and vertical offset of the shadow.

It's important to note that the offset cannot be a percentage.

You can also specify a color.

```css
.box {
	box-shadow: 20px 20px;
}

.box {
	box-shadow: 20px 20px red;
}
```

The third value is the blur radius, 0 by default. The higher the value, the more blurred the shadow will be.

The blur radius cannot be a negative value.

```css
.box {
	box-shadow: 20px 20px 20px;
}
```

The fourth value is the spread radius. Basically, it specifies how far out the shadow should spread until the blurring begins.

It can be a negative value that will spread the shadow inwards.

```css
.box {
	box-shadow: 20px 20px 20px 20px;
}
```

The fifth value is the color of the shadow. It can be any valid CSS color value (hex, rgba, hsl) and defaults to the current `color` property.

```css
.box {
	color: red;
	box-shadow: 0 0 20px 20px currentcolor;
}

.box {
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
}
```

The sixth value is the inset keyword, and must be the first value. It specifies that the shadow should be inset inside the element.

It will always be on top of the background and behind the content.

```css
.box {
	box-shadow: inset 0 0 20px 20px rgba(0, 0, 0, 0.5);
}
```

### Multiple Shadows

You can specify multiple shadows by separating them with commas.

The first shadow will be on top, and the last shadow will be on the bottom.

```css
.box {
	box-shadow: 100px 100px 100px red, 100px -100px 100px blue,
		-100px -100px 100px green, -100px 100px 100px purple;
}
```

### Tips for Using Box Shadow

-   Use a low opacity for the shadow color to make it look more natural.

```css
.box {
	box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.25);
}
```

-   Use a large blur radius if you want to make the element look higher up.

```css
.box {
	box-shadow: 0 5px 60px 0 rgba(0, 0, 0, 0.25);
}
```

Now, what about animating `box-shadow`? Typically, the answer is no because of performance issues.

Consider the following HTML:

```html
<div class="box">
	<h1>This is a heading</h1>
	<p>This is a paragraph</p>
</div>
```

The naive approach would animate the `box-shadow` property like so:

```css
.box {
	box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
	transition: transform 1s ease, box-shadow 1s ease;
}

.box:hover {
	box-shadow: 0 0.5rem 1rem -0.25em rgba(0, 0, 0, 0.3);
	transform: translateY(-0.35em) scale(1.02);
}
```

The problem with this approach is that the browser has to repaint the entire element every time the shadow changes.

Consider the following approach instead, which uses pseudo-elements and is much more performant:

```css
.box {
	position: relative;
}

.box::after {
	content: '';
	position: absolute;
	inset: 0;
	box-shadow: 0 0.5rem 1rem -0.25em rgba(0, 0, 0, 0.3);
	opacity: 0;
	transition: opacity 1s ease;
}

.box:hover::after {
	opacity: 1;
}
```

Notice how we use the `::after` pseudo-element to bring the finished shadow in ahead of time. We then use `opacity` to hide it until we hover over the element.

### Box Shadow Hacks

#### Multiple Borders

You can use multiple box shadows to create multiple borders.

You want the offsets and blur radius to be 0, and the spread radius should be the width of the border.

As you add more box-shadows, remember to include the previous spread radiuses in your calculations.

So if you want 3 borders of width 10px, 20px, and 30px, you would do the following:

`10, 10 + 20 = 30, 30 + 30 = 60`

```css
.box {
	box-shadow: 0 0 0 10px red, 0 0 0 30px blue, 0 0 0 60px green;
}
```

Since box-shadows aren't part of the box model or the regular document flow, they could hide other elements. If so, use inset box-shadows instead (may want to increase the `padding` of the element).

#### Modal Background Fade

You can use a box-shadow with an enormous spread to create a faded background for modals.

```css
.modal {
	position: absolute;
	width: 70vw;
	height: 70vh;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	display: grid;
	place-items: center;
	opacity: 0;
	z-index: -1;
	box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5);
}

.is-open {
	opacity: 1;
	z-index: 10;
}
```

#### Peeled Corners

You can use pseudo elements and box-shadows to create peeled corners.

```css
.box {
	background: white;
	padding: 2.5em;
	position: relative;
}

.box::before,
.box::after {
	content: '';
	position: absolute;
	top: 90%;
	bottom: 20px;
	box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
	z-index: -1;
}

.box::before {
	left: 5px;
	right: 45px;
	transform: rotate(-3deg);
}

.box::after {
	left: 45px;
	right: 5px;
	transform: rotate(3deg);
}
```

## CSS Background Images

### Syntax

The `background-image` property takes a URL as its value to specify the image to use.

It can also accept multiple URLs separated by commas.

Consider the following HTML and CSS:

```html
<div class="bg-image"></div>
```

```css
.bg-image {
	background-image: url('//unsplash.it/800');
}
```

You'll notice that the image is not visible. This is because the `background-image` property is being set on an empty element that has no content.

So, it either needs content, `width` or `height`, or even `padding` to be visible.

```css
.bg-image {
	background-image: url('//unsplash.it/800');
	padding: 20em;
}
```

From there, if the image is too small, it will repeat itself. You can use the `background-repeat` property to control this.

You can also use `background-size` to control the size of the image. It's important to know that the size will be based on the size of the element, not the image itself.

So `background-size: 100%` will make the image the same size as the element horizontally. It won't do it vertically because that's based on how tall the image actually is.

Since it's a shorthand, you can also do `background-size: 100% 50px` to make the image only 50px tall.

```css
.bg-image {
	background-image: url('//unsplash.it/800');
	background-repeat: no-repeat;
	background-size: 100%;
	padding: 20em;
}
```

`background-position` is the next property you can use to control where the image is positioned.

It takes two values, the first for the horizontal position, and the second for the vertical position.

The values can be in pixels, percentages, or keywords like `top`, `bottom`, `left`, `right`, and `center`.

-   `background-position: center center` will center the image
-   `background-position: bottom left` will position the image in the bottom left corner

If you're not using `center`, you can also add pixel values for fine tuning.

For example, the following CSS will position the image 10px off the top left corner.

```css
.bg-image {
	background-image: url('//unsplash.it/800');
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: top 10px left 10px;
	padding: 20em;
}
```

### Cover

The most typical use case for `background-image` is to use it with `background-size: cover`.

This will make the image cover the entire element, and it will maintain its aspect ratio.

```css
.bg-image {
	background-image: url('//unsplash.it/800');
	background-size: cover;
	padding: 20em;
}
```

However, be careful combining `background-size: cover` with `background-position`.

Since `background-size: cover` makes the image cover the entire element, setting `background-position` to `top left` for example, will make the top left of the image the new focal point. So the image will look off center and be cut off.

## CSS Tricks

### Aspect Ratio

`aspect-ratio` is a new property that allows you to specify the aspect ratio of an element.

It is useful for creating perfect squares, responsive videos, or if you want a 16 / 9 iframe.

```css
.square {
	width: 2rem;
	aspect-ratio: 1 / 1;
}

.video {
	max-width: 100%;
	aspect-ratio: 16 / 9;
}
```

### Clipping an Image to Text

To clip an image to text, use the `background-clip` property on the text itself.

Try to use a very large font face and size.

```css
h1 {
	font-size: 15vw;
	background-image: url('//unsplash.it/800');
	background-size: cover;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
}
```

### Smooth Scrolling

To enable smooth scrolling, use the `scroll-behavior` property on the `html` element.

```css
html {
	scroll-behavior: smooth;
}
```

Also, to add some padding in case the scrolling isn't perfect, use `scroll-padding-top`.

```css
html {
	scroll-behavior: smooth;
	scroll-padding-top: 200px;
}
```

### Change Navigation Style on Scroll

To change the navigation style on scroll, we can use Intersection Observer.

First, create a navigation with custom CSS properties.

```css
header {
	--text: #f4f4f4;
	--text-inverse: #333;
	--background: transparent;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2em 3em;
	transition: background 250ms ease-in;
	background: var(--background);
	color: var(--text);
}

.nav-scrolled {
	--text: #333;
	--text-inverse: #f4f4f4;
	--background: #f4f4f4;

	box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
}
```

Now, all we have to do is add the `nav-scrolled` class to the navigation when the user scrolls down.

```js
const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const sectionOneOptions = {
	rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(
	([entry], sectionOneObserver) => {
		if (!entry.isIntersecting) {
			header.classList.add('nav-scrolled');
		} else {
			header.classList.remove('nav-scrolled');
		}
	},
	sectionOneOptions
);

sectionOneObserver.observe(sectionOne);
```

### Lazy Loading Images

To lazy load images, we can use the `loading` attribute on the `img` element.

```html
<img src="image.jpg" loading="lazy" alt="Image" />
```

### Outline Offsets

We can use the `outline-offset` property to offset the outline of an element.

This can create a cool inwards border effect on an element.

```css
.element {
	outline: 5px solid #333;
	outline-offset: -15px;
}
```

### Dark Mode Media Query

We can use the `prefers-color-scheme` media query to detect if the user has dark mode enabled.

```css
@media (prefers-color-scheme: dark) {
	:root {
		/* dark mode styles */
	}
}
```

### :focus-visible

The `:focus-visible` pseudo class is a pseudo class that allows you to style elements that are focused by the user.

With `:focus`, clicking on a button and then moving away from it will still keep the button focused. This can be annoying for users.

`:focus-visible` will only focus the element when the user clicks on it, and will remove the focus when the user moves away from it.

```css
button:focus-visible {
	/* styles */
}
```

### Skip to Main Content

In the current age of accessibility, it is important to make sure your website is accessible to everyone.

An essential part is including a "skip to main content" link for users who use screen readers or only the keyboard.

Ideally, it should come before the navigation.

```html
<header>
	<a class="skip" href="#main-content">Skip Navigation</a>
	<nav class="nav">
		<!-- navigation -->
	</nav>
</header>
<main id="main-content">
	<!-- main content -->
</main>
```

Typically, we should also add smooth scrolling. See [Smooth Scrolling](#smooth-scrolling).

Afterwards, we need to hide the link from sighted users.

We will use `transform` to move it off the screen, and not `top` because we want to animate it, which is much more performant with `transform`.

```css
.skip {
	position: absolute;
	transform: translateY(-120%);
	transition: transform 325ms ease-in;
}

.skip:focus {
	transform: translateY(0);
}
```

### Custom Scrollbars

To create a custom scrollbar, we can use the `::-webkit-scrollbar` pseudo element.

It's important to note that `margin-left` and `margin-right` will not work with custom scrollbars. Use `margin-top` and `margin-bottom` instead.

```css
/* Scrollbar is the overall scrollbar */
::-webkit-scrollbar {
	width: 2em;
}

/* Track is the container */
::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 100vw; /* pill shape trick */
	margin-block: 0.5em;
}

/* Thumb is the inside part */
::-webkit-scrollbar-thumb {
	background: #888;
	border: 0.5em solid #f1f1f1; /* makes it seem like it's fitting into the space*/
	border-radius: 100vw; /* pill shape trick */
}
```

You can also customize the scrollbar of a specific element.

```css
.element::-webkit-scrollbar
.element::-webkit-scrollbar-track
.element::-webkit-scrollbar-thumb
```

Use cautiously as this is not supported in Firefox.

### Dialog Element

The `dialog` element is a new HTML element that allows you to create a modal.

Consider the following html:

```html
<button class="button" data-class="open">Open Modal</button>

<dialog class="dialog" id="modal">
	<h2>An interesting title</h2>
	<p>Some interesting text</p>
	<p>Some more interesting text</p>
	<button class="button" data-class="close">Close</button>
</dialog>
```

By default, this will not be visible. A `dialog` element needs the `open` attribute to be visible. We can add this attribute with JavaScript.

There are two functions we can use to open the modal:

-   `dialog.show()`
-   `dialog.showModal()`

If we use `dialog.show()`, the dialog just shows up like a regular element and the user can still interact with the page.

If we use `dialog.showModal()`, the modal is in the center of the page, in front of everything, with the background slightly faded out. The user also cannot interact with the page until the modal is closed.

Also, with `dialog.showModal()`, we can automatically close the modal by clicking `Escape`.

```js
const modal = document.getElementById('modal');
const openButton = document.querySelector('[data-class="open"]');
const closeButton = document.querySelector('[data-class="close"]');

openButton.addEventListener('click', () => {
	modal.showModal();
});

closeButton.addEventListener('click', () => {
	modal.close();
});
```

We can also add the following JS to close the modal when the user clicks outside of it.

```js
document.addEventListener('click', e => {
	if (!modal.contains(e.target) && modal.open) {
		modal.close();
	}
});
```

Also, if we have a form inside the modal, specifying `method="dialog"` will automatically close the modal when the form is submitted.

```html
<form method="dialog">
	<!-- form -->
</form>
```

To style the backdrop, we can use the `::backdrop` pseudo element.

```css
dialog::backdrop {
	background: rgba(0, 0, 0, 0.5);
}
```

Also, it's common to use `max-width` on the modal to make sure it doesn't take up the entire screen.

We can also remove the default border with `border: 0`.

To do so, use the `:modal` pseudo class.

```css
:modal {
	max-width: 30em;
	border: 0;
}
```

### Lowering Background Image Opacity

We can use the `background-blend-mode` property to lower the opacity of a background image.

```css
.element {
	background-image: url('image.jpg');
	background-color: #333;
	background-blend-mode: multiply;
}
```

### Pill Shapes

We can use the `border-radius` property to create pill shapes.

```css
.element {
	border-radius: 100vmax; /* will always get a pill shape */
}
```

### Breaking out of Containers

While it's not recommended, we can break our child of their container if we need it to expand the full width and do not have access to the HTML.

You may need `overflow-x: hidden` on `html` to prevent horizontal scrolling.

There are two ways to do it. The first way is if you also want your content too break out of the container.

```css
html {
	overflow-x: hidden;
}

.child {
	width: 100vw;
	margin-inline-start: 50%;
	transform: translateX(-50%);
}
```

This second way is if you only want your background to break out of the container.

```css
.child {
	box-shadow: 0 0 0 100vmax var(--bg-color);
	clip-path: inset(0 -100vmax);
}
```

### Clamping Text

We can use `line-clamp` to clamp text to a certain number of lines.

```css
h1 {
	display: -webkit-box;
	-webkit-line-clamp: 3; /* number of lines */
	-webkit-box-orient: vertical;
	overflow: hidden;
}
```

### Responsive Tables

Tables, while not as modern, are still useful to understand in the realm of CSS.

The biggest issue with tables is that they do not scale well on mobile. So, we are going to look at tables and how they fit in responsive design.

Semantically, we want to use the following HTML:

```html
<main>
	<div class="wrapper">
		<h1>Responsive Tables</h1>
		<table>
			<caption>Table Title</caption>

			<thead>
				<tr>
					<th>Column 1</th>
					<th>Column 2</th>
					<th>Column 3</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>...</td>
					<td>...</td>
					<td>...</td>
				</tr>
				<tr>
					<td>...</td>
					<td>...</td>
					<td>...</td>
				</tr>
				<!-- Remaining data -->
			</tbody>
		</table>
	</div>
</main>
```

Notice the use of the `caption` element, used primarily with tables.. This titles our `table` and is important for accessibility.

From there, we can add very little CSS for just a nicer look.

```css
table {
	background: #323232;
	border-collapse: collapse;
}

th,
td,
caption {
	padding: 1rem;
}

caption,
th {
	text-align: left;
}

th {
	background-color: hsl(0 0% 0% / 0.5);
}

tr:nth-of-type(2n) {
	background-color: hsl(0 0% 0% / 0.1);
}
```

Notice the `border-collapse: collapse` property. This removes the annoying spaces between the cells, which we can control ourselves now with `padding`.

Also, we are using `:nth-of-type(2n)` to style every second row. This separates the rows a bit more for readability.

Now, we can finally look at how to make this responsive.

The first solution is very easy, but isn't the most flexible.

Wrap the table in a parent `div` with the class `table-container`. Then, add the following CSS.

```css
.table-container {
	max-width: 100%;
	overflow-x: auto;
}
```

While this works, you have to scroll down to get to the scrollbar, and scrolling itself is not the best experience.

For a much better solution, use the following media query.

```css
@media (width <= 650px) {
	th {
		display: none;
	}

	td {
		display: block;
		padding: 0.75rem 1rem;
	}

	td:first-child {
		padding-block-start: 2rem;
	}

	td:last-child {
		padding-block-end: 2rem;
	}

	td::before {
		content: attr(data-cell) ': ';
		font-weight: 700;
		text-transform: capitalize;
	}
}
```

The keys here are the `display: none` on the `th` and `display: block` on the `td`. This will make the table look like a list.

By utilizing data attributes, we can add the column name as a `::before` pseudo element before the content of the `td`.

While this is great for responsiveness, `display: block` on `td` is not the best for accessibility. But we can adjust our HTML to fix this.

```html
<table role="table">
	<caption>Table Title</caption>

	<thead role="rowgroup">
		<tr role="row">
			<th role="columnheader">Column 1</th>
			<th role="columnheader">Column 2</th>
			<th role="columnheader">Column 3</th>
		</tr>
	</thead>

	<tbody role="rowgroup">
		<tr role="row">
			<td role="cell" data-cell="column 1">...</td>
			<td role="cell" data-cell="column 2">...</td>
			<td role="cell" data-cell="column 3">...</td>
		</tr>
		<tr role="row">
			<td role="cell" data-cell="column 1">...</td>
			<td role="cell" data-cell="column 2">...</td>
			<td role="cell" data-cell="column 3">...</td>
		</tr>
		<!-- Remaining data -->
	</tbody>
</table>
```

Notice the following role specifications:

-   `role="table"` on the `table` element
-   `role="rowgroup"` on the `thead` and `tbody` elements
-   `role="row"` on the `tr` elements
-   `role="columnheader"` on the `th` elements
-   `role="cell"` on the `td` elements

We now have a fully accessible table that is responsive.

### Typewriter Effect

To create a typewritter effect, we can utilize keyframes and animation.

Consider the following html:

```html
<h1>Hello, my name is Alkarim.</h1>
<p class="subtitle">Welcome to my website!</p>
```

Before doing anything, it's important to set the `font-family` to a monospace font. This will ensure that the letters are all the same width. It cannot be done otherwise.

Also, make sure you set the following CSS on your text element, since it will likely be a block-level element.

```css
h1 {
	width: max-content;
}
```

This way, our animation will stop when the text is done, rather than continue the entire width of the page.

From there, we can utilize `::before` and `::after` pseudo elements to hide the text initially.

```css
h1::before,
h1::after {
	content: '';
	position: absolute;
	inset: 0;
}

h1::before {
	background-color: var(--bg-color);
}
```

It's important to note that the `::before` pseudo element must have the same background color as the element itself to hide the text.

From there, we can create the `@keyframes` for the animation. Notice that we can omit the `from` since it is the same as the initial state.

```css
@keyframes typewriter {
	to {
		left: 100%;
	}
}
```

Now, we just need to apply the animation to the `::before` pseudo element. But before doing so, let's add some CSS custom properties to `:root` to add flexibility.

```css
:root {
	--speed: 4s;
	--characters: 26;
}
```

The `--characters` property is the number of characters in the text, including whitespace and punctuation. This is important for the `steps()` function.

However, we can add very simple JavaScript to calculate this for us.

```js
const root = document.documentElement;
const heading = document.querySelector('h1');

const setCharacters = () => {
	const characters = heading.textContent.split('');

	root.style.setProperty('--characters', characters.length);
};

setCharacters();
```

Now, we can apply the animation to the `::before` pseudo element.

```css
h1::before {
	background-color: var(--bg-color);
	animation: typewriter var(--speed) steps(var(--characters)) forwards;
}
```

Notice the use of `forwards` to keep the text visible after the animation is done.

This is pretty much it. However, we can go a step further and add a blinking cursor.

```css
h1::after {
	width: 0.125em;
	background-color: black;
	animation: typewriter var(--speed) steps(var(--characters)) forwards;
}
```

Notice that we are using the same animation as the `::before` pseudo element. This is because we want the cursor to be in sync with the text.

However, we can go even further and add a blinking effect to the cursor. Add the following `@keyframes` to your CSS, as well as a custom property for the speed of the blinking.

```css
:root {
	--speed: 4s;
	--characters: 26;
    --blinkSpeed: 750ms;
}

@keyframes blink {
	to {
		background-color: transparent;
	}
}
```

Then, change the animation on the `::after` pseudo element to the following.

Also, add a small 1s delay to the `::before` and `::after` typewriter animations so that the blinking cursor blinks before the text begins to reveal.

```css
h1::before {
	background-color: var(--bg-color);
	animation: typewriter var(--speed) steps(var(--characters)) 1s forwards;
}

h1::after {
	width: 0.125em;
	background-color: black;
	animation: typewriter var(--typewriterSpeed)
			steps(var(--typewriterCharacters)) 1s forwards,
		blink var(--blinkSpeed) steps(var(--typewriterCharacters)) infinite;
}
```

And that's it! We now have a typewriter effect with a blinking cursor.
