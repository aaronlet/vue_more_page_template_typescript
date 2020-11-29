function resetName(name:string,r:string):string{
  let reg = new RegExp(`\\.${r}$`,"i");
  let url = name.split('/').pop() || "";
  let str = url.replace(reg, '');
  return str;
}

export default resetName;
