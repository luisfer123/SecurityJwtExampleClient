import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/_services/test-data.service';

@Component({
  selector: 'app-mod-test',
  templateUrl: './mod-test.component.html',
  styleUrls: ['./mod-test.component.css']
})
export class ModTestComponent implements OnInit {

  message: string = '';

  constructor(
    private testDataService: TestDataService
  ) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    this.testDataService.getModMessage().subscribe({
      next: data => this.message = data.message
    });
  }

}
