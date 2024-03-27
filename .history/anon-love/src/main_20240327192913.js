import { Router, Route, Link } from "svelte-routing";
import About from "./About.svelte";
import Showcase from "./Showcase.svelte";
import Articles from "./Articles.svelte";

const app = new App({
	target: document.body,
	props: {
		name: 'あのちゃん'
	}
});

export default app;

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="showcase">Showcase</Link>
		<Link to="articles">Articles</Link>
	</nav>

	<Route path="/" component={App} />
	<Route path="about" component={About} />
	<Route path="showcase" component={Showcase} />
	<Route path="articles" component={Articles} />
</Router>