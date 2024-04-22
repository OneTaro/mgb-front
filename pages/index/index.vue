<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
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
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';

	// 信息提示框
	const popup = ref();
	const msgType = ref('');
	const messageText = ref('');

	onLoad(() => {
	});

	const title = ref('Hello uni-app');

</script>

<style>
	@import 'index.css';
</style>
