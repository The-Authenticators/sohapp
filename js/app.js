function toggle(elements, newDisplay) {
  function isHidden(element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }

  elements = elements.length ? elements : [elements];

  var element;

  for (var i = 0; i < elements.length; i++) {
    element = elements[i];

    if(isHidden(element)) {
      element.style.display = '';
      // check if element still hidden after removing set display attribute
      if (isHidden(element)) {
        element.style.display = newDisplay || 'block';
      }
    }
    else {
      element.style.display = 'none';
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName('menu-button')[0].addEventListener('click', function() {
    toggle(document.querySelectorAll('li.navbar-list__item'));
  });
});
