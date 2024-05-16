let title = document.querySelector("#title")
let description = document.querySelector("#description")
let target = document.querySelector("#allTasks")

function addTask() {
    titlevalue = title.value
    console.log(titlevalue)
    descriptionvalue = description.value
    console.log(descriptionvalue)
    const titletext = document.createElement("h1");
    target.appendChild(titletext);
    titletext.innerHTML = titlevalue;
    const descriptiontext = document.createElement("p");
    target.appendChild(descriptiontext);
    descriptiontext.innerHTML = descriptionvalue;

    //const checkbox = document.createElement("input");
    //target.appendChild(checkbox);
    //checkbox.type = "checkbox";
    //checkbox.className = "checkbox";
}


