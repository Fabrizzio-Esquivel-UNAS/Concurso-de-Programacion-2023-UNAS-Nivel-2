function isValidWalk(walk) {
  if (walk.length!==10) return false
  let pos = {
    "n" : 0,
    "s" : 0,
    "w" : 0,
    "e" : 0
  }
  for (let i=0; i<walk.length; i++){
    pos[walk[i]]++
  }
  console.log(pos)
  if (pos["n"]-pos["s"]===0 && pos["w"]-pos["e"]===0)
    return true
  return false
}