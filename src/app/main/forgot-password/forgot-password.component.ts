import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';


@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor( 
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder) {

      this._fuseConfigService.config = {
        layout: {
            navbar   : {
                hidden: true
            },
            toolbar  : {
                hidden: true
            },
            footer   : {
                hidden: true
            },
            sidepanel: {
                hidden: true
            }
        }
    };

     }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
  });
  }
  

}
