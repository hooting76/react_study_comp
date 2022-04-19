function App(){
    return(
        <div>
            <h1>나 여기있어</h1>
            <MainComponent />
        </div>
    )
}

function MainComponent(){
    const [cnt,setCnt] = React.useState(0);

    const countAddEvent = () =>{
        setCnt(cnt => cnt+1);
    }
    const countMusEvent = () =>{
        setCnt(cnt => cnt-1);
    }

    return(
        <div id="count">
            <h2>카운트 만들기</h2>
            <button onClick={countAddEvent}></button>
            <button onClick={countMusEvent}></button>
            <ViewComponent cnt={cnt}/>
        </div>
    )
}

function ViewComponent(props){
    return(
        <div>
            <h1>나는 하위 컴포넌트야</h1>
            <h2>{props.cnt}</h2>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)