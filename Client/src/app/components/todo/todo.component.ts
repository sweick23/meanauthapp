import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

	task: any;

  constructor(private router: Router,
  	private authService: AuthService
  	) { }

  ngOnInit() {
  }

  onTaskSubmit(){
  	const addTask = {
  		task: this.task
  	}
  }


}
