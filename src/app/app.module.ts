import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RainbowDirective } from './rainbow.directive';
import { DynamicAnchorDirective } from './dynamic-anchor.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionComponent } from './question/question.component';
import { SampleComponent } from './sample/sample.component';
import { SampleTemplateComponent } from './sample-template/sample-template.component';
import { SampleViewContainerComponent } from './sample-view-container/sample-view-container.component';
import { InsertEmbeddedViewComponent } from './insert-embedded-view/insert-embedded-view.component';

@NgModule({
  entryComponents: [MessagesComponent],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    RainbowDirective,
    DynamicAnchorDirective,
    DynamicFormComponent,
    QuestionComponent,
    SampleComponent,
    SampleTemplateComponent,
    SampleViewContainerComponent,
    InsertEmbeddedViewComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
