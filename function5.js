let x1=20
let x2=5
let y1=12
let y2=13
function ReactPs(a, b, c, d) {
  return `P=${2*Math.abs(b-a)+2*Math.abs(d-c)}\n S=${Math.abs(b-a)*Math.abs(d-c)}`
}
console.log(ReactPs(x1, x2, y1, y2) );