# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file. Each of those files contain JavaScript problems you need to solve. If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.
   ForEach is used for iterating. It doesn't return a new array, simply allows us to iterate through an array and run a function on those elements in the array. .Map returns a new array and is used for converting our array to new values. It also must have a return. Map does not alter the old data, yet uses the new data to create a new array.

2. What is the difference between a function and a method?

   A function is some code that accomplishes a specific task.
   A method is simply a function within an object. So the property in the object has a function defined as its value.

3. What is closure?

   A closure is simply when a nested function has access to variable in an outer functions. So it gives you access to the scope of an outer function from inside a nested function.

4. Describe the four rules of the 'this' keyword.

   1. Global object - essentially means that the this keyword is pointing to the window/console. We basically have access to the whole forest. Console.log(this) gives us the whole window object, unless we use 'Use strict' then we get undefined.

   2. Implicit(or automatic) binding - Whenever a this is used in a function, this refers to the object left of the dot. So if we do Sarah.speak(), we know that this will reference the Sarah object.

   3. Explicit binding - 'this' is explicitly defined whenever we use either the .call method or .apply method. So Parent.call(this, attributes), it actually points to the parent object for the context of this. We explicitly say, look to the parent for the value of this.

   4. New keyword binding - Whenever we use constructor functions, 'this' refers to a particular instance of object that is created and returned. Basically we a can say which tree we want to point to in the forest.

5. Why do we need super() in an extended class?
   We have to use super because it gives us access to attributes from previous classes and to methods in the prototype chain. It basically replaces .call(or bind or apply)/.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays

Test your knowledge of objects and arrays.

- [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started. Read the instructions carefully!

## Task 2: Functions

This challenge takes a look at callbacks and closures as well as scope.

- [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.

- [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.

- [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
