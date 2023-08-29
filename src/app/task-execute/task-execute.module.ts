import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataConversionCheckComponent } from './data-conversion-check/data-conversion-check.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      component : DataConversionCheckComponent
      },
  ];
  
  @NgModule({
    declarations: [
      DataConversionCheckComponent
    ],
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
export class TaskExecuteModule { }
