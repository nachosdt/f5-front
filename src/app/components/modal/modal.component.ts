import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output('closeModal') closeModal: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.closeModal.emit();
  }
}
