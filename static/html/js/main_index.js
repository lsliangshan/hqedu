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
var redirectUrl = document.getElementById('redirectUrl')
var phonenumTip = document.getElementById('phonenumTip')
var passwordTip = document.getElementById('passwordTip')
var codeTip = document.getElementById('codeTip')
var smsCodeTip = document.getElementById('smsCodeTip')

var courseSelected = {
  main: {
    name: '经济师'
  },
  sub: {
    name: '初级经济师',
    value: '12556'
  }
}
function hideAllRadio (except, callback) {
  if (except || Number(except) === 0) {
    $('.step_items :gt(' + Number(except) + ')').fadeOut(200, function () {
      callback && callback()
    })
  } else {
    $('.step_items').fadeOut(200, function () {
      callback && callback()
    })
  }
}
hideAllRadio(0)
/**
 * 默认选中第一组第一个
 */
$('input[type=radio][value=经济师]').attr('checked', 'checked')
$('input[type=radio][value=12556]').attr('checked', 'checked')
$(document).ready(function () {
  $('input[type=radio]').change(function () {
    var _parentValue = $(this).attr('data-parent')
    courseSelected.main = {
      name: _parentValue
    }
    if (_parentValue === '') {
      hideAllRadio(null, function () {
        courseSelected.sub = {
          name: '',
          value: ''
        }
        var _childItems = this.parentNode.nextSibling.nextSibling
        if (_childItems) {
          $(_childItems).fadeIn()
        }
      })
    } else {
      courseSelected.sub = {
        name: $(this).next('span').text(),
        value: this.value
      }
    }
  })
})

var codeObj = {}

var smsCodeTimer = {
  interval: 0,
  countdown: 60,
  defaultCountDown: 60
}

var codeBtnTs = 0;

function console (message) {
  document.getElementById('cmsWrapper').innerHTML = message;
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
  /***
   * 5s内禁止重复请求
   * @type {number}
   */
  var nowTs = (new Date()).getTime();
  if (nowTs - codeBtnTs > 5 * 1000) {
    codeBtnTs = nowTs;
    $getCode({
      callback: function (res) {
        if (String(res.statusCode) === '200' || String(res.statusCode) === '1') {
          codeObj = {
            codeString: res.data.codeString,
            verifyCodeStr: res.data.verifyCodeStr
          }
          codeImage.setAttribute('src', res.data.verifyCodeStr)
        }
      }
    })
  }
}
function _resetSmsCodeBtn () {
  smsCodeTimer.countdown = smsCodeTimer.defaultCountDown
  clearInterval(smsCodeTimer.interval)
  smsCodeTimer.interval = 0
  smsCodeBtn.innerHTML = '获取短信验证码'
  $(smsCodeBtn).hasClass('disabled') && $(smsCodeBtn).removeClass('disabled')
}
function _timerFunc () {
  if (smsCodeTimer.countdown <= 1) {
    _resetSmsCodeBtn()
  } else {
    smsCodeTimer.countdown -= 1
    smsCodeBtn.innerHTML = smsCodeTimer.countdown + '秒后重新获取'
    !$(smsCodeBtn).hasClass('disabled') && $(smsCodeBtn).addClass('disabled')
  }
}
function getSmsCode () {
  if ($(smsCodeBtn).hasClass('disabled')) {
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
    smsCodeBtn.innerHTML = smsCodeTimer.countdown + '秒后重新获取'
    !$(smsCodeBtn).hasClass('disabled') && $(smsCodeBtn).addClass('disabled')
    $getSmsCode({
      phone: phonenum.value,
      verifyCode: code.value,
      codeString: codeObj.codeString,
      callback: function (responseData) {
        if (String(responseData.statusCode) !== '200') {
          alert('获取短信验证码失败，请稍后重试')
        } else {
          if (String(responseData.data.status) !== '200' && String(responseData.data.status) !== '1') {
            // 获取短信验证码失败
            // 刷新图形验证码
            getCode()
            // 重置 获取短信验证码 按钮
            _resetSmsCodeBtn()
            alert(responseData.data.message || '获取短信验证码失败，请重试')
          } else {
            alert(responseData.data.message || '短信验证码已经发送')
          }
        }
      }
    })
    smsCodeTimer.interval = setInterval(_timerFunc, 1000)
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
      if (String(responseData.statusCode) === '200' && (String(responseData.data.status) === '200' || String(responseData.data.status) === '1')) {
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
  } else {
    // 注册
    !$(submitBtn).hasClass('disabled') && $(submitBtn).addClass('disabled')
    var requestParams = {
      phone: phonenum.value,
      pwd: password.value,
      smsCode: smsCode.value,
      sortId: courseSelected.sub.value
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
  }
  return true
}

function submit () {
  if ($(submitBtn).hasClass('disabled')) {
    return
  }
  if (beforeSubmit()) {
    register({
      callback: function (responseData) {
        clearAllTips()
        if ($(submitBtn).hasClass('disabled')) {
          $(submitBtn).removeClass('disabled')
        }
        if (String(responseData.statusCode) !== '200') {
          alert('注册失败，请稍后重试')
        } else {
          if (String(responseData.data.status) === '200' || String(responseData.data.status) === '1') {
            // 注册成功，静默登录
            login({
              callback: function (res) {
                if (String(res.statusCode) !== '200') {
                  location.replace('http://www.hqwx.com/login/?gotohere=' + encodeURIComponent(redirectUrl.value))
                } else {
                  if (String(responseData.status) !== '200' && String(responseData.status) !== '1') {
                    location.replace('http://www.hqwx.com/login/?gotohere=' + encodeURIComponent(redirectUrl.value))
                  } else {
                    location.replace(redirectUrl.value)
                  }
                }
              }
            })
          } else {
            location.replace('http://www.hqwx.com/login/?gotohere=' + encodeURIComponent(redirectUrl.value))
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

getCode()
codeBtnTs = 0;
window.onload = function () {
  var bodyHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
  document.body.style.height = bodyHeight + 'px';
  codeImage.onclick = getCode
  smsCodeBtn.onclick = getSmsCode
  submitBtn.onclick = submit
}
