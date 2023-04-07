# CV Project

I made this as part of The Odin Project [course](https://www.theodinproject.com/lessons/node-path-javascript-cv-application)

## [Live Preview](https://itsme-thatoneguy.github.io/cv-project/)

This is a basic CV form one could use when apply for a job.

## Getting Started

### Install and Run

```bash
git clone https://github.com/itsMe-ThatOneGuy/cv-project.git
cd cv-project
npm install
npm run start
```

## Built With

-   [React](https://reactjs.org/)

## Dev Blog / Post Project Thoughts

My last Dev Blog was really long. This was my first react project, so I originally thought I should try to communicate as much as I could about what this project taught me. If you would like to read that, I made it a separate .md [file](DevBlog.md)

Started focusing on this project 03-22-2023. Finished the rough version on 03-27-2023.

Started refining the project on 04-05-2023 based upon feedback I received.

1. Added a data attribute to the parent div of the iterated components. This allowed me to use the data-set to target the selected component instead of tying the delete button's id to the component's id in state.
2. I simplified state by removing the redundancy of having an object to collect changes and an object to represent a selected component's data. I now just use a single state object called "buffer" that is loaded with either new date to create a new component, or it is loaded with the selected object's data when editing.
3. I overhauled the onChange handler. Now instead of it looping through the object and comparing id to find the the correct data, it simply sets the buffer state using a "key" argument passed into the function. The key relates to the input that is changing, and it then gets the value based on the even target.
4. With the changes to the state structure, other handler functions were also changed, and a number of helper function were created.

I feel this project is still pretty wet at it's current state, so I am currently working on cleaning it up even more. Once that is complete, I would like to work on the styling.
