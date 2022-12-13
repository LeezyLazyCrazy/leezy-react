import { InvalidRow } from 'tui-grid';
import { OptColumn } from 'tui-grid/types/options';
import consonant from '../../../utils/consonant';

/**
 * 토스트 그리드를 작성하면서, api를 보내기 이전에 잘못 입력된 항목이 있는지 체크하고,
 * 그것을 유저에게 보여주기 위하여 toast에서 받은 error array를 풀어내는 로직
 */
export const gridErrorMessage = (errors: InvalidRow[], columns: OptColumn[]): string[] => {
  const foundError = errors
    .map((error) =>
      error.errors.map((e) => columns.find((column) => column.name === e.columnName)!.header),
    )
    .flat();

  return foundError.map((error) =>
    error !== undefined ? `${consonant(error, '이가')} 틀렸습니다` : '',
  );
};
