var $$baseUrl = 'http://api.hqwxedu.cn/spreead'

function $setThirdLoginCookie (args) {
  var thirdWebSite = ['http://www.hqwx.com/landing.asp', 'http://www.edu24ol.com/landing.asp']
  for (var i = 0; i < thirdWebSite.length; i++) {
    $.ajax({
      url: thirdWebSite[i] + '?passport=' + args.passport + '&token=' + args.token + '&tokenETime=' + args.tokenETime,
      type: 'GET',
      dataType: 'jsonp'
    })
  }
}

function $register (args) {
  var callback = null
  if (args.hasOwnProperty('callback')) {
    callback = args.callback
    delete args.callback
  }
  $.get($$baseUrl + '/register', args, function (res) {
    callback && callback(res)
  })
}

function $login (args) {
  var callback = null
  if (args.hasOwnProperty('callback')) {
    callback = args.callback
    delete args.callback
  }
  $.get($$baseUrl + '/login', args, function (res) {
    callback && callback(res)
  })
}

function $getSmsCode (args) {
  var callback = null
  if (args.hasOwnProperty('callback')) {
    callback = args.callback
    delete args.callback
  }
  $.get($$baseUrl + '/smscode', args, function (res) {
    callback && callback(res)
  })
}

function $getCode (args) {
  // $.get($$baseUrl + '/code', function (res) {
  //   args.callback && args.callback(res)
  // })
  // ajax({
  //   url: $$baseUrl + '/code'
  // })
  $.ajax({
    type: 'GET',
    url: $$baseUrl + '/code?ts=' + (new Date().getTime()),
    dataType: 'json',
    cache: false,
    success: function (res) {
      document.body.innerText = eval(res)
      args.callback && args.callback(res)
    },
    error: function (err) {
      // document.body.innerText = err
    }
  })
}
