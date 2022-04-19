function App() {
    return(
        <div id="app" style={mainStyle}>
            <h1 style={h1Style}>안녕하세요 react 배워보자</h1>
            <MainComponent  title="좋은아침"/>
        </div>
    )
}


class MainComponent extends React.Component {
    constructor(props){
        // props를 쓰기위해서 아래의 super가 필요
        super(props);
        // 하단의 this를 쓰기 위해서 상단의 super가 필요
        // 즉 연쇄적으로 서로가 필요한 관계.
        this.state ={
            cnt: 0
        }
    }
    // countEvent2 = () => {
    //     alert('countEvent 테스트2') 
    // }/*  render밖에서는 함수명만 화살표함수로 작성 */


    render() {
        // const countEvent = () => {
        //    alert('countEvent 테스트') 
        // } /* render안에서는 const변수를 사용 */

        /* 구조분할 */
        const {title} = this.props;

        return (
            <div id="main">
                {/* <h1>{this.props.title}</h1> */}
                <h1>{title}</h1>

                <button style={btnStyle} onClick={countEvent}>증가버튼 +</button>{/* render함수 안에서 불러올때 함수명만 사용가능 */}
                <button style={btnStyle} onClick={this.countEvent2}>감소버튼 -</button>{/* render함수 밖에서 불러올떄 this를 꼭 사용 */}

                <ViewComponent cnt={this.state.cnt} />
            </div>
        );
    }
}


class ViewComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>하위 컴포넌트</h1>
                <h2>{this.props.cnt}</h2>
            </div>
        );
    }
}



const mainStyle ={
    textAlign: 'center'
}
const h1Style= {
    fontSize:'40px',
    color: '#f53',
    padding:'20px 0'
}
const btnStyle = {
    fontSize: '20px',
    color: '#fff',
    background: '#000',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px'
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);