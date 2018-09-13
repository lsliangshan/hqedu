<template>
	<div class="give" id="liucheng">
    <h3>领课流程</h3>
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody><tr valign="top">
       <td width="238" class="tuflow">
        <h4><span>1.</span>选择想要获取科目</h4>
        <p style="line-height:25px;">选择对应专业的2016年课程班别。经济基础默认开通，再选择您要报学的专业实务课程即可。</p>
       </td>
       <td width="9"></td>
       <td width="238" class="tuflow">
        <h4><span>2.</span>注册学员</h4>
        <p style="line-height:25px;">网校赠课仅针对新注册学员，请设定您在网校学习的账号，密码等信息，然后点击“立即免费开通课程”后提示“注册成功”。</p> 
       </td>
       <td width="9"></td>
       <td width="238" class="tuflow">
        <h4><span>3.</span>选课进入学院中心</h4>
        <p style="line-height:22px;padding-top:10px;">点击“立即免费开通课程”后，提示“注册成功”后点击“领取课程”，收到提示领取成功信息，免费课程就会显示在您的学员中心里。</p>
       </td>
       <td width="9"></td>
       <td width="238" class="tuflow">
        <h4 class="clearFix wezom"><span>4.</span><font>登录环球网校
        </font></h4>
        <p style="line-height:22px;padding-top:10px;">您可以从网页右上角“学员登陆”处输入用户名密码登陆，也可以点击一下链接登录学习。<br>
         　  <a href="/login" style="margin: 10px auto; display: block; text-align: center;"><img src="/static/images/pages/login1.jpg" width="129" height="44" border="0"></a></p>
        </td>

      </tr>
    </tbody></table>
</div>
</template>
<style scoped>
.give{width:980px; margin-left:auto; margin-right:auto; margin-bottom:50px; margin-top:10px;}
.give h3{
    width:980px;
    height:59px;
    line-height:59px;
    text-align:center;
    color:#C51313;
    font-size:30px;
    margin-bottom:15px;
    background-color: papayawhip;
}
.tuflow{width:238px;height:250px;background:url(/static/images/pages/uu_03.jpg) no-repeat center 0;}
.tuflow h4{font-size:20px;color:#000;font-weight:normal;line-height:60px;padding-left:16px;}
.tuflow h4 span{color:#f28020;font-size:34px;}
.tuflow p{padding:20px 20px 0 20px;color:#333;font-size:14px;font-family:"宋体";}
.tuflow p font{color:#da3300;font-weight:bold;}
ul.down {
    position: relative;
}
ul, ol {
    list-style-type: none;
}
ul.down li {
    list-style: none outside none;
    float: left;
    position: relative;
}
ul#footera li a {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #000000;
    border-image: none;
    border-style: solid;
    border-width: 0 1px 1px 0;
    color: #000000;
    display: block;
    font-family: "Microsoft YaHei";
    font-size: 15px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    width: 194px;
}
.fu_buy h4{
    color: #5f6494;
    line-height: 44px;
    font-size: 24px;
    font-weight: bold;}
.fu_buy .wangpai {
    background: url(/static/images/pages/jin_04.png) no-repeat;
    width: 76px;
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    text-align: center;
    margin-left: 7px;
    display: inline-block;
    vertical-align: middle;
    margin-top: -3px;
    font-style: normal;
}   
    
    
.clearfix {
}
    .jinc_t,.jinc_c{ border-bottom:1px dashed #dcdcdc; padding-bottom:16px;}
    .jinc_t dl{ font-size:14px; line-height:28px; }
    .jinc_t dt,.jinc_t dd{ float:left;}
    .jinc_t dt{ width:80px; font-weight:bold; color:#444444;}
    .jinc_t dd{ width:630px; color:#565656; }
    .jinc_t em{ color:#fe4646;}
    .jinc_t b{ font-size:18px; }
    .jinc_t i { padding:0 25px 0 10px; text-decoration:line-through; }
    .jinc_t span{ font-size:12px; display:block; color:#fe4646; width:246px; height:18px; line-height:18px; border:1px solid #fe4646; border-radius:3px; text-align:center; }


</style>
<script>
	export default {
		name: 'Lklc',
		data () {
			return {}
		}
	}
</script>