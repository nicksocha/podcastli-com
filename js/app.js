function onChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const xmlString = event.target.result;
    const parser = new DOMParser();
    const xmlParse = parser.parseFromString(xmlString, "text/xml");
    const unorderedList = document.querySelector(".ulist");
    // Create text node and append to li (Credit to @Interactive Rubber Duck for help with this)
    const xmlNodes = xmlParse.getElementsByTagName("outline");
    const nodeCount = xmlNodes.length;
    for (let i = 1; i < nodeCount; i++) {
      const listItem = document.createElement("li");
      listItem.appendChild(
        document.createTextNode(xmlNodes[i].getAttribute("text"))
      );
      unorderedList.appendChild(listItem);
    }
  };

  reader.readAsText(file);
}
