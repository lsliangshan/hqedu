<template>
  <div class="top_menu_container" :style="topMenuBgColor">
    <Menu mode="horizontal" :theme="theme" :active-name="menus[0].name" :style="topMenuStyles" @on-select="onSelect">
      <MenuItem v-for="(item, index) in menus" :key="item.name" :name="item.name" :class="'menu_item_' + index">
        {{item.text}}
      </MenuItem>
    </Menu>
  </div>
</template>

<style scoped>
  .top_menu_container {
  }
  .menu_item_0 {
    width: 150px;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'PcTopMenu',
    data () {
      return {
        menus: [
          {
            text: '很长的第一项',
            name: 'item1'
          },
          {
            text: '第二',
            name: 'item2'
          },
          {
            text: '第三项',
            name: 'item3'
          },
          {
            text: '第四项',
            name: 'item4'
          },
          {
            text: '第五项',
            name: 'item5'
          },
          {
            text: '第六项',
            name: 'item6'
          },
          {
            text: '第七项',
            name: 'item7'
          },
          {
            text: '第八项',
            name: 'item8'
          },
          {
            text: '第九项',
            name: 'item9'
          }
        ]
        // menus: [
        //   {
        //     text: '所有考试分类',
        //     name: 'AllCategory'
        //   },
        //   {
        //     text: '首页',
        //     name: 'Home'
        //   },
        //   {
        //     text: '中级经济师',
        //     name: 'item1'
        //   },
        //   {
        //     text: '一级建造师',
        //     name: 'item2'
        //   },
        //   {
        //     text: '二级建造师',
        //     name: 'item3'
        //   },
        //   {
        //     text: '造价工程师',
        //     name: 'item4'
        //   },
        //   {
        //     text: '执业药师',
        //     name: 'item5'
        //   },
        //   {
        //     text: '心理咨询师',
        //     name: 'item6'
        //   },
        //   {
        //     text: '人力资源',
        //     name: 'item7'
        //   }
        // ]
      }
    },
    computed: {
      theme () {
        return this.$store.state.theme
      },
      topMenuBgColor () {
        let color = ''
        let _theme = this.$store.state.theme
        switch (_theme) {
          case 'dark':
            color = '#495060'
            break
          case 'light':
            color = '#FFFFFF'
            break
          case 'primary':
            color = '#2d8cf0'
            break
          default:
            color = '#FFFFFF'
            break
        }
        return {
          backgroundColor: color
        }
      },
      topMenuStyles () {
        return {
          maxWidth: '1000px',
          margin: '0 auto'
        }
      }
    },
    methods: {
      onSelect (name) {
        if (name.slice(-1) % 2 === 0) {
          this.$router.push({
            name: 'Register'
          })
        } else {
          this.$router.push({
            name: 'Login'
          })
        }
      }
    }
  }
</script>
