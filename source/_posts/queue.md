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


有时候呢，我们还需要有一个特殊的通道，用来处理更紧急的任务。这个该怎么用队列实现呢？

```javascript
function PriorityQueue() {
    let items = [];

    function QueueElement(el, priority) {
        this.el = el;
        this.priority = priority;
    }

    this.enqueue = function (el, priority) {
        let queueElement = new QueueElement(el, priority);

        if (items.length == 0) {
            items.push(queueElement)
        } else {
            for (let i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    break;
                }
            }
        }

        this.print = function () {
            for (let i = 0; i < items.length; i++) {
                console.log(`${items[i].el} - ${items[i].priority}`);
            }
        }
        this.dequeue = function () {
            return items.shift()
        }
        this.front = function () {
            return items[0];
        }
        this.isEmpty = function () {
            return items.length == 0;
        }
        this.size = function () {
            return items.length;
        }

    }
}

```