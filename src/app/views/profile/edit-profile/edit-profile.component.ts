import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user = '';

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
  }

  logout(): void {
  }

}