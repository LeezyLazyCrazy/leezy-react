// tui grid 목록에 클릭 시 이동되는 상세페이지

import { useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '../../components/button/BaseButton';
import TestTable from '../../components/dataGrid/simpleTable/TestTable';
import BaseEditor from '../../components/Editor/BaseEditor';

function Detail() {
  const nav = useLocation();
  const navigate = useNavigate();

  if (nav.state.CONTENT === null) {
    nav.state.CONTENT = undefined;
  }

  function MoveList() {
    navigate(-1);
  }

  return (
    <div>
      <TestTable
        key={nav.state.rowKey}
        title={nav.state.TITLE}
        person_name={nav.state.PERSON_NAME}
        reg_date={nav.state.REG_DATE}
      />
      <BaseEditor value={nav.state.CONTENT} />

      <BaseButton title="목록" onClick={() => MoveList()} />
    </div>
  );
}

export default Detail;
