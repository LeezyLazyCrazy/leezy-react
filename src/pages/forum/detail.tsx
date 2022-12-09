// tui grid 목록에 클릭 시 이동되는 상세페이지

import { useLocation } from 'react-router-dom';

function Detail() {
  const nav = useLocation();
  console.log(nav.state);

  return (
    <div>
      제목
      <input type="text" value={nav.state.name} />
      <br />
      작성자
      <input type="text" value={nav.state.writer} />
      <br />
      작성일자
      <input type="text" value={nav.state.date} />
      <br />
      내용
      <textarea value={nav.state.content} />
    </div>
  );
}

export default Detail;
