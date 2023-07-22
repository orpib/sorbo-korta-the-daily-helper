import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          'lt-sm',
          'lt-md',
          'lt-lg',
          'lt-xl',
          'gt-xs',
          'gt-sm',
          'gt- md',
          'gt-lg',
      ],
  }),
  ],
  exports : [
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
