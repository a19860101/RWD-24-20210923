# CSS Cascading Style Sheet

串接樣式表

## 分類

依照寫的位置做分類

- 嵌入式
- 內部樣式
- 外部樣式表

### 嵌入式

```html
<h1 style="color:chocolate;">嵌入式樣式</h1>
```

### 內部樣式

通常寫在head元素裡面，被style標籤包住

```html
<style>
    h2 {
        color:crimson;
    }
</style>
<body>
    <h2>內部樣式</h2>
</body>
```