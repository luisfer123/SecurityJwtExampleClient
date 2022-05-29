import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_security/auth.service';
import { TestDataService } from 'src/app/_services/test-data.service';

@Component({
  selector: 'app-admin-test',
  templateUrl: './admin-test.component.html',
  styleUrls: ['./admin-test.component.css']
})
export class AdminTestComponent implements OnInit {

  message: string = '';

  constructor(
    private authService: AuthService,
    private testDataService: TestDataService) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    this.testDataService.getAdminMessage().subscribe({
      next: data => this.message = data.message
    });
  }

}
