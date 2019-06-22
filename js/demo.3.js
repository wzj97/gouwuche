// 一. 编写入口函数
$(function() {
    // 一. 通过全选框控制所有复选框
    $('.checkall').change(function() {
        var flag = $(this).prop('checked');
        console.log(flag);
        console.log($('.j-checkbox, .checkall'));
        $('.j-checkbox, .checkall').prop('checked', flag);
    });
    // 二. 通过复选框控制全选框
    // 2.1 获取复选框元素, 绑定change事件
    $('.j-checkbox').change(function() {
        // 判断: 当所有的复选框全部选中时, 全选框选中
        // if (当前选中复选框的个数 == 3) {
        //     全选框选中
        // } else {
        //     全选框不选中
        // }
        //$('.j-checkbox:checked') // 表示的是所有选中的复选框
        //$('.j-checkbox:checked').length // 表示的是所有选中的复选框个数
        // 所有复选框个数 $('.j-checkbox').length
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            // 全选框选中
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
    });
    // 三. 通过+-改变数量
    $('.increment').click(function() {
        // 3.1 获取兄弟文本框的值
        // val() 获取input的值 相当DOM中表单元素的value属性一样
        var n = $(this).siblings('.itxt').val();
        // 3.2 让值++
        n++;
        // 3.3 把加完后的值重新赋值给兄弟文本框
        $(this).siblings('.itxt').val(n);
    });
    $('.decrement').click(function() {
        // 3.1 获取兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            // 不能继续-
            return false;
        }
        // 3.2 让值--
        n--;
        // 3.3 把加完后的值重新赋值给兄弟文本框
        $(this).siblings('.itxt').val(n);
    });


});
// $(function() {
//     // 二. 全选功能
//     // 2.1 选择 全选的元素 (通过.checkall)
//     $('.checkall').change(function() { // 2.2 绑定 change事件
//         // 2.3 得到全选框的状态, 根据全选框的状态改变 三个checkbox的状态
//         var flag = $(this).prop('checked');
//         //console.log(flag);
//         // 找到三个checkbox, 修改他们的checked属性
//         $('.j-checkbox').prop('checked', flag);
//     })
// })