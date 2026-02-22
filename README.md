## Answers to Questions

### 1. Answer: 
- getElementById()
Selects one element by its id attribute. It's cannot select multiple elements. And ids should be unique in html.
- getElementsByClassName()
Selects all elemen with specific class. if the DOM changes html collection will updates.
- querySelector()
It use for select element using CSS selectors. It selects the first matching element.
- querySelectorAll()
It also use for select element using css selectors. It can select multiple elements. It selects all matching elements in html.
### 2. Answer: 
- step 1
select parent element where i want to insert tne new element
- step 2
Create a new element using document.createElement()
- step 3
Add conntent or attributes
- step 4
insert the element into the DOM using appendChild()

- Example:
  const container = document.getElementbyId("container");
  
  const newDiv = document.createElement("div");
  
  div.classList.add("w-11/12", "mx-auto");
  
  div.innerHtml = `<h2>Hello World</h2>`;
  
  container.appendChild(newDiv);
### 3. Answer:
- Event Bubbling is when an event triggered on a child element automatically propagetes up to its parent element in the DOM, unless stoped.
- An event occurs on a child element. The event first element by the target element. Then it bubble up to the parent element, the to the parent's parent element, up to html element. Parent elements with event listeners can respond to the event.
## 4. Answer:
- Event Delegation is a technique in javascript where a parent element handles events for itse child elements. It works using event bubbling. It attach a single event listener to common parent element.
- Useful beacuse it manage events from a single place. It works for the child elements added after the lisetener is attached.
## 5. Answer:
- preventDefault() prevents the default action of an element.
- stopPropagation() stops event bubbling or capturing.
  
