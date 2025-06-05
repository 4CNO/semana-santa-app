import { Injectable } from '@angular/core';
import { SemanaSanta } from '../models/semana-santa';

@Injectable({ providedIn: 'root' })
export class SemanaSantaService {
  obtenerInicioSemanaSanta(año: number): Date {
    const a = año % 19;
    const b = año % 4;
    const c = año % 7;
    const d = (19 + 24) % 30;
    const dias = d + (2 + b + 4 + c + 6 + d + 5) % 7;

    let dia = 15 + dias;
    let mes = 3;
    if (dia > 31) {
      dia -= 31;
      mes++;
    }
    return new Date(año, mes - 1, dia);
  }

  calcularSemanaSanta(año: number): SemanaSanta {
    const inicio = this.obtenerInicioSemanaSanta(año);
    return {
      año,
      inicioSemanaSanta: inicio,
      domingoDeRamos: new Date(inicio.getTime() - 7 * 86400000),
      juevesSanto: new Date(inicio.getTime() - 3 * 86400000),
      viernesSanto: new Date(inicio.getTime() - 2 * 86400000),
      domingoDePascua: inicio
    };
  }
}
