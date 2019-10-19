<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 4 - CSS Box Model + Flex

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Learning Objectives

1. Describe the Box Model
1. Use the box model to create a box of any size
1. Identify the properties that make up the box model

<!-- > -->

## Why you should know this?

The box model is at the foundation of understanding layout with CSS. It also shows up on front end interviews. 

<!-- > -->

## What is the Box Model? 

<!-- > -->

<div>It's the formula used to determine the size of a box in the browser.</div>

<!-- > -->

<div>How is the box model calculated?</div> 

<!-- > -->

margin + border + padding + width + padding + border + margin

<div style="background-color:yellow; padding: 10px">
  <div style="width:200px;padding:10px;border:4px solid;margin:10px;background-color: red">Content</div>
</div>


<small style="color: red">268px = 20px + 4px + 10px + 200px + 10px + 4px + 20px</small>

<!-- > -->

Inline vs block

<div style="background-color:yellow; padding: 10px">
  <div style="text-align:left;padding:10px;border:4px solid;margin:10px;background-color: red">
    <span>A span tag</span> <strong>A strong tag</strong> <em>an em tag</em>
  </div>
</div>

Inline tags line up left to right like you would write text on a page. They wrap at the end of a line like these words. 

<!-- > -->

Inline vs block

<div style="background-color:yellow; padding: 10px">
  <div style="width:200px;padding:10px;border:4px solid;margin:10px;background-color: red">Content</div>
</div>

Blocks are boxes that normally stack each below the previous. 

<!-- > -->

## Flex

<!-- > -->

Flex box is a system for arranging elements within a parent.

A parent with the `display:flex` arranges it's children along an axis. 

<!-- > -->

Here are three divs with a height of 40 and 5px margin. Normally they stack up like this. 

<div style="border: 1px solid; padding: 1em;">
  <div style="height: 40px; background-color: red; margin: 5px;"></div>
  <div style="height: 40px; background-color: red; margin: 5px;"></div>
  <div style="height: 40px; background-color: red; margin: 5px;"></div>
</div>

<!-- > -->

Here are three divs with a height of 40 and 5px margin. Normally they stack up like this. 

<div style="border: 1px solid; padding: 1em;">
  <h3 style="height: 40px; background-color: red; margin: 5px;">Hello World</h3>
  <p style="height: 40px; background-color: red; margin: 5px;">Hello World</p>
  <blockquote style="height: 40px; background-color: red; margin: 0px 0; padding: 0">Hello World</blockquote>
</div>

<!-- > -->

4. CSS - Box Model
  - What is a box? 
    - Inline vs Block
  - Defining the box model
    - width/height, padding, border, margin
    - box-sizing border-box
  - Units
    - em/rem
    - %
    - px
  - Using borders
    - border-radius
  - Using margin
    - body margin
  - Using padding
    - border-box vs content-box
  - Using box-shadow
  - Activity:
    - Sizing boxes adding borders
    - making interesting boxes
    - styling inputs and buttons
    - Styling form inputs
  - HW: 
    - Work on your web page
    - Style the form

<!-- > -->

<aside class="notes">

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

</aside>

<!-- > -->

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
