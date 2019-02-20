

const truncate = (elem, limit, after) =>{
  let content = elem.trim();
  content = content.split('').slice(0, limit);
  content = content.join('') + (after ? after : '')
  return content
}

module.exports ={
  truncate,
}