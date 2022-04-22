
class App extends React.Component {
    constructor(props){

        // console.log(constructor);

        super(props);
        this.state = {
            회원제목: '회원관리 리스트',
            성적표제목: '성적관리 리스트',
            주소록제목 : '주소록관리 리스트',
            회원:[],
            성적표:[],
            주소록:[]
        }
    }

    componentDidMount(){

        // console.log(componentDidMount);
        
        axios.get('./data/member.json')
        .then((res) =>{ //response
            this.setState({
                회원: res.data.회원,
                성적표: res.data.성적표,
                주소록: res.data.주소록
            });
            // console.log(res.data.성적표)
        })
        .catch((err)=>{
            console.log('에러!',err)
        });
    }

    render() {
        return (
            <div>
                <h1>회원관리</h1>
                <MemberComponent 제목={this.state.회원제목} 회원={this.state.회원} />
                <SungjukComponent 성적표제목={this.state.성적표제목} 성적표={this.state.성적표} />
                <AddressComponent 주소록제목={this.state.주소록제목} 주소록={this.state.주소록}/>
            </div>
        );
    }
}
    
    class MemberComponent extends React.Component {
        render() {
            return (
                <div id="member">
                    {/* <h2>{this.props.제목}</h2> */}
                     <MemberListComponent 제목1={this.props.제목} 회원={this.props.회원}/>
                </div>
            );
        }
    }
    class SungjukComponent extends React.Component {
        render() {      
            const memberSungjuk = this.props.성적표.map((item,index) => {
                return (
                <tr>
                    <td>{index+1}</td>
                    <td>{item.이름}</td>
                    <td>{item.국어}</td>
                    <td>{item.영어}</td>
                    <td>{item.수학}</td>
                </tr>
                );
            });
            
            return (
                <div id="sungjuk">
                    <h2>
                        {this.props.성적표제목}
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>국어</th>
                                <th>영어</th>
                                <th>수학</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memberSungjuk}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
    class AddressComponent extends React.Component {
        render() {

            const memberJuso = this.props.주소록.map((item,index) => {
                return (
                <tr>
                    <td>{item.이름}</td>
                    <td>{item.주소}</td>
                    <td>{item.전화}</td>
                </tr>
                );
            });

            return (
                <div id="address">
                    <h2>
                        {this.props.주소록제목}
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>주소</th>
                                <th>전화</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memberJuso}
                        </tbody>
                    </table>
                </div>
            );
        };
    }
        
        class MemberListComponent extends React.Component {
            render() {

                const memberList = this.props.회원.map((item,index,array) => {
                    return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.이름}</td>
                        <td>{item.거주지}</td>
                        <td>{item.취미.map((i,idx)=>{
                            return(
                                <span>
                                    <a href="#" title={i}>{i}</a> {idx < item.취미.length-1 ? ', ' : ''}
                                </span>
                            )
                        })}
                        </td>
                    </tr>
                    );
                });

                return (
                   <div >
                       <h2>{this.props.제목1}</h2>
                       <table>
                           <thead>
                               <tr>
                                   <th>번호</th>
                                   <th>이름</th>
                                   <th>거주지</th>
                                   <th>취미</th>
                               </tr>
                           </thead>
                           <tbody>
                               {memberList}
                           </tbody>
                       </table>
                   </div>
                );
            }
        }
        




ReactDOM.render(
    <App />,
    document.getElementById('root')
);

