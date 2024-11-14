// src/app/directives/resaltar.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective implements OnInit {
  @Input('appResaltar') fechaCreacion!: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const fechaServicio = new Date(this.fechaCreacion);
    const fechaActual = new Date();
    const diferenciaDias = (fechaActual.getTime() - fechaServicio.getTime()) / (1000 * 3600 * 24);

    if (diferenciaDias <= 30) {
      this.el.nativeElement.style.border = '2px solid green';
    }
  }
}
