let a=55445545454545
let count=0
function DigitCountSum(num, sum) {
num=String(num)
for( let i=0; i<num.length; i++){
sum+=Number(num[i])
}
return ` Raqamlar soni ${num.length} ga yig'indisi ${sum} ga teng`
}
console.log(DigitCountSum(a,count));