---
title: "[배운 내용 정리] 프론트엔드 날개달기: Vue.js, React 배우기 전에 꼭 알아야하는 지식 - 짐코딩 GYM CODING 선생님"
excerpt: "Javascript 등 배운 내용 정리"

categories:
  - Front-End
tags:
  - ['tutorial', 'frontend', 'javascript']

permalink: /front-end/front_end_with_wings/

toc: true
toc_sticky: true

date: 2023-02-25
last_modified_at: 2023-02-25

header:
  teaser: "/assets/images/posts_img/front_end_with_wings/image3.png"
  # teaser: "{{ site.gdrive_url_prefix | uri_escape }}10Ve6vGisnYIMailWBm-PqzIx05drCeKB"

---
## <b><span style="color:#d62976"># Thanks for ㅡ</span></b>
<p align="center">
    <img src="{{ site.gdrive_url_prefix | uri_escape }}10Ve6vGisnYIMailWBm-PqzIx05drCeKB" width="50%" height="50%" alt="img_not_loaded">
</p>

[강의 링크 : 인프런](https://inf.run/v1Q3)   
[커뮤니티 Q&A](https://www.inflearn.com/questions/785466/%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94-%EC%84%A0%EC%83%9D%EB%8B%98-%ED%98%B9%EC%8B%9C-%EA%B0%95%EC%9D%98-%EB%82%B4%EC%9A%A9%EC%9D%84-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%8F%84-%EB%90%A0%EA%B9%8C%EC%9A%94)  
[강의 교안 1](https://www.gymcoding.co/acf439e5e4b04e079104439153a7f223)  
[강의 교안 2](https://gymcoding.notion.site/acf439e5e4b04e079104439153a7f223)

<b> 블로그 정리를 흔쾌히 허락해주신 짐코딩 GYM CODING 선생님께 감사드립니다 : ) </b>

---  
## <span style="color:#fa7e1e">◎ 기본 개념 </span>
### <span style="color:#d62976">DOM이란 ?</span>
<span style="color:#d62976">D</span>ocument <span style="color:#d62976">O</span>bject <span style="color:#d62976">M</span>odel (문서 객체 모델)

>Document 객체 : <span style="color:#d62976">웹 문서 영역을 제어</span>할 수 있게 제공하는 <span style="color:#d62976">객체</span>   
- <span style="color:#d62976">웹 페이지 자체를 의미</span>한다
- <span style="color:#d62976">원하는 html 요소에 접근 가능</span>하게 한다
- <span style="color:#d62976">Tree 구조</span>를 가지고 있다
- 하나의 부모 태그와 N개의 자식 태그
   
여기서 <span style="color:#d62976">DOM 트리도 트리</span>이므로, 각각의 요소를 노드(Node)라고 한다 !   
제어를 할 때의 순서는 <span style="color:#d62976">접근 후 제어</span>

```javascript
getRootNode() // 최상위(루트) 노드 반환 함수
```
<span style="color:#d62976">document.getRootNode() 실행 시 document 객체 반환</span>

<br />
브라우저에는 렌더링 엔진이 있다   
브라우저로 파일을 열게 되면 <span style="color:#d62976">html 문서를 1줄씩 해석</span>하고   
<span style="color:#d62976">해석이 끝나면 객체화하여 Javascript로 처리</span> 할 수 있게 된다   

> <span style="color:#d62976">Javascript : </span>
- <span style="color:#d62976">웹문서를 변경</span>하기 위한 언어
- <span style="color:#d62976">html을 조작</span>하기 위해 만들어진 언어


<span style="color:#d62976">CSS Object Model</span> : DOM처럼 <span style="color:#d62976">CSS를 javascript로 조작할 수 있게 한 것</span>   
html 요소에 접근할 때 계속해서 힘들게 접근할 수는 없으니   
querySelector에다가 CSS 선택자로 쉽게 접근 → CSSOM이 있어서 가능한 것

추가 참고 :

- [DOM : MDN](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)

- [CSSOM : MDN](https://developer.mozilla.org/ko/docs/Web/API/CSS_Object_Model)

- [DOM과 CSSOM은 독립적인 데이터 구조](https://onlydev.tistory.com/8)

- [DOM과 CSSOM을 합해서 사용자에게 최종적으로 브라우저에 표기될 것들만 render tree로](https://velog.io/@codenmh0822/CSS-%EA%B0%9D%EC%B2%B4-%EB%AA%A8%EB%8D%B8CSSOM-CSS-Object-Model)

- [CSSOM : devdic](http://www.devdic.com/javascript/reference/cssom)
<br/>
<br/>

### <span style="color:#d62976">BOM이란 ?</span>
><span style="color:#d62976">B</span>rowser <span style="color:#d62976">O</span>bject <span style="color:#d62976">M</span>odel (브라우저 객체 모델)
- <span style="color:#d62976">브라우저 자체를 제어할 수 있도록 모델링</span>한 것
- 웹브라우저를 <span style="color:#d62976">script 언어로 제어</span>하기 위해서 객체화한 것
- BOM을 <span style="color:#d62976">브라우저를 제어하기 위한 Interface</span>라고도 말한다
- 종류 : window / document / history / location / screen / navigator

javascript에서는 함수도 객체   
`window.alert()`에서 window를 생략하고 `alert()`만 사용 가능   
<span style="color:#d62976">document 객체도</span> 객체이기 때문에 <span style="color:#d62976">window 객체에 소속되어 있다</span>  
그래서 편의를 위해 <span style="color:#d62976">생략한 형태로 사용 가능</span>하다

<img src="{{ site.gdrive_url_prefix | uri_escape }}1OcBq_GL1R8pV24g-uVjZR6ZjulXlO2Zr" />

location  
window.location  
document.location 다 사용이 가능하다 :)

console.<span style="color:#d62976">log( )</span> : <span style="color:#d62976">로그</span> 출력에 용이  
console.<span style="color:#d62976">dir( )</span> : <span style="color:#d62976">객체</span> 출력에 용이

BOM 객체 <span style="color:#d62976">활용 예시</span>
- <span style="color:#d62976">screen 객체</span>를 활용하여 사용자 <span style="color:#d62976">display에 대한 정보</span>를 가져올 수 있다 
`console.dir(screen)`
- <span style="color:#d62976">navigator</span>로 <span style="color:#d62976">위치 정보</span>를 가져올 수 있다
  
<br/>

### <span style="color:#d62976">script 태그 defer, async</span>
자바스크립트 load : defer, async
자바스크립트에서 <span style="color:#d62976">html 파일을 가져올 때 효율적으로 가져오는 방법? </span>

<!-- script.js -->
button을 파싱하기 전에 script 파일을 먼저 읽어서 error 발생  
없는 button을 불러오기 때문 !

해결 방법
1. script를 body 태그 최하단으로
2. load 이벤트 리스너 등록
   window.onload - HTML 파싱 DOM 생성
		그리고 외부 컨텐츠가 로드된 후 발생하는 이벤트
		(외부 컨텐츠 : images, script, css, etc)

  2번의 경우 비효율적일 수 있다
  이미지가 1만 개면 1만개를 다 로드한 이후에 실행됨

3. DOMContentLoaded
HTML 파싱과 DOM 생성만 된 이후 파싱 → 2번보다 훨씬 빠르다

script 실행할 때가 문제
<span style="color:#d62976">HTML parsing할 때 script를 다운할 수 있다면?</span>
이를 위한 게 HTML5에서 나온 <span style="color:#d62976">defer, async</span>

defer
- HTML 파싱과 함께, '비동기'로 Javascript 파일을 불러온다
- 실행하는 건 html 파싱이 끝난 후에

async
- HTML 파싱과 함께, '비동기'로 Javascript 파일을 불러온다
- HTML 파싱이 완료되지 않아도 바로 실행 (defer와 결정적인 차이)

결론 : 일반적인 경우 defer 속성을 사용하면 된다 !
  
<br/>

### <span style="color:#d62976">this 란 무엇인가?</span>
> <span style="color:#d62976">this는 호출'한' 객체!</span>  
  예외 ↓
- 전역스코프에서 this는 window 객체
- 화살표 함수(Arrow Function) 에서 this가 조금 달라진다
- Strict Mode 에서는 this가 조금 달라진다

ES5 bind method - this 설정 가능  
bind로 this 설정하는 건 1번만 사용 가능하다
중복해서 사용해도 처음 bind 설정이 적용됨

<span style="color:#d62976">Arrow Function - ES6</span> 에서 나왔다  
=> 를 사용하면 <span style="color:#d62976">상위 scope의 this를 물려받는다</span>
  
<br/>

## <span style="color:#fa7e1e">◎ 용어 이해</span>
### <span style="color:#d62976">API란 무엇인가?</span>
<span style="color:#d62976">A</span>pplication <span style="color:#d62976">P</span>rogramming <span style="color:#d62976">I</span>nterface

Interface : 상호간에 소통을 위해 만들어진 접점
(소통 : 읽거나 쓰는 것)

응용프로그램 : 운영체제에서 실행되는 모든 소프트웨어

일반적인 API : HTTP API

(사내에서 쓰는) 접근이 제한 된 API : Private API  
누구나 쓸 수 있는 API : Open API

미세먼지 농도에 맞춰서 창문 개방하는 IOT의 경우,  
HTTP 통신이 아닌 저사양 저전력 환경에 적합한 프로토콜 사용

<span style="color:#d62976">API는 통신 프로토콜 레벨이 아닌
class나 함수와 같은 소스코드 레벨도 될 수 있다</span>


<br/>

### <span style="color:#d62976">동기와 비동기란?</span>
정의를 내릴 때 이해하기 쉽게, 모순은 없게 하면 좋다

>동기 synchronous	: 기다리는 것 (blocking)  
비동기 asynchronous : 기다리지 않는 것 (non-blocking)

어떤 게 더 좋고 그런 게 아니고 서로 다른 것  
비동기식으로 일 하면 바로 바로 확인이 안 된다
  
<br/>

### <span style="color:#d62976">프론트엔드 & 백엔드란?</span>

<img src="{{ site.gdrive_url_prefix | uri_escape }}1HZXDh8h3c5D-p_cG-VbwUO_z2cz1sxP9" width="50%" height="50%" alt="img_not_loaded">

[이미지 출처](https://darvishdarab.github.io/cs421_f20/docs/readings/client_server/)

<span style="color:#d62976">예전에는 JSP와 php와 같은 템플릿 엔진으로 개발</span>을 많이 했는데  
이 때는 <span style="color:#d62976">프론트 백엔드를 나누지 않고 그냥 웹 개발자로 진행을 했다</span>

하지만 지금은 <span style="color:#d62976">Angular, React, Vue 와 같은 강력한 웹 프레임워크가 등장</span>하여  
웹 개발을 좀 더 파워풀 하게 해야하는 미션이 등장하였다

<span style="color:#d62976">지금은 프론트엔드와 백엔드의 완전한 분리</span>를 지향해서
그 용어도 쓰이게 되었다
<br/>
<br/>

## <span style="color:#fa7e1e">◎ 프론트엔드 날개달기</span>
### <span style="color:#d62976">이벤트 전파</span>
>이벤트 전파(Event Phase)  
이벤트의 흐름은 최상위 요소부터 타겟 요소까지 전달된 다음 (캡쳐링)  
다시 최상위 요소까지 전달(버블링)

addEventListener는 기본적으로 버블링으로 동작한다  
이벤트가 캡쳐링할 때 동작하도록 만드려면?  
addEventListner의 3번째 인자로 true를 주면 된다 (default : false)  
( visual studio code 내 함수 인자 확인 cmd : ctrl + shift + space )

event에는 event.eventPhase라는 게 있다  
caturing에는 1 / target은 2  / bubbling은 3
  
event.stopPropagation(); 을 이용하면 이벤트 전파를 막을 수 있다  
  
event.preventDefault(); 기본 동작을 못 하도록 만든다  
submit event를 막거나 anchor 태그의 기능을 막을 때 등에 쓰인다
<br/>
<br/>

### <span style="color:#d62976">자바스크립트 유용한 Array APIs</span>
● <span style="color:#d62976">map()</span> : 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아서 배열을 반환한다

function(number) 대신 (number) => 로 사용 가능
명령문이 하나 일 때는 단축해서 사용 가능

● <span style="color:#d62976">some()</span> : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트

● <span style="color:#d62976">every()</span> : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트

● <span style="color:#d62976">filter()</span> : 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열로 반환
	
● <span style="color:#d62976">reduce()</span> : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값을 반환

- 누적 값(acc)
- 현재 값(cur)
- 현재 인덱스 (idx)
- 원본 배열(src)

뒤에는 초기값 지정 가능  

1부터 7까지 더하는 함수를 만든다고 하면 이런 식
```javascript
return acc + cur
```

reduce() 를 이용해서 중복값 제거
```javascript
fruits.reduce((arr, cur) =>{
   if (arr.includes(cur) === False){
       arr.push(cur)
   }
   return arr;
}, [])
```
reduce() 현업에서 정말 유용하게 쓸 수 있는 함수
<br/>
<br/>

### <span style="color:#d62976">JavaScript 모듈 시스템</span>
><span style="color:#d62976">분리된 하나의 파일 : 모듈</span>  
그리고 이를 불러올 수 있는 시스템 : 모듈 시스템  
모듈은 특정한 목적을 가진 클래스 하나 or 여러 개의 함수를 가진 라이브러리

기존 방식
```javascript
<script src="a.js">
<script src="b.js">
<script src="c.js">
```
의 문제 : 전역 scope를 공유한다  
이름이 같은 변수가 있다면 덮어씌워지는 등 원하지 않던 결과가 생긴다
즉 이 방식은 프로젝트 규모가 커질수록 문제가 생길 가능성이 커진다

```javascript
<script type="module"></script>
```
해당 소스파일은 모듈로 간주
각각의 모듈별로만 scope를 공유

● ES Module
- <span style="color:#d62976">ES6에 도입된 모듈 시스템</span>  
- <span style="color:#d62976">모듈 시스템은 현업에서 가장 많이 사용</span>

export 가 정의된 변수나 함수 또는 클래스는 외부에서 사용 가능

```javascript
import {obj1, obj2, obj3} from "./math.js";
import * as math from "./math.js";
```

export default -> import 한 곳에서 이름 변경 가능

<span style="color:#d62976">export 방법은 여러 가지이기 때문에
팀의 컨벤션이나 효율에 맞게 사용하면 된다 !</span>
<br/>
<br/>

● CommonJS는 아래와 같은 방식을 사용
```javascript
experts.~

module.exports = {
}
```

<span style="color:#d62976">Front-End : ES Module 방식 / Back-End : CommonJS 방식 많이 사용</span>

NodeJS에서 ES Module 시스템을 사용하려면? 여러 방법이 있다  
node는 실행될 때 package.json을 참조해서 실행된다  
여기에 이하의 코드를 삽입하면 가능
```yml
{
 "type" : "module"
}
```
<br/>

### <span style="color:#d62976">NPM 기초</span>
><span style="color:#d62976">N</span>ode <span style="color:#d62976">P</span>ackage <span style="color:#d62976">M</span>anager  
javascript로 어떠한 application을 만들 때 다양한 모듈 필요   
NPM은 이러한 <span style="color:#d62976">모듈을 쉽게 다운로드 할 수 있게 해주는 도구</span>

날짜의 경우 format의 경우가 늘어나면 더더욱 코드는 길어진다
그래서 <span style="color:#d62976">자주 사용하는 기능은 모듈화한 후
모듈 저장소라는 공간에 공유</span>한다
그리고 <span style="color:#d62976">이러한 곳에 있는 모듈을 그 때 그 때 다운 받아서 사용</span>한다
<span style="color:#d62976">이 때 사용하는 게</span> `npm install (모듈명)`

<span style="color:#d62976">Node.js : Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임</span>  
운영 환경에서는 <span style="color:#d62976">안정화 버전인 LTS 버전 권장</span>

npm install {모듈} 시 dependencies 속성에 모듈이 자동으로 추가 된다

라이브러리를 검색해서 다운 받을 수 있는 사이트 : npmjs.com  
<span style="color:#d62976">require를 이용하면 default로 node_modules 디렉토리를 참고</span>한다

package.json : 프로젝트에 대한 정보를 갖고 있는 파일이다  
package.json 내 scripts : 자주 사용  
echo 터미널에 문자를 출력하는 명령어  
프로젝트를 실행할 때나 빌드할 때 자주 사용  
start 명령어는 특수해서 `npm run start` / `npm start` 둘 다 사용 가능 :)

dependencies : 프로젝트가 사용하는 모듈을 기술
devDependencies : 개발할 때만 의존하는 모듈을 관리

ex. ABCDE 모듈이 있다고 할 때
E 모듈은 개발할 때만 쓰고 운용할 때는 필요가 없다면?
ABCD만 배포하면 된다
그런 경우 <span style="color:#d62976">E는 devDependencies 에</span> 기술하고
<span style="color:#d62976">ABCD를 dependencies에</span> 기술합니다

```terminal
npm install --save-dev <모듈명>
```
package-lock.json
프로젝트에 설치된 모듈들의 의존성 트리를 기록하고 있다

npm 명령어들
npm init
npm init -y

npm i <패키지명@버전>

><span style="color:#d62976">nodemon 라이브러리</span>
node 명령어랑 같다  
javascript 을 node 환경에서 실행시켜주는 라이브러리  
차이점은 nodemon은 javascript에 변경사항이 생기면  
자동으로 감지해서 재실행한다 (React / Live Server 처럼 !)

명령어 : ./node_modules/.bin/nodemon index.js  
javascript가 바뀌면 자동으로 감지해서 실행한다

<span style="color:#d62976">자주 사용하는 CLI는 전역환경에 설치</span>하고는 하기 때문에  
(cmd 관리자 권한) npm install -g nodemon

nodemon -v : 버전 확인 명령어, 설치가 잘 되었나 확인

로컬 환경에서 쉽게 접근하는 법  
package.json의 scripts 속성에서  
"start" : "nodemon index.js" 이후  
npm run start 혹은 npm start로 가능  

<span style="color:#d62976">git에 올릴 때 node_modules는 올릴 필요가 없다</span>  
node_modules가 없을 때 npm install만 하면 알아서 다 다운로드가 된다  
<span style="color:#d62976">버전이 꼬일 경우 package.json만 남기고 npm install 해도 된다</span>

devDependencies에 있는 모듈을 제외한 dependencies에 있는 모듈만 설치하려면 ?
```javascript
npm install --production  
```  

버전 업데이트 npm update <모듈명>  

<span style="color:#d62976">version update 보다는 uninstall 이후 install 하는 것을 권장</span>

npm ls 모듈들 확인 가능  
npm ls --depth=2

```javascript
npm init              // 초기화
npm install           // 설치
npm uninstall         // 삭제
npm run <script-name>	// script 실행
```
이 정도만 알고  
나머지는 필요할 때 구글링 하면서 자연스럽게 익히는 게 좋다  

>세 자리수 버전 표기 : <span style="color:#d62976">시맨틱 버저닝 (Semantic Versioning)</span>  
[MAJOR, MINOR, PATCH]
<br/>

<br/>

### <span style="color:#d62976">Webpack 기초</span>
Webpack을 알려면 모듈을 알아야 한다

웹을 만들면 웹 서버에 배포
브라우저에서 계속해서 서버에 요청하면?  
네트워크 비용 증가(과부하), 페이지 로딩이 길어짐
사용자 편의성 측면에서도 좋지 않다

>모듈로 개발을 하고 페이지 로딩도 줄이는 방법?  
브라우저에서 서버로 요청하는 http 개수를 줄이는 것  
모듈을 하나의 파일로 묶어서 배포 -> <span style="color:#d62976">번들링</span> (모듈 번들러가 수행)  
사용자 경험 향상과도 연결된다

<img src="{{ site.gdrive_url_prefix | uri_escape }}1lB1AMHU6nSrbudJykl4hduty3KZKcX4N" width="100%" height="100%" alt="img_not_loaded">

[이미지 출처](https://webpack.js.org/)

<span style="color:#d62976">현재 frontend에서 가장 인기 있는 모듈러 : webpack  
html javascript 심지어 이미지도 번들링이 가능하다</span>

```javascript
npm install --save-dev webpack webpack-cli
npx webpack --entry .src/index.js --output-path ./dist
```
entry : webpack의 진입점, 어떤 파일을 기준으로 번들링할지  
default : 코드 압축

```javascript
npx webpack --entry .src/index.js --output-path ./dist --mode development
```
코드 압축 없이 번들링

```javascript
<script type="module" src="./dist/main.js"</script>
```
번들 결과 : request 파일 8개	→ 3개  
<span style="color:#d62976">300ms	→ 184ms</span>

웹팩 docs  
웹팩은 실행할 때 자동으로 webpack.config.js 파일을 참조  
entry : 진입점 설정  
output : 번들링 파일이 위치할 파일 path와 파일 명   
mode:'production' #'development'    

배포할 때는 dist 디렉토리에 번들링을 한 다음에 dist 폴더만 배포한다  
그러므로 index.html도 dist 폴더로 이동