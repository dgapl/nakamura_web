window.onload = function(){

	const helloBtn = document.getElementById("helloBtn");
	helloBtn.addEventListener("click", app.login.clickHelloBtn);

	const nameBtn = document.getElementById("nameBtn");
	nameBtn.addEventListener("click", app.login.clickNameBtn);

	const listBtn = document.getElementById("listBtn");
	listBtn.addEventListener("click", app.login.clickListBtn);

}

if (typeof app === "undefined") {
  app = {};
}

if (typeof app.login === "undefined") {
  app.login = {};
}

app.login = {

	clickHelloBtn: () => {

		const url = 'http://localhost/api/login/login001/';

		const helloMsg = document.getElementById('helloMsg');

		fetch(url, {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			},
		}).then(response => response.text())
		  .then(result => {
			helloMsg.innerHTML = result;

		  });

	},

	clickNameBtn: () => {

		const url = 'http://localhost/api/login/login002/';
		const data = {userId:document.fm.userId.value, password:document.fm.password.value};

		const nameMsg = document.getElementById('nameMsg');

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

			nameMsg.innerHTML = jsonData.userNm + "さん！";

		  });

	},

	clickListBtn: () => {

		const url = 'http://localhost/api/login/login003/';

		const listMsg = document.getElementById('listMsg');
		const table = "table";

		fetch(url, {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			},
		}).then(response => response.json())
		  .then(result => {

			console.log(result);

			app.login.createTable(result, table);

			listMsg.innerHTML = "★ユーザ数は" + result.length + "人です。";

		  });

	},

	createTable: function(data, tableId) {
	    const rows=[];
	    const table = document.createElement("table");

		// 表にヘッダを格納
    	rows.push(table.insertRow(-1));
        cell=rows[0].insertCell(-1);
        cell.appendChild(document.createTextNode("ID"));
        cell=rows[0].insertCell(-1);
        cell.appendChild(document.createTextNode("名前"));

	    // 表にデータを格納
	    for(i = 0; i < data.length; i++){
	        rows.push(table.insertRow(-1));
	        cell=rows[i+1].insertCell(-1);
	        cell.appendChild(document.createTextNode(data[i].userId));
	        cell=rows[i+1].insertCell(-1);
	        cell.appendChild(document.createTextNode(data[i].userNm));
	    }
	    // 指定したdiv要素に表を加える
		document.getElementById(tableId).innerHTML="";
	    document.getElementById(tableId).appendChild(table);
	}

}