<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 1 

<div style="text-align:center">Semantic HTML</div>

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## HTML

<div style="text-align:center">The language of the web.</div>

<!-- > -->

In 1989 Tim Berners-Lee, a physicist at <a href="/wiki/CERN" title=""><abbr title="European Organization for Nuclear Research">CERN</abbr></a>, proposed system for researchers to share documents. 

<!-- > -->

The system was an internet-based hypertext system. Hypertext is text displayed on a computer screen that uses hyperlinks to connect other documents. 

<!-- > -->

HTML uses tags to "markup" a document. Tags describe and provide context to content. 

Below the p, or paragraph, tag describes a the text Hello World as a paragraph. 

`<p>Hello World.</p>`

<!-- > -->

The opening tag `<p>` is followed by a clsoing tag `</p>` which has a slash "/".

<!-- > -->

There are many different tags that can be combined and nested one within another. 

```HTML
<article>
  <h1>HTML</html>
  <p><abbr>HTML</abbr> is the best!</p>
</article>
```

<!-- > -->

Tags can not overlap!

Good!

```HTML
<p><abbr>HTML</abbr> is the best!</p>
```

Bad! (the `</p>` closes before the inner `</abbr>`)
```HTML
<p><abbr>HTML</p></abbr> is the best!
```

<!-- > -->

### Semantic HTML

<!-- > -->

**Semantic** (adj.):

of or relating to meaning in language

<!-- > -->

From French sémantique, applied to the psychology of language, from Greek semantikos "significant," from semainein "to show by sign, signify, point out, indicate by a sign."

<!-- > -->

To use a word semantically is to use a word in a way that properly aligns with it's meaning. 

<!-- > -->

Semantic markup is to use tags that properly align with the content the tags mark up.

<!-- > -->

**Some Examples**

A time or date uses the time tag.

`<time>Valentines day</time>`

Abbreviations and acronyms use the abbr tag.

`<abbr>HTML</abbr>`

<!-- > -->

The article tag defines an article, an h1 defines a heading, and a p tag defines a paragraph.

```HTML
<article>
  <h1>HTML</h1>
  <p>HTML define the structure of your HTML documents.</p>
</article>
```

Important! Notice the article contains a heading and a content paragraph.

A heading would never contain an article.

<!-- > -->

**Activity** Pair up and research tags. 

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

The tags here are group into categories. pay close attention to the categories. These help define their semantic usage. 

<!-- > -->

## Homework 



<!-- > -->

## Wrap Up 

- What was covered today? 
- What does semantic mean? 
- What is semantic HTML?
- What is a tag? 
- What is an element?
- When do tags overlap? 

<!-- > -->

## Additional Resources

1. 

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
