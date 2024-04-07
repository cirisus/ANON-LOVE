# USAGE
- Import the modal and the content your need to display. The content should be a ```.md``` file.
``` svelte
import Modal from './Components/Popup/+page.svelte';
import markdown from '../../../**/*.md';
```
- Specify the following parameters in your parent application's ```<script>``` tag
``` svelte
	let title = ' CONTENT USAGE SPECIFICATIONS'; //The modal title
	let buttonText = `I'VE READ IT`; // Close button text
	let showModal = false;
	let content = markdown;

	const handleToggleModal = () => {
		showModal = !showModal;
	};
```
- Insert the alias in your place
```
    <Modal {title} {buttonText} {showModal} {content} on:toggleModal={handleToggleModal} />
```