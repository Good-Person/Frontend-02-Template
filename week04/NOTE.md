### 第四周笔记
#### 浏览器工作原理

- 从URL到Bitmap
  1. 输入URl 根据HTTP请求获得HTML文本
  2. 解析HTML文本生成DOM树（此时是光秃秃的DOM树）
  3. 解析CSS(css computing) 生成DOM with CSS 树
  4. 布局（layout）生成DOM with position 
  5. rander 渲染，生成bitmap 交由操作系统生成图形

#### 有限状态机

**个人理解：把一件事情分成多个状态，每个状态可以做特定是事情，从而起到很好的解耦**

- 每个状态机都是一个机器
  - 每个机器里，我们可以做计算、存储、输出...
  - 所有的机器接收的输入是一致的
  - 状态机的没饿一个机器本身没有状态
- 每一个机器知道下一个状态
  - 每一个机器都有确定的下一个状态（Moore）
  - 每一个机器根据输入决定下一个状态（Mealy）