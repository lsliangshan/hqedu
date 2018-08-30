var $$baseUrl = 'http://api.hqwxedu.cn/spreead';
var codeImage = $('#codeImage');

function getCode (args) {
  $getCode({
    callback: function (res) {
      codeImage.attr('src', res.data.verifyCodeStr)
    }
  })
}

getCode();

window.onload = function () {

}
