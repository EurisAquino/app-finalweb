import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  postRef:any
  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private activeRoute:ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      Nombres: [''],
      Apellidos: [''],
      Correo: ['']
    })
   }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.postService.getPostById(id).subscribe( res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        Nombres: [this.postRef.Nombres],
        Apellidos: [this.postRef.Apellidos],
        Correo: [this.postRef.Correo],
      })
    })
    console.log(id);
  }

  onSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value, id)
    this.router.navigate(['show'])
  }

}
