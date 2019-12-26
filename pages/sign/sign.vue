<template>
	<view class="sign flex fc js">
		<view class="sign-header">
			
			<!-- 用户信息 -->
			<view class="users flex fc js" v-if="false">
				<div class="users-info flex fc js">
					<img class="avatar" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2009648465,963096827&fm=26&gp=0.jpg">
					<text class="phone">138****6351</text>
				</div>
				
				<div class="users-items">
					<view class="item flex fc js">
						<view class="item-icon flex">
							<i class="icon icon-singed"></i>
						</view>
						
						<text class="label">本月已签到</text>
						<text class="info">3天</text>
					</view>
					<view class="item flex fc js">
						<view class="item-icon flex">
							<i class="icon icon-call-charge"></i>
						</view>
						
						<text class="label">共获得花费</text>
						<text class="info">0.00元</text>
					</view>
					<view class="item flex fc js">
						<view class="item-icon flex">
							<i class="icon icon-flow"></i>
						</view>
						
						<text class="label">共获得国内流量</text>
						<text class="info">150M</text>
					</view>
				</div>
			</view>
			
			<!-- 日常登陆奖品 -->
			<view class="daily-gifts">
				<swiper
					class="swiper"
					:autoplay="false"
					:interval="5000"
					:circular="true"
					:current="current"
					display-multiple-items="3"
					previous-margin="50rpx"
					next-margin="50rpx"
					@change="change"
				>
				    <swiper-item v-for="(day, index) in daily" :key="index" class="flex">
						<view class="gift" :class="{ 'active': current == index }">{{day}}</view>
				    </swiper-item>
				</swiper>
			</view>
			
			<special-banner :banner-list="bannerList" :swiper-config="swiperConfig" v-if="false"></special-banner>
			
			<swiper-banner :banner-list="bannerList" :swiper-config="swiperConfig"></swiper-banner>
		</view>
		
		<view class="sign-content">
			
		</view>
	</view>
</template>

<script>
	import currySwiper from '@/components/curry-swiper/curry-swiper.vue'
	import currySlide from '@/components/curry-swiper/curry-slide.vue'
	import specialBanner from '@/components/special-banner/special-banner.vue'
	import swiperBanner from '@/components/swiper-banner/swiper-banner.vue'
	
	export default {
		components: {
			currySwiper,
			currySlide,
			specialBanner,
			swiperBanner
		},
		data() {
			return {
				daily: [
					1, 2, 3, 4, 5, 6, 7
				],
				current: 3,
				sceneList: [
				    { img: 'https://2fz1.me/img/phaser.jpg' },
				    { img: 'https://2fz1.me/img/css3.png' },
				    { img: 'https://2fz1.me/img/nodemodules.jpg' },
				    { img: 'https://2fz1.me/img/js.jpg' }
				],
				days: [
					{
						url: 'icon-url',
						title: '第一天',
						info: '50M',
					},
					{
						url: 'icon-url',
						title: '第二天',
						info: '50M',
					},
					{
						url: 'icon-url',
						title: '第三天',
						info: '50M',
					},
					{ 
						url: 'icon-url',
						title: '今日礼品',
						info: '50M',
					},
					{
						url: 'icon-url',
						title: '第五天',
						info: '50M',
					},
					{
						url: 'icon-url',
						title: '第六天',
						info: '50M',
					},
					{
						url: 'icon-url',
						title: '第七天',
						info: '50M',
					},
				],
				bannerList: [{
				            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
				            title: '七夕将至：时光足够久，韧性也能炖出味',
				            description: '一万年太久，就现在，给你爱',
				            path: ''
				        }, {
				            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
				            title: '新菜上架：无边海洋，找到顺眼的那尾鱼',
				            description: '花中樱，鱼乃鲷花中樱，鱼乃鲷',
				            path: ''
				        }, {
				            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
				            title: '在湘西的烟火气里，发现苗族少女的神明',
				            description: '取材自湘西苗族传统的烟熏文化',
				            path: ''
				        }, {
				            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png',
				            title: '福利降临，陪伴独自行走的丰盛旅程',
				            description: '在自己的小世界里，日日好日，夜夜好清宵',
				            path: ''
				        }],
				        swiperConfig: {
				            indicatorDots: true,
				            indicatorColor: 'rgba(255, 255, 255, .4)',
				            indicatorActiveColor: 'rgba(255, 255, 255, 1)',
				            autoplay: false,
				            interval: 3000,
				            duration: 300,
				            circular: true,
				            previousMargin: '58rpx',
				            nextMargin: '58rpx'
				        }
			};
		},
		methods: {
			change(info) {
				console.log('change:', info)
				this.current = info.detail.current
			}
		}
	}
</script>

<style lang="scss">
	.sign {
		border: 1px solid red;
		
		&-header {
			border: 1px solid red;
			width: 100%;
			height: 750rpx;
			background-color: #C872EC;
			
			.users {
				border: 1px solid red;
				background-color: #B659EA;
				padding: 40rpx;
				
				&-info {
					margin-top: 60rpx;
					
					.avatar {
						width: 160rpx;
						height: 160rpx;
						border: 10rpx solid #BABBFB;
						border-radius: 50%;
					}
					
					.phone {
						height: 50rpx;
						margin-top: 20rpx;
						font-size: 18px;
						line-height: 50rpx;
						color: #fff;
					}
				}
				
				&-items {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 60rpx;
					margin-top: 30rpx;
					
					.item {
						&-icon {
							margin-bottom: 10rpx;
							
							.icon {
								width: 100rpx;
								height: 100rpx;
							}
						}
						
						.label,
						.info {
							height: 34rpx;
							line-height: 34rpx;
							font-size: 12px;
							color: #fff;
							text-align: center;
						}
						
						.info {
							font-size: 14px;
							font-weight: bold;
						}
					}
					
				}
			}
			
			.daily-gifts {
				width: 100%;
				// height: 180rpx;
				border: 1px solid red;
				background-color: #C872EC;
				
				.gift {
					width: 160rpx;
					height: 144rpx;
					border-radius: 8rpx;
					background-color: #fff;
					
					&.active {
						width: 200rpx;
						height: 180rpx;
					}
				}
			}
		}
		
		&-content {
			border: 1px solid red;
		}
	}
</style>
