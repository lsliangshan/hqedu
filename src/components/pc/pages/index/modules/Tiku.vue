<template>
	<div class="main" style="margin:40px auto 0 auto; width:980px;height:277px;background-image:url(/static/images/pages/tiku.gif);">
		<a href="/register" class="button button-glow button-rounded button-highlight">免费领取 快题库专业版</a>
	</div>
</template>
<style scoped>
	@-webkit-keyframes glowing-highlight {
	  from {
	    -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
	            box-shadow: 0 0 0 rgba(254, 174, 27, 0.3); }
	  50% {
	    -webkit-box-shadow: 0 0 20px rgba(254, 174, 27, 0.8);
	            box-shadow: 0 0 20px rgba(254, 174, 27, 0.8); }
	  to {
	    -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
	            box-shadow: 0 0 0 rgba(254, 174, 27, 0.3); } }
	@keyframes glowing-highlight {
	  from {
	    -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
	            box-shadow: 0 0 0 rgba(254, 174, 27, 0.3); }
	  50% {
	    -webkit-box-shadow: 0 0 20px rgba(254, 174, 27, 0.8);
	            box-shadow: 0 0 20px rgba(254, 174, 27, 0.8); }
	  to {
	    -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
	            box-shadow: 0 0 0 rgba(254, 174, 27, 0.3); } }
	.main a {
	    background-color: #EEE;
	    border-color: #EEE;
	    font-weight: 300;
	    font-size: 16px;
	    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	    text-decoration: none;
	    text-align: center;
	    line-height: 40px;
	    height: 40px;
	    padding: 0 40px;
	    margin: 0;
	    display: inline-block;
	    appearance: none;
	    cursor: pointer;
	    border: none;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    -webkit-transition-property: all;
	    transition-property: all;
	    -webkit-transition-duration: .3s;
	    transition-duration: .3s;
		background-color: #FEAE1B;
	    border-color: #FEAE1B;
	    color: #FFF;
	    margin-top:180px;
	    margin-left:675px;
	    font-family: Verdana, Microsoft YaHei, Simsun;
	    font-size:18px;
	    border-radius: 4px;
	    animation-name: glowing-highlight;
	}
	.main a:hover, .main a:focus {
		background-color: #fec04e;
	    border-color: #fec04e;
	    color: #FFF;
	}
</style>
<script>
	export default {
		name: 'Tiku',
		data () {
			return {}
		}
	}
</script>