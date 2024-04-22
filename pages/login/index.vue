<template>
	<view>
		<view class="pub-box">
			<image src="../../static/resource/logo/logo.png" mode="widthFix"></image>
		</view>
		<view class="pub-box">
			<view class="pub-box-bd">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">手机号</view>
					<view class="weui-cell__bd">
						<input
							class="weui-input"
							type="number"
							name="tel"
							style="text-align: right"
							placeholder-class="vp-placeholder"
							placeholder="请填写您的手机号"
							v-model="login.phone"
						/>
					</view>
				</view>
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">密码</view>
					<view class="weui-cell__bd">
						<input
							class="weui-input"
							type="password"
							name="password"
							style="text-align: right"
							placeholder-class="vp-placeholder"
							placeholder="请填写您的登录密码"
							v-model="login.password"
						/>
					</view>
				</view>
			</view>
			<button type="primary" @click="goto">登录</button>
			<button type="default" @click="goto">注册</button>
		</view>

		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="popup" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

	</view>
</template>

<script setup>
	import { reactive, ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';

	const app = getApp();

	onLoad(() => {
		// 获取微信信息
		// app.globalData.utils.getUserInfo();
	});

	// 登录数据
	const login = reactive({
		phone: '',
		password: '',
	});

	// 信息提示框
	const popup = ref();
	const msgType = ref('');
	const messageText = ref('');

	const goto = () => {
		// 登录接口
		app.globalData.utils.request({
			showLoading: true,
			url: '/login/auth',
			method: 'POST',
			header: {
				'content-Type': 'application/x-www-form-urlencoded',
			},
			data: {
				phone: login.phone,
				password: login.password,
			},
			success: (res) => {
				msgType.value = 'success';
				messageText.value = '登录成功';
				popup.value.open('top');

				// 跳转页面
				uni.switchTab({
					url: '/pages/index/index',
				});
			},
			fail: (res) => {
				msgType.value = 'error';
				messageText.value = res.msg;
				popup.value.open('top');
			},
		});
	};
</script>

<style>
	@import 'index.css';
</style>
