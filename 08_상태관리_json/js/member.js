(() => {
    const MemberComponent = (props) => {

        //axios 엑시오스
        //외부데이터 data (비동기 처리방식 사용) 폴더안에 있는 me,ber.json data를 axios를 이용 배열 저장 상태관리
        // useState() 훅(hook) , useEffect()
        // 반드시 화살표함수(람다함수) 를 사용한다. 
        
        const [addr,setAddr] = React.useState([]);

        React.useEffect(()=>{
            
        const axiosResult = axios.get('./data/member.json')
        .then((Response)=>{
            // console.log('성공')
            return(
                console.log(Response.data.주소록)
            )
        }).catch((Error) =>{
            console.log('error')
        })

        // console.log( addr );
        },[]);

        return(
            <div>
                <h1 style={style.h1}>{props.title}</h1>
                <AddressComponent addressTitle={props.title2} address={props.addr}/>
            </div>
        )
    }

    const AddressComponent = ({addressTitle, address}) =>{
        
        const result = address.map(function(item, index, array){
            // console.log(item);

            return(
            <tr>
                <td>{index+1}</td>
                <td>{item.이름}</td>
                <td>{item.거주지}</td>
                <td>
                    {item.취미.map(function(item2, idx2){
                    // console.log(item2);
                    return(
                        <span>
                            <a href="#" title={item2}>{item2}</a>
                            {(item.취미.length-1)===idx2 ? '':','}
                        </span>
                    )
                })}
                </td>
            </tr>
            )

        });
        return(
            <div id="address">
                <h2 style={style.h2}>{addressTitle}</h2>
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
                        {result}
                    </tbody>
                </table>
            </div>
        )
    }
    const style = {
        h1 :{
            fontSize: '36px',
            color: '#c66',
            textAlign: 'center',
            padding: '50px 0'
        },
        h2 :{
            fontSize: '30px',
            color: '#c22',
            textAlign: 'center',
            padding: '50px 0'
        }
    }
MemberComponent.defaultProps = {
    title:'회원관리',
    subTitle:'ADDRESS',
    section1 () {
        return(
            console.log('리턴값')
        );
    },
    addr: [
        {이름: 'jch', 거주지:'경기도', 취미:['게임','잠자기']},
        {이름: 'abc', 거주지:'오산', 취미:['음악','눕기']},
        {이름: 'qwer', 거주지:'화성', 취미:['책읽기','맛집탐방']},
        {이름: 'asdf', 거주지:'수원', 취미:['하이킹','영화']},
        {이름: 'zxcv', 거주지:'서울', 취미:['클래식음악','명화감상']},
        {이름: 'adwd', 거주지:'성남', 취미:['대장놀이','드라이브']},
    ]
        
    
}

    ReactDOM.render(
        <MemberComponent />,
        document.getElementById('root')
    );
})();