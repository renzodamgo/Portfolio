import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider 
  ]
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit(): void {
    // console.log("das")
    this.changueTheme();
    this.scrollObserver();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  changueTheme(): void {
    let element = <HTMLInputElement>document.querySelector('input[name=theme]');
    element?.addEventListener('change', () => {
      if (element.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    });

    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000);
    };
  }

  scrollObserver(): void {
    var faders = document.querySelectorAll('.fade-in');
    console.log(faders);

    const appearOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }
}
