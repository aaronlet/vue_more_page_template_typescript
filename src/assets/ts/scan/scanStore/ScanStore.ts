import resetName from "@/assets/ts/scan/resetName";
import getDirName from "@/assets/ts/scan/getDirName";

import scanStoreInterface from "@/interface/other/ScanStore.interface"

const scanStore = (dirName:string):scanStoreInterface[] => {
  let storeList:scanStoreInterface[] = [];
  const srcContext = require.context('@/store', true, /\.ts$/);
  srcContext.keys().forEach((item) => {
    if(!item.includes("index.ts")){
      let store = srcContext(item).default;
      let name = resetName(item,"ts");
      if(getDirName(item,"ts") === dirName){
        storeList.push({name,store});
      }
    }
  })
  return storeList;
};

export default scanStore;
