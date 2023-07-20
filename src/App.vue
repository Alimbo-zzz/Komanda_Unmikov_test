<script setup>
import { RouterView } from 'vue-router';
import { Navigation } from '@/components';
import './main.scss';

</script>

<template>
	<div class="wrapper">
		<!-- <Navigation /> -->
		<router-view />
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	padding-top: 4em;
	padding-bottom: 6em;
	min-height: 100vh;
	overflow-x: hidden;
	min-width: $min_w;
}
</style>
