<script setup>
import { useActions, useGetters, useState } from 'vuex-composition-helpers/dist';
import { computed, ref, onMounted } from 'vue';
const { ALL_PLACES } = useGetters(['ALL_PLACES']);
const { API_PLACES } = useActions(['API_PLACES']);
const { placesLoad, placesError } = useState(['placesLoad', 'placesError']);
import { PlaceCard } from '@/components';

const randomPlace = ref(null);

onMounted(async () => {
	API_PLACES();
});

function setRandom(params) {
	const newArr = [...ALL_PLACES.value].filter(el => el?.photo);
	const index = Math.floor(Math.random() * newArr.length);
	randomPlace.value = newArr[index];
}

</script>

<template>
	<main class="wrap">
		<div class="decor-1"></div>
		<div class="decor-2"></div>
		<div class="container grid">
			<h1 class="title">Банда Умников</h1>

			<div class="random-box">
				<button @click="setRandom" class="random-box__btn">Выбрать случайное заведение!</button>
				<div class="random-box__card">
					<PlaceCard v-if="randomPlace" :place="randomPlace" />
					<div v-else class="random-box__empty">?</div>
				</div>
			</div>

			<div class="all-places">
				<ul class="all-places__list" v-if="ALL_PLACES.length > 0">
					<PlaceCard v-for="(place, i) in ALL_PLACES" :key="place.id" :place="place" />
				</ul>
			</div>

		</div>
	</main>
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>
