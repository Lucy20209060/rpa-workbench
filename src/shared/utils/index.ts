import { findIndex } from 'lodash';
/**
 * 获取URL中的参数
 */
export const getUrlParam = (name:string):any => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r !== null)return r[2];
  return null;
}

/**
 * 组装菜单
 * 1.首页没有二级页面 路由为单层 '/homePage' 其他页面为二级路由
 * 2.系统设置 特殊页面 
 *  当后台没有返回该页面权限时 需要赋予该页面下的个人中心页面
 *  当后台返回该页面权限时 这是有企业资料的权限 前端需要另外添加个人中心页面进去 个人中心的权限由前端控制
*/
const menu = [
  {name: '首页', code: 'homePage', icon: 'rpa-shouye'},
  {name: '客户端监控', code: 'clientMonitor', icon: 'rpa-diannao'},
  {name: '计划任务管理', code: 'taskManager', icon: 'rpa-renwu'},
  {name: '资产管理', code: 'assetManager', icon: 'rpa-cloud'},
  {name: '用户与权限管理', code: 'userAuthManager', icon: 'rpa-quanxianguanli'},
  {name: '企业应用市场管理', code: 'marketManager', icon: 'rpa-shichang'},
  {name: '操作日志查询', code: 'opLogQuery', icon: 'rpa-rizhi'},
  {name: '授权许可管理', code: 'lisenceManager', icon: 'rpa-shouquan'},
  {name: '系统设置', code: 'systemConfig', icon: 'rpa-web_set'}
]
export const menuList = (menuList:Array<object>):Array<object> => {
  // 处理系统设置页面的二级页面
  const index  = findIndex(menuList,(item) => {
    return item['menuCode'] === 'systemConfig'
  })
  if(index === -1){
    menuList.push({
      menuCode: "systemConfig",
      menuName: "系统设置",
      resources: [
        {code: "userInfo", name: "用户个人信息"},
        {code: "enterpriseSetting", name: "企业资料设置"}
      ]
    })
  }else{
    menuList[index]['resources'].unshift({code: "userInfo", name: "用户个人信息"})
  }
  // 组装菜单
  let tem = [];
  for(let item of menu){
    const index = findIndex(menuList, (o) => {
      return o['menuCode'] === item.code
    })
    tem.push({
      name: menuList[index]['menuName'],
      path: menuList[index]['menuCode'],
      code: item.code === 'homePage' ? '/homePage' :`/${menuList[index]['menuCode']}/${menuList[index]['resources'][0].code}`,
      icon: item.icon,
      resources: item.code === 'homePage' ? [] : menuList[index]['resources']
    })
  }
  return tem;
}