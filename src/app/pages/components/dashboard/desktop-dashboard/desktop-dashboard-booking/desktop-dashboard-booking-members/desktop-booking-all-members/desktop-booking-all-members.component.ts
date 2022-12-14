import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { DataHoldingService } from '../../../../../../../shared/services/data-holding.service';

@Component({
  selector: 'app-desktop-booking-all-members',
  templateUrl: './desktop-booking-all-members.component.html',
  styleUrls: ['./desktop-booking-all-members.component.scss']
})
export class DesktopBookingAllMembersComponent implements OnInit {

  @Output() selectType = new EventEmitter<string>();
  @Output() sendData = new EventEmitter<any>();

  allMembers: any;
  getDataMember: any;

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private dataHolder: DataHoldingService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getAllMembers();
  }

  onSelectType(type) {
    this.selectType.emit(type);
  }

  getAllMembers() {
    this.dashboardService.getListMembers().subscribe(res => {
      this.allMembers = res;
      console.log("allMembers", this.allMembers);
    })
  }

  setGetMember(data) {
    this.dataHolder.setData(data);
    this.getDataMember = this.dataHolder.getData();

    this.sendData.emit(this.getDataMember);
  }

}
