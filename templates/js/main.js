var emailReg = new RegExp('^[0-9a-zA-Z_.\\-]+@[0-9a-z_\\-^.]+\\.[a-z]{2,4}$', 'i');
var loginReg = new RegExp('^[0-9a-zA-Z$#@._+-?!]+$', 'i');
var passReg = new RegExp('^[0-9a-zA-Z$#@._+-?!]+$', 'i');

$(document).ready(function(){
	$('#sitef').html('<a href="http://sitefiller.ru">sitefiller.ru</a>');
});

function checkRegForm() {
	var error = '';
	var login = $.trim($('#login').val());
	var email = $.trim($('#email').val());
	var password = $.trim($('#password').val());
	var password2 = $.trim($('#password2').val());
	var from_went = $.trim($('#from_went').val());
	var captcha_text = $.trim($('#captcha_text').val());
	
	// Чистим поля от класса ошибки
	$('#login').removeClass('invalid');
	$('#password').removeClass('invalid');
	$('#password2').removeClass('invalid');
	$('#email').removeClass('invalid');
	$('#from_went').removeClass('invalid');
	$('#captcha_text').removeClass('invalid');
	
	// Заполняем поля очищенными от пробелов данными
	$('#login').val(login);
	$('#password').val(password);
	$('#password2').val(password2);
	$('#email').val(email);
	$('#from_went').val(from_went);
	$('#captcha_text').val(captcha_text);
	
	// Проверяем на наличие ошибки
	if (login == '') {
		error = "\nЗаполните поле Логин!";
		$('#login').focus();
		$('#login').addClass('invalid');
	} else if (!loginReg.test(login)) {
		error = "\nЛогин может содержать только латинские буквы, числа и символы: $#@._+-?!";
		$('#login').focus();
		$('#login').addClass('invalid');
	} else if (login.length < 3) {
		error = "\nЛогин слишком короткий!";
		$('#login').focus();
		$('#login').addClass('invalid');
	} else if (login.length > 20) {
		error = "\nЛогин слишком длинный!";
		$('#login').focus();
		$('#login').addClass('invalid');
	} else if (password == '') {
		error = "\nЗаполните поле Пароль!";
		$('#password').focus();
		$('#password').addClass('invalid');
	} else if (password.length < 5) {
		error = "\nПароль слишком короткий!";
		$('#password').focus();
		$('#password').addClass('invalid');
	} else if (password.length > 25) {
		error = "\nПароль слишком длинный!";
		$('#password').focus();
		$('#password').addClass('invalid');
	} else if (!passReg.test(password)) {
		error = "\nПароль может содержать только латинские буквы, числа и символы: $#@._+-?!";
		$('#password').focus();
		$('#password').addClass('invalid');
	} else if (password2 == '') {
		error = "\nПовторите Пароль!";
		$('#password2').focus();
		$('#password2').addClass('invalid');
	} else if (password != password2) {
		error = "\nПовторите правильно Пароль!";
		$('#password2').focus();
		$('#password2').addClass('invalid');
	} else if (email == '') {
		error = "\nЗаполните поле E-mail!";
		$('#email').focus();
		$('#email').addClass('invalid');
	} else if (!emailReg.test(email)) {
		error = "\nВведите корректный E-mail!";
		$('#email').focus();
		$('#email').addClass('invalid');
	} else if (from_went == '') {
		error = "\nНапишите, откуда Вы пришли к нам!";
		$('#from_went').focus();
		$('#from_went').addClass('invalid');
	} else if (captcha_text == '') {
		error = "\nВведите число с картинки!";
		$('#captcha_text').focus();
		$('#captcha_text').addClass('invalid');
	}
	
	if (error == '') {
		return true;
	} else {
		alert(error);
		return false;
	}
	
}

function reloadCaptcha() {
	$('#captcha_img').attr('src','');
	$('#captcha_img').attr('src','/ajax/captcha.php');
}

function checkRemind() {
	var error = '';
	var email = $.trim($('#email').val());
	var captcha_text = $.trim($('#captcha_text').val());
	
	// Чистим поле от класса ошибки
	$('#email').removeClass('invalid');
	$('#captcha_text').removeClass('invalid');
	
	// Заполняем поля очищенными от пробелов данными
	$('#email').val(email);
	$('#captcha_text').val(captcha_text);
	
	// Проверяем на наличие ошибки
	if (email == '') {
		error = "\nЗаполните поле E-mail!";
		$('#email').focus();
		$('#email').addClass('invalid');
	} else if (!emailReg.test(email)) {
		error = "\nВведите корректный E-mail!";
		$('#email').focus();
		$('#email').addClass('invalid');
	} else if (captcha_text == '') {
		error = "\nВведите число с картинки!";
		$('#captcha_text').focus();
		$('#captcha_text').addClass('invalid');
	}
	
	if (error == '') {
		return true;
	} else {
		alert(error);
		return false;
	}
}

function checkAuthForm() {
	var error = '';
	var login = $.trim($('#auth_login').val());
	var password = $.trim($('#auth_password').val());
	
	// Чистим поле от класса ошибки
	$('#auth_login').removeClass('invalid');
	$('#auth_password').removeClass('invalid');
	
	// Заполняем поля очищенными от пробелов данными
	$('#auth_login').val(login);
	$('#auth_password').val(password);
	
	// Проверяем на наличие ошибки
	if (login == '') {
		error = "\nЗаполните поле Логин!";
		$('#auth_login').focus();
		$('#auth_login').addClass('invalid');
	} else if (!loginReg.test(login)) {
		error = "\nЛогин может содержать только латинские буквы, числа и символы: $#@._+-?!";
		$('#auth_login').focus();
		$('#auth_login').addClass('invalid');
	} else if (login.length < 3) {
		error = "\nЛогин слишком короткий!";
		$('#auth_login').focus();
		$('#auth_login').addClass('invalid');
	} else if (login.length > 20) {
		error = "\nЛогин слишком длинный!";
		$('#auth_login').focus();
		$('#auth_login').addClass('invalid');
	} else if (password == '') {
		error = "\nЗаполните поле Пароль!";
		$('#auth_password').focus();
		$('#auth_password').addClass('invalid');
	} else if (password.length < 5) {
		error = "\nПароль слишком короткий!";
		$('#auth_password').focus();
		$('#auth_password').addClass('invalid');
	} else if (password.length > 25) {
		error = "\nПароль слишком длинный!";
		$('#auth_password').focus();
		$('#auth_password').addClass('invalid');
	} else if (!passReg.test(password)) {
		error = "\nПароль может содержать только латинские буквы, числа и символы: $#@._+-?!";
		$('#auth_password').focus();
		$('#auth_password').addClass('invalid');
	}
	
	if (error == '') {
		return true;
	} else {
		alert(error);
		return false;
	}
}

function checkContactsForm() {
	var error = '';
	var theme = $.trim($('#theme').val());
	var message = $.trim($('#message').val());
	var captcha_text = $.trim($('#captcha_text').val());
	
	// Чистим поле от класса ошибки
	$('#theme').removeClass('invalid');
	$('#message').removeClass('invalid');
	$('#captcha_text').removeClass('invalid');
	
	// Заполняем поля очищенными от пробелов данными
	$('#theme').val(theme);
	$('#message').val(message);
	$('#captcha_text').val(captcha_text);
	
	// Проверяем на наличие ошибки
	if ($('#name').length > 0) {
		var name = $.trim($('#name').val());
		var email = $.trim($('#email').val());
		$('#name').val(name);
		$('#email').val(email);
		$('#name').removeClass('invalid');
		$('#email').removeClass('invalid');
		if (name == '') {
			error = "\nЗаполните поле Имя!";
			$('#name').focus();
			$('#name').addClass('invalid');
		} else if (email == '') {
			error = "\nЗаполните поле E-mail!";
			$('#email').focus();
			$('#email').addClass('invalid');
		} else if (!emailReg.test(email)) {
			error = "\nВведите корректный E-mail!";
			$('#email').focus();
			$('#email').addClass('invalid');
		}
	}
	if (error == '') {
		if (theme == '') {
			error = "\nЗаполните поле Тема сообщения!";
			$('#theme').focus();
			$('#theme').addClass('invalid');
		} else if (message == '') {
			error = "\nЗаполните поле Сообщение!";
			$('#message').focus();
			$('#message').addClass('invalid');
		} else if (captcha_text == '') {
			error = "\nВведите число с картинки!";
			$('#captcha_text').focus();
			$('#captcha_text').addClass('invalid');
		}
	}
	
	if (error == '') {
		return true;
	} else {
		alert(error);
		return false;
	}
	
}

function checkReportForm() {
	var error = '';
	var errorMessage = $.trim($('#errorMessage').val());
	
	// Чистим поле от класса ошибки
	$('#errorMessage').removeClass('invalid');
	
	// Заполняем поля очищенными от пробелов данными
	$('#errorMessage').val(errorMessage);
	
	if (errorMessage == '') {
		error = "\nВведите сообщение!";
		$('#errorMessage').focus();
		$('#errorMessage').addClass('invalid');
	}
	
	if (error == '') {
		return true;
	} else {
		alert(error);
		return false;
	}
}