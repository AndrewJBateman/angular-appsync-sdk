import { Component, OnInit } from '@angular/core';
import { AppsyncService } from '../appsync.service';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

	constructor(private appsync: AppsyncService) { }

	ngOnInit() {
	}

}
