var $$baseUrl = 'http://api.hqwxedu.cn/spreead'

function Ajax (args) {
  var xmlHttpReq = null;
  if (window.ActiveXObject) {
    xmlHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
  } else if (window.XMLHttpRequest) {
    xmlHttpReq = new XMLHttpRequest();
  }
  if (xmlHttpReq != null) {
    xmlHttpReq.open('GET', args.url, true);
    xmlHttpReq.onreadystatechange = RequestCallback;
    xmlHttpReq.send(null);
  }
  function RequestCallback () {
    if (xmlHttpReq.readyState == 4) {
      if (xmlHttpReq.status == 200) {
        args.callback && args.callback(xmlHttpReq.responseText);
      }
    }
  }
}

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
  // $.ajax({
  //   type: 'GET',
  //   url: $$baseUrl + '/code?ts=' + (new Date().getTime()),
  //   dataType: 'json',
  //   crossDomain: true,
  //   // dataType: 'jsonp',
  //   cache: false,
  //   success: function (res) {
  //     args.callback && args.callback(eval(res))
  //   },
  //   error: function (err) {
  //
  //   }
  // })
  Ajax({
    url: $$baseUrl + '/code?ts=' + (new Date().getTime()),
    callback: function (res) {
      args.callback && args.callback(res);
    }
  })
}
