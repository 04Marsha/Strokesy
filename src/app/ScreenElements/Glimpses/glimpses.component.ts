import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-glimpses',
  standalone: false,
  templateUrl: './glimpses.component.html',
  styleUrl: './glimpses.component.css',
})
export class GlimpsesComponent implements AfterViewInit {
  currentSlideIndex = 0;
  slides!: NodeListOf<HTMLElement>;

  ngAfterViewInit() {
    this.slides = document.querySelectorAll('.carousel-slide');
    this.showSlide(0);
  }

  showSlide(index: number) {
    if (index >= this.slides.length) {
      this.currentSlideIndex = 0;
    } else if (index < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else {
      this.currentSlideIndex = index;
    }

    this.slides.forEach((slide) => slide.classList.remove('active'));
    this.slides[this.currentSlideIndex].classList.add('active');
  }

  changeSlide(direction: number) {
    this.showSlide(this.currentSlideIndex + direction);
  }
}
