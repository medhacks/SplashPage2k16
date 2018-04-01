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





var form = document.getElementById("myForm");
form.addEventListener("submit", handleFormSubmit);


function handleFormSubmit(event) {
   // Stop the form from submitting since we’re handling that with AJAX.
   event.preventDefault();

   // Call our function to get the form data.
   var data = formToJSON(form.elements);

   // Use `JSON.stringify()` to make the output valid, human-readable JSON.
   var output = JSON.stringify(data, null, "  ");
   alert(output);

   // ...this is where we’d actually do something with the form data...
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {

    /*
     * Some fields allow for more than one value, so we need to check if this
     * is one of those fields and, if so, store the values as an array.
     */
    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value);
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element);
    } else {
      data[element.name] = element.value;
    }
  }

  return data;
}, {});

const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const isCheckbox = element => element.type === 'checkbox';

const isMultiSelect = element => element.options && element.multiple;

const isValidElement = element => {
  return element.name && element.value;
};
const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);
