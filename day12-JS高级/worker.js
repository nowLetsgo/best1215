//this代表当前的分线程
console.log(this);

//在分线程中，当主线程向分线程发送数据的时候，会触发分线程的onmessage事件
this.onmessage = function (e) {
    //事件对象包含了 主线程传递的数据
    console.log(e);
    console.log(e.data);

    //拿到数据之后开始计算

    var num = 0;
    for (var i = 0; i < e.data; i++) {
        num += Math.sqrt(i)
    }
    // console.log(num)

    //把计算好的结果发送给主线程
    postMessage(num)

    //在分线程关闭自身
    close();
}