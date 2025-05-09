import './App.css'
import Header from "./component/Header.jsx";
import Body from "./component/Body.jsx";
import Footer from "./component/Footer.jsx";
import Body1 from "./component/Body1.jsx";

function ChildComp () {
    return(
        <div>
            <h1>Child Component</h1>
        </div>
    )
}

function App() {
 return(
     <div className="App">
         <Header/>
         <Body>
             <ChildComp/>
         </Body>
         <hr/>
         <Body1 />
         <Footer />
     </div>
 )
}

export default App
