<script lang="js">
	import Loading from "./scripts/loading.js";
	import Behavior from "./scripts/common.js";
	import Navigator from '../Navigator/+page.svelte';

	let sideNavigator = [//navigator stack
		{ href: '/home', text: 'Home' },
		{ href: '/about', text: 'About' },
	];
</script>

<body>
	<h1>Home page</h1>
	<Navigator {sideNavigator}>
		<div slot="extra-top">
			<div id="avatar">
				<img src="https://cdn.jsdelivr.net/gh/cirisus/ANON-LOVE/anon-love/public/asset/home-page.png" alt="avatar" />
			</div>
		</div>
		<hr>
		<div slot="extra-bottom">
			<p>Contact me through: <a href="mailto:cirisus@outlook.com">Cirisus@outlook.com</a></p>
		</div>
	</Navigator>
</body>

<style lang="scss">
	@import './style.scss';
	#avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		> img {
			max-width: 100px;
		}
	}
</style>