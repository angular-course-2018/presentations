import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface User {
  username: string;
  firstname: string;
  lastname: string;

  address: Address;
}

export interface Address {
  street: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'chapter6';
  userForm: FormGroup;
  searchForm: FormGroup;

  bananaType = 'round';

  get addresses() {
    return this.userForm.get('addresses') as FormArray;
  }

  get firstname() {
    return this.userForm.get('firstname');
  }

  private firstnameSubscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      username: '',
      addresses: fb.array([this.createAddressForm()])
    });

    this.searchForm = fb.group({
      search: ''
    });

    this.firstnameSubscription = this.userForm.controls.firstname
      .valueChanges.subscribe((value) => {
        console.log(this.userForm.valid);
      });

    this.search = this.search.bind(this);
    this.searchForm.controls.search.valueChanges
      .pipe(
        // debounceTime(500),
        // distinctUntilChanged()
      )
      .subscribe(this.search);
  }

  ngOnDestroy(): void {
    this.firstnameSubscription.unsubscribe();
  }

  addAddress() {
    this.addresses.push(this.createAddressForm());
  }

  search(value: string) {
    console.log(`search string: ${value}`);
  }


  addUser() {

  }

  createAddressForm() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ''
    });
  }

  bananaChanged($event){
    console.log(`banana changed to ${$event}`);
  }
}
