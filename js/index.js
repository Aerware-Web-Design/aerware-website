const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Toggle navbar visibility for mobile
const toggleNav = () => $('nav').classList.contains('expand')
		? $('nav').classList.remove('expand')
		: $('nav').classList.add('expand')

// Do things when the user scrolls
const handleScroll = () => {
	scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	
	// Make the navbar opaque after 100px
	scrollTop > 100
		? $('nav').classList.add('opaque')
		: $('nav').classList.remove('opaque')
}

// Toggle the team section height when the more button is pressed on mobile
const toggleTeam = () => {
	if ($('.team-pics').classList.contains('expand')) {
		$('.team-pics').classList.remove('expand')
		$('.more').src = 'img/angle-down-solid.svg'
	} else {
		$('.team-pics').classList.add('expand')
		$('.more').src = 'img/angle-up-solid.svg'
	}
}

// If dark mode is enabled, change the favicon
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	$("#light-icon").href = "/img/dark-logo.png";
}

// Attach event handlers
$('.menu-button').onclick = toggleNav 
$('.more').onclick = toggleTeam

// Poll the scroll position twice a second
setInterval(handleScroll, 500)
