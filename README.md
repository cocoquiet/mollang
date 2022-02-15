<h2 align="center">
  <br>
  <img src="./mollu.gif" width="200"></img>
  <br>
  <br>
  <span>몰랭 - 몰?루 프로그래밍 언어</span>
  <br>
  <br>
</h2>

<br>
<span align="center">
  
  [**문법**](#1-문법) **·** [**코드 작성**](#2-코드-작성) **·** [**구현체 목록**](#3-구현체-목록) **·** [**웹에서 직접 사용해보기**](#4-웹에서-직접-사용해보기) **·** [**기타**](#5-기타)
  
</span>
<br>

```
몰??
모올??.?????

몰루
아모올루

모오올은?행
모올루
털!자

가?자!
```

<br>

**현재 언어 버전: `1.1`**

**[몰랭 웹 인터프리터](https://molu.vercel.app) 사이트에서 몰랭을 실시간, 대화형으로 실행해볼 수 있습니다!** 웹 인터프리터의 소스 코드 및 설명은 [여기](https://github.com/ArpaAP/molu-web)에 있습니다.

<br>

몰랭(Mollang)은 모바일 게임 블루 아카이브의 밈 ['몰?루'](https://namu.wiki/w/%EB%AA%B0%3F%EB%A3%A8)에서 착안해 설계한 프로그래밍 언어입니다.

본 언어는 [엄랭](https://github.com/rycont/umjunsik-lang)에 깊은 감명을 받고, 이에 기반하여 존경을 담아 제작되었습니다. 다만 기존 엄랭과 약간의 문법상 차이가 존재합니다.   
~~근데 왜 만든건지는 나도 잘 몰?루~~

**최신 구현체는 현재 [C++](./Mollang_C++), [Node.js(TypeScript)](./Mollang_JS) 가 존재하며 다른 언어(Python, ...)구현은 개발 예정입니다! 언제든지 PR은 환영드립니다!**

# 1. 문법
몰랭의 문법은 `몰`, `루`, `?`, `!`, `.`, `은?행`, `털!자`, `가자!`, `0ㅅ0` 의 9개 키워드와 그 변형으로 이루어집니다.

## 1) 기본 연산자

- `?` (물음표): 1 증가 연산자
- `!` (느낌표): 1 감소 연산자
- `.` (마침표): 두 수 곱하기
- `..` (마침표2): 두 수 나누기 _(이 기능은 1.2부터 지원됩니다.)_
- `...` (마침표3): 두 수 나누어 소수점 내리기 (정수 나눗셈) _(이 기능은 1.2부터 지원됩니다.)_
- `....` (마침표4): 두 수를 나눈 나머지 _(이 기능은 1.2부터 지원됩니다.)_

</br>

```
?? -> 2
!! -> -2
!!!?? -> -1
??.???! -> 2 * (3 - 1) = 4
??.??.?? -> 8
???????..??? -> 2.333333···
???????...??? -> 2
???????....??? -> 1
!!!!!....??? -> 1
```

`..` 또는 실수값을 하나라도 사용하는 식은 모든 수가 실수로 변환되어 계산됩니다.
정수값만을 가질 수 있는 변수(공간)에 실수로 계산된 값을 대입할 시 내림하여 계산합니다.

## 2) 변수

### 변수 선언/대입/사용하기
변수들은 각각 정수 인덱스(번째수)를 가지며 아래와 같은 방법으로 나타냅니다. 변수 선언시 기본값이 입력되지 않으면 0으로 초기화됩니다.

첫 변수 이름은 `몰`입니다. 장음을 통해 그 글자수번째 변수를 나타내게 됩니다.

```
몰 -> 첫 번째 변수 선언
모올 -> 두 번째 변수 선언
모오오오오올 -> 여섯 번째 변수 선언
```

<br>

변수 이름 뒤에 연산자를 붙여 그 변수를 선언함과 동시에 정수를 대입합니다.

```
몰?? -> 첫 번째 변수에 2 대입
모올!! -> 두 번째 변수에 -2 대입
모오올??.??.! -> 세 번째 변수에 -4 대입
```

<br>

변수가 이미 선언되어 있다면 변수 이름으로 그 변수의 값을 가져옵니다.

```
1 몰?? -> 첫 번째 변수에 2 대입
2 몰루 -> 2가 출력됩니다.
```

<br>

한 변수를 다른 변수에 대입할 수 있습니다.

```
1 몰? -> 첫 번째 변수에 1 대입
2 모올몰 -> 두 번째 변수에 첫 번째 변수값 대입 (1이 대입됩니다.)
3 모오올몰? -> 세 번째 변수에 첫 번째 변수값 + 1 대입 (2가 대입됩니다.)
```

<br>

한 줄에 세 개 이상의 변수가 있는 경우, 맨 앞의 변수가 대입 대상, 그 이후의 변수들은 값으로 취급됩니다.   
또한 연산자를 이어쓸 수 있듯 변수 여러개를 이어 써도 더하기로 간주합니다.

```
몰모올모오올 -> 첫 번째 변수에 두 번째 변수와 세 번째 변수를 더한 값을 대입합니다. (즉, 몰 = 모올 + 모오올)
```

<br>

줄의 맨 처음에서, 이미 선언된 변수 뒤에 연산자를 붙이면 연산의 결과가 대입됩니다.

```
1 몰?? -> 첫 번째 변수에 2 대입
2 몰??? -> 첫 번째 변수를 3만큼 증가
3 몰! -> 첫 번째 변수를 1만큼 감소
4 몰.??? -> 첫 번째 변수를 3배로
5 몰루 -> 12가 출력됩니다.
```

<br>

하지만 줄이 변수가 아닌 연산자로 시작하는 경우 대입이 아닌 단순 연산으로 간주합니다.

```
1 몰? -> 첫 번째 변수에 1 대입
2 ??몰!루 -> 2 + 1 - 1 = 2이므로, 계산 결과인 2가 출력됩니다.
3 몰루 -> 원래 변수는 변하지 않았으므로 1이 출력됩니다.
```

<br>

`루`, `루?`, `은?행`, `아` 키워드와 같이 변수 앞뒤에 키워드가 붙었을 때에도 대입이 아닌 단순 연산으로 간주합니다.

```
1 몰?????????????.????? -> 첫 번째 변수에 65 대입
2 아몰???루 -> 유니코드 코드번호 68인 영문 'D' 출력
3 몰루 -> 원래 변수는 변하지 않았으므로 65가 출력됩니다.
```

## 3) 입출력
### 콘솔 출력 (루)
`루` 키워드를 사용해 콘솔에 정수를 출력합니다.

변수명 뒤에 `루` 키워드를 붙여 변수값을 출력합니다. 루 앞에는 반드시 값이 필요합니다.

```
몰루 -> 콘솔에 첫 번째 변수값 출력
몰?루 -> 콘솔에 첫 번째 변수값 + 1 출력
?몰루 -> 콘솔에 첫 번째 변수값 + 1 출력 (위와 동일)
??루 -> 2 출력

루 -> 오류
?!루 -> 0 출력
```

### 콘솔 입력 (루?)
`루?` 키워드를 사용해 콘솔로부터 정수를 입력받습니다. 반드시 하나의 온전한 변수만을 앞에 써야 하며 연산자를 사용하면 안 됩니다.

```
몰루? -> 입력값을 첫 번째 변수에 대입
모올루? -> 입력값을 두 번째 변수에 대입
몰모올루? -> 오류 (입력받을 변수가 여러개)
몰?루? -> 오류 (연산자를 사용함)
```

### 유니코드로 문자 출력하기 (아루)
문자를 출력할 때에는 `아` 키워드를 콘솔 출력 문법 앞에 붙입니다. 정수를 UTF-8 문자로 변환하여 콘솔에 출력합니다.

```
아몰루 -> 첫 번째 변수값을 유니코드로 출력
아?????????????.?????루 -> 'A' 출력
```

## 4) 지시문
### 조건문 (은?행 털!자)
조건에 따라 특정 코드를 실행할 수 있습니다.

`{조건식}은?행{실행할 코드}털!자` 의 형태로 사용합니다. 조건식 안의 값이 0이면 코드가 실행되고, 그렇지 않으면 실행되지 않고 바로 다음 코드로 넘어갑니다.   
조건식에는 변수, 연산자를 사용할 수 있습니다.

```
몰은?행모올??털!자 -> 첫 번째 변수가 0이면 두 번째 변수 2 증가
모올!!은?행모오올?털!자 -> 두 번째 변수 - 2가 0이면 세 번째 변수 1 
```

<br>

가독성을 위해(~~의미없지만~~) 여러 줄에 걸쳐 나타낼 수 있습니다. 조건절, 실행할 코드, 종료절의 순서로 개행합니다.

```
몰은?행
모올??
털!자

모올!!은?행
모오올?
털!자
```

<br>

조건문 하나당 실행할 코드는 여러 개가 들어갈수도 있습니다. 또한 조건문 안에 조건문이 중첩되는 경우도 문제없이 수행됩니다.

### 반복문 (은?행 돌!자) _(이 기능은 1.2부터 추가됩니다.)_

특정 조건이 0이 될 때까지 반복을 진행합니다.

`{조건식}은?행{실행할 코드}돌!자`의 형태로 사용됩니다. 반복문이 종료되면 `돌!자`의 다음 부분으로 이동하게 됩니다.

### 코드 흐름 변경 (가자!)
`가(이동할 라인 숫자)자!` 의 형태로 사용합니다. 특정 라인으로 이동하여 그 라인부터 차례로 실행을 재개합니다.

```
가몰자! -> 첫 번째 변수번째 라인으로 이동
가???자! -> 세 번째 라인으로 이동
```

### 프로그램 종료
`0ㅅ0` 키워드로 프로그램을 종료합니다. 뒤에 변수 또는 연산자가 있으면 그 정수를 반환하면서 종료합니다.

```
0ㅅ0? -> 1 반환하고 종료
```

## 5) 함수 _(이 기능은 1.2부터 추가됩니다.)_
### 함수 선언 (은?행 짓!자)

`{함수명}은?행(인자1),(인자2),(인자3),... {실행할 코드}짓!자`의 형태로 사용됩니다.

함수의 파라미터 개수에는 제한이 없습니다. 파라미터 수가 하나일 경우 쉼표를 적지 않습니다.

단, 함수명은 초성이 ㅁㄹ인 단어만 허용됩니다. 예: `말랑, 머리, 무릎, 망령, 매립, 무리, 밀랍, 뭵뤩 `

단, ㅁ의 자리에 몰, ㄹ의 자리에 루는 사용할 수 없습니다. 예: `몰랑, 모루`

### 함수 호출 (은?행 가!자)

`{함수명}은?행(인자1),(인자2),(인자3)가!자`의 형태로 사용됩니다.

## 6) 힙 메모리  _(이 기능은 1.3부터 추가됩니다.)_

힙 메모리는 2차원의 무제한한 공간이며 정수,실수,문자 세 종류의 공간을 가지고 있습니다.

처음 시작점은 (행:1, 열:1)이고 오른쪽으로 가면 열이 증가하며 아래쪽으로 가면 행이 증가합니다.

힙 메모리의 특정 주소를 다음과 같이 표현하며 변수와 같은 형태로 사용할 수 있습니다.

```
몰*모올 -> 정수힙의 몰번째 행 모올번째 열
몰~모올 -> 문자힙의 몰번째 행 모올번째 열
몰=모올 -> 실수힙의 몰번째 행 모올번째 열
```

정수 힙의 특정 행을 BIGINT로 저장하도록 변경할 수 있습니다.

```
털?자! -> 정수힙의 1번째 행을 BIGINT힙으로 변경합니다.
```

```
몰*모올? -> 정수힙의 몰번째 행 모올번째 열에 1대입
몰=모올몰*모올 -> 정수힙의 몰번째 행 모올번째 열의 값을 실수힙에 복사
```

문자열 입력과 출력은 다음과 같이 진행됩니다.

```
?~?루? -> (1,1)부터 (1,문자열길이)까지 입력한 문자열을 한 글자식 분리하여 채웁니다.
```

```
?~?루 -> (1,1)부터 오른쪽으로 한칸씩 이동하며 문자가 존재하지 않을 때까지 전부 출력합니다.
```

```
1 ?~?루? -> 'abc'입력
2 ?~????루? -> 'def'입력
3 ?~?루 -> 'abcdef' 출력됨
```

힙 메모리를 관리하는 다음과 같은 연산자가 있습니다.

```
&?~? -> (1,1)부터 오른쪽으로 한칸식 이동하며 문자가 존재하지 않는 공간까지의 거리를 셉니다.
```

```
1 ??~?루? -> 'abc'입력
2 &?~? -> 0
3 &??~? -> 3
```

~~이 부분을 구현하실 기여자 분들께 행운을 빕니다.~~

# 2. 코드 작성

파일 확장자는 `.molu` 입니다.(~~이게 끝?~~)

각 코드는 줄바꿈(`\n`) 또는 띄어쓰기로 구분합니다. 여러 형태로 해석이 가능한 코드를 작성 시 컴파일 오류가 발생합니다.

```
0ㅅ0몰몰루
몰루모올루 -> 컴파일 오류 발생

몰루
모올루 -> 정상 실행

몰루 모올루 -> 정상 실행
```


# 3. 구현체 목록
| 구현 언어                    | 구현 버전 |  추가 날짜  |
|-----------------------------|-----------|------------|
| [**C++**](./Mollang_C++)    | 1.1, 1.0  | 2022.02.09 |
| [**Node.JS**](./Mollang_JS) | 1.1, 1.0  | 2022.02.12 |
| Python3 (예정)              | -         | -          |

## C++ 구현체 사용방법
실행파일 [다운로드](./Mollang_C++/bin) 혹은 직접 컴파일 후

```
Mollang.exe <molu파일 경로>
```
### 옵션

```
-parsed: 몰랭 코드의 파싱 결과를 보여줍니다.
```



## JS 구현체 사용방법

### 설치 사용
```
npm i -g mollang
mollang <molu파일 경로>
```

### 미설치 사용
```
npx mollang <molu 파일 경로>
```

# 4. 웹에서 직접 사용해보기
[몰랭 웹 인터프리터](https://github.com/ArpaAP/molu-web)는 몰랭 프로그래밍 언어를 웹상에서 실시간으로 실행해볼 수 있는 대화형 인터프리터 웹사이트입니다.

**웹에서 몰랭 코드 실행해보기:** https://molu.vercel.app

# 5. 기타
**이 프로젝트가 마음에 드시나요?** 저희가 더욱 발전할 수 있도록 도와주세요! 후원하기:   

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P8AJ8G2)
