// async function greet() {
//   return "HELLO!!";
// }

// greet().then((val) => {
//   console.log('PROMISE RESOLVED WITH', val);
// })

// async function add(x,y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw 'X AND Y MUST BE NUMBERS';
//   }
//   return x + y;
// }


// const moveX = (element, amount, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const bodyBoundary = document.body.clientWidth;
//             const elRight = element.getBoundingClientRect().right;
//             const currLeft = element.getBoundingClientRect().left;
//             if (elRight + amount > bodyBoundary) {
//                 reject({ bodyBoundary, elRight, amount });
//             } else {
//                 element.style.transform = `translateX(${currLeft + amount}px)`;
//                 resolve();
//             }
//         }, delay);
//     })
// };

// const btn = document.querySelector('button');
// async function animateRight(el, amt){
//   await moveX(el,amt,1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
//   await moveX(el, amt, 1000);
// }

// animateRight(btn, 100).catch((err) => {
//   console.log('all done');
//   animateRight(btn, -100);
// })


// moveX(btn, 300, 1000)
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .catch(({ bodyBoundary, elRight, amount }) => {
//         console.log(`You are short ${(Math.round(elRight + amount) - bodyBoundary)} pixels of space`);
//     });

/* IN SUCCESSION */
// async function get3Pokemon() {
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

/* IN PARALELL WITH Promise.all */
async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results = await Promise.all([prom1, prom2, prom3]);
  console.log(results);
// }
// async function get3Pokemon() {
//   const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(poke1);
//   await poke1;
//   await poke2;
//   await poke3;
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// async function get3Pokemon() {
  // const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  // const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  // const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  // console.log(prom1);
  // const poke1 = await prom1;
  // const poke2 = await prom2;
  // const poke3 = await prom3;
  // console.log(prom1);
  // console.log([poke1, poke2, poke3]);
  // console.log(poke2);
  // console.log(poke3);
}

get3Pokemon();

// function changeBodyColor(color,delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   })
// }

// async function lightShow() {
//   const p1 = await changeBodyColor('teal', 1000);
//   const p2 = await changeBodyColor('pink', 1000);
//   const p3 = await changeBodyColor('indigo', 1000);
//   const p4 = await changeBodyColor('violet', 1000);
//   // await p1;
//   // await p2;
//   // await p3;
//   // await p4;
// }

// lightShow();