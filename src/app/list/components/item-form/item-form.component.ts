import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  public itemForm: FormGroup;
  @Output() public save = new EventEmitter();
  @Input() public item: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      id: ['', [ Validators.required, this.isInteger ]],
      title: ['', Validators.required]
    });

    if (this.item) {
      this.itemForm.setValue(this.item);
    }
  }

  public isInteger(control: AbstractControl) {
    return Number.isInteger(+control.value) ? null : { noInteger: { value: control.value } };
  }

  public submit() {
    console.log('submit', this.itemForm.value);
    this.save.emit(this.itemForm.value);
  }
}
