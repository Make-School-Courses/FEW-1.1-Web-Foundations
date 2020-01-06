<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 3

<div>CSS Intro</div>

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/lesson1.html ':ignore')

<!-- > -->

### Learning Objectives

1. Describe CSS it's use and syntax
1. Use CSS styles to define the appearance of text on the screen
1. Use basic selectors to target styles to elements
1. Define a base font style for a document
1. Use flex box to arrange things in a page

<!-- > -->

### Why you should know this

CSS is powerful gives you full control of the appearance of everything you see on the screen. To be a front end engineer you need to be a master of CSS. 

<!-- > -->

## CSS Intro

<!-- v -->

### In Context

CSS is part of the sepration of concerns that make up web development.

- **HTML** - Defines the structure
- **CSS** - Applies presentation 
- **JavaScript** - Handles the business logic

We have a separate language that is specialized for each purpose. 

<!-- v -->

### An Analogy

Here is an analogy. 

- **HTML** - The bones
- **CSS** - The Skin 
- **JavaScript** - The Muscles

<!-- v -->

### CSS - The Language

Styles are written in the CSS language. 

You can write CSS styles in

- files with the `.css` file extention
- in the `<style></style>` tag in an HTML document
- inline styles using the `style=""` attribute

<!-- > -->

## Style Rules

<!-- v -->

### Example

CSS is written as style rules that might look like this: 

```CSS 
body {
  margin: 0;
  font-family: Helevtica;
  font-size: 14px;
  background-color: #eee;
  color: #444;
}
```

<!-- v -->

### Selector

A rule begins with a selector

```CSS 
p { /* <-- Selector */
  ...
}
```

This is a selector. This rule applies to all `<p>` tags in a document. 

<!-- v -->

### Properties and Values

These are properties and values. 

```CSS 
margin: 0;
font-family: Helevtica;
font-size: 14px;
background-color: #eee;
color: #444;
```

Properties and values are always separated by a colon. 

Property names in CSS are always kabob-case

**And end with a semicolon!**

<!-- v -->

### Types of Values

There are variety of possible values some require a unit.  


<table><tr><td width="50%">

- `0` - doesn't need a unit
- `Helevtica` - Font Name
  - "Times New Roman" - When a value contains spaces use the quotes
- `14px` - px = Pixels
- `#eee` - hex color

</td><td width="50%">

- `1fr` - fr = fraction
- `2em` - em (same as the font size)
- `4rem` - root em (based on root font size)
- `50%` - fifty percent
</td></tr></table>

<!-- v -->

### Example

A style rule starts with a selector. And contains a list of property value pairs. 

```CSS
selector {
  property: value;
}

p {
  font-size: 1em;
}
```

<!-- > -->

## Putting CSS into Practice

<!-- v -->

CSS will take a long time to master. 

We will start with basic concepts which you can expand upon to build your skills. 

The web is mostly text. Controlling typography will be an important skill. 

<!-- v -->

### Inheritance

Most properties are inherited by descendants. 

HTML/DOM defines the structure of a page.

```HTML
<body>
  ...
  <p>...</p>
  ...
</body>
```

`<body>` is the ancestor and `<p>` is a descendant. 

<!-- v -->

All other tags would get a font size of 16px and a font family of Helvetica. 

```CSS
body {
  font-size: 16px;
  font-family: Helvetica;
}
```

Sort of...

Other elements may have styles that **override** the style they inherit. 

Other rules my effect how the inherited value is calculated.

<!-- v -->

When we set font-size we often set the size in `em`s. This is a relative unit. It represents a multiple of the current font size. 

```CSS
body {
  font-size: 16px;
  font-family: Helvetica;
}

h1 { 
  font-size: 2em; /* 32px = 2 * 16px */
}
```

<!-- v -->

**Best practice**

Set your base font-size on the body tag and use ems to size all other elements. 

```CSS
body {
  font-size: 18px;
}
```

Changes to the body will cause all other elements to keep their relative sizes. 

<!-- v -->

### Activity

<div>Style the Android phones & Tablets page.</div>

<!-- v -->

Take a look at the Android Phones & Tablets page. 

https://www.android.com/phones-tablets/

Look at the source code from our example here: 

https://github.com/soggybag/learn-markup-level-2/blob/master/challenge-01-solution.html

<!-- v -->

The page is divided into sections. Each section begins with header and the header contains an  h2 followed by an h3. 

On the Android site h2 is smaller than the h3. 

<!-- v -->

Add some styles to this page. 

```css
body {
  font-family: Helvetica;
  font-size: 16px;
}

h1 { 1em }
h2 { 1em }
h3 { 4.5em }
```

Changing the font size on the body will change the size of the fonts relatively on the other elements.

<!-- > -->

### Wrap Up (5 min)

- Work on the [Single Page Project](../assignments/assignment-03.md)

<!-- > -->

### Additional Resources

1. Links to additional readings and videos
