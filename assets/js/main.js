const inputs = document.querySelectorAll(".input");

function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// Validasi akun
function validasi() {
	const user = document.getElementById('user').value;
	const pwd = document.getElementById('pwd').value;
	if (user == "hanif" && pwd == "123") {
		// alert('Login Berhasil');
		swal.fire({
			icon: 'success',
			title: 'Login Berhasil',
			showConfirmButton: false,
		});
		document.getElementById('form').reset();
		setTimeout(function () {
			window.location = "assets/html/text.html";
			return false;
		}, 1000);
	}
	else {
		// alert('Login Gagal');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal'
		});
		document.getElementById('form').reset();
	}
}

// Hide Password

const pass = document.getElementById('pwd');
const showPass = document.getElementById('show');
const hidePass = document.getElementById('hide');

function showHide() {
	if (pass.type === 'password') {
		pass.setAttribute('type', 'text');
		showPass.classList.add('hide');
		showPass.style.display = "block";
		hidePass.style.display = "none";
	}
	else {
		pass.setAttribute('type', 'password');
		showPass.classList.remove('hide');
		showPass.style.display = "none";
		hidePass.style.display = "block";
	}
}
















// function validasi(){
// 	var inputUser = document.getElementById('user');
// 	var inputPwd = document.getElementById('pwd');

// 	var user = "hanif";
// 	var pwd = "jago";

// 	if (inputUser.value.match(user) && inputPwd.value.match(pwd)) {
// 		alert('Login Berhasil');
// 	}
// 	else {
// 		alert('Login Gagal');
// 	}
// }
