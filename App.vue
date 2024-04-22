<script>
	import Utils from './common/js/utils.js';

	export default {
		onLaunch: function() {
			console.log('App Launch');
			// 缓存数据
			Utils.request({
				url: '/app/init',
				success: (res) => {
					console.log(res);
					// uni.setStorageSync('cfg', res.data.cfg);
				},
			});
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		globalData: {
			utils: Utils,
		},
	};
</script>

<style>
	/*每个页面公共css */
	@import url('app.css');
</style>
