function tribonacci(signature,n){
  for (let i=3; i<n; i++){
    //sumar los 3 ultimos
    let sum = 0
    for (let k=i-3; k<i; k++){
      sum += signature[k]
    }
    signature.push(sum)
  }
  while (signature.length>n)
    signature.pop()
  return signature
}