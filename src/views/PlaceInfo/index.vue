<script setup>
import { computed, ref, onMounted, watch } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { useActions, useGetters, useState } from 'vuex-composition-helpers/dist';
import { ShareSocials } from '@/components';


const { params } = useRoute();
const { ALL_PLACES } = useGetters(['ALL_PLACES']);
const { API_PLACES } = useActions(['API_PLACES']);
const data = ref({});

const socials = [
	{ network: "Telegram", icon: "co-telegram-plane" },
	{ network: "Email", icon: "hi-solid-mail" },
	{ network: "VK", icon: "fa-vk" },
	{ network: "WhatsApp", icon: "bi-whatsapp" },
]

onMounted(async () => {
	API_PLACES();
});


watch(ALL_PLACES, (newVal, oldVal) => {
	data.value = [...newVal].find(el => String(el.id) === params.id);
});

</script>

<template>
	<div class="wrap">
		<div class="decor-1"></div>
		<div class="decor-2"></div>

		<div class="container">
			<div class="head">
				<h1 class="title">{{ data?.name }}</h1>
				<RouterLink to="/" class="link">На главную</RouterLink>
			</div>
			<div class="grid">
				<div class="preview">
					<div class="preview__socials">
						<ShareSocials v-for="(el, i) in socials" :key="i" :network="el.network" :title="data.name">
							<v-icon :name="el.icon" style="fill: white" />
						</ShareSocials>
					</div>
					<img class="preview__img" :src="data?.photo" :alt="data?.name">
				</div>
				<div class="info">
					<div class="info__item">
						<div class="info__key">Адрес: </div>
						<div class="info__value">{{ data?.address }}</div>
					</div>
					<div class="info__item">
						<div class="info__key">Кухня: </div>
						<div class="info__value">{{ data?.cuisine }}</div>
					</div>
					<div class="info__item">
						<div class="info__key">Расстояние: </div>
						<div class="info__value">{{ data?.distance }}м</div>
					</div>
					<div class="info__item">
						<div class="info__key">Цена: </div>
						<div class="info__value">{{ data?.price }}</div>
					</div>
					<div class="info__item">
						<div class="info__key">Время: </div>
						<div class="info__value">{{ String(data?.time).padStart(2, '0') }}:00</div>
					</div>
					<div class="info__item">
						<div class="info__key">Безнес-ланчи: </div>
						<div class="info__value">{{ data?.business_lunch ? 'Присутствуют' : 'Отсутствуют' }}</div>
					</div>
					<div class="info__item">
						<div class="info__key">Ориентир: </div>
						<div class="info__value">{{ data?.landmark || 'Отсутствует' }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>
