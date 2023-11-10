import { Component } from '@angular/core';
import { JokesService } from './services//jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  joke: string = '';
  title = 'Stand Up jokes';
  constructor(private jokeService: JokesService) { }  
  fetchJoke(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      let joke=this.joke = data.joke;
      console.log(joke);
      
    });
  }
}