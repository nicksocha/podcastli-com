function onChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    // Create a new li element
    const addListItem = document.createElement("li");
    // Add some content
    const addContent = document.createTextNode(event.target.result);
    // Add the text node to the newly created li
    addListItem.appendChild(addContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(addListItem, currentDiv);
    console.log(event.target.result);
  };

  reader.readAsText(file);
}
