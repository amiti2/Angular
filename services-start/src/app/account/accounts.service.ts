import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "../logging.service";
@Injectable()
export class AccountsService
{
  constructor(private loggingService:LoggingService)
  {

  }
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
      updateStatus(id: number,status:string)
      {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
      addAccount(name:string,status:string)
      {
          this.accounts.push({name :name,status:status});
          this.loggingService.logStatusChange(status);
      }

      statusUpdated = new EventEmitter<string>();
}