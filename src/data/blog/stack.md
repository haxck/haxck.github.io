---
title: 用JS学数据结构和算法之栈
description: none
pubDate: 2018-04-02 11:27:56
---

栈（stack）是一种有序集合，遵循后进先出（LIFO）的原则。在栈里，新进来的数据在栈顶，旧数据被压在栈底。


![stack](http://cdn.haxck.com/stack.png)

栈一般有这么几个方法：

- Push ：进栈。添加栈顶元素。
- pop：出栈。移除栈顶元素。
- top：返回栈顶元素。
- empty：堆栈是否为空。
- size：栈中元素个数。
- clear：清除所有元素。


用Js来实现：

```javascript

function stack(){

    let item = [];

    this.push = function(el){
        item.push(el);
    }
    // 移除栈顶的元素，同时返回被移除的元素
    this.pop = function(){
        return item.pop()
    }

    this.top = function(){
        return item[item.length - 1];
    }
    //判断栈内是否为空
    this.empty = function(){
        return item.length  == 0;
    }

    this.size = function(){
        return item.length;
    }

    this.clear = function(){
        item = [];
    }
}

```



