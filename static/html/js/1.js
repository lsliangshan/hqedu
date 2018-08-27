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

document.getElementById('cmsWrapper').innerHTML = '123'
