import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConverToSpacePipe } from './conver-to-space.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConverToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent
  ]
})
export class SharedModule { }
