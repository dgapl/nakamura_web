window.onload = function(){

	const deleteBtn = document.getElementById("deleteBtn");
	deleteBtn.addEventListener("click", app.insert.clickDeleteBtn);

}

if (typeof app === "undefined") {
  app = {};
}

if (typeof app.insert === "undefined") {
  app.insert = {};
}

app.insert = {

	clickDeleteBtn: () => {

		const url = 'http://localhost/api/delete/delete001/';
		const data = {userId:document.fm.userId.value, password:document.fm.password.value};

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
				msg.innerHTML = "削除に成功しました。";
			}else{
				msg.innerHTML = "削除に失敗しました。";
			}

		  });

	}

}