<script>
	import Fa from 'svelte-fa';
	import {
		faGithub,
		faTwitter,
		faLinkedin,
		faStackOverflow
	} from '@fortawesome/free-brands-svg-icons';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';

	export const links = [
		{
			link: 'https://www.nilambar.net',
			icon: faGlobe
		},
		{
			link: 'https://twitter.com/nilambar',
			icon: faTwitter
		},
		{
			link: 'https://github.com/ernilambar',
			icon: faGithub
		},
		{
			link: 'https://www.linkedin.com/in/nilambar/',
			icon: faLinkedin
		},
		{
			link: 'https://stackoverflow.com/users/554694/nilambar-sharma',
			icon: faStackOverflow
		}
	];
</script>

<div class="social">
	<ul>
		{#each links as item}
			<li><a target="_blank" href={item.link} rel="noreferrer"> <Fa icon={item.icon} /> </a></li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.social {
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
			list-style-type: none;
			margin-top: 30px;
		}
	}
</style>
