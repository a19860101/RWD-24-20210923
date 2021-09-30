# CSS Cascading Style Sheet

- [CSS Cascading Style Sheet](#css-cascading-style-sheet)
  - [分類](#分類)
    - [嵌入式](#嵌入式)
    - [內部樣式](#內部樣式)
    - [外部樣式](#外部樣式)
  - [選取器](#選取器)
    - [標籤選取器](#標籤選取器)
    - [類別選取器 class](#類別選取器-class)
    - [id選取器](#id選取器)
    - [後代選取](#後代選取)
    - [群組選取](#群組選取)
  - [權重](#權重)
  - [文字相關樣式](#文字相關樣式)
    - [文字色彩-color](#文字色彩-color)

串接樣式表

## 分類

依照寫的位置做分類

- 嵌入式
- 內部樣式
- 外部樣式表

### 嵌入式

將style屬性寫在標籤內。

```html
<h1 style="color:chocolate;">嵌入式樣式</h1>
```

### 內部樣式

通常寫在head元素裡面，被style標籤包住

```html
<head>
    <!-- ...略 -->
    <style>
        h2 {
            color:crimson;
        }
    </style>
</head>
<body>
    <h2>內部樣式</h2>
</body>
```

### 外部樣式

獨立的CSS檔，可以透過link或是import引入

- link標籤寫在head元素內

```html
<head>
    <link rel="stylesheet" href="qqq.css">
</head>
```

- import是css的方法，所以要寫在style標籤內，並且一定要放在最上方，否則會失效

```html
<style>
    @import url("qqq.css");
    
    h2 {
        color:crimson;
    }
</style>
```

## 選取器

- 標籤選取器
- 類別選取器(class)
- id選取器
- 後代選取器
- 群組選取器

### 標籤選取器

```css
h1 {
    color:red;
}
/* 選取所有h1元素 */
p {
    color: blue;
}
/* 選取所有p元素 */
```

### 類別選取器 class

名稱為英文句點開頭

```html
<style>
    .abc {
        color: pink;
}
</style>
<body>
    <div class="abc">類別選取</div>
</body>
```

### id選取器

名稱為#字號開頭

```html
<style>
    #xyz {
        color: pink;
}
</style>
<body>
    <div id="xyz">id選取器</div>
</**body**>
```

id選取器只能在頁面使用一次

### 後代選取

將選取器用空格分隔

```html
<style>
    #xyz h2{
        color: pink;
}
</style>
<body>
    <div id="xyz">
        <h2>後代選取</h2>
    </div>
</body>
```

### 群組選取

將選取器用逗號分隔

```html
<style>
    h2, h3{
        color: pink;
    }
</style>
<body>
    <h2>群組一</h2>
    <h3>群組二</h3>
</body>
```

## 權重

數量越少，權重越重，越優先套用。(物以稀為貴)

id > class > tag

如果權重相同時，以後面寫的樣式優先

## 文字相關樣式

### 文字色彩-color

- 16進位 #4a3d38

由rgb色碼16進位而來。

16進位算法 rgb(30,0,200) 30 / 16 = 1...14 0 / 16 = 0...0 200 / 16 = 12...8 #商餘商餘商餘 如果遇到十位數就轉換為A，所以16進位的16個分別為 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F rgb(30,0,200) => #1E00C8

- rgb色碼 rgb(255,0,34)
r:red
g:green
b:blue
數值從0~255，因為是光，0最少，255最亮

如果有透明度就會加a:alpha

- hsl色碼 hsl(30,10%,20%)

h:hue-色相-角度
s:saturate-飽和度-%
l:lightness-明度-%

如果有透明度就會加a:alpha

```css 
h1 {
    color: red;                /*色彩名稱*/
    color: rgb(255,0,0);       /*RGB色碼*/
    color: rgba(255,0,0,.5);   /*RGBA色碼*/
    color: #ff0000;            /*16進位*/
    color: #f00;               /*16進位縮寫*/
    color: hsl(112, 80%, 36%)  /*色相飽和度明度*/
}
```
