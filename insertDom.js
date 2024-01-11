function addItem() {
   // TODO: add 'item' to the list of TODOs

   //Step 1: identify the value of the myInput element.    
   const textBox = document.getElementById("myInput");
   let a = document.getElementById("myInput");

   //Step 2: Create a text node containing that value
   let textValue = '';
   if (textBox != null) {
      textValue = textBox.value;
   }
   console.log(textValue);

   //Step 3: Create a new li element and append the text node to it
   const newListItem = document.createElement('li');
   newListItem.textContent = textValue;

   //Step 4: Append the li element to the existing myTODOs element.   
   const myTODOsContent = document.getElementById("myTODOs");
   myTODOsContent.appendChild(newListItem);
   // document.getElementById("myTODOs").innerHTML += html;
}
