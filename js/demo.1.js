// 一. 编写入口函数
$(function() {
    // 通过全选框控制所有复选框
    $('.checkall').change(function() {
        var flag = $(this).prop('checked');
        console.log(flag);
        console.log($('.j-checkbox, .checkall'));
        $('.j-checkbox, .checkall').prop('checked', flag);
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