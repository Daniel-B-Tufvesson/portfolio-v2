import { Injectable, signal } from '@angular/core';

export interface ProjectData {
    name: string,
    description: string,
    imageURL?: string,
    routerLink?: string, // For internal page.
    urlLink?: string, // For external page.
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
    public readonly email = signal('daniel.tufvesson@outlook.com');
    public readonly linkedInURL = signal('https://www.linkedin.com/in/daniel-tufvesson-a4541929a/');
    public readonly githubURL = signal('https://github.com/Daniel-B-Tufvesson');

    public readonly gameProjects: ProjectData[] = [
        {
            name: 'Unearthed',
            description: 'Unearthed is about exploration, survival, crafting, mining, and most importantly automation! The game is set in a procedurally generated 2D tile world.',
            imageURL: '/assets/home/unearthed-cell.jpeg'
        },
        {
            name: 'BONE-BREAKER',
            description: 'A variant of the classic Breakout game. In this version the player must break all the bones by bouncing around an angry-looking skull.',
            imageURL: '/assets/home/bone-breaker cell.jpeg',
            routerLink: '/projects/bone-breaker'
        },
        {
            name: 'Volume Space Program',
            description: 'A fun but \'useless\' input field for controlling the audio volume. To set the volume, you must launch a tiny rocket into orbit. The height of the orbit then determines the volume.',
            imageURL: '/assets/home/rsp-cell.jpeg',
            routerLink: '/projects/vsp'
        }
    ];

    public readonly aiProjects: ProjectData[] = [
        {
            name: 'Perceptron POS Tagger',
            description: "A reimplentation of a multi-class perceptron for part-of-speech tagging words in Swedish sentences.",
            urlLink: 'https://github.com/Daniel-B-Tufvesson/perceptron-pos-tagger'
        }
    ];
}