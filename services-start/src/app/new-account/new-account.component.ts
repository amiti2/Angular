import { Component, EventEmitter, Output } from '@angular/core';
import{ LoggingService } from "../logging.service";
import { AccountsService} from "../account/accounts.service"
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService,AccountsService]
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService,private accountsService:AccountsService)
  {
this.accountsService.statusUpdated.subscribe((status:string)=> alert("new status: "+ status));
  }
  onCreateAccount(accountName: string, accountStatus: string) {
   console.log(this.accountsService);
   this.accountsService.addAccount(accountName,accountStatus);

   //const logservice:LoggingService = new LoggingService();
   // this.loggingService.logStatusChange(accountStatus);
  }
}
