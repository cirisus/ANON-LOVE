<script lang="js">
	import { blurSiblingsOfLoader } from "./scripts/common.js";
	import { onMount } from 'svelte';
	import { Router } from "svelte-spa-router";

	import Navigator from '../Components/Navigator/+page.svelte';
	import Loader from '../Components/Loader/+page.svelte';
	import Scroller from '../Components/dampScroller/+page.svelte';
    //Scrollbox slots
	const slotNum = 5;
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
	<Loader />
	<Scroller slots=5>
		<div slot="scrollbox-1">
			<div>
				Text 1
				</div>
		</div>
		<div slot="scrollbox-2">
			<div>
				Text 2
				</div>
		</div>
		<div slot="scrollbox-3">
		</div>
		<div slot="scrollbox-4">
		</div>
		<div slot="scrollbox-5">
		</div>
	</Scroller>
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
	div[data-toggle="hide"]>div[slot]>div {
		user-select: none;
		opacity: 0;
	}
	div[data-toggle="show"]>div[slot]>div {
		animation: downIn 1s ease-out;
		opacity: 1;
	}
	div[slot^="scrollbox"] {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-items: center;
		 > div {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-items: center;
		width: 300px;
		height: 300px;
		backdrop-filter: blur(1rem);
		background-color: #fff5;
		box-shadow: 0 0 3px 3px #fff9;
		margin: auto;
		padding: 0;
	}
}
@keyframes downIn {
from {transform: translateY(-10%); opacity: 0; filter: blur(1rem);}
to {transform: translateY(0); opacity: 1; filter: blur(0);}
}
</style>