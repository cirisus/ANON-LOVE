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
        'about': '/anon-love/src/lib/home/Markdowns/about.md',
        'favor': '/anon-love/src/lib/home/Markdowns/favor.md',
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
	import mapboxgl from "mapbox-gl";
	import chihaya from "./chihaya.geojson";

	mapboxgl.accessToken = "pk.eyJ1IjoiY2lyaXN1cyIsImEiOiJjbHZrcXdlaXQwcWwzMmxta3g5ZG9zdmxiIn0._vIXngdZDz5RmgkBZc4mIQ";

	const map = new mapboxgl.Map({
		container: "map",
		style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json",
		center: [139.69926444254838, 35.73110714350051],
		zoom: 13.44686212128901,
	});

	map.on("load", () => {
		map.addSource("chihaya", {
			type: "geojson",
			data: chihaya,
		});

		map.addLayer({
			id: "chihaya",
			source: "chihaya",
			type: "fill",
			paint: { "fill-color": "#ffb8c6", "fill-opacity": 0.75 },
		});

		map.addLayer({
			id: "chihaya-stroke",
			source: "chihaya",
			type: "line",
			paint: { "line-color": "#cc8a9e" },
		});
	});

</script>

<body>
	<Loader {currentRoute} />
	<Scroller slots=5>
		<div slot="scrollbox-1" data-toggle="show">
			<Emerger className="about">
				<SvelteMarkdown source={markdownContents['about']} />
			</Emerger>
			<Emerger className="techs">
				<div id="map"></div>
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