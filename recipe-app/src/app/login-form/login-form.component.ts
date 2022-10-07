import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public loginForm: FormGroup;

  public get email(): AbstractControl | null {
    return this.loginForm.get("email");
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get("password");
  }

  @Output() formSubmit = new EventEmitter<{
    email: string;
    password: string;
  }>();

  constructor() {
    this.loginForm = this._buildForm();
  }

  public submit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log(
        "Valid form values from LoginFormComponent",
        this.loginForm.value
      );
      this.formSubmit.emit(this.loginForm.value);
    }
  }

  private _buildForm(): FormGroup {
    return new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
      },
      {
        updateOn: "blur",
      }
    );
  }
}
