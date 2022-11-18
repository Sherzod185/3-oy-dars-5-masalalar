let d=100000
let f=7000
let g=200
function taqqoslash(a, b, c){
  if(a<b && b<c) return `${a}<${b}<${c}`
  else if(a<c && c<b) return `${a}<${c}<${b}`
  else if(b<c && c<a) return `${b}<${c}<${a}`
  else if(b<a && a<c) return `${b}<${a}<${c}`
  else if(c<b && b<a) return `${c}<${b}<${a}`
  else if(c<a && a<b) return `${c}<${a}<${b}`
  else return "xatolik bor"
}
console.log(taqqoslash(d, f, g));