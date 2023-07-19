let nomes=[];
document.querySelectorAll('option').forEach(
	function (op){ 
        let novoObj = {};
        novoObj.viewId = op.value;
        novoObj.name = op.innerText;

        nomes.push(novoObj);
    }
);
const json = JSON.stringify(nomes);
console.log(json);
