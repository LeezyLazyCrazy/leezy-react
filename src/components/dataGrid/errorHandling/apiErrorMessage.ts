import { toastShow } from '../../alert/ToastMessage';

export const gridApiErrorMessage = (error: XMLHttpRequest) => {
  const { status } = error;
  let title: string = '';
  let message: string = '';

  switch (status) {
    case 401: {
      title = '권한없음(401)';
      message = '해당 기능을 수행할 권한이 없습니다.';
      break;
    }
    case 403: {
      title = '접근 거부(403)';
      message = '접근할 수 없습니다. 문제가 지속된다면 서버 IP, SSL등을 확인해주세요';
      break;
    }
    case 404: {
      title = '주소 찾기 실패(404)';
      message = '서버 주소에 문제가 있어 데이터를 처리할 수 없습니다.';
      break;
    }
    case 408: {
      title = '요청 시간 초과(408)';
      message = '요청 시간이 지나 실패했습니다.';
      break;
    }
    case 500: {
      title = '서버 오류(500)';
      message = '서버 내부에서 오류가 발생해 요청을 수행할 수 없습니다.';
      break;
    }
    case 502: {
      title = '서버 오류(502)';
      message = '게이트웨이에 문제가 생긴 것 같습니다.';
      break;
    }
    case 503: {
      title = '서비스 불가능(503)';
      message =
        '서버 쪽에 문제가 생겨 요청을 수행할 수 없습니다. 잠시 기다렸다가 다시 수행해주세요.';
      break;
    }

    default: {
      title = '통신 실패';
      message = '문제가 발생한 것 같습니다. 개발팀에 문의하세요';
    }
  }

  return toastShow({
    type: 'error',
    title,
    message,
  });
};
