<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 9 

<!-- > -->

## Learning Objectives 

- Define your final project
- Use JS Promise to handle async actions
- load data over the network with JS

<!-- > -->

## Why learn this? 

Network and asynchronous operations are a big part of front end development. It's really important that you understand how this works. 

**Questions about asynchronous actions are some of the most common questions at interviews**

<!-- > -->

## What is synchronous?

> adjective: synchronous
> 1. existing or occurring at the same time. "glaciations were approximately synchronous in both hemispheres"
> 2. ASTRONOMY (of a satellite or its orbit) making or denoting an orbit around the earth or another celestial body in which one revolution is completed in the period taken for the body to rotate about its axis.

<!-- > -->

## What is asynchronous? 

> adjective: asynchronous
> 1. (of two or more objects or events) not existing or happening at the same time.
> 2. COMPUTING•TELECOMMUNICATIONS of or requiring a form of computer control timing protocol in which a specific operation begins upon receipt of an indication (signal) that the preceding operation has been completed.

<!-- > -->

Word Origins:

Greek: Sun - together, Greek Khronos - time

Greek: Sunkhronus

Synchronous together in time.

"not coinciding in time," 1735, from **a-** (3) "not, without" + **synchronous** "existing or happening at the same time."

Asynchronous Not together in time. 

<!-- > -->

## How does JavaScript code run? 

Quick read this: 

<!-- https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf -->

<!-- https://medium.com/better-programming/how-javascript-works-1706b9b66c4d -->

https://itnext.io/how-javascript-works-in-browser-and-node-ab7d0d09ac2f

Look for these topics in the article: 

- JavaScript Engine
- Stack 
- Heap
- Execution Context
- Execution Stack
- Event Queue
- Call back function
- Browser API

Pair and dicuss

<!-- > -->

## Fetch and Promise

`fetch()` is a global method used to make network requests. 

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

The `fetch()` method returns a Promise which is an object used to handle asynchronous operations. 

https://medium.com/@kevinyckim33/what-are-promises-in-javascript-f1a5fc5b34bf

In short when a function returns a Promise you can call the promise's `then()` method and provide a callback which the promise will execute if it completes successfully, you call the `catch()` method and provide a callback the promise will execute if it fails. 

**Read the paragraph above again**

Example: 

```JS
const p = fetch('path/to/resource')

p.then(myCallback)

function myCallback(response) { ... }
```

We can shorten this by chaining the function calls. 

```JS
fetch('path/to/resource').then(myCallback)

function myCallback(repsonse) { ... }
```

It could be shorter: 

```JS
fetch('path/to/resource').then(function (repsonse) { ... })
```

Make it look nice:

```JS
fetch('path/to/resource')
  .then(function (repsonse) { ... })
```

When using fetch there are two stages. The first stage returns a response from the serevr which is **just a connection**. The second stage is where you stream your data. In this step you are loading the data you have asked for. 

```JS
fetch('path/to/resource')
  .then(function (repsonse) {
    // tell the response object how to stream
    return response.json() // returns a promise!
  })
  .then(function(json) {
    // do stuff with json here
  })
```

Let's look at that without the callbacks: 

```JS
fetch().then().then()
```

Or 

```JS
fetch()
  .then() 
  .then()
```

## Challenge - Giphy

This challenge will be to remake the giphy web site with JavaScript. 

Follow the steps below. 

## Handle a submit event

Handle a submit event by listening to a **form**. 

```HTML
<form id="search-form">
  <input id="input-search" placeholder="Search">
  <button type="submit">Submit</button>
</form>
```

```JS
const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', submitSearch)

function submitSearch(e) {
  // The form was submitted!
}
```

Get the value input into the search form. In the `submitSearch` hanlder: 

```js 
function submitSearch(e) {
  // Get the value input in the search input
  const query = inputSearch.value
  
}
```

Call a function to fetch your data. You'll define this function in the next step.

```js 
function submitSearch(e) {
  const query = inputSearch.value
  fetchData(query)
}
```


## Fetching data from Giphy

The Giphy service provides gif images. Make a developer account and get an API key. 

https://developers.giphy.com/dashboard/

Make a function that will perform the search. pass it the search term.

```js
function fetchData(search = 'cats') {
  const api = 'yourApiKeyHere'
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}`

}  
```

The code above creates a path string that points to the giphy end point and contains the api key and search term. 

Write the network code in steps: 

```js
function fetchData(search = 'cats') {
  const api = 'yourApiKeyHere'
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}`

  fetch(path).then().then().catch()
}  
```

Call `fetch()` with the path to the endpoint. You need two `then()`s and one `catch()`. 

Provide a callback to the first `then()`. This callback receives a response object as a parameter and returns a Promise from `res.json()`.

```JS
fetch(path)
  .then(function(res) { return res.json() })
  .then()
  .catch()
```

Now add a callback to the second `then()`. You're calling this on the second promise returned from `res.json()`. This callback will call the `handleData()` function which you'll implement below. This callback receives `json` data from giphy. You'll pass the json data as an argument to the callback

```JS
fetch(path)
  .then(function(res) { return res.json() })
  .then(function(json) { handleData(data) })
  .catch()
```

Now handle any errors with with a callback in catch. This callback receives an error object as a parameter and logs the `err.message` to the console.

```JS
fetch(path)
  .then(function(res) { return res.json() })
  .then(function(json) { handleData(json) })
  .catch(function(err) { console.log(err.message) })
```

## Handling the JSON response

Write the `handleData()` function. This fucntion takes a parameter that is json data loaded from the giphy server. As a first step log it to the console and test your work.

```JS 
function handleData(json) {
  console.log(json)
}
```

Test your work, type something in the form and click Submit. CHeck the console. You should see soemthing like: 

```js
[Log] {data: Array, pagination: {total_count: 92072, count: 25, offset: 0}, meta: {status: 200, msg: "OK", response_id: "e5bd0ef977016da21e99cbeaf28038a2c42dbd84"}} (index.html, line 44)
```

## Displaying Gifs

The Giphy data provides URLs to gif images at different sizes and proportions. There is an array of images in the data. You'll need to:

- find the data array
- define an empty html str
- loop over the data array 
  - get the image data
  - get the src url for the image 
  - get the width of the image 
  - get the height of the image
  - append an `<img>` tag to the html str
- Append the htmt str to the DOM

**Find the Data Array**

Get the data array from json. This an array of object that each have a lot of properties.

```JS
function handleData(json) {
  // get the data array
  const data = json.data

}
```

**Define an html str**

You'll use this to build some HTML that will be appended to the DOM and display the images. 

```JS
function handleData(json) {
  const data = json.data
  // Define a string to hold some html
  let htmlStr = ''

}
```

**Loop over the array of data**

```JS
function handleData(json) {
  const data = json.data
  let htmlStr = ''
  // Loop over the array
  for (let i = 0; i < data.length; i += 1) {

  }

}
```

**Get Image data**

The data array holds data for images in many sizes and formats. You will get the 'fixed_height_small' image. 

```JS
function handleData(json) {
  const data = json.data
  let htmlStr = ''
  for (let i = 0; i < data.length; i += 1) {
    // get the url to an image - we'll use the fixed_width_small
    const image = data[i].images.fixed_height_small
    
  }

}
```

**Get the src, width, and height**

The image object holds the lots of information about the image. You need the url, width and height to make an `<img>` tag to display the image. 

```JS
function handleData(json) {
  const data = json.data
  let htmlStr = ''
  for (let i = 0; i < data.length; i += 1) {
    const image = data[i].images.fixed_height_small
    // Get the src, width, and height 
    const src = image.url
    const width = image.width
    const height = image.height
    
  }

}
```

**Append and imgv tag to the htmlStr**

Append an img tag to the htmlStr. This needs to be valid hTML to display the image. 

```JS
function handleData(json) {
  const data = json.data
  let htmlStr = ''
  for (let i = 0; i < data.length; i += 1) {
    const image = data[i].images.fixed_height_small
    const src = image.url
    const width = image.width
    const height = image.height
    // add img tags to the htmlStr
    htmlStr += `<img src="${src}" width="${width}" height="${height}">`
    
  }

}
```

**Set the innerHTML of a DOM element to display the images**

Looking through the images you've built a string of html. You can now display these images by appending this data to the DOM. 

```JS
function handleData(json) {
  const data = json.data
  let htmlStr = ''
  for (let i = 0; i < data.length; i += 1) {
    const image = data[i].images.fixed_height_small
    const src = image.url
    const width = image.width
    const height = image.height
    htmlStr += `<img src="${src}" width="${width}" height="${height}">`
    
  }

}
```

**Make a div to display the images**

Add a div the body of the document. 

```html
<div id="container">
  <!-- Gifs here -->
</div>
```

**Get a reference to div.container**

You'll need a reference to the div to be able to add the images. 

```JS 
const container = document.getElementById('container')
```

**Set the innHTML of div.container**

Make sure this step is after the loop. 

```JS
function handleData(json) {
  const data = json.data
  let htmlStr = ''
  for (let i = 0; i < data.length; i += 1) {
    const image = data[i].images.fixed_height_small
    const src = image.url
    const width = image.width
    const height = image.height
    htmlStr += `<img src="${src}" width="${width}" height="${height}">`
  }

  // Set the innHTML of #container
  container.innerHTML = htmlStr
}
```

## Stretch Challenges 












## What is a Promise? 

It's an object. It has properties and methods. 

Abstract it can have one of three states. 



<!-- > -->

## Final Project 

- Must be a web/page/site/app
- Should use everything from the list below
- Topic should come from your S&L class

- HTML
- CSS
  - Font Styles
  - Flex Box 
  - Grid
- JavaScript 
  - Functions 
  - Variables 
  - Event Listeners

<!-- > -->

### Functions 

Here is some information about functions:

- Functions are objects
- Functions are first class values
- Functions expression vs declarations 
- Parameters
  - default values
- Return values

<!-- > -->

### Scope 

Scope determines where a variable can be accessed

- Block vs function scope
- const, let, var

<!-- > -->

## Looking for Scope

Examine the Slide Show code and find the following: 

- const, let, and var
  - Name the scope for each variable and function
- functions
  - Identify all functions 
  - Identify closure

<!-- > -->

## In Class Challenges

Take a look at your slide show. It could be improved. Try these challenges. 

- Currently the slide uses images `<img>` as "slides". It would be more useful if the slide show could use any content for a "slide".
- It would be good to have a next and previous button to advance or retreat to a slide. Consider these issues: 
  - Should buttons be added in markup or should they be added dynamically?
    - If they are added dynamically could you use a data attribute to determine if buttons should be shown? 
    - When advancing to a slide should the time reset?
- Visual indicators would be. Add some idicators one for each slide. 
  - Highlight the indicator for the current slide. 
  - Use a data attribute to show the indicators.
  - Clicking an indicator advances to that slide. 

<!-- > -->

## After Class 

[Assignment 6](../assignments/assignment-06.md)

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

