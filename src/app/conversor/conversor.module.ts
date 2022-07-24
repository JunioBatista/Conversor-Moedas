import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';



@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
    FormsModule,
    
  ], 
  exports: [ 
    ConversorComponent 
  ],
  providers: [ 
    MoedaService, 
    ConversorService 
  ]
})

export class ConversorModule { }
