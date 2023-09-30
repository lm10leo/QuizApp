import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'; // Import RouterModule and Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';


import { ResultComponent } from './result/result.component';
import { QuizService } from './service/quiz-service.service';

const routes: Routes = [
  // Other routes...
  { path: 'result', component: ResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    
  
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Add this line to configure the router with your routes
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
