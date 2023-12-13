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


const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject({ bodyBoundary, elRight, amount });
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    })
};

const btn = document.querySelector('button');
async function animateRight(el, amt){
  await moveX(el,amt,1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}

animateRight(btn, 100).catch((err) => {
  console.log('all done');
  animateRight(btn, -100);
})


// moveX(btn, 300, 1000)
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .catch(({ bodyBoundary, elRight, amount }) => {
//         console.log(`You are short ${(Math.round(elRight + amount) - bodyBoundary)} pixels of space`);
//     });