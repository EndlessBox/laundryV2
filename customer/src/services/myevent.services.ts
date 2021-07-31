import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; // For rxjs 6

@Injectable({
    providedIn: 'root'
})
export class MyEvent {
    private selectedLanguage = new Subject<string>();
    private currentAnimation = new Subject<boolean>();

    constructor() { }

    public getLanguageObservable(): Observable<string> {
        return this.selectedLanguage.asObservable();
    }

    public setLanguageData(data) {
        this.selectedLanguage.next(data);
    }

    public setAnimation(data) {
        this.currentAnimation.next(data);
    }
    
    public getAnimationObservable(): Observable<boolean> {
        return this.currentAnimation.asObservable();
    }
}