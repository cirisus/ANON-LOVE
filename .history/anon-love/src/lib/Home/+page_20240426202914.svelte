<script lang="js">
	import { blurSiblingsOfLoader } from "./scripts/common.js";
	import { setContext, onMount } from 'svelte';
	import { location, Router } from "svelte-spa-router";
    import SvelteMarkdown from 'svelte-markdown';


	import Navigator from '../Components/Navigator/+page.svelte';
	import Loader from '../Components/Loader/+page.svelte';
	import Scroller from '../Components/dampScroller/+page.svelte';
	import Emerger from '../Components/Emerger/+page.svelte';
	//Router listener
    let currentRoute = $location;
	setContext('route', currentRoute);

	$: {
		currentRoute = $location;
	}
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
	//page stuff
	let markdownFiles = {
        'about': './Markdown/about.md',
        'favor': './Markdown/favor.md',
    };
    let markdownContents = {};

    onMount(async () => {
        blurSiblingsOfLoader();

        for (let name in markdownFiles) {
            const response = await fetch(markdownFiles[name]);
            markdownContents[name] = await response.text();
        }
    });

    function handleClick(event) {
        const link = sideNavigator.find(item => item.text === event.detail.text);
        if (link && link.external) {
            event.preventDefault();
            window.open(link.href, '_blank');
        }
    }


</script>

<body>
	<Loader {currentRoute} />
	<Scroller slots=5>
		<div slot="scrollbox-1" data-toggle="show">
			<Emerger className="about">
				<SvelteMarkdown source={markdownContents['about']} />
			</Emerger>
			<Emerger className="techs">
				<h1>TECH STACK</h1>
				This page is built with Svelte and SvelteKit. The source code is available on my GitHub. Below are the technologies used in this project:
				<ul>
					<li><b>Damp Scroller:</b> I used a fixed layer as the overall container and thus banned the usage of defaualt scrolling. I process the scroll by <span style="font-family: monospace">damper.js</span>, which process the scroll event and thus simulate scrolling to achieve damping effect and smooth page transition.</li>
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
</style>