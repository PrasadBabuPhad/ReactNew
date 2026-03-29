import Header from "./Header.js"
import Card from "./Card.js"
function App(){
    return(
        <Provider store={}>
            <Header></Header>
            <Card></Card>
        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);