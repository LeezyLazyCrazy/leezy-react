// tui-grid에서 file 선택 시 사용 예정

class CustomFileEditor {
  el;

  constructor(props: any) {
    const el = document.createElement('input');

    el.value = props;
    el.type = 'file';

    this.el = el;
  }

  getElement() {
    // input 태그가 생성되지 않도록 작업예정
    // this.el.click();
    // const fileList = this.el.files![0];
    // console.log(fileList);
    // return undefined;
    return this.el;
  }

  getValue() {
    return this.el.files![0];
  }
}

export default CustomFileEditor;
