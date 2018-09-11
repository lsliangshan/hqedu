<template>
	<div class="live_container">
		<div class="live_wrapper" :style="liveWrapperStyles">
      <!-- <web-site src="/static/html/p/zhibo.html"></web-site> -->
      <div class="live_card" v-for="(item, index) in data.class.slice(0, 3)" :key="index" :style="{borderColor: isToday(item.startTime) ? 'rgb(239, 94, 50)' : item.theme}">
        <div class="live_card_title" :style="{backgroundColor: (!isToday(item.startTime) ? item.theme : '#efefef'), color: (!isToday(item.startTime) ? '#FFFFFF' : '#5a5a5a')}" :class="{'not_today': !isToday(item.startTime)}">
          <div class="live_time_container">
            <div class="live_date" key="today" :style="{backgroundImage: 'url(/static/images/pages/zhibo.png)'}" v-if="isToday(item.startTime)"></div>
            <div class="live_date pl10" key="notToday" v-else>{{item.startTime | formatDate}}</div>
            <div class="live_date ml5">{{item.startTime | formatTime}}-{{item.endTime | formatTime}}</div>
            <div class="live_category">
              {{item.category}}
            </div>
          </div>
        </div>
        <div class="live_card_body">
          <div class="live_class_container">
            <h3 class="live_course_name">{{item.course.name}}</h3>
            <h4 class="live_teacher_name">主讲:{{item.teacher.name}}</h4>
            <p class="live_course_subject">{{item.course.subject}}</p>
          </div>
          <div class="live_teacher_container">
            <div class="live_teacher_head_icon">
              <img class="live_teacher_head_icon_img" :src="item.teacher.headIcon"/>
            </div>
            <div class="live_teacher_profile">
              {{item.teacher.profile}}
            </div>
          </div>
        </div>
        <a class="live_card_bottom" :href="item.href">{{item.btn}}</a>
        <div class="live_card_tag" v-if="item.tag" :style="{borderBottomColor: isToday(item.startTime) ? 'rgb(239, 94, 50)' : item.tag.bgColor, borderRightColor: isToday(item.startTime) ? 'rgb(239, 94, 50)' : item.tag.bgColor}"></div>
        <div class="live_card_tag_text">{{item.tag.text}}</div>
      </div>
    </div>
	</div>
</template>

<style scoped>
  .ml5 {
    margin-left: 5px;
  }
  .pl10 {
    padding-left: 10px;
  }
	.live_container {
		width: 100%;
    padding-left: 30px;
    padding-right: 30px;       
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif, 宋体;
	}
	.live_wrapper {
		max-width: 1000px;
    height: 355px;
    margin: 0 auto;
    padding-top: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;
	}
  .live_card {
    width: 316px;
    height: 240px;
    background-color: #FFFFFF;
    position: relative;
    float: left;
    /*margin-right: 10px;*/
    margin-bottom: 23px;
    border: 1px solid #dddddd;
  }
  .live_card_title {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #efefef;
    color: #666666;
  }
  .live_time_container {
    /*display: inline-block;  */
    /*color: #5a5a5a;*/
  }
  .live_date {  
    float: left;
    width: 90px;
    height: 40px;
    background-position: 0 -399px;
    /*background-image: url('/static/images/pages/zhibo.png');*/
    background-repeat: no-repeat;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    padding-top: 4px;
  }
  .live_category {
    float: right;
    padding-right: 10px;
    padding-top: 4px;
    height: 40px;
    display: inline-flex;
    align-items: center;
  }
  .live_card_body {
    position: relative;
    width: 100%;
    height: 125px;
    padding-top: 25px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .live_teacher_container {
    position: absolute;
    left: 12px;
    top: 25px;
    width: 100px;
    /*width: 292px;*/
    height: 100px;
    border-radius: 50px;
    overflow: hidden;  
    border: 2px solid #2aa4dd;
    cursor: pointer;
    background-color: #FFFFFF;
    transition: width .3s ease-in-out;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.35);
  }
  .live_teacher_container:hover {
    width: 292px;
  }
  .live_teacher_head_icon {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    overflow: hidden;
  }
  .live_teacher_head_icon_img {
    width: 100px;
    height: 100px;
  }
  .live_teacher_profile {
    position: absolute;
    top: 0;
    left: 110px;
    width: 172px;
    height: 100px;
    float: right;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
  }
  .live_class_container {
    width: 170px;
  }
  .live_course_name {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live_teacher_name {
    font-size: 14px;
    color: #5a5a5a;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .live_course_subject {
    font-size: 14px;
    color: #5a5a5a;
  }
  .live_card_bottom {
    width: 135px;
    height: 35px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 35px;
    display: block;
    text-align: center;
    margin-top: 20px;
    border-radius: 1px;
    background-color: #0095DB;
    background-image: -webkit-linear-gradient(90deg, #0095db 0%, #03a4f0 65%, #00adfe 100%);
    color: #FFFFFF;
    cursor: pointer;
  }
  .live_card_bottom:active {
    opacity: 0.7;
  }
  .live_card_tag {
    display: block;
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 0;
    width: 0;
    background-color: transparent;
    border-left: 32px solid transparent;
    border-top: 27px solid transparent;
    border-bottom: 27px solid transparent;
    border-right: 32px solid transparent;
  }
  .live_card_tag_text {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 32px;
    height: 30px;
    color: #FFFFFF;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    transform: rotate(-45deg);
    transform-origin: center center;
  }
</style>

<script>
  import WebSite from '../../../../common/WebSite/Index.vue'
  export default {
  	name: 'PageLive',
    components: {
      WebSite
    },
  	props: {
  		data: {
  			type: Object
  		}
  	},
  	data () {
  		return {}
  	},
  	computed: {
  		liveWrapperStyles () {
  			return {
  				backgroundImage: 'url(' + this.data.bg + ')'
  			}
  		}
  	},
    filters: {
      formatDate (ts) {
        let d = new Date(Number(ts))    
        let m = d.getMonth() + 1
        let date = d.getDate()
        return ((m < 10 ? '0' + m : m) + '月' + (date < 10 ? '0' + date : data) + '日')
      },
      formatTime (ts) {
        let d = new Date(Number(ts))    
        let h = d.getHours()
        let m = d.getMinutes()
        return ((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m))
      }
    },
    methods: {
      isToday (ts) {
        /**
         * 判断一个时间戳是否为今天
         */
        let today = new Date()
        today.setHours(0)
        today.setMinutes(0)
        today.setSeconds(0)
        return (ts >= today.getTime() && (ts < (today.getTime() + 24 * 60 * 60 * 1000)))
      }
    }
  }
</script>
