import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UsersComponent } from './components/users/users.component';
import { GrdFilterPipe } from './pipes/grd-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './services/in-memory.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUsersComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService, {dataEncapsulation : false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
