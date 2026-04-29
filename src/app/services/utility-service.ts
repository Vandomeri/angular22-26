import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {


  bodyColor = signal<string>('')



}
