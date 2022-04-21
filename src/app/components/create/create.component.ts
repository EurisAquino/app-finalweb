import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public postForm:FormGroup;
  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public reactiveFormsModule: ReactiveFormsModule,
    public router: Router
  ) {
    this.postForm = this.formBuilder.group({
      Nombres : [''],
      Apellidos : [''],
      Correo : [''],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postService.createPost(this.postForm.value)
    this.router.navigate( ['show'] )
  }
}
