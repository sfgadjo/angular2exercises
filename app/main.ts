import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationComponent }  from './components/application/application';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from "./components/product";
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {routing} from './components/app.routing';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ ApplicationComponent, HomeComponent, ProductDetailComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    //providers:[{provide: APP_BASE_HREF, useValue: '/'}], // requires configuring redirects on web server
    bootstrap:    [ ApplicationComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
