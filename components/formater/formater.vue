<template>
	{{ formater }}
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue';
	const props = defineProps({
		timestamp: {
			type: Number,
			default: 0
		},
		format: {
			type: String,
			default: 'MM-dd hh:mm:ss'
		}
	});
	// 日期显示
	const formater = ref('');

	onMounted(() => {
		formater.value = TIME_FORMAT(props.timestamp, props.format);
	});

	const TIME_FORMAT = (t, fmt) => {
		const newDate = new Date();
		newDate.setTime(t);
		return newDate.VP_FORMAT(fmt);
	};
</script>

<style></style>
