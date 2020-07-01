showProjects();

const elDarkModeToggler = document.querySelector('.light-toggler');

const root = document.documentElement;

elDarkModeToggler.addEventListener('click', function() {
	elDarkModeToggler.classList.toggle('light-toggler--dark');
	root.classList.toggle('dark-mode');
});














//SVG GENERATORS/////


function getTelegramSvg(start,stop) {
  return `
  <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
	<defs>
	<linearGradient spreadMethod="pad" id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
		<stop offset="0%" style="stop-color:${start};stop-opacity:1;" />
		<stop offset="100" style="stop-color:${stop};stop-opacity:1;" />
	</linearGradient>
</defs><circle cx="12" cy="12" fill="url(#gradient)" r="12"/><path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff" fill-opacity="1"/></svg>
  `
}
