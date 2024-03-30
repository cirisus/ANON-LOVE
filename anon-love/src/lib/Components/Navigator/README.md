# USAGE
- **Display the navigator links by adding ```siteNavigator``` array in your application.**
```
let sideNavigator = [//navigator stack
		{ href: '/home', text: 'Home' },
		{ href: '/about', text: 'About' },
	];
```
- **Show additional slot**
You can make up to 2 slots, each above and below the links area, by inserting them in your ```<Navigator>``` tag:
```
<div slot="extra-top/bottom">
Any stuff
</div>
```