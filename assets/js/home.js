// home.js

// GitHub
function updateGitHub(repository) {
      $('#douyin img').attr('src', `https://badgen.net/badge/抖音/1104/black`);
      $('#twitter img').attr('src', `https://badgen.net/badge/icon/twitter?icon=twitter&label`);
      $('#date img').attr('src', `https://badgen.net/https/cal-badge-icd0onfvrxx6.runkit.sh/Asia/Shanghai`);
      $('#github img').attr('src', `https://badgen.net/badge/icon/github?icon=github&label`);
      $('#last-commit img').attr('src', `https://badgen.net/github/last-commit/Qwejay/QWENAVI`);
      $('#license img').attr('src', `https://badgen.net/github/license/micromatch/micromatch`);

};
var repository = $('meta[name=repository]').attr('content');
updateGitHub(repository);

// 搜索
$('#search-services').dropdown();

function updateDropdown() {
    $('#search-services').dropdown('set selected', Cookies.get('byr_navi_previous_used_search_service'));
};

function setCookie(name, value) {
    Cookies.set(name, value, {
        expires: 365,
        domain: '.qwejay.cn',
        secure: true
    });
};

function redirect(service, query) {
    if (service.data('transcode')) {
        query = query.replace(new RegExp(service.data('transcode-from'), 'g'), service.data('transcode-to'));
    };
    window.open(`search/?service=${encodeURIComponent(service.text())}&query=${query}&next=${encodeURIComponent(service.data('url').replace('{query}', query))}`, '_blank');
};

// 初始化以前使用的搜索服务
if (Cookies.get('byr_navi_previous_used_search_service') === undefined || Cookies.get('byr_navi_previous_used_search_service') === '' || $(`#${Cookies.get('byr_navi_previous_used_search_service')}`).length === 0) {
    setCookie('byr_navi_previous_used_search_service', $('#search-services').val());
} else {
    updateDropdown();
};

// 搜索按钮
$('#search-button').click(function () {
    let service = $(`#${$('#search-services').val()}`);
    let query = $('#search-query').val();
    query = encodeURIComponent(query);
    if (query) {
        setCookie('byr_navi_previous_used_search_service', service.val());
        redirect(service, query);
    } else {
        $('#search-div').addClass('error');
        $('#search-query').attr('placeholder', '请输入搜索内容');
    };
});

// 查询输入：自动对焦
$('#search-query').click(function () {
    $(this).select();
});

// 查询输入:自动对焦
$(document).ready(function () {
    $('#search-query').focus();
});

// 查询输入:按回车键提交
$(window).keyup(function (event) {
    let windowTop = $(window).scrollTop();
    let windowHeight = $(window).innerHeight();
    let windowBottom = windowTop + windowHeight;
    let searchBoxTop = $('#search-div').offset().top;
    let searchBoxHeight = $('#search-div').innerHeight();
    let searchBoxBottom = searchBoxTop + searchBoxHeight;
    if (event.key === 'Enter' && searchBoxBottom > windowTop && searchBoxTop < windowBottom) {
        let service = $(`#${$('#search-services').val()}`);
        let query = $('#search-query').val();
        query = encodeURIComponent(query);
        if (query) {
            if ($('#search-query:focus').length > 0) {
                setCookie('byr_navi_previous_used_search_service', service.val());
                redirect(service, query);
            } else {
                $('#search-query').focus().select();
            };
        } else {
            $('#search-div').addClass('error');
            $('#search-query').attr('placeholder', '请输入搜索内容').focus();
        };
    };
});

// 查询输入:输入任何要恢复的内容
$('#search-query').keyup(function (event) {
    if (event.key) {
        if ($('#search-query').val()) {
            $('#search-div').removeClass('error');
            $('#search-query').attr('placeholder', '立即搜索');
        };
    };
});

// 初始化自定义快捷键
if (Cookies.get('byr_navi_search_shortcuts')) {
    let shortcuts = JSON.parse(Cookies.get('byr_navi_search_shortcuts'));
    $('#search-shortcuts .ui.label').each(function () {
        if (shortcuts[$(this).data('search-service-id')]) {
            if ($(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
            };
        } else {
            if (!$(this).hasClass('hidden')) {
                $(this).addClass('hidden');
            };
        };
    });
};

// 图标
$('#search-shortcuts .ui.label').each(function () {
    $(this).click(function () {
        let service = $(`#${$(this).data('search-service-id')}`);
        let query = $('#search-query').val();
        query = encodeURIComponent(query);
        if (query) {
            setCookie('byr_navi_previous_used_search_service', service.val());
            updateDropdown();
            redirect(service, query);
        } else {
            $('#search-div').addClass('error');
            $('#search-query').attr('placeholder', '请输入搜索内容');
        };
    });
});

// 查询建议
var sugParams = {
    "XOffset": -3, //提示框位置横向偏移量,单位px
    "YOffset": -2, //提示框位置纵向偏移量,单位px
    // "width": $('#search-query').innerWidth(), //提示框宽度，单位px
    "fontColor": "rgba(0, 0, 0, 0.87)", //提示框文字颜色
    "fontColorHI": "rgba(0, 0, 0, 0.87)", //提示框高亮选择时文字颜色
    "fontSize": "14px", //文字大小
    "fontFamily": "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif", //文字字体
    "borderColor": "rgba(34, 36, 38, 0.14902)", //提示框的边框颜色
    "bgcolorHI": "rgba(0, 0, 0, 0.05)", //提示框高亮选择的颜色
    "sugSubmit": false //选中提示框中词条时是否提交表单
};
BaiduSuggestion.bind('search-query', sugParams);
