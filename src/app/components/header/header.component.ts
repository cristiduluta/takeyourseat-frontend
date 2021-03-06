import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  notificationsOpened = false;

  @Output() toggleNotificationSidebar: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public authentificationService: AuthenticationService,
    private notificationService: NotificationsService,
  ) { }
  ngOnInit() {
    if (this.authentificationService.isUserLoggedIn()) {
      this.authentificationService.loadLoggedInUser();
    }
  }

  toggleNotificationCenter() {
    this.notificationsOpened = !this.notificationsOpened;
    this.toggleNotificationSidebar.emit(this.notificationsOpened);
  }
}
