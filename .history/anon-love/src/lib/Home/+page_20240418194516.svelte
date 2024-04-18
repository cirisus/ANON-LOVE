<script lang="js">
	import { blurSiblingsOfLoader } from "./scripts/common.js";
	import { onMount } from 'svelte';
	import { Router } from "svelte-spa-router";

	import Navigator from '../Components/Navigator/+page.svelte';
	import Loader from '../Components/Loader/+page.svelte';
	import Scroller from '../Components/dampScroller/+page.svelte';
	import Emerger from '../Components/Emerger/+page.svelte';
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
		<div slot="scrollbox-1" data-toggle="show">
			<Emerger className="about">
				<h1>Who Am I</h1>
				<p>
					Hello! I'm Cirisus, a web developer and a fan of Bang Dream! I'm currently working on this website to showcase my works and to share my love for Bang Dream! I hope you enjoy your stay here!
				</p>
			</Emerger>
			<Emerger className="about">
				<h1>INFO</h1>
				<ul>
					<li>Name: Cirisus</li>
					<li>Age: 18</li>
					<li>Locale: Singapore</li>
					<li>Occupation: Student</li>
				</ul>
			</Emerger>
		</div>
		<div slot="scrollbox-2" data-toggle="hide">
			<Emerger className="about">
				<h1>Favorite</h1>
				<p>
					- Bang Dream! <br>
					- Web Development <br>
					- Anime <br>
					- Music <br>
					- Games <br>
				</p>
			</Emerger>
		</div>
		<div slot="scrollbox-3" data-toggle="hide">
		</div>
		<div slot="scrollbox-4" data-toggle="hide">
		</div>
		<div slot="scrollbox-5" data-toggle="hide">
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
	h1{
		text-transform: uppercase;
	}
	.about {
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e8e8e878;
    color: #403333;
    border: 2px solid #583636;
    border-radius: 1rem;
    backdrop-filter: blur(1rem);
}
</style>