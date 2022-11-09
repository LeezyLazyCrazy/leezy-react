import { Grid } from "@mui/material";
import zustand from "../../assets/images/4.zustand.png";

function PageZustand() {
  return (
    <Grid xs={12}>
      <h1> About zustand </h1>
      <div className="why" style={{ color: "#ff00bf", fontSize: "20px" }}>
        <h3>Why choose this</h3>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>1. Context Api의 불필요한 렌더링 방지 </p>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>
          2. 간결한 초기설정과 직관적이고 복잡하지 않은 전역변수를 다루는데 유용.
        </p>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>
          3. Redux와 다르게 Providers로 감싸주지 않아도 된다..
        </p>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>4. 특정 라이브러리에 엮이지 않는다.</p>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>
          5. Redux Devtools를 사용할 수 있어서 Debugging을 하는데도 아주 용이하다.
        </p>
      </div>

      <div className="How" style={{ color: "#ff00bf", fontSize: "20px" }}>
        <h3>How to use</h3>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>1. npm i zustand </p>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>2. yarn add zustand</p>
      </div>

      <div className="Example" style={{ color: "#ff00bf", fontSize: "20px" }}>
        <h3>Example</h3>
        <h6>코드 출처 : https://blacklobster.tistory.com/3</h6>
        <p style={{ color: "#ffffff", fontSize: "15px" }}>
          코드를 보면 useStore를 사용해서 state의 key 값을 가져오는 방식으로 컴포넌트에서 꺼내쓰는
          것을 알 수 있다.
        </p>
        <img src={zustand} style={{ width: "900px" }} />
      </div>
    </Grid>
  );
}

export default PageZustand;
