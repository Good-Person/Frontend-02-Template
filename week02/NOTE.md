### 第二周学习笔记

#### 产生式（BNF)

- 用尖括号括起来的名称来表示语法结构名

- 词法结构分成基础结构和需要用其他语法结构定义的复合结构

  - 基础结构称终结符 （+ - * /）
  - 复合结构称非终结符 （<MultiplicativeExpression>）

- 引号和中间的字符表示终结符 （字符串）

- 可以有括号

- *表示重复多次

- |表示或

- +表示至少一次

  ``` html
  <MultiplicativeExpression>::=<Mumber>|
    <MultiplicativeExpression>"*"<Mumber>|
    <MulitplicativeExpression>"/"<Mumber>|
  <AddtiveExpression>::=<MultiplicativeExpression>|
    <AddtiveExpression>"+"<MultiplicativeExpression>|
    <AddtiveExpression>"-"<MultiplicativeExpression>|
  <!-- 
  	终结符：Number + - * /
	非终结符：MultiplicativeExpression AddtiveExpression
  -->
  ```
  

#### 通过产生式理解乔姆斯基谱系

**JavaScript 总体上是上下文无关文法**

- 0型 无限制文法 （ ?::=? ）
  - 左右随便写
- 1型 上下文相关文法 (  ?<A>?::=?<B>? )
  - A前后文法  要与B前后相关
- 2型 上下文无关文法 （ <A>::=? ）
  - 左边只能有一个非终结符  右边随便写
- 3型 正则文法 （ <A>::=<A>? ）
  - 左边定义的非终结符 要想在表达式中使用  只能出现在开头

#### 编程语言的分类

1. 通过用途分类
   - 数据描述语言
   - 编程语言
2. 通过表达式分类
   - 声明式语言 （ 表述方式越接近人类语言——词汇的串行连接 “一个词汇实际上是一个概念” ）
   - 命令式语言 （ 越接近计算机语言——“顺序+分支+循环”的操作流程 ）

> - 描述语言
>
>   JSON, HTML, CSS, SQL, Markdown, XAML
>
> - 编程语言
>
>   Java, JavaScript, c, c++, C#, Python, Go, Rouby, Shell, Objective-C, Dart,
>   Perl, T-SQl, Clojure, Haskell, Lisp
>
> - 声明式语言
>
>   JSON, HTML, CSS, SQL, Markdown, XAML, Lisp, Clojure, Haskell
>
> - 命令式语言
>
>   Java, JavaScript, c, c++, C#, Python, Go, Rouby, Shell, Objective-C, Dart,
>   Perl, T-SQl

#### JavaScript 类型

##### Number

- IEEE 754 Double Float ( 双精度浮点类型 )

  - Sign 占用1位 表示正负**0**表示正数**1**表示负数
  - Exponent 占用11位 有一个基准值 01111111111 （1023） 
  - Fraction 占用52位 表示精度有一个 开头是1

  > 双精度浮点类型，基本思想就是把一个数字拆成两部分，一部分是指数位数，一部分是有效位数，指数位数表示数字的范围（2的整次幂），有效位数表示精度（除以2后的余数）例如6 = 2**2 * 1.5
  >
  > 所以用IEEE 754 双精度浮点数 表示6 （0 10000000001 1100000000000000000000000000000000000000000000000000）

#####String

#####Boolean

#####Object

#####Null

#####Undefined

#####Symbol