import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorConfig } from '../../shared/configs/ckeditor.config';
@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent implements OnInit {
  constructor() {}
  data: any;
  public Editor = ClassicEditor;
  ckEditorConfig = {
    ...CKEditorConfig,
    placeholder: 'Type Here',
    fontColor: {
      colors: [
        {
          color: 'rgb(0, 0, 0)',
          label: 'Black',
        },
        {
          color: 'rgb(255, 0, 0)',
          label: 'Red',
        },
        {
          color: 'rgb(0, 128, 0)',
          label: 'Green',
        },
        // Add more colors as needed
      ],
    },
  };

  ngOnInit(): void {}
}
