export const truncate = (elem, limit, after) =>{
  if (!elem || !limit ) return;
  let content = elem.trim();
  content = content.split('').slice(0, limit);
  content =content.join('') + (after ? after : '')
  return content
}