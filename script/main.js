function replaceForm(){
alert("I am an alert box!");
if(document.getElementById("login").value=="in")
{
 disable_form("login")
 enable_form("sigunp")
}else{
	disable_form("signup")
	enable_form("login")
}

function disable_form(form) {
  var inputs = form.getElementsByTagName('input'),
      buttons = form.getElementsByTagName('button'),
      selects = form.getElementsByTagName('select');

  disable_elements(inputs);
  disable_elements(textareas);
  disable_elements(buttons);
  disable_elements(selects);
}

// Disables a collection of form-elements.
function disable_elements(elements) {
  var length = elements.length;
  while(length--) {
    elements[length].disabled = true;
  }
}

function enable_form(form) {
  var inputs = form.getElementsByTagName('input'),
      buttons = form.getElementsByTagName('button'),
      selects = form.getElementsByTagName('select');

  enable_elements(inputs);
  enable_elements(textareas);
  enable_elements(buttons);
  enable_elements(selects);
}

// Disables a collection of form-elements.
function enable_elements(elements) {
  var length = elements.length;
  while(length--) {
    elements[length].disabled = false;
  }

}
}
