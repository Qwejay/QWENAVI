// hitokoto.js

$.getJSON('https://v1.hitokoto6.cn', function (data) {
    $('#hitokoto').attr({
        'url': 'hitokoto.cn?c=k&c=j',
        'target': '_blank'
    }).append(data.hitokoto).append(
        $('<div>').addClass('detail').text(data.from)
    );
}).fail(function () {
    $('#hitokoto').attr({
        'url': 'https://i.qwejay.cn/',
        'target': '_blank'
    }).html('<i class="lightbulb icon"></i>忘掉今天的人将被明天忘掉。<div class="detail">歌德</div>');
});
