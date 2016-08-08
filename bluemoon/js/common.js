$(function() {
    $('#mainHeader').load('tpl/header.html');
    $('#mainFooter').load('tpl/footer.html');
    $('#sideBar').load('tpl/sidebar.html', function() {
        var roller = $(this).find('#roller');

        // 处理页脚去顶部按钮
        roller.click(function (e) {
            e.preventDefault();
            $('body').animate({scrollTop: 0}, 500);
            return false;
        });
    });

});
