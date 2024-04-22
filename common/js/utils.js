// 工具类
class Utils {

	// 构造函数，定义常量
	constructor() {
		this.baseUrl = 'http://159.75.169.224:7300/pz'
	}

	// 获取用户信息的工具
	getUserInfo() {
		// 调用登录的api
		uni.login({
			// 获取登录信息，信息获取成功调用api
			success: (res) => {
				this.request({
					showLoading: true,
					url: '/auth/wxLogin',
					data: {
						code: res.code
					},
					success: (res) => {
						console.log(res)
					}
				})
			}
		})
	}

	request(option = {
		showLoading: false
	}) {
		// 判断url是否存在，不存在直接结束
		if (!option.url) {
			return false;
		}
		if (option.showLoading) {
			this.showLoading()
		}
		// 发送请求
		uni.request({
			url: this.baseUrl + option.url,
			data: option.data ? option.data : {},
			header: option.header ? option.header : {},
			method: option.method ? option.method : 'GET',
			success: (response) => {
				this.closeLoading()
				// 返回失败数据
				if (response.data.code != 10000) {
					// 将失败的数据返回出去
					if (option.fail && typeof option.fail == 'function') {
						option.fail(response)
					}
				} else {
					// 将成功的数据返回出去
					if (option.success && typeof option.success == 'function') {
						option.success(response.data)
					}
				}
			},
			fail: (response) => {
				this.closeLoading()
				// console.log(response)
			}

		})
	}

	// 创建加载的loading效果
	showLoading() {
		const isShowLoading = uni.getStorageSync('isShowLoading')
		if (isShowLoading) {
			uni.hideLoading()
			uni.setStorageSync('isShowLoading', false)
		}
		uni.showLoading({
			title: '加载中。。。',
			complete: () => {
				uni.setStorageSync('isShowLoading', true)
			},
			fail: () => {
				uni.setStorageSync('isShowLoading', false)
			}
		})
	}

	// 关闭加载动画
	closeLoading() {
		const isShowLoading = uni.getStorageSync('isShowLoading')
		if (isShowLoading) {
			uni.hideLoading()
			uni.setStorageSync('isShowLoading', false)
		}
	}
}

export default new Utils()