var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

// Task 1 - 3
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

menuLinks.forEach(link => {
  let newA = document.createElement('a');
  newA.setAttribute('href', link.href);
  newA.innerText = link.text;
  topMenuEl.appendChild(newA)
})

// Task 4
let subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0';

// Task 5
let topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// Task 5.2 - create the event listener function 
function runIt(e){
  e.preventDefault();
  let currentElement = e.target;

  // Task 5.3
  if(currentElement.tagName !== 'A') return;
  if(currentElement.classList.contains('active')){
    currentElement.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }

  // Task 5.4 
  for (link of topMenuLinks){
    link.classList.remove('active');
  }

  // Task 5.5 
  currentElement.classList.add('active');

  // Task 5.6
  let currentElementText = currentElement.textContent;
  let currentElementSubLinks = {};
  menuLinks.forEach(link => {
    if(link.text === currentElementText){
       if(link.subLinks){
        currentElementSubLinks = link.subLinks;
       } 
    }
  });
  //following will set to show sub menu, if currentElementSubLinks is not empty (Falsy)s
  if (currentElementSubLinks && currentElement.textContent !== 'about') showingSubMenu = true;
  // Task 6.4
  else if (currentElement.textContent === 'about') mainEl.textContent = '<h1>about</h1>'

  // Task 5.7
  if(showingSubMenu) {
    subMenuEl.style.top = '100%';
    buildSubMenu(currentElementSubLinks);
  }
  else{
    subMenuEl.style.top = '0';
  }


}

// Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.textContent = '';
  subLinks.forEach(link => {
    let newElem = document.createElement('a');
    newElem.classList.add('href', link.href);
    newElem.textContent = link.text;
    subMenuEl.appendChild(newElem);
  });
}

// Task 6.0
function runSubMenu(e) {
  e.preventDefault();
  let currentElem = e.target;
  if (currentElem.tagName !== 'A') return;

  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  // Task 6.2
  topMenuLinks.forEach(link => {
    link.classList.remove('active')
  });

  // Task 6.3 
  mainEl.innerHTML = `<h1>${currentElem.textContent}</h1>`


}

topMenuEl.addEventListener('click', runIt);
subMenuEl.addEventListener('click', runSubMenu);






// function letters(array1){
//   let returnArr = [];
//   for (let i = 0; i < array1.length; i++) {
//     const currentElement = array1[i];
//     for (let j = i+1; j < array.length; j++) {
//       const 
      
//     }

    
    
//   }
// }

// console.log(letters(['a', 'b', 'c']));