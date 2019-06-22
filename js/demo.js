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

        // 四. 修改小计金额 = 单价p * 数量n
        // 计算单价
        // var p = 0;
        // $(this).parents('.p-num') 表示 祖先
        // $(this).parents('.p-num').siblings('.p-price').html() 相当于innerHtml ￥12.60
        //console.log($(this).parents('.p-num').siblings('.p-price').html());
        // 4.1 点击+, 修改小计
        var p = $(this).parents('.p-num').siblings('.p-price').html(); // ￥12.60
        // 在此基础上, 去掉¥12.60 substr(1) 从1开始截取到最后, 12.60
        p = p.substr(1); // 12.60
        // (p * n).toFixed(2) 保留2位小数
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

        // 调用函数计算总金额
        getSum();
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

        // 4.2 点击-, 修改小计
        var p = $(this).parents('.p-num').siblings('.p-price').html(); // ￥12.60
        // 在此基础上, 去掉¥12.60 substr(1) 从1开始截取到最后, 12.60
        p = p.substr(1); // 12.60
        // (p * n).toFixed(2) 保留2位小数
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        // 调用函数计算总金额
        getSum();
    });

    // 4.3 修改文本框的值, 改变小计
    $('.itxt').change(function() {
        // 获取当前文本框的值
        var n = $(this).val();

        // 获取单价
        var p = $(this).parents('.p-num').siblings('.p-price').html(); // ￥12.60
        // 在此基础上, 去掉¥12.60 substr(1) 从1开始截取到最后, 12.60
        p = p.substr(1);

        // 设置小计的值
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        // 调用函数计算总金额
        getSum();
    });

    // 五. 计算总价
    function getSum() {
        var count = 0; // 总件数
        var money = 0; // 总金额

        // 获取所有的文本框的值, 累加 得到总件数
        $('.itxt').each(function(i, ele) {
            // ele是一个DOM元素
            count += parseInt($(ele).val());
        });

        // 将总件数, 赋值给.amount-sum下的em元素
        $('.amount-sum em').text(count);

        // 计算总金额
        $('.p-sum').each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });

        // 将总金额赋值给.price-sum元素下的em元素
        $('.price-sum em').text('￥' + money.toFixed(2));
    };

    // 六. 删除商品模块
    // 6.1 商品后面的删除按钮
    $(".p-action a").click(function() {
        // 删除的是当前的商品 
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // 6.2 删除选中的商品
    $(".remove-batch").click(function() {
        // 删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // 6.3 清空购物车 删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })

});