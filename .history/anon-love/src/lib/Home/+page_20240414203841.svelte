<script lang="js">
	import { blurSiblingsOfLoader } from "./scripts/common.js";
	import { onMount } from 'svelte';
	import Navigator from '../Components/Navigator/+page.svelte';
	import Loader from '../Components/Loader/+page.svelte';
	import Scroller from '../Components/dampScroller/+page.svelte';
    //Navigaition links
	let sideNavigator = [
		{
			navTitle: 'Internal',
			links: [
				{ href: '#/home', text: 'Home', altTxt: 'Welcome!'},
				{ href: '#/about', text: 'About', altTxt: 'More if you want.'},
				{ href: '#/projects', text: 'Projects', altTxt: 'My works.'},
				{ href: '#/contact', text: 'Contact', altTxt: 'Reach me out.'}
			]
		},
		{
			navTitle: 'External',
			links: [
				{ href: 'https://bang-dream.bushimo.jp/mygo/', text: `𝗠𝘆𝗚𝗢!!!!! Official`, external: true, altTxt:'Official page.'}
			]
		},
		{
			navTitle: 'Sponsor',
			links: [
				{ href: 'https://cirisus.com', text: `Cirisus' blog`, external: true, altTxt:'Another me.'},
			]
		}
	];
	onMount(blurSiblingsOfLoader);
	function handleClick(event) {
        const link = sideNavigator.find(item => item.text === event.detail.text);
        if (link && link.external) {
            event.preventDefault();
            window.open(link.href, '_blank');
        }
    }
</script>

<body>
	<Scroller slots={$slots}>
		<div id="scrollbox-1">
			<p>1</p>
		</div>
		<div id="scrollbox-2">
			<p>2</p>
		</div>
		<div id="scrollbox-3">
			<p>3</p>
		</div>
	</Scroller>
	<Loader />
	<Navigator {sideNavigator}>
		<div slot="extra-top">
			<div id="avatar">
				<img src="/anon-love/public/asset/avatar.png" alt="avatar" />
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
		background-size: contain;
		background-position: center center;
		background-repeat: no-repeat;
		background-clip: border-box;
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