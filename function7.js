let a=848454577588784
let count
function teskarison(tes, sum) {
  tes=String(tes)
  sum=""
  for(let i=(tes.length-1); i>=0; i-=1){
sum+=tes[i]
  }
  return tes, sum
}
console.log(teskarison(a));