import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APP_CONFIG, BaseAppConfig } from "./app.config";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/*
 *  NgModule class take a metadata that will help relate things together.
 *  NgModule it's a normal module, but it's the root module of our applications.
 *  It will help to package up our application according to the router given for example,
 *  and/or make some resource (services for example) available to some module or all modules.
 *
 *  MetaData :
 *      - providers       : The set of injectable objects that are available in the injector if this module.
 *      - declarations    : The set of components, derictives, and pipes that belong to this module.
 *      - imports         : The set of NgModules whose exported declarable are available to templates in this module.
 *      - exports         : The set of component, directives, and pipes declared in this NgModule that can be used by
 *                        : any other module importing this one.
 *      - entryComponents : The set of components to compile when this ngModule is defined, so that they can be dynamically
 *                        : loaded into the view.
 *      - bootstrap       : The set of components that are bootstrapped. The components listed here are automatically added
 *                        : to "entryComponents".
 *      - schemas         : The set of schemas that declare elements to be allowed in the NgModule.
 *                        : Elements and properties that are neither Angular components nor directives must be declared in a schema.
 *      - id              : A name or path that uniquely identifies this NgModule in getModuleFactory.
 *                        : If left undefined, the NgModule is not registred with getModuleFactory.
 *      - jit             : When present, this module is ignored by the AOT compiler. it remains in distubuted code,
 *                        : and the JIT compiler attempts to cimpile it at run time, in the browser. to ensure the correct behavior,
 *                        : the app must import '@angular/compiler'.
 */
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
