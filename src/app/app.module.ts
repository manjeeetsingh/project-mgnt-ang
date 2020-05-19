import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { EpicComponent } from './epic/epic.component';
import { FeatureComponent } from './feature/feature.component';
import { RiskComponent } from './risk/risk.component';
import { CapacityComponent } from './capacity/capacity.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { PieComponent } from './pie/pie.component';
import { SprintComponent } from './sprint/sprint.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { BugComponent } from './bug/bug.component';
import { TaskComponent } from './task/task.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    FooterComponent,
    ProjectComponent,
    EpicComponent,
    FeatureComponent,
    RiskComponent,
    CapacityComponent,
    DependenciesComponent,
    PieComponent,
    SprintComponent,
    UserStoryComponent,
    BugComponent,
    TaskComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
