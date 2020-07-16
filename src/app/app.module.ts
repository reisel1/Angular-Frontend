import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { AppComponent } from './app.component';
// import { MatTabsModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
