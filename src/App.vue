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
@import "./main.scss";
</style>
