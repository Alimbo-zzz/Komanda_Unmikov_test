<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
	<nav class="nav">
		<router-link class="link" to="/">Главная</router-link>
		<router-link class="link" to="/favorites">Любимые места</router-link>
	</nav>
</template>

<style scoped>
@import './styles.scss';
</style>
