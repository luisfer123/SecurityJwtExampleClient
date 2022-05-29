import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/_services/test-data.service';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css']
})
export class UserTestComponent implements OnInit {

  message: string = '';

  constructor(
    private testDataService: TestDataService
  ) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.testDataService.getUserMessage().subscribe(
      data => {
        this.message = data.message;
      }
    );
  }

}
