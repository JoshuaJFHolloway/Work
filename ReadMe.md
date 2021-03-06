# SpareRoom Web Team Technical Task

## Information they provided me with

### Contents

  - design-fullwidth.png
  - design-fullwidth-spacing.png
  - design-minwidth.png
  - design-minwidth-spacing.png
  - event.json
  - ReadMe.md - This file
  - assets
    - bar-photo.jpg
    - logo.png

### Instructions

The task is to build a single page showing an event, within the page is a form to submit details for a ticket as well as information on the event and the location. 

The design to follow is located in design-minwidth.png & desing-fullwidth.png, with the spacing of the main elements and font sizes 
 within design-minwidth-spacing.png & design-fullwdith-spacing.png.

The details of the event and the location are within event.json. 

### Development

Please use any front-end technology you think is best suited to deliver the final page as well as the source code. Extra credit for a working booking form. 

### Mobile

More than 50% of our customers use a mobile touch device when on our website. Please give input into how the design could further accommodate mobile devices.

### Comments

The aim of this task is to understand how you approach a peice of work, there's no hidden catches. We are intereste in seeing how you create and layout your code, 
how you approach testing and validating the solution and how you use version control.

When you submit the task please include a .md file with comments on your approach and use of technology, as well as any issues you may have identified and enhancements that you could make.

Please include instructions on how to deploy your solution, including any specific configuration you recommend to run the code.

Thank you

## How to use

### Installation

- Run 'git clone https://github.com/JoshuaJFHolloway/BLAH' in your terminal

### Usage

- Run 'npm install' in your terminal
- Run 'npm start' in your terminal 
- Visit 'localhost:3000' in your browser to see the app

### Testing

- Run 'npm t' in your terminal to run the tests

## My approach

### Tech stack

ReactJS and Jest with Enzyme.

#### Why?

I wanted to explore Javascript React to a greater detail and I thought this exercise provided me with a good
opportunity to do so. React is a Frontend technology and it is built for creating single page applications.
Hence, I felt that it was a good choice of tech for the exercise. Not to mention that SpareRoom use React so it
is useful for them to see how I can contribute.

As for the testing, Jest works really nicely with React (built by creators of React) and Enzyme is a really useful
addition that allows for thorough testing. 

### First step

First thing I did was draw out all the components I would need to create the web page and consider how they
will interact. From there I considered what the parent component would be and how I can use the event.json file
they provided.

### My focus 

#### Reusable components

Making sure that I don't waste time writing code that could have been replaced by reusing prior code was 
also a focus. One of the best parts of React is how code is reused and its important to a slim and efficient app.

#### Reusing handlers

I was also aware of not writing out multiple event handlers when I can mould one to do most, if not all, the events
while still abiding to the SRP. 

#### Event.json

I put thought into the cleanest way to use the json file and pass its extracted information down into the components
beneath it. 


### Future Additions

There is a lot more of this to do due to time constraints. I was given this task yesterday but was unable to
start work on it until yesterday evening and this morning. This is because I was doing a different tech test
for another company yesterday and was then at their interview during the day until evening. 

Hence, with more time I would:

1. Create the Event.js file which would include the entirety of the web page below the second toolbar.

- It would inherit as props all the .json it requires and then feed it to the components that require it.

2. Create the components that sit within the Event.js file. These would be two components with many children.

- The two components would be split up into the left and right side. Left side being the form and the right
side being the information and map.

3. Make it so that the form updates the state and holds the input of it. Ready to be submitted to any database
in the future. 

4. Run a test coverage program to see where my tests are lacking.

### Screenshots of use!


### Contributors

Josh Holloway