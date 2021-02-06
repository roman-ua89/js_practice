import './App.css';
import Calendar from "./components/Calendar/Calendar";

function App() {

    return (
        <div className="App">
            <div className={'calendarContainer'}>
                <div className={'calendar'}>
                    <Calendar/>
                </div>
            </div>
        </div>
    );
}

export default App;
