<template>
   <view class="tab-bar flex ac jsb">
	   <view class="tab-bar-item flex fc ac js" :class="{'active': active === tab.key}"  v-for="(tab, index) in leftTabs" :key="tab.key" @tap="onTabs(tab.key)">
			<i class="icon iconfont" :class="tab.icon"></i>
			<text class="title">{{tab.title}}</text>
	   </view>
	   
	   <view class="tab-bar-item flex ac jc" :class="{'active': active === 'add'}" @tap="onTabs('add')">
	   		<i class="icon iconfont icon-add"></i>
	   </view>
	   
	   <view class="tab-bar-item flex fc ac js" :class="{'active': active === tab.key}" v-for="(tab, index) in rightTabs" :key="tab.key" @tap="onTabs(tab.key)">
	   		<i class="icon iconfont" :class="tab.icon"></i>
	   		<text class="title">{{tab.title}}</text>
	   </view>
    </view>
</template>
<script>
export default {
        name: "customTabBar",
        data () {
            return {
				active: '',
				tabs: [
					{
						key: 'home',
						icon: 'icon-home',
						title: '首页',
					},
					{
						key: 'list',
						icon: 'icon-list',
						title: '列表',
					},
					{
						key: 'add',
						icon: 'icon-add',
						title: '添加',
					},
					{
						key: 'config',
						icon: 'icon-config',
						title: '配置',
					},
					{
						key: 'user',
						icon: 'icon-user',
						title: '我的',
					},
				]
            }
        },
		computed: {
			leftTabs() {
				const middleIndex = parseInt((this.tabs.length + 1) / 2)
				return this.tabs.filter((tab, index) => index < middleIndex - 1)
			},
			rightTabs() {
				const middleIndex = parseInt((this.tabs.length + 1) / 2)
				return this.tabs.filter((tab, index) => index >= middleIndex)
			}
		},
        methods: {
			onTabs(key) {
				console.log('- onTabs：', key)
				this.active = key
				this.$emit('onTabs', key)
			}
        }
}
</script>
<style lang="less" scoped>
	@import "../../common/common.css";
	
    .tab-bar {
        position: fixed;
        left: 0;
		bottom: 0;
        z-index: 999;
        width: 750rpx;
		height: 80rpx;
		border-top: 1px solid #DDDDDD;
		padding: 10rpx 0 4px;
		font-size: 24rpx;

		background-color: #FFFFFF;
		color: #fff;
		
		&-item {
			flex: 1;
			color: #AFCEA4;
			
			.icon {
				width: 32rpx;
				height: 32rpx;
				font-size: 36rpx;
			}
			
			.title {
				margin-top: 4rpx;
			}
			
			
			&:nth-child(3) {
				.icon {
					font-size: 100rpx;
					margin-top: -30rpx;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50rpx;
					background-color: #FFFFFF;
				}
			}
			
			&.active {
				color: #2B9939;
			}
		}
    }
</style>