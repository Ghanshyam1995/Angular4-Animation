import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {Routes,RouterModule} from "@angular/router";
import { EditComponent } from './edit/edit.component';

const appRoutes : Routes =[
  {path:'',redirectTo:'Home',pathMatch:'full'},
   {path:'Home',component:UserComponent},
   {path:'Edit',component:EditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,MaterialModule,BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
