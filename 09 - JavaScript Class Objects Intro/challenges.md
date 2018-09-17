# Challenges Class 09

The goal of theser challenges is to practice making Objects and using Objects. 

## Challenge 1: Define a Class 
  
Your job is to make a a data structure that represents data that being consumed by your webste. 

The data is stored in `data.js`. This file defines a global variable, `data`, that contains an array of JSON objects. Imagine that this data was returned to you from an API. 

Look at the data closely and define a class that will create instances of this model. Your class should define all of the properties in the model data.

## Challenge 2: Add some methods 

Define some methods to make working with your class easier. 

- getFullName - return: `firstName + " " + lastName`
- getFormalName - return: `prefix + " " + firstName + " " + lastName`
- getDateJoined - return: a human readable date
  - Your class should keep data as a JS Date Object
- getRank - returns a ranking string based on the users rating number.
  - Make a list of rankings and the rating required to reach them
- render - returns an HTML string that renders the user 'card'
  - This should be the HTML string you used to display this user

## Challenge 3: Display your data

Display your users after building an array of class objects. 