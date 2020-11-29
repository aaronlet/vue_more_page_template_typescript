function getDirName(name:string,r:string):string{
  let reg = new RegExp(`\\.${r}$`,"i");
  let url:string[] = name.split('/');
  let dirName = url[1] || "";
  return dirName;
}

export default getDirName;
