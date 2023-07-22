import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/note-editor',
    pathMatch: 'full',
    data: {
        isFullScreen: true,
        requiredFeature: 'login',
    },
},
{
  path: 'note-editor',
  loadChildren: () => import('../note-editor/note-editor.module').then((m) => m.NoteEditorModule),
  data: {
      isFullScreen: true,
      isPublic: true,
  }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
