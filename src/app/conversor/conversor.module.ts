import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes/data-br.pipe';



@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
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
