<script setup>
import { ref } from 'vue';
const { network, title } = defineProps(
	{
		network: { type: String, default: "telegram" },
		title: { type: String, default: "" }
	}
);
const url = ref(window.location.href);

</script>

<template>
	<ShareNetwork :network="network" :url="url" :title="title"
		description='Поделиться страниецей с тестового задания "Команда Умников"' hashtags="vuejs,vite">
		<slot></slot>
	</ShareNetwork>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
