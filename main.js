var version = '1.9.3';

$.fn.textWidth = function(){
    var html_org = $(this).html();
    var html_calc = '<span>' + html_org + '</span>';
    $(this).html(html_calc);
    var width = $(this).find('span:first').width();
    $(this).html(html_org);
    return width;
  };

  $.fn.resize = function(){
    var fontSize = parseInt($(this).children('div').css("font-size"));
      
    while($(this).children('div').textWidth() > $(this).width()){
        fontSize -= 0.1 ;
        $(this).children('div').css("font-size" , fontSize + "px") ;
    }

      return;
  }

  $.fn.bannerResize = function(){
  var fontSize = parseInt($(this).css("font-size"));
    
  while($(this).textWidth() > $(this).width()){
      fontSize -= 0.1 ;
      $(this).css("font-size" , fontSize + "px") ;
  }

    return;
}

function checkVila(input){
    if(input.toLowerCase() == 'konoha' || input.toLowerCase() == 'konohagakure') return 'vKonoha';
    if(input.toLowerCase() == 'suna' || input.toLowerCase() == 'sunagakure') return 'vSuna';
    if(input.toLowerCase() == 'iwa' || input.toLowerCase() == 'iwagakure') return 'vIWa';
    if(input.toLowerCase() == 'kiri' || input.toLowerCase() == 'kirigakure') return 'vKiri';
    if(input.toLowerCase() == 'kumo' || input.toLowerCase() == 'kumogakure') return 'vKumo';
    else return 'vNukenin';
}

function checkVila2(input){
    if(input.toLowerCase() == 'konoha' || input.toLowerCase() == 'konohagakure') return 'Konohagakure';
    if(input.toLowerCase() == 'suna' || input.toLowerCase() == 'sunagakure') return 'Sunagakure';
    if(input.toLowerCase() == 'iwa' || input.toLowerCase() == 'iwagakure') return 'Iwagakure';
    if(input.toLowerCase() == 'kiri' || input.toLowerCase() == 'kirigakure') return 'Kirigakure';
    if(input.toLowerCase() == 'kumo' || input.toLowerCase() == 'kumogakure') return 'Kumogakure';
    else return 'Nukenin';
}

function barCheck(input){
    if(input < 10) return 'background: none; border: none;';
    else return '';
}

function checkPvp(input){
    if(input.toLowerCase() == 'on') return 'pvpOn';
    else return 'pvpOff';
}

function checkBonus(talentos , lista , atributo , i , j , resultado){
    //console.log('index: ' + i);
    //console.log(`talento: ${talentos[i]-1}`);
    //console.log(lista[talentos[i]-1]);
    if(talentos[i] <= 0) return checkBonus(talentos, lista, atributo , i+1 , 0 , resultado);
    if(talentos[i]-1 > lista.length) return checkBonus(talentos, lista, atributo , i+1 , 0 , resultado);
    if(i >= talentos.length) return resultado;
    if(j >= lista[talentos[i]-1].atributo.length) return checkBonus(talentos, lista, atributo, i + 1, 0, resultado);
    if(lista[talentos[i]-1].atributo[j] == atributo) return checkBonus(talentos, lista, atributo , i, j + 1, resultado + Number(lista[talentos[i]-1].bonus[j]));
    
    return checkBonus(talentos, lista, atributo , i , j + 1 , resultado);
}

function individualidadegenerator(quirk1 , quirk2){
    var result = '';
    if(quirk1 !== '') result += `<div class="campo0 fIndividualidade fff2"><span>Individualidade 2</span><br><div>${quirk1}</div></div>`;
    if(quirk2 !== '') result += `<div class="campo0 fIndividualidade fff3"><span>Individualidade 3</span><br><div>${quirk2}</div></div>`;
    return result;
}

function saque(arma , VS){
    VS = (arma + VS).toFixed(1);
    if(VS < 0) VS = 0;
    return VS;
}

function checarspoiler(numero){
    if (numero < 17) return 0;
    if (numero < 34) return 1;
    if (numero < 47) return 2;
    if (numero < 56) return 3;
    if (numero < 67) return 4;
    if (numero < 81) return 5;
    if (numero < 90) return 6;
    if (numero < 105) return 7;
    if (numero < 129) return 8;
    if (numero < 144) return 9;
    if (numero < 157) return 10;
    if (numero < 173) return 11;
    if (numero < 183) return 12;
    if (numero < 192) return 13;
    if (numero < 202) return 14;
    if (numero < 221) return 15;
    if (numero < 236) return 16;
    if (numero < 254) return 17;
    if (numero < 258) return 18;
    if (numero < 262) return 19;
    else return 20;
}

function divCheck(texto, i){
    //console.log(i);
    if(i !== 1 && i !== 6 && i !== 13 && i !== 17 && i !== 22 && i !== 28 && i !== 34 && i !== 38 && i !== 42 && i !== 47 && i !== 49 && i !== 52 && i !== 56 && i !== 59 && i !== 63 && i !== 67 && i !== 72 && i !== 78 && i !== 81 && i !== 84 && i !== 87 && i !== 90 && i !== 95 && i !== 100 && i !== 105 && i !== 111 && i !== 119 && i !== 128 && i !== 129 && i !== 134 && i !== 141 && i !== 144 && i !== 148 && i !== 153 && i !== 157 && i !== 160 && i !== 169 && i !== 173 && i !== 176 && i !== 179 && i !== 182 && i !== 183 && i !== 186 && i !== 189 && i !== 192 && i !== 195 && i !== 198 && i !== 202 && i !== 209 && i !== 215 && i !== 221 && i !== 225 && i !== 231 && i !== 236 && i !== 242 && i !== 248 && i !== 254 && i !== 255 && i !== 256 && i !== 258){
        return `<div style="padding-left: 50px">${texto}</div><br><br>`
    }
    else return `${texto}<br><br>`;
}

function talentGenerator(talentos , lista, i, tipo){
    if(talentos[i] <= 0) return talentGenerator(talentos, lista, i + 1, tipo);
    if(talentos[i]-1 > lista.length) return talentGenerator(talentos, lista, i + 1, tipo);
    if(i >= talentos.length){
        var final = "";
        if (tipo[0] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Ninjutsu:</dt><dd><div class="spoiler_content">${tipo[0]}</div></dd></dl><br>`;
        }
        if (tipo[1] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Controle de Chakra:</dt><dd><div class="spoiler_content">${tipo[1]}</div></dd></dl><br>`;
        }
        if (tipo[2] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Fuinjutsu:</dt><dd><div class="spoiler_content">${tipo[2]}</div></dd></dl><br>`;
        }
        if (tipo[3] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Bushinjutsu:</dt><dd><div class="spoiler_content">${tipo[3]}</div></dd></dl><br>`;
        }
        if (tipo[4] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Selos de Mão:</dt><dd><div class="spoiler_content">${tipo[4]}</div></dd></dl><br>`;
        }
        if (tipo[5] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Elementos de Chakra:</dt><dd><div class="spoiler_content">${tipo[5]}</div></dd></dl><br>`;
        }
        if (tipo[6] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Nintaijutsu:</dt><dd><div class="spoiler_content">${tipo[6]}</div></dd></dl><br>`;
        }
        if (tipo[7] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Taijutsu:</dt><dd><div class="spoiler_content">${tipo[7]}</div></dd></dl><br>`;
        }
        if (tipo[8] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Genjutsu:</dt><dd><div class="spoiler_content">${tipo[8]}</div></dd></dl><br>`;
        }
        if (tipo[9] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Inteligência:</dt><dd><div class="spoiler_content">${tipo[9]}</div></dd></dl><br>`;
        }
        if (tipo[10] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Atenção:</dt><dd><div class="spoiler_content">${tipo[10]}</div></dd></dl><br>`;
        }
        if (tipo[11] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Carisma:</dt><dd><div class="spoiler_content">${tipo[11]}</div></dd></dl><br>`;
        }
        if (tipo[12] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Resistência:</dt><dd><div class="spoiler_content">${tipo[12]}</div></dd></dl><br>`;
        }
        if (tipo[13] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Resiliência:</dt><dd><div class="spoiler_content">${tipo[13]}</div></dd></dl><br>`;
        }
        if (tipo[14] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Força:</dt><dd><div class="spoiler_content">${tipo[14]}</div></dd></dl><br>`;
        }
        if (tipo[15] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Reservas:</dt><dd><div class="spoiler_content">${tipo[15]}</div></dd></dl><br>`;
        }
        if (tipo[16] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Destreza:</dt><dd><div class="spoiler_content">${tipo[16]}</div></dd></dl><br>`;
        }
        if (tipo[17] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Bukijutsu:</dt><dd><div class="spoiler_content">${tipo[17]}</div></dd></dl><br>`;
        }
        if (tipo[18] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Invocação:</dt><dd><div class="spoiler_content">${tipo[18]}</div></dd></dl><br>`;
        }
        if (tipo[19] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Espaço-Tempo:</dt><dd><div class="spoiler_content">${tipo[19]}</div></dd></dl><br>`;
        }
        if (tipo[20] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Talentos Secretos:</dt><dd><div class="spoiler_content">${tipo[20]}</div></dd></dl><br>`;
        }
        //console.log(final);
        return final;
    }
    var j = checarspoiler(talentos[i]);

    //tipo[j] += lista[talentos[i]-1].code;
    tipo[j] += divCheck(lista[talentos[i]-1].code , talentos[i]);
    //console.log(tipo);

    return talentGenerator(talentos, lista, i + 1, tipo);
}

function elementGenerator(talentos , lista, i, tipo){
    if(talentos[i] <= 0) return elementGenerator(talentos, lista, i + 1, tipo);
    if(talentos[i]-1 > lista.length) return elementGenerator(talentos, lista, i + 1, tipo);
    if(i >= talentos.length){
        var final = "";
        if (tipo[5] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Elementos de Chakra (${talentos[0]}):</dt><dd><div class="spoiler_content">${tipo[5]}</div></dd></dl><br>`;
        }
        //console.log(final);
        return final;
    }
    var j = checarspoiler(talentos[i]);

    //tipo[j] += lista[talentos[i]-1].code;
    tipo[j] += divCheck(lista[talentos[i]-1].code , talentos[i]);
    //console.log(tipo);

    return elementGenerator(talentos, lista, i + 1, tipo);
}

function elementCalc(talentos, lista, i, j , DN, VN, AN, DND , DNC){
    if(talentos[i] <= 0) return elementCalc(talentos, lista, i + 1, 0 , DN, VN, AN, DND , DNC);
    if(talentos[i]-1 > lista.length) return elementCalc(talentos, lista, i + 1, 0 , DN, VN, AN, DND , DNC);
    if(i >= talentos.length){
        var texto = `
        <div class="campofinal elementTitle">${talentos[0]}</div>
        <div class="fTestes">
        <div class="campo0 campo2"><span>Alcance de Ninjutsu (AN)</span><br>${AN}m</div>
        <div class="campo0 campo2"><span>Velocidade de Ninjutsu (VN)</span><br>${VN}m/s</div>
        <div class="campo0 campo2"><span>Dano de Ninjutsu (DN)</span><br>${DN}</div>
        <div class="campo0 campo2"><span>Dano de Ninjutsu Concentrado (DNC)</span><br>${DNC}</div>
        <div class="campo0 campo2 campofinal"><span>Dano de Ninjutsu Dispersivo (DND)</span><br>${DND}</div>
        </div>`
        
        //console.log(talentos[1]);
        if(talentos[1] !== undefined && talentos[talentos.length] !== 0) return texto;
        else return '';
    }
    //console.log(lista[talentos[i]-1].atributo);
    //console.log(i);
    //console.log(j);
    if(j >= lista[talentos[i]-1].atributo.length) return elementCalc(talentos, lista, i+1, 0, DN, VN, AN, DND , DNC);
    
    if(lista[talentos[i]-1].atributo[j] == 'EDN') return elementCalc(talentos, lista , i, j + 1, DN + lista[talentos[i]-1].bonus[j] , VN, AN, DND + lista[talentos[i]-1].bonus[j], DNC + lista[talentos[i]-1].bonus[j]);
    if(lista[talentos[i]-1].atributo[j] == 'EVN') return elementCalc(talentos, lista , i, j + 1, DN , VN + lista[talentos[i]-1].bonus[j] , AN, DND , DNC);
    if(lista[talentos[i]-1].atributo[j] == 'EAN') return elementCalc(talentos, lista , i, j + 1, DN , VN, AN + lista[talentos[i]-1].bonus[j] , DND , DNC);
    if(lista[talentos[i]-1].atributo[j] == 'EDND') return elementCalc(talentos, lista , i, j + 1, DN , VN, AN, DND+ lista[talentos[i]-1].bonus[j] , DNC);
    if(lista[talentos[i]-1].atributo[j] == 'EDNC') return elementCalc(talentos, lista , i, j + 1, DN , VN, AN, DND , DNC + lista[talentos[i]-1].bonus[j] );

    return elementCalc(talentos, lista , i , j + 1 , DN, VN, AN, DND , DNC);
}

function bukiGenerator(talentos , lista, i, tipo){
    if(talentos[i] <= 0) return bukiGenerator(talentos, lista, i + 1, tipo);
    if(talentos[i]-1 > lista.length) return bukiGenerator(talentos, lista, i + 1, tipo);
    if(i >= talentos.length){
        var final = "";
        if (tipo[17] !== ""){
            final += `<dl class="codebox spoiler"><dt style="cursor: pointer;">Bukijutsu (${talentos[0]}):</dt><dd><div class="spoiler_content">${tipo[17]}</div></dd></dl><br>`;
        }
        //console.log(final);
        return final;
    }
    var j = checarspoiler(talentos[i]);

    //tipo[j] += lista[talentos[i]-1].code;
    tipo[j] += divCheck(lista[talentos[i]-1].code , talentos[i]);
    //console.log(tipo);

    return bukiGenerator(talentos, lista, i + 1, tipo);
}

function bukiCalc(talentos, lista, i, j , DA, VG, VAR, PAR ){
    if(talentos[i] <= 0) return bukiCalc(talentos, lista, i + 1, 0 , DA, VG, VAR, PAR );
    if(talentos[i]-1 > lista.length) return bukiCalc(talentos, lista, i + 1, 0 , DA, VG, VAR, PAR );
    if(i >= talentos.length){
        var texto = `
        <div class="campofinal elementTitle">${talentos[0]}</div>
        <div class="fTestes">
            <div class="campo0 campo2"><span>Dano com Armas (DA)</span><br>${DA}</div>
            <div class="campo0 campo2"><span>Velocidade dos Golpes (VG)</span><br>${VG}m/s</div>
            <div class="campo0 campo2"><span>Velocidade de Arremesso (VAR)</span><br>${VAR}m/s</div>
            <div class="campo0 campo2"><span>Precisão de Arremesso (PAR)</span><br>${PAR}m</div>
        </div>`

        //console.log(talentos[1]);
        if(talentos[1] !== undefined && talentos[talentos.length] !== 0) return texto;
        else return '';
    }

    if(j >= lista[talentos[i]-1].atributo.length) return bukiCalc(talentos, lista, i + 1, 0, DA, VG, VAR, PAR );

    if(lista[talentos[i]-1].atributo[j] == 'ADA') return bukiCalc(talentos, lista , i, j + 1, DA + lista[talentos[i]-1].bonus[j] , VG, VAR, PAR );
    if(lista[talentos[i]-1].atributo[j] == 'AVG') return bukiCalc(talentos, lista , i, j + 1, DA , VG + lista[talentos[i]-1].bonus[j] , VAR, PAR );
    if(lista[talentos[i]-1].atributo[j] == 'AVAR') return bukiCalc(talentos, lista , i, j + 1, DA , VG, VAR + lista[talentos[i]-1].bonus[j] , PAR );
    if(lista[talentos[i]-1].atributo[j] == 'APAR') return bukiCalc(talentos, lista , i, j + 1, DA , VG, VAR, PAR+ lista[talentos[i]-1].bonus[j] );

    else return bukiCalc(talentos, lista , i , j + 1 , DA, VG, VAR, PAR );
}

function ordenar(array, i, j){
    if(i >= array.length - 1) return array;
    if(j >= array.length) return ordenar(array, i+1, i+2);
    if(array[i] > array[j]){
        var troca = array[i];
        array[i] = array[j];
        array[j] = troca;

    }
    return ordenar(array, i, j+1);
}

$(document).ready(function(){fetch("https://shinobiworldrpg.github.io/Ficha/talentos.json").then(response => {return response.json();}).then(data => {

    console.log(`Ficha Script ${version} Running`);
    console.log(`Talentos: ${data.length}`);

    // VARIÁVEIS
    var banner = $('banner').text();
    var avatar = $('avatar').text();
    var pvp = $('pvp').text();
    var nome = $('nome').text();
    var cla = $('cla').text();
    var idade = $('idade').text();
    var niver = $('niver').text();
    var genero = $('genero').text();
    var tendencia = $('tendencia').text();
    var origem = $('origem').text();
    var vila = $('vila').text();
    var graduation = $('graduation').text();
    var especial = $('especial').text();
    var alcunhaLocal = $('local').text();
    var alcunhaMundial = $('mundial').text();
    var rep = $('reputacao').text();
    var time = $('time').text();
    var missoes = $('missoes').html();
    var level = $('level').text();
    var exp = $('exp').text();
    var assinatura = $('assinatura').text();
    var individualidade = $('individualidade').text();
    var kuchyose = $('invocacao').text();
    var dinheiro = $('dinheiro').text();
    var profissao = $('profissao').text();
    
    var defeitos = $('defeitos').html();
    var historia = $('historia').html();
    var aparencia = $('aparencia').html();
    var personalidade = $('personalidade').html();
    var bijuu = $('bijuu').html();
    var jutsusBasicos = $('jutsusBasicos').html();
    var jutsusGerais = $('jutsusGerais').html();
    var bornal = $('armamentos').html();
    var edl = $('EDL').html();
    var descricaoCla = $('DescricaoCla').html();
    var descricaoIndividualidade = $('DescricaoIndividualidade').html();
    var elementos = $('elementos').html();
    var kuchyoseDetail = $('kuchyose').html();
    var relacionamentos = $('relacionamentos').html();
    var notas = $('notas').html();
    var link = $('links').html();

    var talentos = $('talentos').text();

    var ninjutsu = Number($('ninjutsu').text());
    var taijutsu = Number($('taijutsu').text());
    var genjutsu = Number($('genjutsu').text());
    var forca = Number($('forca').text());
    var destreza = Number($('destreza').text());
    var constituicao = Number($('constituicao').text());
    var inteligencia = Number($('inteligencia').text());
    var atencao = Number($('atencao').text());
    var carisma = Number($('carisma').text());
    var bonuscla = $('BonusCla').text().split('/').map(Number);

    talentos = talentos.split('/').map(Number).sort((a, b) => a - b);
    //console.log(talentos);


    //Cálculos

    var HP = 100 + bonuscla[0] + constituicao*20 + checkBonus(talentos, data, 'HP', 0, 0, 0);
    var CH = 100 + bonuscla[1] + constituicao*20 +checkBonus(talentos, data, 'CH', 0, 0, 0);
    var SM = 100 + bonuscla[2] + inteligencia*20 +checkBonus(talentos, data, 'SM', 0, 0, 0);
    var ST = 2 + bonuscla[3] + constituicao +checkBonus(talentos, data, 'ST', 0, 0, 0);
    var VT = 5 + bonuscla[4] + carisma/2 + checkBonus(talentos, data, 'VT', 0, 0, 0);
    var AN = 2 + ninjutsu*5 + checkBonus(talentos, data, 'AN', 0, 0, 0);
    var VN = ninjutsu*2 + checkBonus(talentos, data, 'VN', 0, 0, 0);
    var VC = 15 - ninjutsu + checkBonus(talentos, data, 'VC', 0, 0, 0);
    var VSM = 3 + checkBonus(talentos, data, 'VSM', 0, 0, 0);
    var DN = ninjutsu*2 + atencao*2 + checkBonus(talentos, data, 'DN', 0, 0, 0);
    var DNC = DN + checkBonus(talentos, data, 'DNC', 0, 0, 0);
    var DND = DN + checkBonus(talentos, data, 'DND', 0, 0, 0);    
    var AG = 2 + genjutsu*2 + checkBonus(talentos, data, 'AG', 0, 0, 0);
    var VEG = genjutsu*2 + checkBonus(talentos, data, 'VEG', 0, 0, 0);
    var PG = genjutsu/2 + carisma/2 + checkBonus(talentos, data, 'PG', 0, 0, 0);
    var PdG = (genjutsu + inteligencia + atencao)/2 + checkBonus(talentos, data, 'PdG', 0, 0, 0);
    var DF = taijutsu*2 + forca*2 + checkBonus(talentos, data, 'DF', 0, 0, 0);
    var DA = atencao*2 + destreza*2 + checkBonus(talentos, data, 'DA', 0, 0, 0);
    var VAR = 4 + forca*2 + atencao*2 + checkBonus(talentos, data, 'VAR', 0, 0, 0);
    var PAR = 5 + forca*2 + atencao*2 + checkBonus(talentos, data, 'PAR', 0, 0, 0);
    var DEFF = constituicao + forca + checkBonus(talentos, data, 'DEFF', 0, 0, 0);
    var DEFFF = DEFF + checkBonus(talentos, data, 'DEFFF', 0, 0, 0);
    var DEFE = DEFF + checkBonus(talentos, data, 'DEFE', 0, 0, 0);
    var CC = 20 + forca*5 + checkBonus(talentos, data, 'CC', 0, 0, 0);
    var VP = 4 + destreza*2 + checkBonus(talentos, data, 'VP', 0, 0, 0);
    var VG = 2 + taijutsu + destreza + checkBonus(talentos, data, 'VG', 0, 0, 0);
    var VS = -destreza*0.1 + checkBonus(talentos, data, 'VS', 0, 0, 0);
    var RE = 2 + atencao +destreza + checkBonus(talentos, data, 'RE', 0, 0, 0);
    var PM = 6 + atencao*2 + checkBonus(talentos, data, 'PM', 0, 0, 0);
    var PMS = (inteligencia + atencao)/2 + checkBonus(talentos, data, 'PMS', 0, 0, 0);
    var CDA = ((inteligencia + checkBonus(talentos, data, 'CDA', 0, 0, 0))/3).toFixed(1) ;
    var VPA = 20 - inteligencia + checkBonus(talentos, data, 'VPA', 0, 0, 0);
    var PA = ((atencao + checkBonus(talentos, data, 'PA', 0, 0, 0))/3).toFixed(1) ;
    var PE = carisma + inteligencia/2 + checkBonus(talentos, data, 'PE', 0, 0, 0);

    // Extra

    var indialtura = 0;
    if($('individualidade2').text() !== '' || $('individualidade3').text() !== '') indialtura = 1;
    var talent = ""; 
    talent = talentGenerator(talentos, data, 0, ["","","","","","","","","","","","","","","","","","","","",""]);
    
    var elemental = $('Elementais').text();
    var elementalfinal = '';
    var elementtestes = '';
    elemental = elemental.split('&');
    
    for (let index = 0; index < elemental.length; index++) {
        elemental[index] = elemental[index].split('/');
    
        for (let j = 1; j < elemental[index].length; j++) {
            elemental[index][j] = Number(elemental[index][j]);           
        }
        elemental[index] = ordenar(elemental[index] , 1, 2);
        elementalfinal += elementGenerator(elemental[index], data, 1, ["","","","","","","","","","","","","","","","","","","","",""]);
        //console.log(elemental[index]);
        //console.log(elemental[index][0]);
        if(elemental[index][0] != '' && elemental[index][0] != 'Elemento1' && elemental[index][0] != ' Elemento2') elementtestes += elementCalc(elemental[index], data, 1, 0, ninjutsu*2 + atencao*2 , ninjutsu*2, 2 + ninjutsu*5, ninjutsu*2 + atencao*2, ninjutsu*2 + atencao*2);
    }

    var bukiT = $('buki').text();
    var bukiTfinal = '';
    var bukiTtestes = '';
    bukiT = bukiT.split('&');

    for (let index = 0; index < bukiT.length; index++) {
        bukiT[index] = bukiT[index].split('/');
    
        for (let j = 1; j < bukiT[index].length; j++) {
            bukiT[index][j] = Number(bukiT[index][j]);           
        }
        bukiT[index] = ordenar(bukiT[index] , 1, 2);
        //console.log(bukiT[index]);
        bukiTfinal += bukiGenerator(bukiT[index], data, 1, ["","","","","","","","","","","","","","","","","","","","",""]);
        if(bukiT[index][0] != '' && bukiT[index][0] != 'Arma1' && bukiT[index][0] != ' Arma2') bukiTtestes += bukiCalc(bukiT[index], data, 1, 0, DA, VG, VAR, PAR);
    }

    /*var lista = '';
    for (let index = 0; index < data.length; index++) {
        lista += `<b>${index + 1} -</b> ${data[index].name}<br>`;
    }
    console.log(lista);*/


    // CONVERSÂO DA PÁGINA
    console.log($('individualidade2').text());
    console.log($('individualidade3').text());
    $('.fichaMain').html(`
    <div class="fichaMainContainer verde ${checkVila(vila)}">
        <div class="bannerFundo"></div><div class="titleFundo"></div><div class="sideFundoFundo"></div><div class="sideFundo"></div><div class="fTexture"></div>
        <svg class="bannerImage" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="516.783" height="175.001" viewBox="0 0 516.783 175.001"><defs><pattern id="a" width="1" height="1" viewBox="100% 100% 516.783 175.001"><image preserveAspectRatio="xMidYMid slice" width="516.783" href="${banner}"/></pattern></defs><path d="M702,211H185.217a112.51,112.51,0,0,0,0-175H702V211Z" transform="translate(-185.217 -36)" fill="url(#a)"/></svg>
        <div class="perfilImage" style="background-image: url(${avatar});"></div>
        <div class="fVila ${checkVila(vila)}"></div><div class="pvp ${checkPvp(pvp)}"></div>
        <svg class="fLevel" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><defs><style>.a,.c{fill:none;}.b,.d{fill:#eaeade;font-family:Arial-Black, Arial;font-weight:800;letter-spacing:0.087em;}.b{font-size:12px;}.c{stroke:#fff;stroke-width:1.7px;}.d{font-size:27px;}</style></defs><rect class="a" width="50" height="50"/><g transform="translate(-198 -355)"><g transform="translate(200 356)"><text class="b" transform="translate(0 13)"><tspan x="0" y="0">LEVEL</tspan></text></g><line class="c" x2="46" transform="translate(200.5 373)"/><g transform="translate(205 367)"><text class="d" transform="translate(19 30)"><tspan x="-19.183" y="0">${level}</tspan></text></g></g></svg>
        <div class="bannerName">${nome}</div><div class="bannerTitle">${alcunhaLocal} - ${alcunhaMundial}</div>
        <div class="fichaMenu">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Perfil.svg" class="buttonPerfil bActive">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Reputação.svg" class="buttonRep">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Habilidades.svg" class="buttonHab">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Arsenal.svg" class="buttonArsenal">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Extra.svg" class="buttonExtra">
        </div>
        <div class="fichaSecondaryContainer perfilContainer">
            <div class="perfilContent">
                <div class="campo0 fNome"><span>Nome</span><br><div>${nome}</div></div>
                <div class="campo0 fCla"><span>Clã / KG / HI</span><br><div>${cla}</div></div>
                <div class="campo0 fIdade"><span>Idade</span><br><div>${idade} anos</div></div>
                <div class="campo0 fNiver"><span>Aniversário</span><br><div>${niver}</div></div>
                <div class="campo0 fGenero"><span>Gênero</span><br><div>${genero}</div></div>
                <div class="campo0 fTendencia"><span>Tendência</span><br><div>${tendencia}</div></div>
                <div class="campo0 fPP"><span>Personagem Base</span><br><div>${origem}</div></div>
                <div class="perfilButtons">
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Defeitos.svg" class="buttonDefeitos"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Historia.svg" class="buttonHistoria"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Desc Fis.svg" class="buttonFisica"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Desc Mental.svg" class="buttonMental"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Bijuu.svg" class="buttonBijuu"></div>
                </div>
            </div>
            <div class="repContent">
                <div class="campo0 fVIla"><span>Vila</span><br>${checkVila2(vila)}</div>
                <div class="campo0 fGraduação"><span>Graduação</span><br><div>${graduation}</div></div>
                <div class="campo0 fSpecial"><span>Cargo Especial</span><br><div>${especial}</div></div>
                <div class="campo0 fAlcunhaLocal"><span>Alcunha Local</span><br><div>${alcunhaLocal}</div></div>
                <div class="campo0 fAlcunhaMundial"><span>Alcunha Mundial</span><br><div>${alcunhaMundial}</div></div>
                <div class="campo0 fRep"><span>Reputação</span><br><div>${rep}</div></div>
                <div class="campo0 fOrg"><span>Organização / Time</span><br><div>${time}</div></div>
                <div class="campo0 fPatente"><span>Profissão e Patente</span><br><div>${profissao}</div></div>
                <div class="fMissões"><center><span>Missões</span></center><hr>
                    ${missoes}</div>
            </div>
            <div class="habContent">
                <div class="campo0 fNivel"><span>Nível</span><br>${level}</div>
                <div class="campo0 fExp"><span>Exp</span><br>${exp}</div>
                <div class="campo0 fAssinatura"><span>Técnica Assinatura</span><br><div>${assinatura}</div></div>
                <div class="campo0 fIndividualidade fff1"><span>Individualidade</span><br><div>${individualidade}</div></div>${individualidadegenerator($('individualidade2').text(), $('individualidade3').text())}
                <div class="campo0 fKuchyose"><span>Kuchyose</span><br><div>${kuchyose}</div></div>
                <div class="fatributos">
                    <div class="attC"><span>Ninjutsu - ${ninjutsu}</span><div class="barBar" style="width: ${ninjutsu * 10}%;${barCheck(ninjutsu * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Taijutsu - ${taijutsu}</span><div class="barBar" style="width: ${taijutsu * 10}%;${barCheck(taijutsu * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Genjutsu - ${genjutsu}</span><div class="barBar" style="width: ${genjutsu * 10}%;${barCheck(genjutsu * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Força - ${forca}</span><div class="barBar" style="width: ${forca * 10}%;${barCheck(forca * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Destreza - ${destreza}</span><div class="barBar" style="width: ${destreza * 10}%;${barCheck(destreza * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Constituição - ${constituicao}</span><div class="barBar" style="width: ${constituicao * 10}%;${barCheck(constituicao * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Inteligência - ${inteligencia}</span><div class="barBar" style="width: ${inteligencia * 10}%;${barCheck(inteligencia * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Atenção - ${atencao}</span><div class="barBar" style="width: ${atencao * 10}%;${barCheck(atencao * 10)}"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Carisma - ${carisma}</span><div class="barBar" style="width: ${carisma * 10}%;${barCheck(carisma * 10)}"></div><div class="barOutline"></div></div>
                </div>
                <div class="hButtons">
                    <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Testes.svg" class="buttonTestes"></div>
                    <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Talentos.svg" class="buttonTalentos"></div>
                </div>
            </div>
            <div class="arsenalContent">
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Jutsus Basicos.svg" class="buttonJutsu1"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Jutsus Gerais.svg" class="buttonJutsu2"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Bornal.svg" class="buttonBornal"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Edl.svg" class="buttonEdl"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/cla kg.svg" class="buttonCla"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Individualidade.svg" class="buttonQuirk"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Elementos.svg" class="buttonElementos"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Kuchyose.svg" class="buttonKuchyose"></div>
            </div>
            <div class="extraContent">
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Relacionamentos.svg" class="buttonRelacionamentos"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Links.svg" class="buttonLinks"></div>
                <div class="fButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Notas.svg" class="buttonNotas"></div>
                <div class="fMoney"><span>Dinheiro</span><br> ${dinheiro} RY$</div>
            </div>
        </div>
        <div class="defeitosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Defeitos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${defeitos}</div>
        </div>
        <div class="historiaSpoiler fSpoiler">
            <div class="fSpoilerTitle">História<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${historia}</div>
        </div>
        <div class="fisicaSpoiler fSpoiler">
            <div class="fSpoilerTitle">Descrição Física<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${aparencia}</div>
        </div>
        <div class="mentalSpoiler fSpoiler">
            <div class="fSpoilerTitle">Descrição Mental<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${personalidade}</div>
        </div>
        <div class="bijuuSpoiler fSpoiler">
            <div class="fSpoilerTitle">Bijuu<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${bijuu}</div>
        </div>
        <div class="jutsu1Spoiler fSpoiler">
            <div class="fSpoilerTitle">Jutsus Básicos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${jutsusBasicos}</div>
        </div>
        <div class="jutsu2Spoiler fSpoiler">
            <div class="fSpoilerTitle">Jutsus Gerais<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${jutsusGerais}</div>
        </div>
        <div class="bornalSpoiler fSpoiler">
            <div class="fSpoilerTitle">Bornal<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${bornal}</div>
        </div>
        <div class="edlSpoiler fSpoiler">
            <div class="fSpoilerTitle">EDL<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${edl}</div>
        </div>
        <div class="claSpoiler fSpoiler">
            <div class="fSpoilerTitle">Descrição de Clã / KG<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${descricaoCla}</div>
        </div>
        <div class="quirkSpoiler fSpoiler">
            <div class="fSpoilerTitle">Individualidades<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${descricaoIndividualidade}</div>
        </div>
        <div class="elementosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Elementos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${elementos}</div>
        </div>
        <div class="kuchyoseSpoiler fSpoiler">
            <div class="fSpoilerTitle">Kuchyose no Jutsu<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${kuchyoseDetail}</div>
        </div>
        <div class="relacionamentosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Relacionamentos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${relacionamentos}</div>
        </div>
        <div class="linksSpoiler fSpoiler">
            <div class="fSpoilerTitle">Links Comprobatórios<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${link}</div>
        </div>
        <div class="notasSpoiler fSpoiler">
            <div class="fSpoilerTitle">Anotações Gerais<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${notas}</div>
        </div>
        <div class="talentosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Talentos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">${talent}${elementalfinal}${bukiTfinal}</div>
        </div>
        <div class="testesSpoiler fSpoiler">
            <div class="fSpoilerTitle">Testes<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">
                <div class="fReservas">
                    <div class="campo0"><span>Vitalidade</span><br>${HP}</div>
                    <div class="campo0"><span>Chakra</span><br>${CH}</div>
                    <div class="campo0"><span>Saúde Mental</span><br>${SM}</div>
                    <div class="campo0"><span>Stamina</span><br>${ST}</div>
                    <div class="campo0" style="margin-right: 0px;"><span>Vontade</span><br>${VT}</div>
                </div>
                <div class="fTestes">
                    <div class="campo0 campo2"><span>Alcance de Ninjutsu (AN)</span><br>${AN}m</div>
                    <div class="campo0 campo2"><span>Velocidade de Ninjutsu (VN)</span><br>${VN}m/s</div>
                    <div class="campo0 campo2"><span>Velocidade de Conjuração (VC)</span><br>${VC}seg</div>
                    <div class="campo0 campo2"><span>Velocidade de Selos de Mãos (VSM)</span><br>${VSM}seg</div>
                    <div class="campo0 campo2"><span>Dano de Ninjutsu (DN)</span><br>${DN}</div>
                    <div class="campo0 campo2"><span>Dano de Ninjutsu Concentrado (DNC)</span><br>${DNC}</div>
                    <div class="campo0 campo2"><span>Dano de Ninjutsu Dispersivo (DND)</span><br>${DND}</div>
                    <div class="campo0 campo2"><span>Alcance de Genjutsu (AG)</span><br>${AG}m</div>
                    <div class="campo0 campo2"><span>Velocidade de Expansão de Genjutsu (VEG)</span><br>${VEG}m/s</div>
                    <div class="campo0 campo2"><span>Precisão do Genjutsu (PG)</span><br>${PG}</div>
                    <div class="campo0 campo2"><span>Percepção de Genjutsu (PdG)</span><br>${PdG}</div>
                    <div class="campo0 campo2"><span>Dano Físico (DF)</span><br>${DF}</div>
                    <div class="campo0 campo2"><span>Dano com Armas (DA)</span><br>${DA}</div>
                    <div class="campo0 campo2"><span>Velocidade de Arremesso (VAR)</span><br>${VAR}m/s</div>
                    <div class="campo0 campo2"><span>Precisão de Arremesso (PAR)</span><br>${PAR}m</div>
                    <div class="campo0 campo2"><span>Defesa Física (DF)</span><br>${DEFFF}</div>
                    <div class="campo0 campo2"><span>Defesa Física Elemental (DFE)</span><br>${DEFE}</div>                    
                    <div class="campo0 campo2"><span>Capacidade de Carga (CC)</span><br>${CC}</div>
                    <div class="campo0 campo2"><span>Velocidade do Personagem (VP)</span><br>${VP}m/s</div>
                    <div class="campo0 campo2"><span>Velocidade dos Golpes (VG)</span><br>${VG}m/s</div>
                    <div class="campo0 campo2"><span>Velocidade do Saque (VS)</span><br><div style="font-size: 10px;">${saque(1 , VS)}s(P) / ${saque(1.5 , VS)}s(M) / ${saque(2 , VS)}s(MG) / ${saque(3 , VS)}s(G)</div></div>
                    <div class="campo0 campo2"><span>Reflexos (RE)</span><br>${RE}m/s</div>
                    <div class="campo0 campo2"><span>Percepção de Movimentos (PM)</span><br>${PM}</div>
                    <div class="campo0 campo2"><span>Percepção de Mentiras (PMS)</span><br>${PMS}</div>
                    <div class="campo0 campo2"><span>Velocidade no Preparo de Armadilhas (VPA)</span><br>${VPA}s</div>
                    <div class="campo0 campo2"><span>Criação de Armadilhas (CDA)</span><br>${CDA}</div>
                    <div class="campo0 campo2"><span>Percepção de Armadilhas (PA)</span><br>${PA}</div>
                    <div class="campo0 campo2"><span>Persuasão (PE)</span><br>${PE}</div>
                </div>
                ${elementtestes}
                ${bukiTtestes}
            </div>
        </div>
    </div>
    `)
//     FUNÇÕES

$('.fNome').resize();
$('.fCla').resize();
$('.fIdade').resize();
$('.fNiver').resize();
$('.fGenero').resize();
$('.fTendencia').resize();
$('.fPP').resize();

$('.bannerName').bannerResize();
$('.bannerTitle').bannerResize();

//     BOTÕES    

$('.fichaMenu img').click(function(){
    $('.fichaMenu img').removeClass('bActive');
    $('.fichaSecondaryContainer').removeClass('perfilContainer');
    $('.fichaSecondaryContainer').removeClass('repContainer');
    $('.fichaSecondaryContainer').removeClass('habContainer');
    $('.fichaSecondaryContainer').removeClass('arsenalContainer');
    $('.fichaSecondaryContainer').removeClass('extraContainer');
});

$('.buttonRep').click(function(){
    $('.fichaSecondaryContainer').addClass('repContainer');
    $('.buttonRep').addClass('bActive');
    $('.fGraduação').resize();
    $('.fSpecial').resize();
    $('.fAlcunhaLocal').resize();
    $('.fRep').resize();
    $('.fOrg').resize();
    $('.fPatente').resize();
});

$('.buttonPerfil').click(function(){
    $('.fichaSecondaryContainer').addClass('perfilContainer');
    $('.buttonPerfil').addClass('bActive');  
});

$('.buttonHab').click(function(){
    $('.fichaSecondaryContainer').addClass('habContainer');
    $('.buttonHab').addClass('bActive');  
    if(indialtura == 1) $('.habContainer').addClass('habContainer2');
    $('.fAssinatura').resize();
    $('.fff1').resize();
    $('.fff2').resize();
    $('.fff3').resize();
    $('.fKuchyose').resize();
});

$('.buttonArsenal').click(function(){
    $('.fichaSecondaryContainer').addClass('arsenalContainer');
    $('.buttonArsenal').addClass('bActive');  
});

$('.buttonExtra').click(function(){
    $('.fichaSecondaryContainer').addClass('extraContainer');
    $('.buttonExtra').addClass('bActive');  
});

$('.fCloseButton').click(function(){
    $('.spoilerActive').removeClass('spoilerActive');
    $('.spoilerContainer').removeClass('spoilerContainer');
});

$('.fButton img').click(function(){
    $('.fichaMainContainer').addClass('spoilerContainer');
});

$('.pButton img').click(function(){
    $('.fichaMainContainer').addClass('spoilerContainer');
});

$('.buttonDefeitos').click(function(){
    $('.defeitosSpoiler').addClass('spoilerActive');
});

$('.buttonHistoria').click(function(){
    $('.historiaSpoiler').addClass('spoilerActive');
});

$('.buttonFisica').click(function(){
    $('.fisicaSpoiler').addClass('spoilerActive');
});

$('.buttonMental').click(function(){
    $('.mentalSpoiler').addClass('spoilerActive');
});

$('.buttonBijuu').click(function(){
    $('.bijuuSpoiler').addClass('spoilerActive');
});

$('.buttonJutsu1').click(function(){
    $('.jutsu1Spoiler').addClass('spoilerActive');
});

$('.buttonJutsu2').click(function(){
    $('.jutsu2Spoiler').addClass('spoilerActive');
});

$('.buttonBornal').click(function(){
    $('.bornalSpoiler').addClass('spoilerActive');
});

$('.buttonEdl').click(function(){
    $('.edlSpoiler').addClass('spoilerActive');
});

$('.buttonCla').click(function(){
    $('.claSpoiler').addClass('spoilerActive');
});

$('.buttonQuirk').click(function(){
    $('.quirkSpoiler').addClass('spoilerActive');
});

$('.buttonElementos').click(function(){
    $('.elementosSpoiler').addClass('spoilerActive');
});

$('.buttonKuchyose').click(function(){
    $('.kuchyoseSpoiler').addClass('spoilerActive');
});

$('.buttonRelacionamentos').click(function(){
    $('.relacionamentosSpoiler').addClass('spoilerActive');
});

$('.buttonLinks').click(function(){
    $('.linksSpoiler').addClass('spoilerActive');
});

$('.buttonNotas').click(function(){
    $('.notasSpoiler').addClass('spoilerActive');
});

$('.buttonTalentos').click(function(){
    $('.talentosSpoiler').addClass('spoilerActive');
});

$('.buttonTestes').click(function(){
    $('.testesSpoiler').addClass('spoilerActive');
});


});});
