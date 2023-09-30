import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  userScore: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to route parameters to get the userScore
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Use if statement to check if params is not null
      if (params && params.get('userScore')) {
        // Use ! operator to assert that params is not null
        this.userScore = +params.get('userScore')!;
        console.log('User Score:', this.userScore); // Add this line
      } else {
        this.userScore = 0;
      }
    });
  }
  

  startNewQuiz() {
    // Navigate to the quiz component or the component you want to start a new quiz
    this.router.navigate(['/quiz']);
  }
}