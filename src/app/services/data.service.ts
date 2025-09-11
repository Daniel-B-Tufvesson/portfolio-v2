import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    public readonly email = signal('daniel.tufvesson@outlook.com');
    public readonly linkedInURL = signal('https://www.linkedin.com/in/daniel-tufvesson-a4541929a/');
    public readonly githubURL = signal('https://github.com/Daniel-B-Tufvesson');
}
