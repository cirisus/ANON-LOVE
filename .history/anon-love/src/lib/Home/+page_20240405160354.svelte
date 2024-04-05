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
				{ href: 'https://cirisus.com', text: `Cirisus' blog`, external: true }
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
	<div id="carousel">
	</div>
	<Loader />
	<h1>Home page</h1>
	<Navigator {sideNavigator}>
		<div slot="extra-top">
			<div id="avatar">
				<img src="https://cdn.jsdelivr.net/gh/cirisus/ANON-LOVE/anon-love/public/asset/home-page.png" alt="avatar" />
			</div>
		</div>

		<div slot="extra-bottom">
			<span class="contactInfo">Contact me|<a href="mailto:cirisus@outlook.com">Cirisus@outlook.com</a></span>
		</div>
	</Navigator>
</body>

<style lang="scss">
	@import './style.scss';
	#carousel {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		pointer-events: none;
		background-image: url(/anon-love/public/asset/anon-1.png);
	}
	div[slot="extra-bottom"] {
		min-height: 5rem;
		max-height: 7rem;
		width: 100%;
		position: absolute;
		bottom: 0;
		font-size: .75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		> span {
			white-space: nowrap;
			> a {
				color: var(--anon-base);
				text-decoration: none;
				position: relative;
				font-weight: 600;
				transition: all .3s;
				&:hover {
					color: #333;
					font-weight: 300;
				}
				&::before {
					position: absolute;
					content:"";
					width: 0;
					height: 90%;
					z-index: -1;
					background-color: var(--anon-light);
					box-shadow: 0 0 0 0 transparent;
					transition: all .3s;
				}
				&:hover::before {
					width: 103%;
					box-shadow: 0 0 1px 1px var(--anon-light);
					transition: all .3s;
				}
		}
	}
}
</style>