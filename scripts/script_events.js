//---- Buscas começando pelo xid do datapoint
btBusca2.onclick = () => {
    let dp = document.querySelector('input[id="inpDP"]').value.trim();
    limparCampos();

    buscaNameScreenByXidDP(dp).then(resultado => {
        if (resultado === undefined || resultado.name === undefined) {
            mensagem.textContent = "Não pertence a nenhuma tela."
        }
        resultNameScreen.textContent = resultado.name;
        resultXidScreen.textContent = resultado.xid;

        buscaUrlScreen(resultado.name).then(resultado => {
            resultUrlScreen.textContent = resultado.viewId;
        });
    });

    buscaNameDpByXidDp(dp).then(resultado => {
        resultNameDP.textContent = resultado.name;
        resultDP.textContent = resultado.xid;
        dataSourceName.textContent = resultado.dataSourceName;
        dataSourceXid.textContent = resultado.dataSourceXid;
    });
};



//---- Busca Url da tela a partir do Nome da tela 
resultNameScreen.onchange = () => {
    let nameScreen = document.querySelector('span[id="resultNameScreen"]').value;

    buscaUrlScreen(nameScreen).then(resultado => {
        resultUrlScreen.textContent = resultado.viewId;
    });
};



//---- Atach in clipboard
function copyToClipBoard(idCampo, textError) {
    let text = document.querySelector('span[id="' + idCampo + '"]').textContent.trim();

    navigator.clipboard.writeText(text).then(function () {
        //console.log('Texto copiado com sucesso.');
    }, function () {
        console.log(textError);
    });
}



function limparCampos(){
    // inpNameDatapoint.value = "";
    mensagem.textContent = "";
    resultNameDP.textContent = "";
    resultDP.textContent = "";
    dataSourceName.textContent = "";
    dataSourceXid.textContent = "";
    resultNameScreen.textContent = "";
    resultXidScreen.textContent = "";
    resultUrlScreen.textContent = "";
}
    


//Botão copiar Nome datapoint
btCopyNameDp.onclick = () => {
    copyToClipBoard("resultNameDP", "Erro ao copiar btCopyNameDp!");
};

//Botao copiar Xid do datapoint 
btCopyXidDP.onclick = () => {
    copyToClipBoard("resultDP", "Erro ao copiar btCopyNameDp!");
};

//Botão copiar Nome da tela
btCopyNameScreen.onclick = () => {
    copyToClipBoard("resultNameScreen", "Erro ao copiar btCopyNameScreen!");
};

//Botao copiar Xid da tela
btCopyXidScreen.onclick = () => {
    copyToClipBoard("resultXidScreen", "Erro ao copiar btCopyNameScreen!");
};

//Botao copiar Url da tela
btCopyUrlScreen.onclick = () => {
    copyToClipBoard("resultUrlScreen", "Erro ao copiar btCopyNameScreen!");
};

//Botao copiar Nome do Dadatasource
btCopyDsName.onclick = () => {
    copyToClipBoard("dataSourceName", "Erro ao copiar btCopyDsName!");
};

//Botao copiar Xid do Datasource
btCopyXidDs.onclick = () => {
    copyToClipBoard("dataSourceXid", "Erro ao copiar btCopyXidDs!");
};



//---- Buscas começando pelo nome do datapoint ----
// btBusca1.onclick = () => {
//     let nameDatapoint = document.querySelector('input[id="inpNameDatapoint"]').value.trim();

//     buscaXidDpByNameDp(nameDatapoint).then(resultado => {
//         inpDP.value = "";
//         resultNameDP.textContent = resultado.name;
//         resultDP.textContent = resultado.xid;
//         dataSourceName.textContent = resultado.dataSourceName;
//         dataSourceXid.textContent = resultado.dataSourceXid;

//         buscaNameScreenByXidDP(resultado.xid).then(resultado => {
//             resultNameScreen.textContent = resultado.name;
//             resultXidScreen.textContent = resultado.xid;

//             buscaUrlScreen(resultado.name).then(resultado => {
//                 resultUrlScreen.textContent = resultado.viewId;
//             });
//         });
//     });
// };