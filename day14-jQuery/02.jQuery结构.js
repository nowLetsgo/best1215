(function () {
    function jQuery() {

    }
    //addClass方法 都是 jQuery(实例化).addClass()
    jQuery.prototype.addClass = function () {
        //return 一个jQuery实例化对象 保证链式调用
    }

    //$()选中的元素 或者 jQuery原型方法的返回值 返回的jQuery对象属于jQuery的实例化对象

    //给jQuery扩展的静态方法  将来是jQuery.ajax();
    jQuery.ajax = function () {

    }

    window.jQuery = window.$ = jQuery;

})(window)