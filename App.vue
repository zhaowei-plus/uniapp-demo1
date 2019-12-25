<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef APP-NVUE
			// 设置竖屏显示：portrait-primary （横屏：landscape-primary）
			plus.screen.lockOrientation('portrait-primary');

			// 客户端资源升级
			let appid = plus.runtime.appid;
			if (appid && appid.toLocaleLowerCase() != "hbuilder") {
				uni.request({
					url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
					data: {
						appid: plus.runtime.appid,
						version: plus.runtime.version
					},
					success: (res) => {
						console.log('success', res);
						if (res.statusCode == 200 && res.data.isUpdate) {
							let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
							// 提醒用户更新
							uni.showModal({
								title: '更新提示',
								content: res.data.note ? res.data.note : '是否选择更新',
								success: (showResult) => {
									if (showResult.confirm) {
										plus.runtime.openURL(openUrl);
									}
								}
							})
						}
					}
				})
			}

			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "texticons",
				'src': "url('./static/text-icon.ttf')"
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	view {
		box-sizing: border-box;
	}
	.ascreen {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	
	.hide {
		display: none !important;
	}
	
	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
		
		&.fc {
			flex-direction: column;
		}
		&.fr {
			flex-direction: row;
		}
		&.as {
			align-items: flex-start;
		}
		&.ac {
			align-items: center;
		}
		&.ae {
			align-items: flex-end;
		}
		&.js {
			justify-content: flex-start;
		}
		&.jc {
			justify-content: center;
		}
		&.je {
			justify-content: flex-end;
		}
		&.jsb {
			justify-content: space-between;
		}
	}
	
	.icon {
		background-size: cover;
		
		&-notify {
			background-image: url('./static/icon-notify.png');
		}
		&-gift {
			background-image: url('./static/icon-gift.png');
		}
		&-semi {
			background-image: url('./static/icon-semi.png');
		}
		&-invite {
			background-image: url('./static/icon-invite.png');
		}
		&-i-know {
			background-image: url('./static/icon-i-know.png');
		}
		&-wx {
			background-image: url('./static/icon-wx.png');
		}
		&-friends {
			background-image: url('./static/icon-friends.png');
		}
		&-singed {
			background-image: url('./static/icon-singed.png');
		}
		&-call-charge {
			background-image: url('./static/icon-call-charge.png');
		}
		&-flow {
			background-image: url('./static/icon-flow.png');
		}
	}
</style>
