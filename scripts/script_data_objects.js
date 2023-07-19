//---- Transforma representacao_grafica.json em objeto javascript -----
var objetoGlobal = {};

async function obterObjeto() {
    const response = await fetch('dados/representacoes_graficas.json');
    const objeto = await response.json();
    try {
        Object.assign(objetoGlobal, objeto);
        //console.log('Objeto global:', objetoGlobal);
    } catch {
        console.log('Erro ao obter o objeto:', error);
    }

    return objeto; 
}
//obterObjeto();



//---- Busca em qual tela está o datapoint a partir do Xid do datapoint -----
async function buscaNameScreenByXidDP(dataPointXid) {
    try {
        const objeto = await obterObjeto();

        for (const view of objeto.graphicalViews) {
            for (const component of view.viewComponents) {
                if (component.dataPointXid === dataPointXid) {
                    const name = view.name;
                    const xid = view.xid;
                    //console.log(`Name: ${name}`);
                    //console.log(`xid_tela: ${xid}`);
                    return {name, xid}; 
                }
            }
        }
        
    } catch(error) {
        console.log('Erro ao tentar buscaNameScreenByXidDP ', error)
    }
}
//let dataPointXid = "DP_289401";
//buscaTelaPeloDP(dataPointXid);



//---- Transforma telas_viewId_name.json em objeto javascript
var objetoAllViewIdScreen = {};

async function obterObjetoAllViewIdScreen() {
    const response = await fetch('dados/telas_viewId_name.json');
    const objeto = await response.json();
    try {
        Object.assign(objetoAllViewIdScreen, objeto);
        //console.log('Objeto global:', objetoAllViewIdScreenl);
    } catch {
        console.log('Erro ao obter o objetoAllViewIdScreen:', error);
    }
    return objetoAllViewIdScreen;

}
//obterObjetoAllViewIdScreen();
//console.log(objetoAllViewIdScreen);



//----- Transforma datapoint.json em um objeto javascript
var objetoAllDP = {};

async function obterObjetoAllDP() {
    const response = await fetch('dados/datapoints.json');
    const objeto = await response.json();
    try {
        Object.assign(objetoAllDP, objeto);
        //console.log('Objeto global:', objetoAllDP);
    } catch {
        console.log('Erro ao obter o objetoAllDP:', error);
    }
    return objetoAllDP;

}
//obterObjetoAllDP();
//console.log(objetoAllDP);



//---- Busca Url da tela a partir do nome da tela
async function buscaUrlScreen(nameScreen) {
    try {
        const data = await obterObjetoAllViewIdScreen();
        //console.log(data)
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const obj = data[key];
                for (const prop in obj) {
                    if (nameScreen === obj[prop]) {
                        //console.log(obj.viewId);
                        const viewId = obj.viewId;
                        const name = obj.name;
                        
                        return {viewId, name};
                    }
                }
            }
        }
    } catch(error) {
        console.log('Erro ao tentar buscaNameScreenByXidDP ', error)
    }
}
//let nameScreen = "00A - ETA Morro dos Quadros";
//buscaUrlScreen(nameScreen);



//---- Busca Nome do Datapoint a partir do seu xid DP_xxx
async function buscaNameDpByXidDp(xidDP) {
    try {
        const data = await obterObjetoAllDP();

        for (const key in data.dataPoints) { 
            const obj = data.dataPoints[key];
            for(const prop in obj) {
                if (xidDP === obj[prop]) { 
                    const name = obj.name;
                    const xid = obj.xid;
                    const dataSourceName = obj.deviceName;
                    const dataSourceXid = obj.dataSourceXid;
                
                    return {name, xid, dataSourceName, dataSourceXid};
                }
            }    
        }

    } catch (error) {
        console.log('Erro ao tentar buscaNameDpByXidDp ', error);
    }
}



//---- Imprime no console todo o objeto javascript da função obterObjeto()
async function imprimirObjetoGlobal() {
    try {
        const objeto = await obterObjeto();
        console.log('objetoGlobal ',objeto);
    } catch(error) {
        console.log('Não foi possivel imprimirObjetoGlobal ', error);
    }
}
//imprimirObjetoGlobal();



//---- Buscar DP_xxx atraves do nome do datapoint
// async function buscaXidDpByNameDp(nameDatapoint) {
//     try {
//         const data = await obterObjetoAllDP();

//         for (const key in data.dataPoints) { 
//             const obj = data.dataPoints[key];
//             for(const prop in obj) {
//                 if (nameDatapoint === obj[prop]) { 
//                     const name = obj.name;
//                     const xid = obj.xid;
//                     const dataSourceName = obj.deviceName;
//                     const dataSourceXid = obj.dataSourceXid;
                
//                     return {name, xid, dataSourceName, dataSourceXid};
//                 }
//             }    
//         }

//     } catch(error) {
//         console.log('Erro ao tentar buscaXidDpByNameDp ', error);
//     }
// }
//buscaXidDpByNameDp("comando abertura valvula R4")