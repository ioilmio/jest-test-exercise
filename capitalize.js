export default function capitalize(string){
  if (typeof string !== 'string')
    return '';
  console.log(string.charAt(0).toUpperCase() + string.slice(1));
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalize};