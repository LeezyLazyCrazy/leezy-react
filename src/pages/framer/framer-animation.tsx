import { Grid } from '@mui/material';
import Exam from '../../components/example/ex-framer';

function PageFramerAnimation() {
  return (
    <>
      <Grid xs={12}>
        <h1> About Framer Animation </h1>
        <div className="why" style={{ color: '#00ffff', fontSize: '20px' }}>
          <h3>Why choose this</h3>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>
            1. 애니메이션, 터치 기반 제스처 및 스크롤, 페이징 및 인터페이스 흐름을 위한 여저 재사용
            컴포넌트를 제공하는 라이브러리
          </p>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>
            2. 개발 사이드와 동기화된 생산성 있는 워크플로우.
          </p>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>
            3. 디자인 시스템 구조를 팀의 입맛에 맞게 바꿀 수 있음.
          </p>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>
            4. 개발자처럼 시스템 컴포넌트를 사용 가능함.
          </p>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>5. 높은 수준의 프로토타입.</p>
        </div>
        <div className="How" style={{ color: '#00ffff', fontSize: '20px' }}>
          <h3>How to use</h3>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>1. npm i framer-motion </p>
          <p style={{ color: '#ffffff', fontSize: '15px' }}>2. yarn add framer-motion </p>
        </div>
        <div className="Example" style={{ color: '#00ffff', fontSize: '20px' }}>
          <div>
            <h3>Example</h3>
            <h6>코드 출처 :https://www.framer.com/docs/animate-shared-layout/</h6>
            <p style={{ color: '#ffffff', fontSize: '15px' }}>AnimateSharedLayout</p>
            {/* <img src={reactquery} style={{ width: "750px" }} /> */}
          </div>
        </div>
      </Grid>
      <Exam />
    </>
  );
}

export default PageFramerAnimation;
