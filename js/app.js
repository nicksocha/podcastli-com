function onChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const unorderedList = document.querySelector(".ulist");
    // Create li element
    const listItem = document.createElement("li");
    // Add class
    listItem.className = "litem";
    // Create text node and append to li
    listItem.appendChild(document.createTextNode(event.target.result));
    // Append li to ul
    unorderedList.appendChild(listItem);
    console.log(event.target.result);
  };

  reader.readAsText(file);
}
