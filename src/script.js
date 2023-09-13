//Referencias do DOM - HTML
const btnClique = document.getElementById('btnClique');
const lblValor = document.getElementById('lblValor');

const inpCity = document.getElementById('inpCity');
const btntemp = document.getElementById('btntemp');
const lbltemp = document.getElementById('lbltemp');
const lblcidade = document.getElementById('lblcidade');
const lblcond = document.getElementById('lblcond');

const inpCEP = document.getElementById('inpCEP');
const btnCEP = document.getElementById('btnCEP');
const lbllogra = document.getElementById('lbllogra');
const lblcompl = document.getElementById('lblcompl');
const lblbairro = document.getElementById('lblbairro');
const lbllocal = document.getElementById('lbllocal');
const lblcep = document.getElementById('lblcep');
const lbluf = document.getElementById('lbluf');

const btndolar = document.getElementById('btndolar');
const lbldolar = document.getElementById('lbldolar');

//lógica de programação

const api = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

const apitemp = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=2fc8040e&city_name='
})

const apiCEP = axios.create({
    baseURL:'https://viacep.com.br/ws/'
})

const apidolar = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/last/USD-BRL'
})

async function consulta(){
    const response = await api.get();
    lblValor.innerHTML = 'Valor:R$ ' + response.data.ticker.buy;
}

async function consultatemp(){
    const City = inpCity.value;
    const responsetemp = await apitemp.get(City+',rj');
    console.log(apitemp);
    lblcidade.innerHTML = 'Cidade:' + responsetemp.data.results.city;
    lbltemp.innerHTML = 'Temperatura:' + responsetemp.data.results.condition_code + '°';
    lblcond.innerHTML = 'Condição:' + responsetemp.data.results.description;
}

async function consultaCEP(){
    const CEP = inpCEP.value;
    const responseCEP = await apiCEP.get(CEP + '/json/');
    lblcep.innerHTML = 'CEP:' + responseCEP.data.cep;
    lbllogra.innerHTML = 'Logradouro:' + responseCEP.data.logradouro;
    lblcompl.innerHTML = 'Complemento:' + responseCEP.data.complemento;
    lblbairro.innerHTML = 'Bairro:' + responseCEP.data.bairro;
    lbllocal.innerHTML = 'Localidade:' + responseCEP.data.localidade;
    lbluf.innerHTML = 'UF:' + responseCEP.data.uf;
}

async function consultadolar(){
    const  responsedolar = await apidolar.get();
    lbldolar.innerHTML = 'Valor:R$' + responsedolar.data.USDBRL.bid;
}

btnClique.onclick = ()=>{
    consulta();
};

btntemp.onclick = ()=>{
    consultatemp();
}


btnCEP.onclick = ()=>{
    consultaCEP();
}

btndolar.onclick = ()=>{
    consultadolar();
}

/*
function calcular(){
    total = 3+6;
}

function(){

}

() =>{}
*/