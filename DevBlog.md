# CV Project for The Odin Project Course

Started focusing on the project on 03-22-2023, and finished the rough version on 03-27-2023.
This project could be styled better and refactored. I plan to do that in a later date.

## Post Project thoughts / What I learned

Through this project, I was able to use and strengthen my basic understanding of React.js. I learned and developed a first hand understanding of using state and props. I also gained a better understanding of working with React as a whole.

To start, I used the create-react-app npm package to start the project.
I then began removing the files and boilerplate I would not need.
I stated with the most basic component, the General Info section.
My first goal was to just build the page layout, so I just used placeholders for the state.
This section was effortless since it had less info to render, and you would not be creating multiple sections of general info like you might with education and employment history.
When I got that rendering to the page I moved on to the Education and Employment sections.
These two components function very similarly so I made Education render first and then used it as template for employment.
Once those were complete, I imported the component into App.js to build the layout.

The next step was to add the functionality to the page.
To do that I decided to give each file a “parent” file to handel the state and input, and then pass the state to the file in charge of displaying the info as props.
The general page just needs a way of editing the info, but the employment / education sections would need a way of adding multiple sections of info.
I first restructured those page's state. basically added an array to hold objects, those objects would be created using the make object in state.

I added an edit button to each section and used state to keep track of if the component was in an "edit" state or not.
I used a function that would change the state property edit to true when clicked.
That was added to the edit button with onClick.
In the render function of the component, I added a conditional to check if state.edit was True.
If True, the form would be displayed.
The values of the form were also tied to each corresponding input field stored in state.
When typing in the inputs to change the value, I used a handelChange function.
That function would loop through the state objects properties and test if the input fields id matched the event target id.
It then uses setState to update that key with the new value.
The general info's edit function was a lot simpler since there would only be one section of info.

To add this feature to the education and employment section.
I needed a way to track changes in state. So I made an object in state called edited that would have all the same key pairs as the regular job or school object would.
Since we would be editing one element out of an array of I used the object's unique id -being created by the uniqid function- to keep track of the object's info being updated.
The object's id is being assigned to the edit button's html id.
Clicking an edit button corresponding to a section of info will call the editOnClick function.
That function compares the array in state holding all of the objects with the object we clicked the edit button for.
When it finds an object that has an id value that matches the edit buttons, it will set state setting the state.edited object id to that matching object. This is being done to make a copy of the object we are wanting to edit.
Then the handleChange function will change the value of the state.edited object's keys.

Once the changes are made and needing to be saved the onSubmitForm function will take over.
This function works by using Array.find to compare and find the object in the state array.
It then uses Array.filter to make a new array without the one we were editing. After that it uses Array.concat to combine the state array and the edited object to make a new array. Since the edited object uniqid is the same as the old object, it more or less is editing that object in the state array.
The submit function all resets all the state back to a default so data is not contaminated when making another change.

A new section of info is added to education / employment simply by opening the form, using the handleChange to set the state of the main object values, and then using the onSubmitFrom function to add that objects current values to the state array.

To delete info, the delete function make a new array by filter the state array, removing the selected object by id, and then setting the state array to the new array.

I think I covered most of the app and my workflow. Sorry for the wall of text, but I hope I was able to get out my stream of thoughts in a some what coherent means.
