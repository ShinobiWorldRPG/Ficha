var vernsionControl = 1;
var elementCount = 1;
var bukiCount = 1;
var postFicha = '';

$(document).ready(function(){
    console.log(`Forms Script Running, ver ${vernsionControl}`);

    fetch("https://shinobiworldrpg.github.io/Ficha/talentos.json").then(response => {return response.json();}).then(data => {
        var talentList = '';
        var elementList = '';
        var bukiList = '';

        for (let index = 0; index < data.length; index++) {
            if(index > 65 && index < 80) elementList += `<option value="${index + 1}">${index+1}- ${data[index].name}</option>`;
            else if(index > 234 && index < 253) bukiList += `<option value="${index + 1}">${index+1}- ${data[index].name}</option>`;
            else talentList += `<option value="${index + 1}">${index+1}- ${data[index].name}</option>`;
        }
        $('#talentos').html(talentList);
        $('.talentosElementais').html(elementList);
        $('.talentosBuki').html(bukiList);
    });
    $('#talentos').select2({closeOnSelect: false, placeholder: "Selecione seus Talentos", allowClear: true});
    $('.talentosElementais').select2({closeOnSelect: false, placeholder: "Selecione seus Talentos", allowClear: true});
    $('.talentosBuki').select2({closeOnSelect: false, placeholder: "Selecione seus Talentos", allowClear: true});
});

$('#copy').click(function(){
    postContent();
    copyTextToClipboard(postFicha);
    alert('código copiado');
});

$('#finalizar').click(function(){
    postContent();
});

$('#newElement').click(function(){
    elementCount += 1;
    $('.elementos').last().after(
        `<div class="elementos">
            <span class="formTitle">Elemento ${elementCount}</span>` +
            `<label class="elementais">
                <br><input type="text" class="elementName" placeholder="Nome do elemento">
            </label>       
            <label class="elementTalent element${elementCount}">
                Talentos Elementais<br>
                <select name="talentosElementais" class="talentosElementais" multiple>${$('.talentosElementais').html()}</select>
            </label>
        </div>`
    )
    $('.talentosElementais').select2({closeOnSelect: false, placeholder: "Selecione seus Talentos", allowClear: true});
});

$('#deletElement').click(function(){
    if(elementCount > 1){
        elementCount -= 1;
        $('.elementos').last().remove();
    }
});

$('#newBuki').click(function(){
    bukiCount += 1;
    $('.armas').last().after(
        `<div class="armas">
            <span class="formTitle">Arma ${bukiCount}</span>` +
            `<label class="buki">
                <br><input type="text" class="bukiName" placeholder="Nome da Arma">
            </label>       
            <label class="bukiTalent">
                Talentos de Arma<br>
                <select name="talentosBuki" class="talentosBuki" multiple>${$('.talentosBuki').html()}</select>
            </label>
        </div>`
    )
    $('.talentosBuki').select2({closeOnSelect: false, placeholder: "Selecione seus Talentos", allowClear: true});
});

$('#deleteBuki').click(function(){
    if(bukiCount > 1){
        bukiCount -= 1;
        $('.armas').last().remove();
    }
});

$('.avatar').click(function(){
    $(this).html('');
    $(this).css("background-image", `url(${prompt("Insira o link da imagem")})`);
});

$('.banner').click(function(){
    $(this).html('');
    $(this).css("background-image", `url(${prompt("Insira o link da imagem")})`);
});

$('#exp').focusout(function(){
    var i;
    var j = Number($(this).val());

    if(j >= 6040) i = 50;
    else if(j >= 5720) i = 50 - 1;
    else if(j >= 5400) i = 49 - 1;
    else if(j >= 5080) i = 48 - 1;
    else if(j >= 4760) i = 47 - 1;
    else if(j >= 4440) i = 46 - 1;
    else if(j >= 4120) i = 45 - 1;
    else if(j >= 3800) i = 44 - 1;
    else if(j >= 3480) i = 43 - 1;
    else if(j >= 3160) i = 42 - 1;
    else if(j >= 2840) i = 41 - 1;
    else if(j >= 2600) i = 40 - 1;
    else if(j >= 2360) i = 39 - 1;
    else if(j >= 2120) i = 38 - 1;
    else if(j >= 1880) i = 37 - 1;
    else if(j >= 1640) i = 36 - 1;
    else if(j >= 1520) i = 35 - 1;
    else if(j >= 1400) i = 34 - 1;
    else if(j >= 1280) i = 33 - 1;
    else if(j >= 1160) i = 32 - 1;
    else if(j >= 1040) i = 31 - 1;
    else if(j >= 980) i = 30 - 1;
    else if(j >= 920) i = 29 - 1;
    else if(j >= 860) i = 28 - 1;
    else if(j >= 800) i = 27 - 1;
    else if(j >= 740) i = 26 - 1;
    else if(j >= 680) i = 25 - 1;
    else if(j >= 620) i = 24 - 1;
    else if(j >= 560) i = 23 - 1;
    else if(j >= 500) i = 22 - 1;
    else if(j >= 440) i = 21 - 1;
    else if(j >= 400) i = 20 - 1;
    else if(j >= 360) i = 19 - 1;
    else if(j >= 320) i = 18 - 1;
    else if(j >= 280) i = 17 - 1;
    else if(j >= 240) i = 15;
    else if(j >= 200) i = 14;
    else if(j >= 180) i = 13;
    else if(j >= 160) i = 12;
    else if(j >= 140) i = 11;
    else if(j >= 120) i = 10;
    else if(j >= 100) i = 9;
    else if(j >= 80) i = 8;
    else if(j >= 70) i = 7;
    else if(j >= 60) i = 6;
    else if(j >= 50) i = 5;
    else if(j >= 40) i = 4;
    else if(j >= 30) i = 3;
    else if(j >= 20) i = 2;
    else i = 1;

    $('#level').val(i);
});

function levelCheck(level){
    if(Number(level) < 10) return '0' + level;
    else return level;
}

function expCheck(j){
    if(j >= 6040) return 6040;
    else if(j >= 5720) return 6040;
    else if(j >= 5400) return 5720;
    else if(j >= 5080) return 5400;
    else if(j >= 4760) return 5080;
    else if(j >= 4440) return 4760;
    else if(j >= 4120) return 4440;
    else if(j >= 3800) return 4120;
    else if(j >= 3480) return 3800;
    else if(j >= 3160) return 3480;
    else if(j >= 2840) return 3160;
    else if(j >= 2600) return 2840;
    else if(j >= 2360) return 2600;
    else if(j >= 2120) return 2360;
    else if(j >= 1880) return 2120;
    else if(j >= 1640) return 1880;
    else if(j >= 1520) return 1640;
    else if(j >= 1400) return 1520;
    else if(j >= 1280) return 1400;
    else if(j >= 1160) return 1280;
    else if(j >= 1040) return 1160;
    else if(j >= 980) return 1040;
    else if(j >= 920) return 980;
    else if(j >= 860) return 920;
    else if(j >= 800) return 860;
    else if(j >= 740) return 800;
    else if(j >= 680) return 740;
    else if(j >= 620) return 680;
    else if(j >= 560) return 620;
    else if(j >= 500) return 560;
    else if(j >= 440) return 500;
    else if(j >= 400) return 440;
    else if(j >= 360) return 400;
    else if(j >= 320) return 360;
    else if(j >= 280) return 320;
    else if(j >= 240) return 280;
    else if(j >= 200) return 240;
    else if(j >= 180) return 200;
    else if(j >= 160) return 180;
    else if(j >= 140) return 160;
    else if(j >= 120) return 140;
    else if(j >= 100) return 120;
    else if(j >= 80) return 100;
    else if(j >= 70) return 80;
    else if(j >= 60) return 70;
    else if(j >= 50) return 60;
    else if(j >= 40) return 50;
    else if(j >= 30) return 40;
    else if(j >= 20) return 30;
    else return 20;
}

function talentInterpreter(){
    var obj = $('#talentos').val();
    var texto = '';
    for (let index = 0; index < obj.length; index++) {
        if(index > 0) texto += '/';
        texto += obj[index];
    }
    return texto;
}

function elementInterpreter(){
    var texto = '';
    $('.elementos').each(function(i , obj){
        var elemento = $(this).find('.elementName').val();
        if(i > 0 && elemento !== '') texto += '&';
        if( elemento !== '') texto += elemento + '/';
        var obj = $(this).find('.talentosElementais').val();
        for (let index = 0; index < obj.length; index++) {
            if(index > 0) texto += '/';
            texto += obj[index];
        }
    })
    return texto;
}

function bukiInterpreter(){
    var texto = '';
    $('.armas').each(function(i , obj){
        var elemento = $(this).find('.bukiName').val();
        if(i > 0 && elemento !== '') texto += '&';
        if( elemento !== '') texto += elemento + '/';
        var obj = $(this).find('.talentosBuki').val();
        for (let index = 0; index < obj.length; index++) {
            if(index > 0) texto += '/';
            texto += obj[index];
        }
    })
    return texto;
}

function bijuuCheck(texto){
    if (texto == '') return '[center][img]https://shinobiworldrpg.github.io/Ficha/assets/noBijuu.png[/img][/center]';
    else return texto;
}

function postContent(){
    postFicha = 
`<link rel="stylesheet" href="https://shinobiworldrpg.github.io/Ficha/style.css">
<div class="fichaMain" style="all: initial;">
[img]https://shinobiworldrpg.github.io/Ficha/assets/error.png[/img]
<div style="display: none;">
----INSTRUÇÕES DE EDIÇÃO----

Insira os dados sempre no meio das "tags" com o nome do dado, ex: <Dado>INSIRA A INFORMAÇÃO DO CAMPO AQUI</Dado>>

----------------------------
LINK DO BANNER DA FICHA
<banner>${$('.avatar').css("background-image").split('"')[1]}</Banner>

LINK DO AVATAR DA FICHA
<avatar>${$('.avatar').css("background-image").split('"')[1]}</avatar>

OPÇÃO DE PVP, DIGITE off PARA DESLIGADA E on PARA LIGADA
<pvp>${$('#pvp').val()}</pvp>

<nome>${$('#nome').val()}</nome>
<cla>${$('#cla').val()}</cla>
<idade>${$('#idade').val()}</idade>
<niver>${$('#niver').val()}</niver>
<genero>${$('#genero').val()}</genero>
<tendencia>${$('#tendencia').val()}</tendencia>

ORIGEM É REFERENTE A QUE OBRA VEM A IMAGEM DE SEU PERSONAGEM
<origem>${$('#origem').val()}</origem>

<vila>${$('#vila').val()}</vila>
<graduation>${$('#graduação').val()}</graduation>
<especial>${$('#especial').val()}</especial>
<profissao>${$('#profissão').val()}</profissao>
<local>${$('#local').val()}</local>
<mundial>${$('#mundial').val()}</mundial>
<reputacao>${$('#reputação').val()}</reputacao>
<time>${$('#org').val()}</time>

<missoes><br><br>RANK S - ${$('#S').val()}
<br>RANK A - ${$('#A').val()}
<br>RANK B - ${$('#B').val()}
<br>RANK C - ${$('#C').val()}
<br>RANK D - ${$('#D').val()}
<br>GAIDEN - ${$('#gaiden').val()}</missoes>

<level>${levelCheck($('#level').val())}</level>
<exp>${$('#exp').val()} / ${expCheck($('#D').val())}</exp>
<dinheiro>${$('#dinheiro').val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</dinheiro>

<assinatura>${$('#assinatura').val()}</assinatura>
<individualidade>${$('#quirk1').val()}</individualidade>
<individualidade2>${$('#quirk2').val()}</individualidade2>
<individualidade3>${$('#quirk3').val()}</individualidade3>
<invocacao>${$('#invocação').val()}</invocacao>

<ninjutsu>${$('#ninjutsu').val()}</ninjutsu>
<taijutsu>${$('#taijutsu').val()}</taijutsu>
<genjutsu>${$('#genjutsu').val()}</genjutsu>
<forca>${$('#força').val()}</forca>
<destreza>${$('#destreza').val()}</destreza>
<constituicao>${$('#constituição').val()}</constituicao>
<inteligencia>${$('#inteligência').val()}</inteligencia>
<atencao>${$('#atenção').val()}</atencao>
<carisma>${$('#carisma').val()}</carisma>

ESCREVA AQUI OS ÍNDICES DOS TALENTOS QUE VOCÊ POSSUI COM OS NÚMEROS SEPARADOS POR BARRAS, EX: 1/3/5/7
NÃO COLOQUE OS TALENTOS ELEMENTAIS OU DE BUKIJUTSU NESTE CAMPO
<talentos>${talentInterpreter()}</talentos>

O CAMPO ABAIXO É RESERVADO PARA TALENTOS ELEMENTAIS, VOCÊ PODE COLOCAR QUALQUER ELEMENTO, APENAS ESPECIFIQUE PARA QUAL É O TALENTO, NO SEGUINTE FORMATO: NOME DO ELEMENTO/INDICE DOS TALENTOS SEPARADOS POR BARRA & NOME DO 2 ELEMENTO/...
<Elementais>${elementInterpreter()}</Elementais>

O CAMPO ABAIXO É RESERVADO PARA TALENTOS DE ARMAS (BUKIJUTSU), VOCÊ PODE COLOCAR QUALQUER ARMA, APENAS ESPECIFIQUE PARA QUAL É O TALENTO, NO SEGUINTE FORMATO: ARMA1/236/238 & ARMA2/236/237/238
<buki>${bukiInterpreter()}</buki>

OS BÔNUS DO CLÃ SÃO RESPECTIVAMENTE: VITALIDADE/CHAKRA/SAÚDE MENTAL/STAMINA/VONTADE
<BonusCla>${$('#vitalidade').val()}/${$('#chakra').val()}/${$('#sanidade').val()}/${$('#stamina').val()}/${$('#vontade').val()}</BonusCla>

<historia>${$('#historia').val()}</historia>
<aparencia>${$('#descFisica').val()}</aparencia>
<personalidade>${$('#descMental').val()}</personalidade>

<relacionamentos>
${$('#relacionamentos').val()}
</relacionamentos>

<defeitos>
${$('#defeitos').val()}
</defeitos>

<links>${$('#links').val()}</links>
<notas>${$('#notas').val()}</notas>
</div>

<!--CÓDIGO PARA O SEGUNDO POST ABAIXO,CASO O NÚMERO DE CARACTERES FIQUE MUITO GRANDE-->
<div style="display: none;">

<jutsusBasicos>${$('#jBasicos').val()}</jutsusBasicos>

<jutsusGerais>${$('#jGerais').val()}</jutsusGerais>

<armamentos>${$('#bornal').val()}</armamentos>

<EDL>${$('#edl').val()}</EDL>
</div>

<!--CÓDIGO PARA O TERCEIRO POST ABAIXO,CASO O NÚMERO DE CARACTERES FIQUE MUITO GRANDE-->
<div style="display: none;">

<DescricaoCla>${$('#descCla').val()}</DescricaoCla>

<DescricaoIndividualidade>${$('#descQuirk').val()}</DescricaoIndividualidade>

<elementos>${$('#descElementos').val()}</elementos>

<kuchyose>${$('#descInvicação').val()}</kuchyose>

<bijuu>
${bijuuCheck($('#bijuu').val())}
</bijuu>

</div>
</div>`;
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}