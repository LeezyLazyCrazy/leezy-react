import { Grid } from "@mui/material";
import reactquery from "../../assets/images/1.reactQuery.png";
import axios from "../../assets/images/2.axios.png";
import useQuery from "../../assets/images/3.useReactQuery.png";


const AboutReactQuery = () => {
    return (
        <>
            <Grid xs={12}>
                <h1> About React Query </h1>
                <div className="why" style={{ color: "#fffb00", fontSize: "20px" }}>
                    <h3>Why choose this</h3>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>1.클라이언트에서 서버 데이터의 캐시를 관리합니다. </p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>2.loading, error state를 관리합니다.</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>3.pagination, infinite scroll도 쉽게 처리할 수 있도록 지원합니다.</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>4.prefetching을 쉽게 처리할 수 있도록 지원합니다.</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>5.error가 발생할 경우 자동으로 재시도합니다.</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>6.request가 성공하거나 실패했을 때 각각 callback을 정의할 수 있습니다.</p>                  
                </div> 

                <div className="How" style={{ color: "#fffb00", fontSize: "20px" }}>
                    <h3>How to use</h3>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>1.npm i @tanstack/react-query   </p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}>2.yarn add @tanstack/react-query</p>
                </div>

                <div className="Queries" style={{ color: "#fffb00", fontSize: "20px" }}>
                    <h3>Queries</h3>
                    <p style={{color: "#ffffff", fontSize: "15px"}}> Queries는 데이터 fetching용 (GET메서드)</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}> Query Key와 Query Function 필요 (key value 매핑 구조)</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}> Query Key는 string 형태, Array 형태 두가지로 관리 가능</p>
                    <p style={{color: "#ffffff", fontSize: "15px"}}> Query Function은 Promise를 반환하는 함수</p>
                </div>
                <div className="Example" style={{ color: "#fffb00", fontSize: "20px" }}>
                    <div>
                        <h3>Example</h3>
                        <h6>코드 출처 :https://merrily-code.tistory.com/76</h6>
                        <p  style={{color: "#ffffff", fontSize: "15px"}}>기존의 데이터 패칭에는 로딩 상태 관이 및 패칭한 데이터 관리 등을 위해 여러 훅을 사용해야 했으나, 리액트 쿼리를 사용하면 훨씸 간결하게 로직을 작성할 수 있다.</p>
                        <img src={reactquery} style={{ width: "750px" }} />
                    </div>
                    <div  style={{float:"left"}}>
                        <p  style={{color: "#ffffff", fontSize: "15px", }}> Axios를 활용한 일반적인 데이터 Fetch 방식</p>
                        <img src={axios} style={{ width: "750px" }} />
                    </div>
                    <div style={{display:"inline-block", marginLeft:"10px"}}>
                        <p  style={{color: "#ffffff", fontSize: "15px"}}> Axios를 사용해 React-query로 데이터 불러오는 방식</p>
                        <img src={useQuery} style={{ width: "750px" }} />
                    </div>                    
                </div>
            </Grid>
        </>
    )
};

export default AboutReactQuery;



