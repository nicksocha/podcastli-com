function onChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    console.log(event.target.result);
  };

  reader.readAsText(file);
}
