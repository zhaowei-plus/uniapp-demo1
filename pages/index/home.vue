<template>
	<view class="home ascreen">
		<swiper
			class="swiper"
			circular
			indicator-dots="true"
			autoplay="true"
			@change="changeTab"
		>
			<swiper-item class="item" v-for="(guide, index) in guides" :key="index">
				<image :src="guide" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guides: [
					'../../static/guide1.png',
					'../../static/guide2.png',
					'../../static/guide3.png',
				],
				tabIndex: 0,
			}
		},
		mounted() {
			setInterval(() => {
				this.tabIndex = this.tabIndex + 1
			}, 1000)
		},
		methods: {
			changeTab(info) {
				console.log('changeTab:', info);
			}
		}
	}
</script>

<style lang="scss">
	Page {
		width: 100%;
		height:100%;
		border: 1px solid red;
	}
	
	.guides {
		width: 100%;
		height: 100%;
		position: absolute;
		border: 1px solid red;
		
		.swiper {
			width: 100%;
			height: 100%;
			
			.item {
				width: 100%;
				height: 100%;
				
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
