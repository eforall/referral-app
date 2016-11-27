import { Component, ViewChild } from '@angular/core';
import { StoreService } from '../../../store/store.service';
import { DataWriterService } from '../../../firebase/data-writer.service';

@Component({
  selector: 'ra-memberadmin',
  templateUrl: './member-admin.component.html',
  styleUrls: ['./member-admin.component.css']
})
export class MembersAdminComponent {

  partners;
  members;

  constructor(private store: StoreService, private data: DataWriterService) {
    this.partners = store.select(store => store.partners);
    this.members = store.select(store => store.members);
  }

  changePartner(uid, pid) {
    this.data.updateMemberPartner(uid, pid);
  }

}