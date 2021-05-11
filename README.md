# midi-to-adofai

**[node.js](https://nodejs.org/ko/) 설치해야함**

**[git](https://git-scm.com/download/win)도 설치해야함**

**와샌즈님에게 허락을 받았습니다(license.png 확인)**
*모듈은 따로 설치하지 않아도 됩니다~*

## 사용법

```batchfile
git clone https://github.com/gooddltmdqls/midi-to-adofai
```

복사 후 윈도우키 + R, cmd 입력한 뒤 cd (원하는 경로) 입력하고 엔터, 붙여넣기 하고 엔터

midi 파일을 fd.mid로 이 폴더에 저장

`run.bat` 실행하면 됨

타일 수도 나옴

### 음 옥타브 조정

`conveter.js` 13번째줄

```javascript
function nHz(n)
{
  return 55*Math.pow(2,(n-9-12*(내릴 옥타브))/12);
}
```
