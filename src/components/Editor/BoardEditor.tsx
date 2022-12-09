import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

// 추후 Editor를 사용할 예정

function BoardEditor() {
  return (
    <div>
      <Editor
        placeholder="내용을 입력해주세요."
        plugins={[
          [
            colorSyntax,
            // 기본 색상 preset 적용
            {
              preset: ['#1F2E3D', '#4c5864', '#ED7675'],
            },
          ],
        ]}
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
      />
    </div>
  );
}

export default BoardEditor;
