define( function () {
	if(!sessionStorage.user) {
		window.location.href="login.html";
	}
	return JSON.parse(sessionStorage.user);
});