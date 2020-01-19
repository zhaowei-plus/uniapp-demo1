<template>
   <view class="nav-bar flex ac jsb">
	   <view class="nav-bar-left flex  ac js" @tap="leftClick">
			<text class="lh20">唐山</text>
	   </view>
	   <view class="nav-bar-center flex ac js">
			<i class="icon iconfont icon-search"></i>
			<input
				type="text" 
				placeholder="搜索"
				v-model="value"
				@input="onSearch"
			/>
	   </view>
	   <view class="nav-bar-right flex ac js" @tap="rightClick">
			<i class="icon iconfont icon-loaction flex"></i>
			<text class="lh20">找房</text>
	   </view>
    </view>
</template>
<script>
export default {
        name: "customNavBar",
        data () {
            return {
                value: ''
            }
        },
        methods: {
			leftClick() {
				console.log('- leftClick')
				this.$emit('leftClick')
			},
			onSearch() {
				console.log('- onSearch:', this.value)
				this.$emit('onSearch', this.value)
			},
			rightClick() {
				console.log('- rightClick')
				this.$emit('rightClick')
			}
        }
}
</script>
<style lang="less" scoped>
	@import "../../common/common.css";
	
    .nav-bar {
        position: fixed;
        top: 0;
		left: 0;
        z-index: 999;
        width: 750rpx;
		height: 88rpx;
		padding: 0 30rpx;
		font-size: 28rpx;
		background-color: #00C16F;
		color: #fff;
		
		&-left  {
			font-size: 26rpx;
		}
		
		&-center {
			width: 500rpx;
			height: 60rpx;
			border-radius: 50rpx;
			padding: 0 20rpx;
			background-color: #fff;
			
			.icon {
				width: 32rpx;
				height: 32rpx;
				font-size: 32rpx;
				color: #ccc;
			}
			
			input {
				flex: 1;
				padding: 0 10rpx;
				font-size: 28rpx;
				color: #ccc;
			}
		}
		
		&-right {
			.icon {
				width: 32rpx;
				height: 32rpx;
			    font-size: 28rpx;
			}
			
			text {
				margin-left: 4px;
			    font-size: 26rpx;
			}
		}   
    }
	
	.lh20 {
		line-height: 20px;
	}
</style>