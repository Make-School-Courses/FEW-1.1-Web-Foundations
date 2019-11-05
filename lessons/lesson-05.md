<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 5 - CSS Flex Box

CSS Grid is a two dimensional layout system with many option. 

Here are a couple strategies you can use to create a grid. 

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## CSS Grid

<!-- > -->

CSS Grid is used for 2 dimensional layouts.

Use grid when you want to arrange elements in rows and columns. 

<!-- > -->

CSS Grid has many properties. You get started with just a few. 

```CSS
.container {  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Creates a three column grid. 

<!-- > -->

**`fr`** is a unit that represents a fraction. 

Something sized in `fr` will take up a fraction of the available space. 

- 1fr - 25%
- 1fr - 25%
- 2fr - 50%

<!-- > -->

Grid columns can also be defined with other units: 

```CSS
.container {  
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}
```

Creates three columns where the outer columns are 200px and the inner column takes up the rest of the available space. 

<!-- > -->

If you're making many columns it can tedious to list them all e.g. `1fr 1fr 1fr 1fr 1fr...`

In this case use `repeat()`

```CSS
.container {  
  display: grid;
  grid-template-columns: repeat(1fr, 6);
}
```

<!-- > -->

You can mix repeat a patern. 

```CSS
.container {  
  display: grid;
  grid-template-columns: repeat(100px 1fr, 3);
}
```

Creates: `100px 1fr 100px 1fr 100px 1fr`

<!-- > -->

What about row height? Most often you'll want to set this automatically to match the size of the content. To do this don't declare it. 

If you wan to set the height of a row use: 

```CSS
.container {  
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(300px, 6);
}
```

Creates 6 300px tall rows. 

<!-- > -->



<!-- > -->

## Wrap Up (5 min)

- Continue working on the current assignment.
- Review the videos on CSS Grid.
- Note any questions you have and bring them to class. 

<!-- > -->

## Additional Resources

1. [CSS Grid video playlist](https://www.youtube.com/watch?v=Cxegg6ysdwc&list=PLoN_ejT35AEhwu7PJLHhKKzY7C4tMVHtp) 

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

