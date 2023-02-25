---
published: true
title: "[배운 내용 정리] Python Django Web Framework - 생활코딩 선생님"
excerpt: "Django Framework 강의 내용 정리"

categories:
  - Back-End
tags:
  - ['tutorial', 'clone_coding', 'django', 'backend']

permalink: /back-end/django_tutorial/

toc: true
toc_sticky: true

date: 2023-02-13
last_modified_at: 2023-02-13

header:
    teaser: "/assets/images/posts_img/django_tutorial_images/image9.png"
---

---
## <b>◎ Thanks for</b>
<p align="center">
    <img src="/assets/images/posts_img/django_tutorial_images/image1.png" width="100%" height="100%" alt="img_not_loaded">
</p>

<b> [생활코딩 opentutorials Django Web Framework][link1]</b>      
이상의 저작권을 기반으로 하여 정리한 글입니다 :)   
마음껏 정리할 수 있게 해주신 생활코딩 선생님의 저작권 방침에 감사를 표합니다   

---  


## <b>◎ 수업 소개</b>
<h3><b>웹 페이지를 찍어내는 공장을 만드는 Django ! </b></h3>

요청에 맞는 페이지를 만들어서 보내준다면 ?   
웹 애플리케이션을 만드는 작업 중 많은 부분은 공통적, 어떤 사이트를 만들어도 똑같이 해야될 일들 !   
이런 작업을 미리 해둔 소프트웨어가 바로 Web Framework
<br>
<br>

|                   |Web Framework                  |
|-------------------|-------------------------------|
|Java               |JSP, Servlet, Spring           |
|PHP                |Laravel, Codeignitor           |
|Ruby               |Ruby on rails                  |
|Node.js            |Express.js                     |
|<b>Python</b>      |Flask, FastAPI, <b>Django</b>  |


<br>


## <b>◎ 설치</b>

```
python3 -m pip install django
```
<b> TERMINAL(CMD)</b>에 입력 후 ENTER → <b>django install   
</b><br>
◎ 참고 링크  
django 설치 추가 가이드  
[https://docs.djangoproject.com/ko/4.1/topics/install/#installing-official-release](https://docs.djangoproject.com/ko/4.1/topics/install/#installing-official-release)   
[https://javafa.gitbooks.io/python-django/content/chapter1.html](https://javafa.gitbooks.io/python-django/content/chapter1.html)

python과 python3는 alias 설정 차이   
[https://dongdongfather.tistory.com/94](https://dongdongfather.tistory.com/94)
[https://www.facebook.com/groups/codingeverybody/posts/7070878719619270/](https://www.facebook.com/groups/codingeverybody/posts/7070878719619270/)

<br>  

```
django-admin startproject myproject .
```

현재 디렉토리에 'myproject'라는 <b>프로젝트 생성</b> ( .이 꼭 있어야 합니다)  

<br>
<p align="center">
<img src="/assets/images/posts_img/django_tutorial_images/image2.png" width="50%" height="50%" alt="img_not_loaded">
</p>
<b>settings.py</b> : 프로그램 운영에 필요한 여러 가지 <b>세팅</b>이 들어가는 파일   
<b>manage.py</b> : 여러 가지 <b>기능</b>이 들어가는 <b>유틸리티 파일</b>
<br>
<br>
```
python manage.py runserver (port_num)
```
<b>서버 실행 코드</b>   
(port_num)은 생략 가능합니다 (default port : 8000)  
<b>필요한 경우 port_num에 원하는 숫자를 넣어서 실행</b>합니다
<br>  
<br>
<img src="/assets/images/posts_img/django_tutorial_images/image3.png" width="100%" height="100%"  alt="img_not_loaded">   
위와 같이 <b>Import __ could not resolved from source Pylance (reportMissingModuleSource)</b>가 발생하는 경우,
이하의 방법으로 해결 가능합니다 

<img src="/assets/images/posts_img/django_tutorial_images/image4.png" width="100%" height="100%"  alt="img_not_loaded">
<img src="/assets/images/posts_img/django_tutorial_images/image5.png" width="100%" height="100%"  alt="img_not_loaded">
<img src="/assets/images/posts_img/django_tutorial_images/image6.png" width="100%" height="100%"  alt="img_not_loaded">
<img src="/assets/images/posts_img/django_tutorial_images/image7.png" width="100%" height="100%"  alt="img_not_loaded">  
발생 원인 : python 경로를 제대로 잡지 못 해서 생기는 오류입니다  
<br>

◎ 참고 링크  
- [https://github.com/microsoft/pyright/blob/main/docs/configuration.md#reportMissingModuleSource](https://github.com/microsoft/pyright/blob/main/docs/configuration.md#reportMissingModuleSource)  
- [https://incomeplus.tistory.com/187](https://incomeplus.tistory.com/187)   
- [visual studio code docs (ctrl + shift + p 참고)][link2] 

<br>


## <b>◎ app 만들기 & Routing URLConf</b>

```
django-admin startapp myapp
```
<img src="/assets/images/posts_img/django_tutorial_images/image8.png" width="100%" height="100%"  alt=""> 
<img src="/assets/images/posts_img/django_tutorial_images/image9.png" width="100%" height="100%"  alt="img_not_loaded"> 


- django의 app은 각각의 경로를 누구한테 위임할지 urls.py 에서 지정합니다   
- project 안에도 urls.py가 있고 app에도 urls.py가 있습니다   
- 어떤 웹 프레임워크를 쓰더라도 제일 먼저 하는 건 <b>Routing 지정</b>입니다
<br>
<br>

## <b>◎ django를 쓰는 이유</b>
→ Web Application Server를 쓰는 이유 !  
<br>
<b>Web Server</b>를 사용하는 것과
<b>Web Application Server</b>를 만들어서 사용하는 것의 차이
<br>

<b>Web Server</b>
- 사용할 때 필요한 <b>페이지를 미리 만들어 둡니다</b>
- 굉장히 <b>빠릅니다 (로딩 등)</b>

<b>Web Application Server</b>
- <b>웹페이지를 생성하는 공장</b>이라고 할 수 있는 프로그램을 <b>1개만 만들면 됩니다</b>  
- Web Server에 비하면 <b>느리지만</b>
요즘은 컴퓨터 성능이 좋아서 <b>괜찮습니다</b>  
- <b>유지 보수</b> 측면에서 매우 <b>유리</b>하며
<b>개인화</b> 정보도 만들 수 있습니다
- 페이지를 실행할 때마다 값을 바꿔서 출력하는 것도 물론 가능합니다 (예시 : import Random 이후 값 변경)
<br>
<br>

## <b>◎ 홈페이지 읽기 기능 구현하기</b>
아무리 복잡한 Application의 기능도 4가지 작업으로 분류됩니다  
<b>(CRUD) Create/ Read/ Update/ Delete</b>

<b>코드 타이핑 & 설명 : 영상 참조</b>  
이하는 발생한 에러나 주요한 부분에 대한 설명만을 담았습니다  
<br>

읽기기능 상세보기 페이지 만들기 (수정본) 中
```python
 if topic['id'] == int(id):
```
urls.py 에서 <id>로 넘겨준 값은 string type, topic['id']의 값은 int형

<b>타입이 다르기 때문에 형변환으로 맞춰주어야 합니다</b>

<br>
<br>

## <b>◎ 생성기능 구현 (form)</b>
(html 기본)  
- input tag : 속성 → type, name, placeholder  
- textarea tag : 여러 줄 입력 가능, 열었으면 닫아야 합니다  

- <b>submit</b>을 눌렀을 때, server의 원하는 path로 전송하기 위해서 <b>form 태그</b>로 감쌉니다

- form tag : action 속성 → path 지정 (라우팅)

- <b> (크롬) 개발자 도구 - Network tab </b> : 웹서버와 클라이언트 사이에 주고 받는 통신 데이터 확인
<br>
<br>

## <b>◎ 생성기능 (method=GET,POST)</b>
1. http://<i></i>localhost:8000/read/1/  
2. http://<i></i>localhost:8000/read/?id=1	→ 표준

- `?id=1`과 같은 부분 : <b>query string</b>  
밑 방식은 url이 조금 지저분하기 때문에 <b>요즘 트렌드는 상단의 1번 방식</b>입니다

- form 에서 default는 get 방식

- 개발자도구 - Network - Payload로 post 값 확인   
  (개발자도구 - Network 에서 Name 누르면 Payload를 볼 수 있습니다)

-  csrf django skip
    ```python
    from django.views.decorators.csrf import csrf_exempt   

    @csrf_exempt
    def create(request):
    ```
<br>

## <b>◎ 생성기능 (request response object)</b>
- Request and response objects - Django documentation :
[https://docs.djangoproject.com/en/4.1/ref/request-response/](https://docs.djangoproject.com/en/4.1/ref/request-response/)

- django redirect - Django shortcut functions
[https://docs.djangoproject.com/en/4.1/topics/http/shortcuts/](https://docs.djangoproject.com/en/4.1/topics/http/shortcuts/)
<br>
<br>

## <b>◎ DELETE</b>
- <b>서버의 데이터를 변경/수정하는 작업에서는</b>
link를 쓰지 말 것 (GET X)
- <b>POST</b>를 써야 합니다 -> <b>form</b> tag
    ```html
    <form action="/delete/" method="post">
        <input type="hidden" name="id" value={id}>
        <input type="submit" value="delete">
    </form>
    ```
<br>

## <b>◎ 수정기능</b>
CRUD 기능 중 가장 어려운 Update  
<b>앞에서 배운 것들을 총동원해야 구현 가능</b>
```python
@csrf_exempt
def update(request, id):
    global topics

    if request.method == 'GET':
        for topic in topics:
            if topic['id'] == int(id):
                selectedTopic = {
                    "title":topic['title'],
                    "body":topic['body']
                }

        article = f'''
            <form action="/update/{id}/" method="post">
                <p><input type="text" name="title" placeholder="title" value={selectedTopic["title"]}></p>
                <p><textarea name="body" placeholder="body">{selectedTopic['body']}</textarea></p>
                <p><input type="submit"></p>
            <form>
        '''

        return HttpResponse(HTMLTemplate(article, id))
    
    elif request.method == 'POST':
        title = request.POST['title']
        body = request.POST['body']

        for topic in topics:
            if topic['id'] == int(id):
                topic['title'] = title
                topic['body'] = body

        return redirect(f'/read/{id}/')
        # return redirect('/')
```
<br>

## <b>◎ 수업을 마치며</b>
보완이 더 필요한 부분
- database, model (django)
- security - 예를 들면, 글을 쓸 때 script 태그를 쓰는 것 등의 공격 (매우 위험)
-  python code와 html 코드를 분리하기 위한
Template engine
<br>

---

## <b>+ Django class links</b>
- [인프런 강의들](https://www.inflearn.com/courses?s=django) 
- [Django로 Pinterest 따라하기! (무료)](https://youtu.be/RWEZITw27Ts) 
- [작정하고 장고! 핀터레스트 만들기 (유료)](https://www.udemy.com/course/djust_go_django/) 
- [Python Django - The Practical Guide](https://www.udemy.com/course/python-django-the-practical-guide/) 
- [Django Masterclass : Build 9 Real World Django Projects](https://www.udemy.com/course/django-course/) 


[link1]: https://opentutorials.org/course/4886
[link2]: https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-palette