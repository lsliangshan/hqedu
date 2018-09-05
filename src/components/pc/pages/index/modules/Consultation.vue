<template>
	<div class="consultation_conntainer">
		<div class="subscribe_image_container" :style="{backgroundImage: 'url(' + data.img + ')'}"></div>
		<div class="consultation_wrapper">
			<div class="title">{{data.title}}</div>
			<div class="subtitle">{{data.subtitle}}</div>
		</div>
	</div>
</template>
<style scoped>
	.consultation_conntainer {
		position: relative;
	}
	.subscribe_image_container {
	    background-repeat: no-repeat;
	    background-position: center center;
	    height: 137px;
	    width: 100%;
	    margin-right: auto;
	    margin-left: auto;
	  }
	.consultation_wrapper {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		height: 137px;
	    width: 950px;
	    margin-right: auto;
	    margin-left: auto;
	}
	.title {
		height: 43px;
	    width: 660px;
	    margin-left: 280px;
	    float: left;
	    margin-top: 50px;
	    font-family: "\5FAE\8F6F\96C5\9ED1";
	    font-size: 28px;
	    font-weight: normal;
	    color: #FFFFFF;
	    overflow: hidden;
	}
	.subtitle {
		height: 47px;
	    width: 660px;
	    margin-left: 280px;
	    float: left;
	    font-family: "\5FAE\8F6F\96C5\9ED1";
	    font-size: 24px;
	    font-weight: normal;
	    color: #FFFFFF;
	    text-align: center;
	}
</style>
<script>
	export default {
		name: 'PageConsultation',
		props: {
			data: {
				type: Object
			}
		},
		data () {
			return {}
		}
	}
</script>