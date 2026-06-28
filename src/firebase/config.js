import { initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyASte93eKcXDq1I0fR8EEs-aeVVmNYIoWs",
  authDomain: "test-food-site.firebaseapp.com",
  projectId: "test-food-site",
  storageBucket: "test-food-site.firebasestorage.app",
  messagingSenderId: "940922321311",
  appId: "1:940922321311:web:5bda54fc418ed3679125aa"
};

//init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

export{ db }