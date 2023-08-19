import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD7JjDSk2_oRi7RjdIdapJ-VFlaUhfTnP4",
  authDomain: "crud-project-3283c.firebaseapp.com",
 // databaseURL: "https://crud-project-3283c-default-rtdb.firebaseio.com",
  projectId: "crud-project-3283c",
  storageBucket: "crud-project-3283c.appspot.com",
  messagingSenderId: "973503745400",
  appId: "1:973503745400:web:72a2ca10ed5a38359ccc8d"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(app);
export default db
