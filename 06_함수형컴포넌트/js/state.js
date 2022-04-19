function App() {
    return(
        <div style={appStyle.init.mainStyle}>
            <h1 style={appStyle.init.h1Style}>나 여기 있어</h1>
            <MainComponent />
        </div>
    );
}

function MainComponent(){
    //훅: 함수형에 존재하는 특수한 형태의 상태관리
    // 함수형 컴포넌트는 배열 구조 분할 할당 사용 방식
    const [cnt,setCnt]=React.useState(0);

    const countAddEvent = ()=>{
        setCnt(cnt => cnt +1);
    }

    const countMusEvent = ()=>{
        setCnt(cnt => cnt -1);
    }
    return(
        <div id="count">
            <h2>카운트 만들기</h2>
            <button style={appStyle.init.btnStyle} onClick={countAddEvent}>증가버튼+</button>
            <button style={appStyle.init.btnStyle} onClick={countMusEvent}>감소버튼-</button>
            <ViewComponent cnt={cnt}/>
        </div>
    );
}

// 가장 많이 쓰이는 방법
// function ViewComponent(props){
//     return(
//         <div>
//             <h1>나는 하위 컴포넌트야!</h1>
//             <h2>{props.cnt}</h2>
//         </div>
//     );
// }

// 가장 기본적인 형태
// function ViewComponent(props){
//     const {cnt}=props;
//     return(
//         <div>
//             <h1>나는 하위 컴포넌트야!</h1>
//             <h2>{cnt}</h2>
//         </div>
//     );
// }

// 새번째 방법
// function ViewComponent({cnt}){
//     return(
//         <div>
//             <h1>나는 하위 컴포넌트야!</h1>
//             <h2>{cnt}</h2>
//         </div>
//     );
// }

function ViewComponent({cnt}){
    return(
        <div>
            <h1>나는 하위 컴포넌트야!</h1>
            <h2>{cnt}</h2>
        </div>
    );
}


const appStyle ={
    init: {
         mainStyle : {
            textAlign: 'center',
        },
        h1Style: {
            fontSize:'40px',
            color: '#f53',
            padding:'20px 0'
        },
        btnStyle : {
            fontSize: '20px',
            color: '#fff',
            background: '#000',
            padding: '10px 20px',
            cursor: 'pointer',
            margin: '0 10px'
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)