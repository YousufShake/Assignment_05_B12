1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById: finds one element by its id.

getElementsByClassName: finds many elements that have the same class.

querySelector: finds the first element that matches a CSS rule (like h1, .class, #id).

querySelectorAll: finds all elements that match a CSS rule.

2. How to create and insert a new element in the DOM
First make a new element with createElement. Then add it to the page with appendChild or append.

3. Event Bubbling
When you click or trigger an event on a child element, the event goes up step by step to the parent and then higher parents.

4. Event Delegation
Put one event listener on the parent instead of many on the children. Then check which child was clicked. It makes code shorter and works even if new children are added.

5. Difference between preventDefault and stopPropagation

preventDefault: stops the normal action of the element (like a link opening a page).

stopPropagation: stops the event from moving up to parent elements.