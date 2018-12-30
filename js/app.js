function onChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const xmlString = event.target.result;
    const parser = new DOMParser();
    const xmlParse = parser.parseFromString(xmlString, "text/xml");
    const unorderedList = document.querySelector(".ulist");
    // Create li element
    const listItem = document.createElement("li");
    // Add class
    listItem.className = "litem";
    // Create text node and append to li
    listItem.appendChild(
      document.createTextNode(
        xmlParse.getElementsByTagName("outline")[1].getAttribute("text")
      )
    );
    // Append li to ul
    unorderedList.appendChild(listItem);
  };

  reader.readAsText(file);
}
