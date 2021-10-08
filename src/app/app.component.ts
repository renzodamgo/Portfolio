import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  ngOnInit(): void {
    console.log("das")
    let element = <HTMLInputElement> document.querySelector('input[name=theme]');
    element?.addEventListener('change',()=>{
      if (element.checked){
        trans()
        document.documentElement.setAttribute('data-theme','light')
        
      }else{
        document.documentElement.setAttribute('data-theme','dark')

      }
    })

    let trans = ()=>{
      document.documentElement.classList.add('transition');
      window.setTimeout(()=>{
        document.documentElement.classList.remove('transition')
      },1000)
    }
  }

}
