---
title: 用JS学数据结构和算法之队列
date: 2018-04-07 11:27:56
tags: 
---

队列（queue）跟栈是一种相似的结构，只是采取的策略不同。队列是一组有序的，遵循FIFO（First In First Out，先进先出）的原则。新元素在队列的尾部，最先进来的会被最先移除。

![queue](http://oerfykrpf.bkt.clouddn.com/queue.png)

队列一般的有的方法：

- enqueue：向队列尾部添加元素
- dequeue：移除队列第一个元素，并返回被移除的元素。
- front：返回第一个元素
- isEmpty：队列是否为空
- size：返回队列的元素个数


用Js来实现：

```javascript

function Queue(){
    let items = [];

    this.enqueue = function(el){
        items.push(el);
    }
    this.dequeue = function(){
        return items.shift()
    }
    this.front = function(){
        return items[0];
    }
    this.isEmpty = function(){
        return items.length == 0;
    }
    this.size = function(){
        return items.length;
    }
}

```

