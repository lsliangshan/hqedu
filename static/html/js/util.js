var $$baseUrl = 'http://api.hqwxedu.cn/spreead';

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
    // $.ajax({
    //   url: thirdWebSite[i] + '?passport=' + args.passport + '&token=' + args.token + '&tokenETime=' + args.tokenETime,
    //   type: 'GET',
    //   dataType: 'jsonp'
    // })
    $.ajax({
      type: 'GET',
      url: thirdWebSite[i] + '?passport=' + args.passport + '&token=' + args.token + '&tokenETime=' + args.tokenETime + '&ts=' + (new Date().getTime()),
      dataType: 'jsonp',
      crossDomain: true,
      data: args,
      // dataType: 'jsonp',
      cache: false,
      success: function (res) {
      },
      error: function (err) {
      }
    })
  }
}

function $register (args) {
  var callback = null
  if (args.hasOwnProperty('callback')) {
    callback = args.callback
    delete args.callback
  }
  $.ajax({
    type: 'GET',
    url: $$baseUrl + '/register?ts=' + (new Date().getTime()),
    dataType: 'json',
    timeout : 5000,
    crossDomain: true,
    data: args,
    // dataType: 'jsonp',
    cache: false,
    success: function (res) {
      callback && callback(res)
    },
    error: function (err) {

    }
  })
}

function $login (args) {
  var callback = null
  if (args.hasOwnProperty('callback')) {
    callback = args.callback
    delete args.callback
  }
  $.ajax({
    type: 'GET',
    url: $$baseUrl + '/login?ts=' + (new Date().getTime()),
    dataType: 'json',
    timeout : 5000,
    crossDomain: true,
    data: args,
    // dataType: 'jsonp',
    cache: false,
    success: function (res) {
      callback && callback(res)
    },
    error: function (err) {
    }
  })
}

function $getSmsCode (args) {
  var callback = null
  if (args.hasOwnProperty('callback')) {
    callback = args.callback
    delete args.callback
  }
  $.ajax({
    type: 'GET',
    url: $$baseUrl + '/smscode?ts=' + (new Date().getTime()),
    dataType: 'json',
    timeout : 5000,
    crossDomain: true,
    data: args,
    // dataType: 'jsonp',
    cache: false,
    success: function (res) {
      callback && callback(res)
    },
    error: function (err) {
      if (err.statusText.indexOf('timeout') > -1) {
        alert('获取短信验证码超时，请稍后再试');
      }
    }
  })
}

function $getCode (args) {
  $.ajax({
    type: 'GET',
    url: $$baseUrl + '/code?ts=' + (new Date().getTime()),
    dataType: 'json',
    timeout : 5000,
    crossDomain: true,
    // dataType: 'jsonp',
    cache: false,
    success: function (res) {
      args.callback && args.callback(res)
    },
    error: function (err) {
      if (err.statusText.indexOf('timeout') > -1) {
        alert('获取图形验证码超时，请稍后再试');
      }
    }
  })
}
