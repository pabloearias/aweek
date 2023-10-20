import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AnnouncementComponent } from './shared/announcement/announcement.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { MainteanceComponent } from './views/mainteance/mainteance.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { EmailService } from './services/email.service';

const materialModules = [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AnnouncementComponent,
    AboutUsComponent,
    MainteanceComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    materialModules,
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
