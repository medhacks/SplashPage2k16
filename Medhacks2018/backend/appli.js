//var formData = JSON.stringify($("#myForm").serializeArray());
/*$('#myForm').on('Submit',function () {
    $.ajax({
        url: 'submit.php',
        cache: false,
        type: 'POST',
        data : $('#formID').serialize(),
        success: function(json) {
            alert('all done');
        }
    });
    alert("HI");
});
*/


function functSubmit(event) {
  //var msg = document.getElementById("input1").value;
  alert("HI");
}
var form = document.getElementById("myForm");
form.addEventListener("submit", functSubmit);


const handleFormSubmit = event => {
   alert("hi");
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();

  // Call our function to get the form data.
  const data = formToJSON(form.elements);

  // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementsByClassName('results__display')[0];

  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
  dataContainer.textContent = JSON.stringify(data, null, "  ");

  // ...this is where we’d actually do something with the form data...
};
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  data[element.name] = element.value;
  return data;

}, {});

/*

const formToJSON_deconstructed = elements => {

  // This is the function that is called on each element of the array.
  const reducerFunction = (data, element) => {

    // Add the current field to the object.
    data[element.name] = element.value;

    // For the demo only: show each step in the reducer’s progress.
    console.log(JSON.stringify(data));

    return data;
  };

  // This is used as the initial value of `data` in `reducerFunction()`.
  const reducerInitialValue = {};

  // To help visualize what happens, log the inital value.
  console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));

  // Now we reduce by `call`-ing `Array.prototype.reduce()` on `elements`.
  const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

  // The result is then returned for use elsewhere.
  return formData;
};
*/
