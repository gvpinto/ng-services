import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.sevice";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.accounts[this.id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
