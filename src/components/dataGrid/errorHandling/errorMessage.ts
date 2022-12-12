import { InvalidRow } from 'tui-grid';
import { OptColumn } from 'tui-grid/types/options';
import consonant from '../../../utils/consonant';

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
