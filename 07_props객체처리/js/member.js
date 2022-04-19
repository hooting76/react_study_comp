(() => {
    const MemberComponent = () => {
        return(
            <div>
                <h1>헤헿</h1>
                <AddressComponent />
            </div>
        )
    }

    const AddressComponent = () =>{
        return(
            <div>
                <h2>주소록</h2>
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
                        
                    </tbody>
                </table>
            </div>
        )
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