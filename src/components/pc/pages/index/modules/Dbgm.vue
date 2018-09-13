<template>
	<div class="main_blue" style="padding-top: 30px;">
        <div class="main" style="width:980px; margin: 0 auto;">
            <div class="parttitle" id="dbgm">单班购买</div>
<div class="p5_jiaoxue p5 clearfix"><span class="p6span" :class="{p5_active: active === '0'}" data-index="0" @click="toggleActive">中级经济师</span> <span class="p6span" :class="{p5_active: active === '1'}" data-index="1" @click="toggleActive">初级经济师</span>
                    <span class="p6span" style="border:none;" :class="{p5_active: active === '2'}" data-index="2" @click="toggleActive">高级经济师</span>
					<div style="clear:both;"></div>
                    <div class="p5_jiaoxue_neirong p5_jiaoxue_neirong2 clearfix" v-if="active === '0'">
					<form id="form_zhongji" name="form_zhongji">
                        <table class="p5_table p7_table">
                            <tbody><tr>
                                <th>辅导科目</th>
                                <th>主讲老师</th>
                                <th>精讲班</th>
                                <th>考点强化班</th>
                                <th>题库</th>
                            </tr>
                            <tr>
                                <td>中级经济基础</td>
                                <td>刘艳霞</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2559" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>

                                <td><input type="checkbox" id="discountids" name="discountids" value="21658" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><a class="red" href='/register' style="position: relative;cursor:pointer;">免费领取</a></td>
                            </tr>
                            <tr>
                                <td>中级人力</td>
                                <td>于彩凤/赵照</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2561" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="21661" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8543" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级工商</td>
                                <td>孙晶晶/李争</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2564" class="gedu-lesson">

                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="21659" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8544" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级金融</td>
                                <td>刘淑娥/彭岚</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2566" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="21660" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8545" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级财税</td>
                                <td>王玉娟/刘文秀</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2568" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="21662" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8546" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级建筑</td>
                                <td>刘娜</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2575" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="6900" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8549" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级房地产</td>
                                <td>张洁涵</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2571" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="6898" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8547" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级商业</td>
                                <td>李争</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2550" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2791" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8535" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级农业</td>
                                <td>张是山</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2552" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="6888" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8539" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级公路</td>
                                <td>常伟</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2555" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2795" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8541" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级保险</td>
                                <td>郭彬</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2551" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2792" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8536" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级邮电</td>
                                <td>郭彬</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2548" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2790" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8533" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级旅游</td>
                                <td>徐彩华</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2553" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2794" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8540" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级铁路</td>
                                <td>于海洋</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2573" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2803" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8548" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级水路</td>
                                <td>李檬</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2557" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2796" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8542" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>中级民航</td>
                                <td>张开旺</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2577" class="gedu-lesson">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="2805" class="gedu-lesson">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8556" class="gedu-lesson">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td colspan="5" style="padding:0px;">
                                    <a href="/register" class="button1 button-blue gedu-shopping-submit22" style="width:600px;display:block;border-radius:0px;">立即购买<span></span></a></td>
                            </tr>
                        </tbody></table></form>
                        <div class="p7_jiaoxue_right clearfix">
                            <div class="p7_nr1" style="height:auto;">
                                <h4>购买套餐，可额外享受</h4>
                                <div class="p7_nr_kuang" style="padding:40px 30px;+padding:45px 30px;margin-bottom:23px;"><img src="/static/images/pages/pic1.jpg">内部资料<p>(考试前半个月更新)</p></div>
                                <div class="p7_nr_kuang" style="padding:40px 30px;+padding:45px 30px;margin-bottom:23px;"><img src="/static/images/pages/pic2.jpg">直播押题<p>(考试前半个月更新)</p></div>
                                <div class="p7_nr_kuang" style="padding:40px 30px;+padding:45px 30px;margin-bottom:23px;"><img src="/static/images/pages/pic3.jpg">手机/网页题库
                                   
                                </div>
                                <div class="p7_nr_kuang" style="padding:43px 30px"><img src="/static/images/pages/pic4.jpg">应试技巧</div>
                                <a href="/register" class="button1" style="display:block;border-radius:0px;text-align:center">购买套餐<span></span></a></div>
                        </div>
                    </div>
					<div style="clear:both;"></div>
                    <div class="p5_jiaoxue_neirong p5_jiaoxue_neirong2 clearfix" v-if="active === '1'">
					<form id="form_chuji" name="form_chuji">
                        <table class="p5_table p7_table">
                            <tbody><tr>
                                <th>辅导科目</th>
                                <th>主讲老师</th>
                                <th>精讲班</th>
                                <th>考点强化班</th>
                                <th>题库</th>
                            </tr>
                            <tr>
                                <td>初级经济基础</td>
                                <td>徐娜</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3080" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3087" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><a class="red" href="/register" style="position: relative;cursor:pointer;">免费领取</a></td>
                            </tr>
                            <tr>
                                <td>初级人力</td>
                                <td>赵照</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3083" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3090" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8552" class="gedu-lesson2">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>初级工商</td>
                                <td>汤欢欢</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3082" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>

                                <td><input type="checkbox" id="discountids" name="discountids" value="3089" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8551" class="gedu-lesson2">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>初级金融</td>
                                <td>于海洋</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3081" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3088" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8550" class="gedu-lesson2">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>初级财税</td>
                                <td>刘文秀</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3084" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3091" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8554" class="gedu-lesson2">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>初级建筑</td>
                                <td>卫赵斌</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3086" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3093" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8555" class="gedu-lesson2">
                                    <em class="p7_price">149元</em></td>
                            </tr>
                            <tr>
                                <td>初级房地产</td>
                                <td>张洁涵</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3085" class="gedu-lesson2">
                                    <em class="p7_price">350元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="3092" class="gedu-lesson2">
                                    <em class="p7_price">200元</em></td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="8553" class="gedu-lesson2">
                                    <em class="p7_price">149元</em></td>
                            </tr>

                            <tr>
                                <td colspan="5" style="padding:0px;height:39px;+height:10px"><a href="/register" class="button1 button-blue gedu-shopping-submit2" style="width:600px;display:block;border-radius:0px;">立即购买<span></span></a></td>
                            </tr>
                        </tbody></table></form>
                        <div class="p7_jiaoxue_right clearfix">
                            <div class="p7_nr1" style="
    height: initial;
">
                                <h4>购买套餐，可额外享受</h4>
                                <div class="p7_nr_kuang" style="padding: 17px 30px;"><img src="/static/images/pages/pic1.jpg">内部资料<p>
                                    (考试前半个月更新)</p></div>
                                <div class="p7_nr_kuang" style="padding: 18px 30px;"><img src="/static/images/pages/pic2.jpg">直播押题<p>
                                    (考试前半个月更新)</p></div>
                                <div class="p7_nr_kuang" style="padding: 18px 30px;"><img src="/static/images/pages/pic3.jpg">手机/网页题库
                                    
                                </div>
                                <div class="p7_nr_kuang" style="padding: 17px 30px;"><img src="/static/images/pages/pic4.jpg">应试技巧
                                </div>
                                 <a href="/register" class="button1" style="display:block;border-radius:0px;text-align:center">购买套餐<span></span></a></div>
                        </div>


                    </div>
					<div style="clear:both;"></div>
                    <div class="p5_jiaoxue_neirong p5_jiaoxue_neirong2 clearfix" v-if="active === '2'" style="margin-bottom:15px;">
					<form id="form_gaoji" name="form_gaoji">
                        <table class="p5_table p7_table">
                            <tbody><tr>
                                <th>辅导科目</th>
                                <th>模块</th>
                                <th>主讲老师</th>
                                <th>精讲班（讲）</th>
                                <th>学费</th>
                            </tr>
                            <tr>
                                <td>经济理论与实务</td>
                                <td>经济学基础</td>
                                <td>崔宝玉</td>
                                <td>13学时</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="5975" class="gedu-lesson9">
                                    <em class="p7_price">600元</em></td>
                            </tr>
                            <tr>
                                <td>经济理论与实务</td>
                                <td>法律制度</td>
                                <td>崔宝玉</td>
                                <td>20学时</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="5974" class="gedu-lesson9">
                                    <em class="p7_price">600元</em></td>
                            </tr>
                            <tr>
                                <td>经济理论与实务</td>
                                <td>管理学基础</td>
                                <td>崔宝玉</td>
                                <td>17学时</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="5973" class="gedu-lesson9">
                                    <em class="p7_price">600元</em></td>
                            </tr>
                            <tr>
                                <td>经济理论与实务</td>
                                <td>国民经济管理</td>
                                <td>崔宝玉</td>
                                <td>20学时</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="5968" class="gedu-lesson9">
                                    <em class="p7_price">600元</em></td>
                            </tr>
                            <tr>
                                <td>评审综合能力</td>
                                <td>评审流程指导</td>
                                <td>俞菁</td>
                                <td>2学时</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="5976" class="gedu-lesson9">
                                    <em class="p7_price">300元</em></td>
                            </tr>
                            <tr>
                                <td>评审综合能力</td>
                                <td>论文申报流程指导</td>
                                <td>俞菁</td>
                                <td>2学时</td>
                                <td><input type="checkbox" id="discountids" name="discountids" value="5977" class="gedu-lesson9">
                                    <em class="p7_price">300元</em></td>
                            </tr>
                            <tr>
                                <td colspan="5" style="padding:0px;height:39px;+height:10px"><a href="/register" class="button1 button-blue gedu-shopping-submit9" style="width:600px;display:block;border-radius:0px;">立即购买<span></span></a></td>
                            </tr>
                        </tbody></table></form>
                        <div class="p7_jiaoxue_right clearfix">
						<form id="form_gaojitaocan" name="form_gaojitaocan">
                            <div class="p7_nr1">
                                <h4 style="padding:27px 0px;padding-top:26px;">现价:<b style="color:red">2680元</b><br>
                                    原价:<s>3800元</s></h4>
                                <div class="p7_nr_kuang"><img src="/static/images/pages/pic3.jpg">套餐详情：
                                    <p style="  font: 12px/27px '宋体';
  font-weight: bold;">经济学基础精品班<br>
                                        法律制度精品班<br>
                                        管理学基础精品班<br>
                                        国民经济管理精品班</p><input style="display:none;" checked="checked" type="checkbox" id="discountids" name="discountids" value="5101" class="gedu-lesson190"><input style="display:none;" type="checkbox" id="discountids" name="discountids" value="5102" class="gedu-lesson190">
                                </div>
                                <div class="p7_nr_kuang"><img src="/static/images/pages/pic4.jpg">赠送：
                                    <p style="  font: 12px/25px '宋体';
  font-weight: bold;">评审综合能力―评审指导精品班<br>
                                        评审综合能力―论文指导精品班 </p>
                                </div>
                                <a href="/register" class="button1 button-blue gedu-shopping-submit190" style="display:block;border-radius:0px;text-align:center">购买套餐<span></span></a></div></form>
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                </div>
        </div>
    </div>
</template>
<style scoped>
	/**单班*/
.p5 .p5_active {
cursor: default;
background: #f7f7ce;
color: #666666;
font-weight: bold;
border: 0px;
}
.p6span {
cursor: pointer;
display: block;
float: left;
width: 325px;
height: 43px;
padding-top: 17px;
font: 20px "\5FAE\8F6F\96C5\9ED1";
font-weight: bold;
color: #fff;
text-align: center;
vertical-align: middle;
border-right: 1px solid #dddddd;
background: #ff9600;
margin-bottom:15px;
box-sizing: content-box;
}
.main_blue {
width: 100%;
padding-bottom: 40px;
}
.parttitle {
background: url("/static/images/pages/title.png") no-repeat bottom center;
_background: url("/static/images/pages/title_ie7.png") no-repeat bottom center;
height: 69px;
text-align: center;
color: #666666;
font: 30px "\5FAE\8F6F\96C5\9ED1";
/*padding-top: 30px;*/
font-weight: bold;
}
.p5_jiaoxue {
border: 1px solid #dddddd;
}
.p5_jiaoxue_neirong {
margin-left:15px;
clear: both;
background: #fff;
}
.p5_table {
    float: left;
}
.p5_table th, .p5_table td {
    color: #666666;
    text-align: center;
    border: 1px solid #dddddd;
    padding: 9px 0;
}
.p5_table th {
    background: #f5f5f5;
    text-align: center;
    font-weight: bold;
}
.p5_table td {
}
.p5_table td img {
    vertical-align: middle;
    }
.p7_table {
height: 493px;
}
.p5_table {
float: left;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
 .p7_input {
    vertical-align: middle;
}
.p7_price {
    color: red;
    font-weight: bold;
    font-style: normal;
    padding-left: 10px;
    padding-top: 2px;
}
.p7_table td, .p7_table th {
    padding: 10px 10px;
}
.p7_jiaoxue_right {
    float: left;
    width: 300px;
    _width: 290px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
}
.p7_nr1 {
    float: left;
    border: 1px solid #d8e5ff;
    background: #edf3ff;
    width: 310px;
    _width: 290px;
    height: 451px;
    +height:461px;
    margin: 0px 20px 0 0;
    _margin: 0px 15px 0 0;
}
.p7_nr1 h4 {
    font: 20px "\5FAE\8F6F\96C5\9ED1";
    color: #5586dc;
    font-weight: bold;
    text-align: center;
    padding: 17px 0;
}
.p7_nr_kuang {
border: 1px solid #d3e2ff;
margin: 0 20px 20px;
font: 20px "\5FAE\8F6F\96C5\9ED1";
color: #5586dc;
background: #fff;
padding: 20px 30px;
position: relative;
}
.p7_nr_kuang img {
    vertical-align: middle;
    padding-right: 10px;
}
.p7_nr_kuang p {
    font-size: 12px;
    position: relative;
    width: 190px;
    left: 50%;
    margin-left: -80px;
    +margin-left: -120px;
}
.p7_table {
    height: 493px;
}
.button1 {
    font: 16px "\5FAE\8F6F\96C5\9ED1";
    font-weight: bold;
    color: #fff;
    background: #ff9600;
    border-radius: 3px;
    padding: 8px 10px;
    display: inline-block;
}
.button1 span {
    display: inline-block;
    width: 17px;
    height: 20px;
    margin-left: 10px;
    background: url(/static/images/pages/incon2.png) -426px -0px no-repeat;
    _background: url(/static/images/pages/incon2_ie7.png) -426px -0px no-repeat;
    vertical-align: middle;
    float: none;
    margin-top: 0px;
    overflow: hidden;
}
.button1:hover {
    background: #ff6600;
}
.button1:hover span {
    background: url(/static/images/pages/incon2.png) -443px -0px no-repeat;
    _background: url(/static/images/pages/incon2_ie7.png) -443px -0px no-repeat;
}
/***/
#toplogin {

padding: 3px 7px;
background-color: #f8f8f8;
border: 1px solid #bbbbbb;
}
.red {
	    color: red;
    border: 1px solid #EF6666;
    padding: 2px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    line-height: 14px;
    border-radius: 3px;
    position: absolute;
}
input[type=checkbox] {
	-webkit-appearance: checkbox;
}
</style>
<script>
	export default {
		name: 'Dbgm',
		data () {
			return {
				active: '0'
			}
		},
		methods: {
			toggleActive (e) {
				this.active = e.target.dataset.index
			}
		}
	}
</script>