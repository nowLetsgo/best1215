; + function (w) {
    //扩展一个全局对象
    w.my = {};


    /* 
        getEleToDoc:获取元素到文档边缘的距离
        @param {Element Object}
        @return {object} :left属性和top属性
        
    
    */
    w.my.getEleToDoc = function (Ele) {
        var l = 0,
            t = 0;
        var obj = Ele;
        while (obj) {
            //判断obj是不是con 如果是，则不用获取它的边框，否则需要另外获取元素的边框
            if (obj === Ele) {
                l += obj.offsetLeft;
                t += obj.offsetTop;
            } else {
                l += obj.offsetLeft + obj.clientLeft;
                t += obj.offsetTop + obj.clientTop;
            }
            obj = obj.offsetParent;
        }
        return {
            left: l,
            top: t
        }

    }
}(window);