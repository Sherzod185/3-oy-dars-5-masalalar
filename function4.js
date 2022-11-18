let a=8
let b=9
let c=7
function Triangle(float1, float2, float3) {
  return ` 1-uchburchak peremetri ${3*float1} yuzasi ${Math.sqrt(3)/4*float1**2} \n 2-uchburchak peremetri ${3*float2} yuzasi ${Math.sqrt(3)/4*float2**2}\n 3-uchburchak peremetri ${3*float3} yuzasi ${Math.sqrt(3)/4*float3**2}`
}
console.log(Triangle(a, b, c));