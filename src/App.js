import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";


function App() {
    let button = [{color: 'warning', step: 1},]

    return (
    
    
    <div className="App">
        <>
            <Navbar />
            <div className="container text-center">
                <h1>Get it Done!</h1>
                {button.map((button, idx) => <ToDo color={button.color} key={idx} />)}

            </div>
            

        </>
    </div>
  );
}

export default App;
