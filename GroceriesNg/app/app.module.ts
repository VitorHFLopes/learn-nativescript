import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { navigatableComponents, routes } from './app.routing';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, ...navigatableComponents],
    bootstrap: [AppComponent]
})
export class AppModule {
}