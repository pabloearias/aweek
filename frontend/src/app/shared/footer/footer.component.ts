import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  scrollTop() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {}
}
