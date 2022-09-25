import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAS2cji9Xq9OcdvQLoMXvydZOfsa_retaM",
  authDomain: "angular-recipe-app-74c7f.firebaseapp.com",
  databaseURL: "https://angular-recipe-app-74c7f-default-rtdb.firebaseio.com",
  projectId: "angular-recipe-app-74c7f",
  storageBucket: "angular-recipe-app-74c7f.appspot.com",
  messagingSenderId: "116571623439",
  appId: "1:116571623439:web:85105f88b8dc82096e137a",
  measurementId: "G-FTS9PTLLPQ"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
}
