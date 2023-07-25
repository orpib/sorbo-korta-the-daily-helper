import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [
{
    path: '',
    component : NoteEditorComponent
    },
];

@NgModule({
  declarations: [
    NoteEditorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FormsModule,
		ReactiveFormsModule,
    CKEditorModule
  ]
})
export class NoteEditorModule { }
