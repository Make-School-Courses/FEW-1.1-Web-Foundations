<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 11 - 

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > --> 

## Quiz

Quick take this quiz

https://repl.it/classroom/invite/i6Z79Ho

<!-- > -->

## Quick review 

- synchronous
- asynchronous
- Runtime
- call stack 
- event loop

<!-- > -->

## Call Backs

What's a callback? It's a function that you pass to another function that will be executed in the later. Most often callbacks are used for asynchronous processes.
  
<!-- > -->

## Callback examples: setTimeout()

The `setTimeout()` function takes two parameters: a callback and a number that represents time in milliseconds. The callback function is executed after a delay. 

`setTimeout(callback, time)`js

```JS
setTimeout(function () {
  // Do something 2 secs later
}, 2000)
```

https://repl.it/@MitchellHudson/callbacks

<!-- > -->

## Callback example: addEventListener() 

`el.addEventListener(eventStr, callbackHandler)`JS

```JS
el.addEventListener('click', function(e) {
  // Do something when clicked
}) 
```

<!-- > -->

## Review Tutorial Questions 

- Where are you at in the current tutorial? 
- What questions if any did you have about the tutorial? 
- Did you have any problems with the tutorial? 

<!-- > -->

## Callback Example: fetch()

This is a more complex example since fetch takes a apth and returns a Promise. A Promise is an object that has a method `then()` which takes a callback. 

`fetch(path).then(callback)`JS

or 

```JS
const p = fetch(path)
p.then(callback)
```

```JS
const p = fetch('https://openweathermap.com...')
p.then(function(response) {
  // Do something with response
})
```

<!-- > -->

## After Class 

Start the final project. See the assignment description for the final in the link below. 

[Fianl Assignment](../assignments-08.md)

<!-- > -->

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

