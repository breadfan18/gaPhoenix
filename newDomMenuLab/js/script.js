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

function runIt(e){
  e.preventDefault();
  let currentElement = e.target;
  if(currentElement.tagName !== 'A') return;
  if(currentElement.classList.contains('active')){
    currentElement.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }

  for (link of topMenuLinks){
    link.classList.remove('active');
  }

}

topMenuEl.addEventListener('click', runIt);





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