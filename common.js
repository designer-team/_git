//購入機能
document.querySelector('[href="#"]').onclick = function (e) {
  e.preventDefault();
  alert("カート画面に進みます");
  location.href = 'https://www.google.com/search?q=shopping';
};

//問い合わせフォーム機能
document.querySelector("form button").onclick = function (e) {
  e.preventDefault();
  alert(document.querySelector("form textarea").value + "と送信しました");
};