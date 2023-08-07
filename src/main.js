import './css/main.css'
// import { setupCounter } from './js/counter.js'
import { example1, example2, example3 } from './js/examples'
import { mapStringToArray } from './js/utils'
import getFastestSlideDown from './js/algorithm'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

console.clear()
console.log(
  `Example 1 solution = ${getFastestSlideDown(mapStringToArray(example1))}`
)
console.log(
  `Example 2 solution = ${getFastestSlideDown(mapStringToArray(example2))}`
)
console.log(
  `Example 3 solution = ${getFastestSlideDown(mapStringToArray(example3))}`
)

document.getElementById('example-1').innerHTML = getFastestSlideDown(
  mapStringToArray(example1)
)
document.getElementById('example-2').innerHTML = getFastestSlideDown(
  mapStringToArray(example2)
)
document.getElementById('example-3').innerHTML = getFastestSlideDown(
  mapStringToArray(example3)
)
