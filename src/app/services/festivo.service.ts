import { Injectable } from '@angular/core';
import { Festivo } from '../models/festivo';
import { SemanaSantaService } from './semana-santa.service';

@Injectable({ providedIn: 'root' })
export class FestivoService {
  constructor(private semanaSantaService: SemanaSantaService) {}

  obtenerFestivos(año: number): Festivo[] {
    const ss = this.semanaSantaService.calcularSemanaSanta(año);
    return [
      { nombre: 'Año Nuevo', fecha: new Date(año, 0, 1) },
      { nombre: 'Día del Trabajo', fecha: new Date(año, 4, 1) },
      { nombre: 'Domingo de Ramos', fecha: ss.domingoDeRamos },
      { nombre: 'Jueves Santo', fecha: ss.juevesSanto },
      { nombre: 'Viernes Santo', fecha: ss.viernesSanto },
      { nombre: 'Domingo de Pascua', fecha: ss.domingoDePascua },
      { nombre: 'Navidad', fecha: new Date(año, 11, 25) }
    ];
  }
}
