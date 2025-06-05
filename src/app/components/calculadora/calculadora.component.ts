import { Component } from '@angular/core';
import { FestivoService } from '../../services/festivo.service';
import { SemanaSantaService } from '../../services/semana-santa.service';
import { Festivo } from '../../models/festivo';
import { SemanaSanta } from '../../models/semana-santa';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {
  year: number = new Date().getFullYear();
  festivos: Festivo[] = [];
  semanaSanta?: SemanaSanta;

  constructor(
    private festivoService: FestivoService,
    private semanaSantaService: SemanaSantaService
  ) {}

  calcular() {
    this.festivos = this.festivoService.obtenerFestivos(this.year);
    this.semanaSanta = this.semanaSantaService.calcularSemanaSanta(this.year);
  }
}
