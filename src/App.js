import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
import Kekambas from "./components/Kekambas";


function App() {
    let button = [{color: 'warning', step: 1},]

    const [firstName, setStudentsFirstName] = useState('');
    const [lastName, setStudentLastName] = useState('');
    const [idNum, setStudentId] = useState('');
    const [session, setSession] = useState([])

    function createStudent(firstName, lastName, idNum){
        setStudentsFirstName(firstName)
        setStudentLastName(lastName)
        setStudentId(idNum)
    }

    useEffect(() => {
        fetch(`https://scratched-juniper-salto.glitch.me/kekambas`)
            .then(res => res.json())
            .then(data => {
                const currentSession = data
                setSession(currentSession)
                console.log(session)
            })  
    }, [firstName, lastName, idNum])

    return (
    
    
    <div className="App">
        <>
            <Navbar />
            <div className="container text-center">
                <h1>Get it Done!</h1>
                {button.map((button, idx) => <ToDo color={button.color} key={idx} />)}
                <Kekambas class={session} createStudent={createStudent} />
            </div>
            

        </>
    </div>
  );
}

export default App;
