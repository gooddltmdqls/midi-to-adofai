# midi-to-adofai

[node.js](https://nodejs.org/ko/) 설치해야함

*모듈은 따로 설치하지 않아도 됩니다~*

## 사용법

midi 파일을 fd.mid로 이 폴더에 저장

`run.bat` 실행하면 됨

converted.adofai가 이미 있다고 하면 다른 폴더로 옮기거나 `removeadofai.bat` 실행하셈

타일 수도 나옴

### 음 옥타브 조정

`conveter.js` 13번째줄

```javascript
function nHz(n)
{
  return 55*Math.pow(2,(n-9-12*(내릴 옥타브))/12);
}
```
