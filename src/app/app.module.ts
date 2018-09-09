import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// 引入element UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular/release/element-angular.module';

// 引入路由模块
import { AppRoutingModule } from './app.router';

// 引入全局方法
import { MyToolsService, MyHttpService } from '../shared/services';

// 引入自定义管道
import { SliceStrPipe } from '../shared/pipes';
// 引入自定义指令
import { LuClassDirective } from '../shared/directives';

// 引入自定义组件
import { PageHeaderComponent } from '../app/components/page-header/page-header.component';
import { PageTabComponent } from '../app/components/page-tab/page-tab.component';

// 引入页面 
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
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



const pipes = [
  SliceStrPipe
]
const directives = [
  LuClassDirective
]
@NgModule({
  declarations: [
    ...pipes,
    ...directives,

    PageHeaderComponent,
    PageTabComponent,

    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    MainLayoutComponent,
    LoginPageComponent,
    UserInfoComponent,
    EnterpriseSettingComponent,
    RobotUnattendedComponent,
    UnattendedRobotTaskComponent,
    VariableListComponent,
    UserListComponent,
    RoleListComponent,
    AppListComponent,
    AppApplyComponent,
    OpLogListComponent,
    LicenseListComponent,
    LicenseInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ElModule.forRoot(),
    HttpModule
  ],
  providers: [
    MyToolsService,
    MyHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }