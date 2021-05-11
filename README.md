# midi-to-adofai

[node.js](https://nodejs.org/ko/) 설치해야함

*모듈은 따로 설치하지 않아도 됩니다~*

## 사용법

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

app2.js는 되도록이면 수정하지 말아주세요