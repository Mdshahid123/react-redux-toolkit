// Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.
import Counter from "./component/Counter.jsx"
import Coin from "./component/Coin.jsx"
import Theme from "./component/Theme.jsx"
import  "./app.css"
function App()
{  
   return (
    <> 
      <div>
                <Counter></Counter>
                <Coin></Coin>
                <Theme></Theme>
      </div>
       
    </>
   )
}

export default App