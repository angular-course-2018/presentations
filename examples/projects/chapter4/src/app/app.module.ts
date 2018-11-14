import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FibonacciGeneratorComponent } from './fibonacci-generator/fibonacci-generator.component';
import { CommonModule } from '@angular/common';
import { ThrottledScrollComponent } from './throttled-scroll/throttled-scroll.component';
import { HttpClientExampleComponent } from './http-client-example/http-client-example.component';
import { SpinnerComponent } from './http-client-example/components/spinner.component';
import { HttpClientExampleService } from './http-client-example/http-client-example.service';
import { SimpleBehaviorSubjectComponent } from './simple-behavior-subject/simple-behavior-subject.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBehaviorSubjectComponent,
    FibonacciGeneratorComponent,
    ThrottledScrollComponent,
    HttpClientExampleComponent,
    SpinnerComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [HttpClientExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
