import CounterComponent from './CounterComponent'
import ListComponent from './ListComponent'

import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ListComponent />
                <CounterComponent />
            </header>
        </div>
    )
}

export default App
