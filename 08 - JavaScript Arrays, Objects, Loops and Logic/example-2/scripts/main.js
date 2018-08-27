
// Loop through the contents of data

for (let i = 0; i < data.length; i += 1) {
  console.log(i, data[i].first_name, data[i].age);
}

/*

Your goal is get the data from the array and put it in a form 
that will be better to work with. Then display it in a page. 

Challenges 

Challenge 1: Understanding data

1. Examine the data in data.js
  - Identify the structure, an array of objects
  - Identify the properties of the objects and key names
  - Notice date is a timestamp, it is also a number and a string
  
Challenge 2: 

The sample code above prints the name and age. The app you're 
working on will need to display the first name, last name, 
and the prefix. 

1. Print the names in the format to the console: 
  - Prefix First Name Last name

Challenge 3: 

Using the console is great but, you need a function that generates a 
list of users to the page. 

1. Display a list of users
  - Display users as a list of names
  
Challenge 4: 

Names of users are useful but, your product needs to display a brief
user profile for each user. 

1. Display a users Name along with their date. This is the date that a 
user account was created. You'll need to convert this timestamp into a 
human readable date. To this you'll need to first convert the timestamp 
into a JavaScript Date Object then get the readable date from that Object.

Dates are caculatated as the number of miliseconds since 1970. The 
timestamp provided is shows the number of seconds since 1970. 
JavaScript dates and standard UTC timestamps differ in this way. 
You'll need to convert the TimeStamp string to a number then multiply 
by 1000 and and use the value to create a new date object. 

1. Add the date to the displayed list of users. 
  - Create a date object use the timestamp to initialize it. 
  - Look at the Date Object reference and look at the formatting options.
  


*/
