import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group( { searchTerm: ['', Validators.required] } );
  }

  search(){
    
    this.router.navigate(['/user/search', this.searchForm.get('searchTerm').value]);
    this.searchForm.reset();

  }
}
