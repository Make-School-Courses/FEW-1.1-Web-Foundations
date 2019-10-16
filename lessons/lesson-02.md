<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 2

<div>Forms, Links, and Images</div>

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<aside class="notes">
  I'm inivisible on the slides
</aside>


<!-- > -->

## Learning Objectives

1. Describe Attributes 
1. Use HTML tags and their attributes
1. Use HTML forms and form elements

<!-- > -->

## Why you should know 

The ability to generate well written and valid HTML is a requirement for any front end developer. You want to be solving bigger problems rather than tripping over HTML syntax. 

<!-- > -->

## Attributes

<!-- > -->

Tags can be modified/enhanced using attributes. 

An attribute goes in the opening tag and is always in the form `name="value"`. Values are always quoted.

```html

<div class="warning">Hellp!</div>


```

<!-- > -->

Tags can have as many attributes as you care to inlcude. 

```html

<img src="alien.png" width="64" height="64">
<input type="text" name="first-name" id="input-name">


```

Values are quoted even if they are numbers.

The order doesn't matter.


<!-- > -->

Many tags have attributes specific to them. 

<!-- > -->

### img

<!-- > -->

The img tag displays an image. 

Semantically by using the `<img>` tag you saying there is a picture of something. This is different from images that are part of the design. 

<!-- > -->

The `<img>` has a few attributes: 

- src
- alt
- width & height

```html

<img src="apples.png" width="400" height="200" alt="Apple Tree">


```

<!-- > -->

### input

<!-- > -->

The input tag is used to create a form input. It can appear in many different ways. It's important attributes are: 

- type
- name

```html

<input type="text" name="query">


```

<!-- > -->

`<input>` has a lot of possible types: 

- text - a text input

<input type="text" style="font-size:1.5em">

`<input type="text">`

<!-- > -->

`<input>` has a lot of possible types: 

- email - email input

<input type="email" style="font-size:1.5em">

`<input type="email">`

<!-- > -->

`<input>` has a lot of possible types: 

- password - password input

<form>
  <input type="password" style="font-size:1.5em">
  <input type="submit">
</form>

`<input type="password">`

<!-- > -->

`<input>` has a lot of possible types: 

- number - numeric input

<form>
  <input type="number" style="font-size:1.5em">
  <input type="submit">
</form>

`<input type="number">`

<!-- > -->

`<input>` has a lot of possible types: 

- range - a numeric range
- min - minimum value of the range
- max - maximum value of the range

<form>
  <input type="range" min="1" max="6" style="width:200px;height:40px">
</form>

`<input type="number" min="1" max="6">`

<!-- > -->

`<input>` has a lot of possible types: 

- color - color picker input

<form>
  <input type="color" style="width:100px; height:50px">
</form>

`<input type="color">`

<!-- > -->

Radio buttons are groups of buttons where only one of the group can be selected at any time. 

`<input>` has a lot of possible types: 

- radio - choose one

<form>
  <input type="radio" name="size" style="font-size:1.5em">
  <input type="radio" name="size" style="font-size:1.5em">
  <input type="radio" name="size" style="font-size:1.5em">
</form>

```html
<input type="radio" name="size">
<input type="radio" name="size">
<input type="radio" name="size">
```

<!-- > -->

Form elements should have a label. The label needs to be associated with the element. 

`<label>Medium</label>`

Labels make your checkboxes and radio buttons make more sense. They also help clarify your text inputs. 

<!-- > -->
<div style="display:flex">
<form style="width:250px">
  <p>
    <label>
      <input type="radio" name="size" style="font-size:1em">
      Small
    </label>
  </p>
  
  <p>
    <label>
      <input type="radio" name="size" style="font-size:1em">
      Medium
    </label>
  </p>

  <p>
    <label>
      <input type="radio" name="size" style="font-size:1em">
      Large
    </label>
  </p>
</form>

```html
<form>
  <p>
    <label>
      <input type="radio" name="size">
      Small
    </label>
  </p>
  
  <p>
    <label>
      <input type="radio" name="size">
      Medium
    </label>
  </p>

  <p>
    <label>
      <input type="radio" name="size">
      Large
    </label>
  </p>
</form>
```
</div>

<!-- > -->
<div style="display:flex">
<form style="width:250px">
  <p>
    <label>
      <input type="checkbox" name="size" style="font-size:1em">
      Caffeinated
    </label>
  </p>
  
  <p>
    <label>
      <input type="checkbox" name="size" style="font-size:1em">
      Notified
    </label>
  </p>

  <p>
    <label>
      <input type="checkbox" name="size" style="font-size:1em">
      Has Soul
    </label>
  </p>
</form>

```html
<form>
  <p>
    <label>
      <input type="checkbox">
      Caffeinated
    </label>
  </p>
  
  <p>
    <label>
      <input type="checkbox">
      Notified
    </label>
  </p>

  <p>
    <label>
      <input type="checkbox">
      Has Soul
    </label>
  </p>
</form>
```

</div>

<!-- > -->

### Anchors

<!-- > -->

Anchors are text links that that load new docuemnts. These the proverbial **hyperlinks**.

`<a href="http://google.com">Google</a>`

The `href` attribute sets the url the link loads. 

<!-- > -->

Anchors/hyperlinks can link to elements in the same document. 

```html
<a href="#weather-report">Todays Weathwer</a>

...

<article id="weather-report">...</article>
```

The `href="#weather-report"` moves the element with the `id="weather-report"` to the top of the page. 

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## **10min** BREAK 

<!-- > -->

## Homework

1. Lesson 2 Challenges 
2. Watch videos for lesson 3

<!-- > -->

## Wrap Up

1. What is an attribute?
1. What is the syntax for attributes?
1. How to display an image? 
  - What are the attributes involved?
1. What is an input? 
  - What types are there?

<!-- > -->

## Additional Resources

1. 

<!-- > -->

<aside class="notes">

## Minute-by-Minute

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
