import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RobotUnattendedComponent } from './client-monitor/robot-unattended/robot-unattended.component';
import { UnattendedRobotTaskComponent } from './task-manager/unattended-robot-task/unattended-robot-task.component';
import { VariableListComponent } from './asset-manager/variable-list/variable-list.component';
import { UserListComponent } from './user-auth-manager/user-list/user-list.component';
import { RoleListComponent } from './user-auth-manager/role-list/role-list.component';
import { AppListComponent } from './market-manager/app-list/app-list.component';
import { AppApplyComponent } from './market-manager/app-apply/app-apply.component';
import { OpLogListComponent } from './op-log-query/op-log-list/op-log-list.component';
import { LicenseListComponent } from './lisence-manager/license-list/license-list.component';
import { LicenseInfoComponent } from './lisence-manager/license-info/license-info.component';
import { UserInfoComponent } from './system-config/user-info/user-info.component';
import { EnterpriseSettingComponent } from './system-config/enterprise-setting/enterprise-setting.component';

const routes: Routes = [
	// 重定向
	{ 
		path:'', 
		redirectTo: 'homePage', 
		pathMatch: 'full' 
	},
	// 首页
	{ 
		path: '', 
		component: MainLayoutComponent, 
		children: [
			// 首页
			{ path:'homePage', component:HomePageComponent, data:{title:'首页'} },
			// 系统设置
			{path: 'systemConfig',redirectTo:'systemConfig/userInfo'},
			{ 
				path: 'systemConfig',
				children: [
					{ path:'userInfo', component:UserInfoComponent, data:{title:'系统设置'} },
					{ path:'enterpriseSetting', component:EnterpriseSettingComponent, data:{title:'系统设置'} }
				]
			},
			// 客户端监控
			{path: 'clientMonitor',redirectTo:'clientMonitor/robotUnattended'},
			{ 
				path: 'clientMonitor',
				children: [
					{ path:'robotUnattended', component:RobotUnattendedComponent, data:{title:'客户端监控'} }
				]
			},
			// 计划任务管理
			{path: 'taskManager',redirectTo:'taskManager/unattendedRobotTask'},
			{ 
				path: 'taskManager',
				children: [
					{ path:'unattendedRobotTask', component:UnattendedRobotTaskComponent, data:{title:'计划任务管理'} }
				]
			},
			// 资产管理
			{path: 'assetManager',redirectTo:'assetManager/variableList'},
			{ 
				path: 'assetManager',
				children: [
					{ path:'variableList', component:VariableListComponent, data:{title:'资产管理'} }
				]
			},
			// 用户与权限管理
			{path: 'userAuthManager',redirectTo:'userAuthManager/userList'},
			{ 
				path: 'userAuthManager',
				children: [
					{ path:'userList', component:UserListComponent, data:{title:'用户与权限管理'} },
					{ path:'roleList', component:RoleListComponent, data:{title:'用户与权限管理'} }
				]
			},
			// 企业应用市场管理
			{path: 'marketManager',redirectTo:'marketManager/appList'},
			{ 
				path: 'marketManager',
				children: [
					{ path:'appList', component:AppListComponent, data:{title:'企业应用市场管理'} },
					{ path:'appApply', component:AppApplyComponent, data:{title:'企业应用市场管理'} }
				]
			},
			// 操作日志查询
			{path: 'opLogQuery',redirectTo:'opLogQuery/opLogList'},
			{ 
				path: 'opLogQuery',
				children: [
					{ path:'opLogList', component:OpLogListComponent, data:{title:'操作日志查询'} }
				]
			},
			// 授权许可管理
			{path: 'lisenceManager',redirectTo:'lisenceManager/licenseList'},
			{ 
				path: 'lisenceManager',
				children: [
					{ path:'licenseList', component:LicenseListComponent, data:{title:'授权许可管理'} },
					{ path:'licenseInfo', component:LicenseInfoComponent, data:{title:'授权许可管理'} }
				]
			},
		]
	},
	// 登陆页
	{ 
		path:'login', 
		component: LoginPageComponent
	},
	// 系统设置
	

	// 404 页面
	{ path:'404', component:NotFoundComponent },
	// 重定向
	{ path: '**', redirectTo: '404',pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(
			routes,
			// 如果我们想要看到在导航的生命周期中发生过哪些事件，可以使用路由器默认配置中的enableTracing选项。
			// 它会把每个导航生命周期中的事件输出到浏览器的控制台。 这应该只用于调试。我们只需要把enableTracing: true选项
			// 作为第二个参数传给RouterModule.forRoot()方法就可以了。
			// { enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
