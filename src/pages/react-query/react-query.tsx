import { Grid } from "@mui/material";
import ReactQuery from "../../assets/images/react-query.png"


const AboutReactQuery = () => {
    return (
        <>
            <Grid xs={12}>
                <h1> About React Query </h1>
                <div className="why" style={{color: "white", fontSize: "20px"}}> Why choose this
                    <p style={{color: "yellow", fontSize: "15px"}}>1.React Query는 React Application에서 서버 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리입니다. </p>
                    <p style={{color: "yellow", fontSize: "15px"}}>2.복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.</p>
                    <p style={{color: "yellow", fontSize: "15px"}}>3.더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 핵심 로직에 집중할 수 있습니다.</p>
                </div> 

                <div className="How"style={{color: "white", fontSize: "20px"}}> How to use
                    <p style={{color: "yellow", fontSize: "15px"}}>1.npm i @tanstack/react-query   </p>
                    <p style={{color: "yellow", fontSize: "15px"}}>2.yarn add @tanstack/react-query</p>
                </div>

                <div className="Queries"style={{color: "white", fontSize: "20px"}}> Queries
                    <p style={{color: "yellow", fontSize: "15px"}}> Queries는 데이터 fetching용 (GET메서드)</p>
                    <p style={{color: "yellow", fontSize: "15px"}}> Query Key와 Query Function 필요 (key value 매핑 구조)</p>
                    <p style={{color: "yellow", fontSize: "15px"}}> Query Key는 string 형태, Array 형태 두가지로 관리 가능</p>
                    <p style={{color: "yellow", fontSize: "15px"}}> Query Function은 Promise를 반환하는 함수</p>
                </div>

                <div>
                    
                </div>
            </Grid>
        </>
    )
};

export default AboutReactQuery;



