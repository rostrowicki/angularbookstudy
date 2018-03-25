import { TaskListModule } from './task-list/task-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataProvider } from './data-access/data-provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskListModule
  ],
  providers: [DataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
