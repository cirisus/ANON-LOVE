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
			<Emerger className="info">
				<h1>INFO</h1>
				<table>
					<tr>
						<td>Name</td>
						<td>Cirisus</td>
					</tr>
					<tr>
						<td>Age</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Locale</td>
						<td>Singapore</td>
					</tr>
					<tr>
						<td>Occupation</td>
						<td>Student</td>
					</tr>
				</table>
			</Emerger>
			<Emerger className="techs">
				<h1>TECH STACK</h1>
				This page is built with Svelte and SvelteKit. The source code is available on my GitHub. Below are the technologies used in this project:
				<ul>
					<li><b>Damp Scroller</b> I used a fixed layer as the overall container and thus banned the usage of defaualt scrolling. I process the scroll by <span style="font-family: monospace">damper.js</span>, which process the scroll event and thus simulate scrolling to achieve damping effect and smooth page transition.</li>
					<li><b>Loading Animation:</b> I used <span style="font-family: monospace">lottie.js</span> to demostrate a signature animation and onMount hook to destroy the loader, which prevents memory leaks while enhancing the scalability of animations.</li>
					<li><b>Mouse Sensing:</b> It's used quite lot at this blog - I created a hover-sensing sidebar on the right end of the page, which saves page layout space while enhancing the experience.</li>
					<li><b>Embedded Markdown components:</b> Popup components can directly parse external markdown files and use them in the content usage regulations of individual pages, with a high degree of freedom and easy content management.</li>
				</ul>
			</Emerger>
		</div>
		<div slot="scrollbox-2" data-toggle="hide">
			<Emerger className="about">
				<h1>Favorite</h1>
				<ul>
					<li>Bang Dream!</li>
					<li>Web Development</li>
					<li>Music</li>
					<li>Games</li>
				</ul>
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
		display: flex;
        justify-content: center;
        width: -webkit-fill-available;
	}
	ul {
		list-style-type: square;
		margin-left: 2rem;
	}
	table {
		margin: 0 auto;
		border-spacing: 0;
	}
	tr, td {
		border: 1px solid #583636;
		padding: 3px 6px;
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
    backdrop-filter: blur(1rem) brightness(1.1);
}
</style>