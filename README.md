# 몰랭
**몰?루 프로그래밍 언어**

![몰?루](mollu.gif)

```
몰??
모올??.?????

몰?루
아모올루

모오올은?행
모올루
털!자

가?자!
```

본 언어는 [엄랭](https://github.com/rycont/umjunsik-lang)에 깊은 감명을 받고, 이에 기반하여 존경을 담아 제작되었습니다.   
근데 왜 만든건지는 나도 잘 몰?루

**실제 구현체(Python)는 개발 예정입니다.**

# 1. 문법
몰랭의 문법은 `몰`, `루`, `?`, `!`, `.`, `은?행`, `털!자`, `가자!` 의 8개 키워드와 그 변형으로 이루어집니다.

## 1) 기본 연산자

- `?` (물음표): 1 증가 연산자
- `!` (느낌표): 1 감소 연산자
- `.` (마침표): 두 수 곱하기

</br>

```
?? -> 2
!! -> -2
!!!?? -> -1
??.???! -> 2 * (3 - 1) = 4
??.??.?? -> 8
```

## 2) 변수
### 변수 선언/대입/사용하기
변수들은 각각 정수 인덱스(번째수)를 가지며 아래와 같은 방법으로 나타냅니다. 변수 선언시 기본값이 입력되지 않으면 0으로 초기화됩니다.

첫 변수 이름은 `몰`입니다. 장음을 통해 그 글자수번째 변수를 나타내게 됩니다.

```
몰 -> 첫 번째 변수 선언
모올 -> 두 번째 변수 선언
모오오오오올 -> 여섯 번째 변수 선언
```

</br>

변수 이름 뒤에 연산자를 붙여 그 변수를 선언함과 동시에 정수를 대입합니다.

```
몰?? -> 첫 번째 변수에 2 대입
모올!! -> 두 번째 변수에 -2 대입
모오올??.??.! -> 세 번째 변수에 -4 대입
```

</br>

변수가 이미 선언되어 있다면 변수 이름으로 그 변수의 값을 가져옵니다.

```
1 몰??
2 몰 -> 2
```

</br>

이미 선언된 변수에 연산자를 붙이면 연산 결과가 대입됩니다.

```
1 몰?? -> 첫 번째 변수에 2 대입
2 몰! -> 첫 번째 변수를 1만큼 감소
3 몰 -> 3
```

## 3) 입출력
### 콘솔 출력 (루)
`루` 키워드를 사용해 콘솔에 정수를 출력합니다.

변수명 뒤에 `루` 키워드를 붙여 변수값을 출력합니다.

```
몰루 -> 콘솔에 첫 번째 변수값 출력
??루 -> 2 출력
```

### 콘솔 입력 (루?)
`루?` 키워드를 사용해 콘솔로부터 정수를 입력받습니다.

```
몰루? -> 입력값을 첫 번째 변수에 대입
모올루? -> 입력값을 두 번째 변수에 대입
```

### 유니코드로 문자 출력하기 (아루)
문자를 출력할 때에는 `아` 키워드를 콘솔 출력 문법 앞에 붙입니다. 정수를 UTF-8 문자로 변환하여 콘솔에 출력합니다.

```
아몰루 -> 첫 번째 변수
아?????????????.?????루 -> 'A' 출력
```

## 4) 지시문
### 조건문 (은?행 털!자)
조건에 따라 특정 코드를 실행할 수 있습니다.

`{변수}은?행{실행할 코드}털!자` 의 형태로 사용합니다. 변수가 0이면 코드가 실행되고, 그렇지 않으면 실행되지 않고 바로 다음 코드로 넘어갑니다.

```
몰은?행모올??털!자 -> 첫 번째 변수가 0이면 두 번째 변수에 2 대입
```

가독성을 위해(~~의미없지만~~) 여러 줄에 걸쳐 나타낼 수 있습니다. 조건절, 실행할 코드, 종료절의 순서로 개행합니다.

```
몰은?행
모올??
털!자
```

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

## 5) 코드 작성
파일 확장자는 `.mol` 입니다.
