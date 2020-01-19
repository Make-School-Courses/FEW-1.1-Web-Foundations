<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 4 - CSS Box Model + Flex

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/lesson1.html ':ignore')

<!-- > -->

### Learning Objectives

1. Describe the Box Model
1. Use the box model to create a box of any size
1. Identify the properties that make up the box model

<!-- > -->

### Why you should know this

The box model is at the foundation of understanding layout with CSS. It also shows up on front end interviews. 

<!-- > -->

## What is the Box Model? 

<!-- v -->

<div>It's the formula used to determine the size of a box in the browser.</div>

<!-- v -->

### How is the box model calculated?

margin + border + padding + width + padding + border + margin

```css
div {
    border: 4px solid black;
    margin: 20px;
    padding: 10px;
}
```

<div style="background-color:#ccc; padding: 10px">
  <div style="width:auto;padding:10px;border:4px solid;margin:10px;background-color: lightblue; text-align: left">Content</div>
</div>

<small style="color: red">268px = 20px + 4px + 10px + 200px + 10px + 4px + 20px</small>

<!-- v -->

Inline vs block

<div style="background-color:yellow; padding: 10px">
  <div style="text-align:left;padding:10px;border:4px solid;margin:10px;background-color: red">
    <span>A span tag</span> <strong>A strong tag</strong> <em>an em tag</em>. Inline elements wrap when they reach the width of the available space.
  </div>
</div>

Inline tags line up left to right like you would write text on a page. They wrap at the end of a line like these words. 

Blocks contain inline elements. 

<!-- v -->

Inline vs block

<div style="background-color:yellow; padding: 10px">
  <div style="width:auto;padding:10px;border:4px solid;margin:10px;background-color: red">Some content</div>
  <div style="width:auto;padding:10px;border:4px solid;margin:10px;background-color: red">More content</div>
</div>

Blocks are boxes that normally stack each below the previous. 

<!-- v -->

The background color fills a box to the border.

Margin push the box away from its neighbors.

```CSS
div {
  padding:10px;
  border:4px solid #000;
  margin:10px;
  background-color: red;
}
```

<div style="background-color:yellow; padding: 10px">
  <div style="width:auto;padding:10px;border:4px solid;margin:10px;background-color: red">Some content</div>
</div>

<!-- > -->

## Borders

<!-- v -->

A border only shows after you set both the width and the style: 

```CSS 
div {
  border-width: 4px;
  border-style: solid;
}
```
