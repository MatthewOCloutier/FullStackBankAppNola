// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkSdukDRLolEojCSvKgagqdnpgCK33Cpk",
//   authDomain: "m-c-fullstackbank.firebaseapp.com",
//   projectId: "m-c-fullstackbank",
//   storageBucket: "m-c-fullstackbank.appspot.com",
//   messagingSenderId: "51271479740",
//   appId: "1:51271479740:web:c9aa4f7400b3ee91a3bbb9",
//   measurementId: "G-M5MHZQ30Y0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
function Spa() {
  const [session, setSession] = React.useState({});
  return (
    
    <HashRouter>
       
      <div>
        <NavBar />
       
       
        <UserContext.Provider value={{ session, setSession  }}>
            
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div> 
        </UserContext.Provider>
       
      </div>

    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
