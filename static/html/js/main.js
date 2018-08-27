// var codeImage = document.querySelector('#codeImage')
// var code = document.querySelector('#code')
// var phonenum = document.querySelector('#phonenum')
// var password = document.querySelector('#password')
// var smsCode = document.querySelector('#smsCode')
// var smsCodeBtn = document.querySelector('#smsCodeBtn')
// var submitBtn = document.querySelector('#submitBtn')
// var checkbox = document.querySelector('#checkbox')
// var agreementsContainer = document.querySelector('#agreementsContainer')
// var redirectUrl = document.querySelector('#redirectUrl')
// var phonenumTip = document.querySelector('#phonenumTip')
// var passwordTip = document.querySelector('#passwordTip')
// var codeTip = document.querySelector('#codeTip')
// var smsCodeTip = document.querySelector('#smsCodeTip')

var codeImage = document.getElementById('codeImage')
var code = document.getElementById('code')
var phonenum = document.getElementById('phonenum')
var password = document.getElementById('password')
var smsCode = document.getElementById('smsCode')
var smsCodeBtn = document.getElementById('smsCodeBtn')
var submitBtn = document.getElementById('submitBtn')
var checkbox = document.getElementById('checkbox')
var agreementsContainer = document.getElementById('agreementsContainer')
var redirectUrl = document.getElementById('redirectUrl')
var phonenumTip = document.getElementById('phonenumTip')
var passwordTip = document.getElementById('passwordTip')
var codeTip = document.getElementById('codeTip')
var smsCodeTip = document.getElementById('smsCodeTip')

var codeObj = {}

var smsCodeTimer = {
  interval: 0,
  countdown: 60,
  defaultCountDown: 60
}

function clearAllTips () {
  phonenumTip.innerText = ''
  passwordTip.innerText = ''
  codeTip.innerText = ''
  smsCodeTip.innerText = ''
}

function showError (type, message) {
  clearAllTips()
  switch (type) {
    case 'phonenum':
      phonenumTip.innerText = message
      break
    case 'password':
      passwordTip.innerText = message
      break
    case 'code':
      codeTip.innerText = message
      break
    case 'smsCode':
      smsCodeTip.innerText = message
      break
    default:
      break
  }
}

function setThirdLoginCookie (args) {
  /**
   * 设置第三方网站登录状态
   */
  $setThirdLoginCookie(args)
}

function getCode () {
  $getCode({
    callback: function (res) {
      if (['200', '1'].indexOf(res.statusCode) > -1) {
        codeObj = {
          codeString: res.data.codeString,
          verifyCodeStr: res.data.verifyCodeStr
        }
        codeImage.setAttribute('src', res.data.verifyCodeStr)
      }
    }
  })
}

function getSmsCode () {
  if (smsCodeBtn.classList.contains('disabled')) {
    return
  }
  if (!/^1[3456789]\d{9}$/.test(phonenum.value)) {
    showError('phonenum', '手机号不正确')
    alert('手机号不正确')
  } else if (!code.value) {
    showError('code', '图形验证码不能为空')
    alert('图形验证码不能为空')
  } else if (!smsCodeTimer.interval) {
    smsCodeTimer.countdown -= 1
    smsCodeBtn.innerText = smsCodeTimer.countdown + '秒后重新获取'
    !smsCodeBtn.classList.contains('disabled') && smsCodeBtn.classList.add('disabled')
    $getSmsCode({
      phone: phonenum.value,
      verifyCode: code.value,
      codeString: codeObj.codeString,
      callback: function (responseData) {
        if (String(responseData.statusCode) !== '200') {
          alert('获取短信验证码失败，请稍后重试')
        } else {
          if (['200', '1'].indexOf(String(responseData.data.status)) < 0) {
            // 获取短信验证码失败
            // 刷新图形验证码
            getCode()
            alert(responseData.data.message || '获取短信验证码失败，请重试')
          } else {
            alert(responseData.data.message || '短信验证码已经发送')
          }
        }
      }
    })
    smsCodeTimer.interval = setInterval(function () {
      if (smsCodeTimer.countdown <= 1) {
        smsCodeTimer.countdown = smsCodeTimer.defaultCountDown
        clearInterval(smsCodeTimer.interval)
        smsCodeTimer.interval = 0
        smsCodeBtn.innerText = '获取短信验证码'
        smsCodeBtn.classList.contains('disabled') && smsCodeBtn.classList.remove('disabled')
      } else {
        smsCodeTimer.countdown -= 1
        smsCodeBtn.innerText = smsCodeTimer.countdown + '秒后重新获取'
        !smsCodeBtn.classList.contains('disabled') && smsCodeBtn.classList.add('disabled')
      }
    }, 1000)
  }
}

function login (args) {
  if (!/^1[3456789]\d{9}$/.test(phonenum.value)) {
    showError('phonenum', '手机号不正确')
    alert('手机号不正确')
  } else if (!password.value) {
    showError('password', '密码不能为空')
    alert('密码不能为空')
  } else {
    var requestParams = {
      phone: phonenum.value,
      pwd: password.value
    }
    requestParams.callback = function (responseData) {
      if (String(responseData.statusCode) === '200' && ['200', '1'].indexOf(String(responseData.data.status)) > -1) {
        setThirdLoginCookie({
          passport: responseData.data.data.passport,
          token: responseData.data.data.token,
          tokenETime: responseData.data.data.tokenETime
        })
      }
      args.callback && args.callback(responseData)
    }
    $login(requestParams)
  }
}

function register (args) {
  if (!/^1[3456789]\d{9}$/.test(phonenum.value)) {
    showError('phonenum', '手机号不正确')
    alert('手机号不正确')
  } else if (!password.value) {
    showError('password', '密码不能为空')
    alert('密码不能为空')
  } else if (!/^[0-9a-z_]{4,8}/i.test(password.value)) {
    showError('password', '密码为4-8位(只能包含数字,字母,下划线)')
    alert('密码为4-8位(只能包含数字,字母,下划线)')
  } else if (!code.value) {
    showError('code', '图形验证码不能为空')
    alert('图形验证码不能为空')
  } else if (!smsCode.value) {
    showError('smsCode', '短信验证码不能为空')
    alert('短信验证码不能为空')
  } else if (!$(checkbox).is(':checked')) {
    alert('请先同意网站注册协议')
  } else {
    // 注册
    !submitBtn.classList.contains('disabled') && submitBtn.classList.add('disabled')
    var requestParams = {
      phone: phonenum.value,
      pwd: password.value,
      smsCode: smsCode.value,
      sortId: '5785'
    }
    if (args.callback) {
      requestParams.callback = args.callback
    }
    $register(requestParams)
  }
}

function beforeSubmit () {
  if (!/^1[3456789]\d{9}$/.test(phonenum.value)) {
    showError('phonenum', '手机号不正确')
    alert('手机号不正确')
    return false
  } else if (!password.value) {
    showError('password', '密码不能为空')
    alert('密码不能为空')
    return false
  } else if (!/^[0-9a-z_]{4,8}/i.test(password.value)) {
    showError('password', '密码为4-8位(只能包含数字,字母,下划线)')
    alert('密码为4-8位(只能包含数字,字母,下划线)')
  } else if (!code.value) {
    showError('code', '图形验证码不能为空')
    alert('图形验证码不能为空')
    return false
  } else if (!smsCode.value) {
    showError('smsCode', '短信验证码不能为空')
    alert('短信验证码不能为空')
    return false
  } else if (!$(checkbox).is(':checked')) {
    alert('请先同意网站注册协议')
    return false
  }
  return true
}

function submit () {
  if (submitBtn.classList.contains('disabled')) {
    return
  }
  if (beforeSubmit()) {
    register({
      callback: function (responseData) {
        clearAllTips()
        if (submitBtn.classList.contains('disabled')) {
          submitBtn.classList.remove('disabled')
        }
        if (String(responseData.statusCode) !== '200') {
          alert('注册失败，请稍后重试')
        } else {
          if (['200', '1'].indexOf(String(responseData.data.status)) > -1) {
            // 注册成功，静默登录
            login({
              callback: function (res) {
                if (String(res.statusCode) !== '200') {
                  location.replace('http://www.hqwx.com/login/?gotohere=' + encodeURIComponent(redirectUrl.value))
                } else {
                  if (['200', '1'].indexOf(String(responseData.status)) < 0) {
                    location.replace('http://www.hqwx.com/login/?gotohere=' + encodeURIComponent(redirectUrl.value))
                  } else {
                    location.replace(redirectUrl.value)
                  }
                }
              }
            })
          } else {
            alert(responseData.data.message)
          }
        }
      }
    })
  }
}

function openAgreements () {
  agreementsContainer.style.display = 'block'
}

function closeAgreements () {
  agreementsContainer.style.display = 'none'
}

window.onload = function () {
  getCode()

  document.body.style.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) + 'px'
  codeImage.onclick = getCode
  smsCodeBtn.onclick = getSmsCode
  submitBtn.onclick = submit
}
