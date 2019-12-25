<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// 检测是否是第一次打开应用
			const lanched =  false // uni.getStorageSync('lanched')
			if (lanched) {
				uni.redirectTo({
					url: '/pages/index/home'
				});
			} else {
				// 第一次打开应用，跳转到引导页
				uni.setStorage({
					key: 'lanched',
					data: true
				})
				
				uni.redirectTo({
					url: '/pages/index/guide'
				});
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
