/**
  * @author         张金龙
  * @date           2019年10月29日13:47:55
  * @information    扫描sotre接口
  */
export default interface scanStoreInterface {
  store:{
    commit: any;
    dispatch: any;
  };
  name:string;
}
