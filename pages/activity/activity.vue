<template>
	<view class="activity flex fc" :style="{backgroundImage: 'url(' + bgUrl + ')'}">
		<!-- 获奖信息轮播 -->
		<view class="carousel flex fr js">
			<view class="carousel-icon flex fr">
				<i class="icon icon-notify"></i>
			</view>
			<view class="carousel-content">
				<text class="title">恭喜 135****0140 获得月费全年奖励</text>
				<text class="title">恭喜 135****0140 获得月费全年奖励</text>
			</view>
		</view>
		
		<!-- 领取奖励 -->
		<view class="reward flex fr jsb">
			<view class="reward-icon flex">
				<i class="icon icon-gift"></i>
			</view>
			
			<view class="reward-content flex fc js">
				<text class="title">每月5万份奖励，先到先得！</text>
				<text class="tips">邀请5人组网并激活即可领取奖励</text>
			</view>
			
			<view class="reward-operation flex fr">
				<button type="primary" @tap="receive">领取奖励</button>
			</view>
		</view>
		
		<!-- 邀请成员 -->
		<view class="activation flex fc jsb">
			<view class="activation-header flex jsb">
				<text class="group">
					当前已激活<i class="number">1</i>人
				</text>
				<i class="icon icon-semi"></i>
				<text class="group">
					再邀<i class="number">4</i>人可领取奖励
				</text>
			</view>
			
			<view class="activation-content flex as jsb">
				<view class="avatar flex fc as" v-for="(user, index) in users" :key="index">
					<img class="url" :src="user.url">
					<text class="name">{{user.name}}</text>
				</view>
			</view>
			
			<view class="activation-footer">
				<text class="tips">邀请5人组网并100%激活爱家APP即可领取奖励</text>
			</view>
		</view>
		
		<!-- 立即邀请 -->
		<view class="invite">
			<view class="icon icon-invite" @tap="invite"></view>
		</view>
		
		<!-- 领取奖励弹出层 -->
		<uni-popup ref="rewardPopup" type="center" :maskClick="false">
			<view class="popup-reward flex fc je">
			    <i class="icon icon-i-know" @tap="know"></i>
			</view>
		</uni-popup>
		
		<!-- 邀请方式弹出层 -->
		<uni-popup ref="invitePopup" type="bottom">
			<view class="popup-invite flex fc js">
				<view class="popup-invite-header">
					<text class="title">选择邀请方式</text>
				</view>
				<view class="popup-invite-content">
					<view class="channels">
						<view class="channel flex fc js" v-for="(channel, index) in channels" :key="index">
							<img class="url" :src="channel.url" @tap="inviteChannel(channel.type)">
							<span class="title">{{channel.title}}</span>
						</view>
					</view>
				</view>
				<view class="popup-invite-footer flex">
					<view class="btn-cancel" hover-class="hover" @tap="know">取消邀请</view>
				</view>
			</view>
		</uni-popup>
		
		<!-- 活动规则弹出层 -->
		<uni-popup ref="rulesPopup" type="center" :maskClick="false">
			<view class="popup-rules flex fc js">
				<view class="popup-rules-header flex">
					<text class="title">活动规则</text>
				</view>
				<view class="popup-rules-content flex">
					<ul>
						<li v-for="(rule, index) in rules" :key="index">
							<text class="rule">{{rule}}</text>
						</li>
					</ul>
				</view>
				
				<view class="popup-rules-footer flex">
					<button class="i-know" @tap="know">我知道了</button>
				</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	
	// http://gw.aikan.miguvideo.com/ifs/img/70cf99348580296ec6967620d59dc226_bg-activation.png
	// http://gw.aikan.miguvideo.com/ifs/img/6de7d7b89bfd463536c84abc80c4a1a0_bg-activity.png
	
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				bgUrl: 'http://gw.aikan.miguvideo.com/ifs/img/6de7d7b89bfd463536c84abc80c4a1a0_bg-activity.png',
				users: [{
						url: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3747502583,2547015257&fm=58&s=68DAAB447E221E94D2E45C9A0300C080',
						name: '张若昀'
					},{
						url: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=289838398,721253689&fm=58&app=83&f=JPEG?w=250&h=250&s=88011F700523430118DC6CCA0100E0B2',
						name: '李沁'
					},{
						url: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3715133957,122249221&fm=58&s=81387B9622A36FB532AD29870300A0E2',
						name: '陈道明'
					},{
						url: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2932258754,2677098047&fm=58&app=83&f=JPEG?w=250&h=250&s=D0C5B8446019B1DC1BCD54820300D080',
						name: '吴刚'
					},{
						url: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2766399990,3347395643&fm=58&app=83&f=JPEG?w=250&h=250&s=23F0EB26AEF024947384289A0300C092',
						name: '宋轶'
					}
				],
				rules: [
				    '活动时间：2020年1月1日-2020年12月31日;',
				    '活动期间，主号通过广西爱家邀请在网人员，不 低于5人的组网成员并100%激活APP后，即可领 取奖励;',
				    '主号月租减免奖励每月限量50000份，先到先得 ，抢完为止，当月没有抢到的用户，次月可直接 领取奖励；',
				    '广西移动省内亲情网用户和全国亲情网用户都可 享有月租减免，超出10人免费组网的费用不享有 减免；'
				],
				channels: [
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						type: 'wx',
						title: '微信'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						type: 'alipay',
						title: '支付宝'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						type: 'qq',
						title: 'QQ'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						type: 'weibo',
						title: '新浪'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						type: 'baidu',
						title: '百度'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						type: 'other',
						title: '其他'
					}
				],
				inviteCounts: 4,
			}
		},
		mounted() {
			this.$refs.rulesPopup.open()
		},
		onLoad() {
			console.log('onLoad');
		},
		methods: {
			receive() {
				this.$refs.rewardPopup.open()
			},
			invite() {
				this.$refs.invitePopup.open()
			},
			know() {
				// 关闭所有弹出层
				this.$refs.rewardPopup.close()
				this.$refs.invitePopup.close()
				this.$refs.rulesPopup.close()
			},
			inviteChannel(channel) {
				switch(channel) {
					case 'wx': {
						console.log('通过微信邀请')
						return;
					}
					case 'alipay': {
						console.log('通过支付宝邀请')
						return;
					}
					case 'qq': {
						console.log('通过QQ邀请')
						return;
					}
					case 'weibo': {
						console.log('通过新浪微博邀请')
						return;
					}
					case 'baidu': {
						console.log('通过百度邀请')
						return;
					}
					default: {
						console.log('请问想通过啥渠道邀请呢')
						return;
					}
				}
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.activity {
		width: 100%;
		height: auto;
		padding: 15rpx 15rpx 100rpx;
		
		
		background-size: cover;
		
		// 提示轮播
		.carousel {
			position: relative;
			width: 670rpx;
			height: 52rpx;
			overflow: hidden;
			border-radius: 26rpx;
			margin: 720rpx auto 10px;
			white-space: nowrap;
			background: rgba(0, 0, 0, .3);
			
			&-icon {
				width: 68rpx;
				height: 52rpx;
				background: rgba(0, 0, 0, .49);
				
				.icon {
					width: 32rpx;
					height: 28rpx;
				}
			}
			
			&-content {
				position: relative;
				width: 600rpx;
				height: 52rpx;
				overflow: hidden;
				
				.title {
					position: absolute;
					top: 0;
					left: 100%;
					width: 100%;
					height: 52rpx;
					font-size: 12px;
					color: #fff;
					line-height: 52rpx;
					animation: 8s carousel linear infinite normal;
					
					& + .title {
						animation: 8s carousel linear 4s infinite normal;
					}
				}
			}
		}
		
		// 领取奖励
		.reward {
			width: 690rpx;
			height: 150rpx;
			border-radius: 8rpx;
			padding: 30rpx;
			background-color: #fff;
			
			&-icon {
				width: 90rpx;
				height: 90rpx;
				margin-right: 8rpx;
				
				.icon {
					width: 90rpx;
					height: 90rpx;
				}
			}
			
			&-content {
				.title {
					width: 100%;
					height: 40rpx;
					font-size: 14px;
					line-height: 40rpx;
					color: #262A30;
					text-align: left;
					margin-bottom: 6rpx;
				}
				
				.tips {
					width: 100%;
					height: 32rpx;
					line-height: 32rpx;
					font-size: 12px;
					color: #5C626B;
					text-align: left;
				}
			}
			
			&-operation {
				width: 134rpx;
				height: 50rpx;
				margin-left: 8rpx;
				
				button {
					width: 134rpx;
					height: 50rpx;
					padding: 8rpx 16rpx;
					font-size: 12px;
					color: #fff;
					line-height: 34rpx;
					background-color: #FF3545FF;
					
					.disabled {
						background-color: #E5E5E5FF;
					}
				}
			}
		}
		
		// 激活的成员列表
		.activation {
			width: 690rpx;
			height: 412rpx;
			border-radius: 8rpx;
			padding: 30rpx 32rpx 0;
			margin-top: 20rpx;
			background-image: url('../../static/bg-activation.png');
			background-size: cover;
			
			&-header {
				width: 100%;
				height: 72rpx;
				line-height: 72rpx;
				font-size: 25px;
				
				.group {
					height: 40rpx;
					line-height: 40rpx;
					font-size: 16px;
					color: #855C41;
					
					.number {
						margin: 0 8rpx;
						font-size: 25px;
						font-weight: bold;
						color: #FF3545;
					}
				}
				
				.icon {
					width: 44rpx;
					height: 28rpx;
				}
			}
			&-content {
				height: 132rpx;
				width: 100%;
				padding: 0 4rpx;
				
				.avatar {
					width: 90rpx;
					height: 100%;
					
					.url {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
						margin-bottom: 8rpx;
						
						background-image: url('../../static/icon-null-avatar.png');
						background-size: cover;
					}
					
					.name {
						width: 100%;
						height: 34rpx;
						line-height: 34rpx;
						font-size: 12px;
						color: #5F636A;
						text-align: center;
					}
				}
			}
			&-footer {
				width: 100%;
				height: 100rpx;
				font-size: 14px;
				line-height: 100rpx;
				color: #5C626B;
				text-align: center;
			}
		}
		
		// 立即邀请
		.invite {
			width: 100%;
			height: 140rpx;
			margin-top: 20rpx;
			
			.icon {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	// 提示轮播动画
	@keyframes carousel {
	    0% {
			transform: translate3d(0, 0, 0);
	    }
	    100% {
	        transform: translate3d(-200%, 0, 0);
	    }
	}
</style>
<style lang="scss">
	// 领取奖励弹出层
	.popup-reward {
		width: 660rpx;
		height: 600rpx;
		padding: 52rpx;
		
		background-image: url("../../static/pup-reward.png");
		background-size: cover;
		
		.icon {
			width: 540rpx;
			height: 92rpx;
		}
	}
	
	// 邀请成员弹出层
	.popup-invite {
		width: 100%;
		padding: 20rpx 20rpx 0;
		background-color: #fff;
		
		&-header {
			.title {
				height: 50rpx;
				font-size: 14px;
				line-height: 50rpx;
				color: #252A30;
				text-align: center;
			}
		}
		
		&-content {
			margin-top: 30rpx;
			
			.channels {
				width: 600rpx;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 20rpx;
				
				.channel {
					.url {
						width: 66rpx;
						height: 68rpx;
					}
					
					.title {
						height: 40rpx;
						font-size: 14px;
						margin-top: 10rpx;
						line-height: 40rpx;
						color: #252A30;
					}
				}
			}
		}
		
		&-footer {
			width: 100%;
			height: 80rpx;
			
			.btn-cancel {
				font-size: 14px;
				color: gray;
				
				&.hover {
					opacity: .8;
				}
			}
		}
	}
	
	// 活动规则弹出层
	.popup-rules {
		width: 672rpx;
		border-radius: 8rpx;
		padding-bottom: 30rpx;
		background-color: #fff;
		
		&-header {
			width: 100%;
			height: 80rpx;
			border-radius: 8rpx 8rpx 0 0;
			font-size: 18px;
			color: #fff;
			line-height: 80rpx;
			background-color: #E25238FF;
		}
		
		&-content {
			padding: 20rpx;
			
			ul {
				padding: 0;
				margin: 0;
				list-style: none;
				
				li {
					padding-left: 1em;
					font-size: 14px;
					line-height: 40rpx;
					color: #333;
					text-indent: -.7em;
					
					& + li {
						margin-top: 20rpx;
					}
					
					&:before {
						margin-right: 10rpx;
						color: #E48B4B;
						content: '●';
					}
				}
			}
		}
		
		&-footer {
			.i-know {
				width: 300rpx;
				height: 72rpx;
				font-size: 14px;
				line-height: 72rpx;
				color: #fff;
				background-color: #E25238;
			}
		}
	}
</style>
