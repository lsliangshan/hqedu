<template>
	<div class="live_container">
		<div class="live_wrapper" :style="liveWrapperStyle"></div>
	</div>
</template>

<style scoped>
	.live_container {
		width: 100%;
        padding-left: 30px;
        padding-right: 30px;       
        background-color: #FFFFFF;
        background-repeat: no-repeat;
	}
	.live_wrapper {
		max-width: 1000px;
        height: 355px;
        margin: 0 auto;
        padding-top: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
	}
</style>

<script>
  export default {
  	name: 'PageLive',
  	props: {
  		data: {
  			type: Object,
  			default () {
  				return {}
  			}
  		}
  	},
  	data () {
  		return {}
  	},
  	computed: {
  		liveWrapperStyle () {
  			return {
  				backgroundImage: 'url(' + this.data.bg + ')'
  			}
  		}
  	}
  }	
</script>
