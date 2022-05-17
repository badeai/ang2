import { new3Components } from './new2.component';
import { newComponents } from './new.component';
import { altComponents } from './alt.component';
import { recoursesComponents } from './recourse.component';
import { CoursesComponents } from './courses.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Courses2Components } from './courses2.component';
import { Courses3Components } from './courses3.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    Courses2Components,
    Courses3Components,
    recoursesComponents,
    altComponents,
    newComponents,
    new3Components,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
