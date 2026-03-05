import Navbar from "./Compoents/Navbar";
import Footer from "./Compoents/Footer";
import Chatbot from "./Compoents/chatbot/Chatbot";

function App(){

return(

<div>

<Navbar/>

<div className="p-10 text-center">

<h1 className="text-3xl font-bold">
Welcome to Our College Website
</h1>

<p className="mt-3">
Ask anything about courses, fees, hostel or admission.
</p>

</div>

<Chatbot/>

<Footer/>

</div>

)

}

export default App;