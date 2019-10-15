<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 3

<div>CSS Intro</div>

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Learning Objectives

1. Describe CSS it's use and syntax
1. use CSS styles to define the appearance of text on the screen
1. Use basic selectors to target styles to elements

<!-- > -->

## Why you should know this

CSS is powerful and is ful control of the appearacne of everything you see on the screen. To be a front end engineer you need to be a master of CSS. 

<!-- > -->

## CSS Intro

<!-- > -->

CSS is part of the sepration of concerns that make up web development. 

- **HTML** - Defines the structure
- **CSS** - Applies presentation 
- **JavaScript** - Handles the business logic

<!-- > -->

We have a separate language that is specialized for each purpose. 

<!-- > --> 

Here is an analogy. 

- **HTML** - The bones
- **CSS** - The Skin 
- **JavaScript** - The Muscles

<!-- > -->

### Applying Styles

<!-- > -->

Styles are written in the CSS language. 

You can write CSS styles in 

- files with the `.css` file extendtion. 
- in the `<style></style>` tag in an HTML document.
- style attribute of a tag.

<!-- > -->

CSS is written as style rules that look like this: 

```CSS 
body {
  margin: 0;
  font-family: Helevtica;
  font-size: 14px;
  background-color: #eee;
  color: #444;
}
```

<!-- > -->

Style rules can be taken apart. 

```CSS 
body {
  ...
}
```

This is a selector. This rule applies to all body tags in a document. 

<!-- > -->

These are properties and values. 

```CSS 
margin: 0;
font-family: Helevtica;
font-size: 14px;
background-color: #eee;
color: #444;
```

Properties and values are always separated by a colon. 

**And end with a semicolon!**

<!-- > -->

Values are often followed by a unit. 


- 0 - doesn't need a unit
- Helevtica - Font Name
- 14px - px = Pixels
- #eee - hex color
- 1fr - fr = fraction
- 2em - em (based on font size)
- 4rem - root em (based on root font size)
- 50% - fifty percent

<!-- > -->

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

<!-- > -->

CSS will take a long time to master. 

We will start with basic concepts which you can expand upon to build your skills. 

The web is mostly text. Controlling typography will be an important skill. 

<!-- > -->

**Inheritance** 

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

<!-- > -->

All other tags would get a font size of 16px

```CSS
body {
  font-size: 16px;
}
```

Sort of...

<!-- > -->

All tags get a default style from the browser. When it comes to font size this is usually a size in ems. 

Think of an em as a multipler of the inherited font size. 

If the size on the body is 16px. 

Then a p with a font-size 1em would be 16px. 

An h1 with a font-size of 2em would 32px. 

<!-- > -->

### Activity 

Font Sizes and ems

<!-- > -->



3. CSS - Intro 
  - Assessment: Semantic HTML assessment
    - Mark up the provided text to the best of your ability
    - Choose the right tag for each element
    - Use tags to provide as much context as possible
    - Validate your work
    - Use correct syntax 
    - Write boiler plate HTML5
  - Adding CSS Files to a page
    - Add a style tag
    - Link to an external stylesheet
      - Link rel stylesheet href
  - CSS syntax and selectors
    - Rules properties and values
    - Selectors 
      - element/type, class, id, pseudo classes 
  - Strategies - Fonts 
    - base font style 
    - heading styles 
    - inline element styles 
      - mark
      - strong 
      - em
    - link styles 
    - .lead style 
    - .muted style 
    - Style Properties 
      - color
      - font-family
        - Font stacks and available fonts 
      - font-size 
      - font-weight
      - text-decoration
      - background color
      - line-height
      - character-spacing
  - Activity:
    - Style previous markup examples
    - Style some block quotes 
    - Style a page with headings and various content something liek a Medium article
  - HW: Style documents
    - Style apps from lesson 2
      - Include examples that require a range of selectors
        - element/type, class, id, pseudo classes 
    - Style your web page



## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:30      | In Class Activity I       |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | In Class Activity II      |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         |

<!-- > -->



## Initial Exercise (15 min)

- Funny comic
- Prime the Pump (e.g. think and jot, think pair share, etc)
- Productivity Tip/Tool
- Review of current event (e.g. tech news relevant to your track/topic)
- Quiz on homework or topic(s) of past class
- Concept Test

<!-- > -->

# Topic 1

<!-- v -->

## Overview/TT I (20 min)

- Why learn this?
- Industry examples of usage
- Best practices
- Personal anecdote

<aside class="notes">
Place more detailed information or speaker notes in "aside" elements - it will appear in GitHub Pages but not in the slides.
</aside>

<!-- v -->

## In Class Activity I (30 min)

- I do, We do, You do
- Reading & Discussion Questions in small groups
- Draw a picture/diagram
- Complete Challenges solo or in pair
- Q&A about tutorials
- Pair up and code review
- Pair program
- Formative assessment
- Form into groups
- etc (get creative :D)

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

<!-- > -->

# Topic 2

<!-- v -->

## Overview/TT II (optional) (20 min)

<!-- v -->

## In Class Activity II (optional) (30 min)

<!-- > -->

## Wrap Up (5 min)

- Continue working on your current tutorial
- Complete reading
- Complete challenges

<!-- > -->

## Additional Resources

1. Links to additional readings and videos
