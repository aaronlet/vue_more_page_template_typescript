import resetName from "@/assets/ts/scan/resetName";
import getDirName from "@/assets/ts/scan/getDirName";

import ScanApiInterface from "@/interface/other/ScanApi.interface";

export const scanApi = (dirName:string):ScanApiInterface[] => {
  const srcContext = require.context('@/api', true, /\.ts$/);
  let apiList:ScanApiInterface[] = [];
  srcContext.keys().forEach((api) => {
    if(!api.includes("index.ts")){
      let apiInfo = srcContext(api).default;
      let name = resetName(api,"ts");
      let dir = getDirName(api,"ts");
      if(dir === dirName){
        apiList.push({name,methodInfo:apiInfo})
      }
    }
  })
  return apiList;
};

export default scanApi;
