import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService} from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './events/events.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MemoriesComponent } from './memories/memories.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { GiftGivingComponent } from './gift-giving/gift-giving.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EventsComponent,
    GiftGivingComponent,
    PersonalInfoComponent,
    MessagingComponent,
    RecommendationsComponent,
    MemoriesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
