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

@NgModule({
  declarations: [
    AppComponent,
    FibonacciGeneratorComponent,
    ThrottledScrollComponent,
    HttpClientExampleComponent,
    SpinnerComponent,
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
