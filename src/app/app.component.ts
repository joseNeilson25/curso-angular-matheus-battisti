import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "joaquim"

  userData = {
    email: "joaquim@email.com",
    role: "admin"
  }
  title = 'curso-angular';

}
