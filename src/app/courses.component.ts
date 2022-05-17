import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: '<h2>{{getTitle()}}</h2>', //<courses>
})
export class CoursesComponents {
  title = 'List of courses';
  getTitle() {
    return this.title;
  }
}
