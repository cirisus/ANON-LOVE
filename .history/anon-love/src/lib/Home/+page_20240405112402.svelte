<script lang="js">
	import Behavior from "./scripts/common.js";
	import Navigator from '../Components/Navigator/+page.svelte';
	import Loader from '../Components/Loader/+page.svelte';

	let sideNavigator = [
		{
			navTitle: 'Internal',
			links: [
				{ href: '/home', text: 'Home' },
				{ href: '/about', text: 'About' },
				{ href: '/projects', text: 'Projects' },
				{ href: '/contact', text: 'Contact' }
			]
		},
		{
			navTitle: 'External',
			links: [
				{ href: 'https://bang-dream.bushimo.jp/mygo/', text: `𝗠𝘆𝗚𝗢!!!!! Official`, external: true }
			]
		},
		{
			navTitle: 'Sponsor',
			links: [
				{ href: 'https://cirisus.com', text: `Cirisus's blog`, external: true }
			]
		}
	];
	function handleClick(event) {
        const link = sideNavigator.find(item => item.text === event.detail.text);
        if (link && link.external) {
            event.preventDefault();
            window.open(link.href, '_blank');
        }
    }
</script>

<body>
	<Loader />
	<h1>Home page</h1>
	<Navigator {sideNavigator}>
		<div slot="extra-top">
			<div id="avatar">
				<img src="https://cdn.jsdelivr.net/gh/cirisus/ANON-LOVE/anon-love/public/asset/home-page.png" alt="avatar" />
			</div>
		</div>
		<hr>

		<div slot="extra-bottom">
			<hr>
			<p>Contact me through: <a href="mailto:cirisus@outlook.com">Cirisus@outlook.com</a></p>
		</div>
	</Navigator>
</body>

<style lang="scss">
	@import './style.scss';
</style>