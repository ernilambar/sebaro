<script>
	import Fa from 'svelte-fa';
	import { faWordpress } from '@fortawesome/free-brands-svg-icons';
	import {
		faCode,
		faDesktop,
		faMagnifyingGlass,
		faRocket,
		faScrewdriverWrench
	} from '@fortawesome/free-solid-svg-icons';

	const serviceList = [
		{
			title: 'Website Development',
			icon: faCode
		},
		{
			title: 'WordPress Themes & Plugins',
			icon: faWordpress
		},
		{
			title: 'UX / UI Design',
			icon: faDesktop
		},
		{
			title: 'Search Engine Optimization',
			icon: faMagnifyingGlass
		},
		{
			title: 'Page Speed Optimization',
			icon: faRocket
		},
		{
			title: 'Website Maintenance',
			icon: faScrewdriverWrench
		}
	];
</script>

<div class="services">
	{#each serviceList as service}
		<div class="service">
			<div class="service-icon">
				<Fa icon={service.icon} style="color:#2a65e6;" />
			</div>
			<h4 class="service-title">{service.title}</h4>
		</div>
	{/each}
</div>

<style lang="scss">
	.services {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;

		@media (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		.service {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.service-title {
				font-weight: 600;
			}

			.service-icon {
				background-color: #eeeeee;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
