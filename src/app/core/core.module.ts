import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { CoreHttpService } from '@core/services/core-http.service';

const modules = [HttpClientModule];



@NgModule({
  declarations: [],
  imports: [...modules],
  providers: [ CoreHttpService ]
})
export class CoreModule { }
