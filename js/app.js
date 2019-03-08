// Upload File and Parse

function onChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    const xmlString = event.target.result;
    const parser = new DOMParser();
    const xmlParse = parser.parseFromString(xmlString, 'text/xml');
    const unorderedList = document.querySelector('.uList');
    // Create text node and append to li (Thanks to @lyonsbp for help with this.)
    const xmlNodes = xmlParse.getElementsByTagName('outline');
    const nodeCount = xmlNodes.length;
    for (let i = 1; i < nodeCount; i++) {
      const listItem = document.createElement('p');
      listItem.appendChild(
        document.createTextNode(xmlNodes[i].getAttribute('text'))
      );
      unorderedList.appendChild(listItem);
    }
  };

  reader.readAsText(file);
}

// Sort List

function sortList() {
  let list;
  let i;
  let switching;
  let b;
  let shouldSwitch;
  let dir;
  let switchcount = 0;
  list = document.getElementById('list');
  switching = true;
  dir = 'asc';
  while (switching) {
    switching = false;
    b = list.getElementsByTagName('P');
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir === 'asc') {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === 'desc') {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else if (switchcount === 0 && dir === 'asc') {
      dir = 'desc';
      switching = true;
    }
  }
}

// Automatically update year in footer

const yyyy = new Date().getFullYear();
document.getElementById(
  'year'
).innerHTML = `<span class="h1li">&lt li &gt</span> Podcastli.com #${yyyy} <span class="h1li">&lt li &gt</span>`;
