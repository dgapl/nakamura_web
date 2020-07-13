window.onload = function(){

	const insertBtn = document.getElementById("insertBtn");
	insertBtn.addEventListener("click", app.insert.clickInsertBtn);

}

if (typeof app === "undefined") {
  app = {};
}

if (typeof app.insert === "undefined") {
  app.insert = {};
}

app.insert = {

	clickInsertBtn: () => {

		const url = 'http://localhost/api/insert/insert001/';
		const data = {userNm:document.fm.userNm.value, userId:document.fm.userId.value, password:document.fm.password.value};

		const msg = document.getElementById('msg');

		fetch(url, {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
		}).then(response => response.text())
		  .then(result => {

			console.log(result);
			const jsonData = JSON.parse(result);
			if(jsonData.resultMsg){
				msg.innerHTML = "登録に成功しました。";
			}else{
				msg.innerHTML = "登録に失敗しました。";
			}

		  });

	}

}