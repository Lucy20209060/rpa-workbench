import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
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
			{ path:'homePage', component:HomePageComponent },
			{ 
				path: 'systemConfig',
				children: [
					{ path:'userInfo', component:UserInfoComponent },
					{ path:'enterpriseSetting', component:EnterpriseSettingComponent }
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
