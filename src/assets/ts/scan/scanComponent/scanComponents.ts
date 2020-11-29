import Vue from "vue";

import scanComponentsInterface from "@/interface/other/scanComponents.interface";

import resetName from "@/assets/ts/scan/resetName";
import getDirName from "@/assets/ts/scan/getDirName";

const scanComponents = (dirName:string):scanComponentsInterface[] => {
  const srcContext = require.context('@/components', true, /\.vue$/);
  let components:scanComponentsInterface[] = [];
  srcContext.keys().forEach(item => {
    let component = srcContext(item);
    let name = resetName(item,"vue");
    let dir = getDirName(item,"vue");
    if(dir === dirName){
      components.push({name,component});
    }
  })
  return components;
};

export default scanComponents;
