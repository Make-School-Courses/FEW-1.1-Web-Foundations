<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 11 - 

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > --> 

## Quiz 

Quick take this quiz

https://repl.it/classroom/invite/ZLKqpSw

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

<!-- > -->

## Callback example: addEventListener() 

`el.addEventListener(eventStr, callbackHandler)`JS

```JS
el.addEventListener('click', function(e) {
  // Do something when clicked
}) 
```

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
  // Do soemthing with response
})
```

<!-- > -->

## Review Tutorial Questions 

- Where are you at in the current tutorial? 
- What questions if any did you have about the tutorial? 
- Did you have any problems with the tutorial? 

<!-- > -->



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


<!-- > -->

## Why you should know this or industry application (optional) (5 min)

Explain why students should care to learn the material presented in this class.

<!-- > -->

## Learning Objectives (5 min)

1. Identify and describe
1. Define
1. Design
1. Implement

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
