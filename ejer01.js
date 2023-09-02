function order(words){
  let result = [""]
  let ws = 0
  let index = 0
  for (let i=0; i<=words.length; i++){
    let char = words[i]
    let num = parseInt(char)
    if (!isNaN(num)){
      index = num
    }else if(char===" " || i===words.length){
      result[index-1] = words.substring(ws, i)
      ws = i+1
    }
  }
  let str = ""
  for (let i=0; i<result.length; i++){
    if (i!==0) str += " "
    str += result[i]
  }
  return str
}