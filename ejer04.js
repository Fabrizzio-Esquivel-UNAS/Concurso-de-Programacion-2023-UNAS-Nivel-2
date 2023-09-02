function findOutlier(integers){
  let lastNum = integers[0]
  let isDiff = false
  let isEven = lastNum%2===0
  for (let i=0; i<integers.length; i++){
    const num = integers[i]
    if ((num%2===0)!==isEven){
        if (isDiff){
          lastNum = integers[0]
        }else{
          lastNum = num          
          isDiff = true
        }
    }
  }
  return lastNum
}