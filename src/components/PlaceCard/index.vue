<script setup>
import { RouterLink } from 'vue-router';
const { place } = defineProps(['place']);

</script>

<template>
	<RouterLink class="place-card" v-if="place?.photo" :to="`place/${place.id}`">
		<img :src="place?.photo" :alt="place.name">
		<div class="place-card__foot">
			<h4 class="place-card__name">{{ place.name }}</h4>
			<span class="place-card__price" v-if="place.price">{{ place.price }}₽</span>
		</div>
		<span class="place-card__lunch" v-show="place.business_lunch"><img src="@icons/lunch.svg"></span>
	</RouterLink>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
