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

$(document).ready(function(){
    console.log('Ficha Script 1.4 Running');
    
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
    var missoes = $('missoes').text();
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

    // CONVERSÂO DA PÁGINA

    $('.fichaMain').html(`
    <div class="fichaMainContainer verde">
        <div class="bannerFundo"></div><div class="titleFundo"></div><div class="sideFundoFundo"></div><div class="sideFundo"></div><div class="fTexture"></div>
        <svg class="bannerImage" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="516.783" height="175.001" viewBox="0 0 516.783 175.001"><defs><pattern id="a" width="1" height="1" viewBox="0 334.693 516.783 175.001"><image preserveAspectRatio="xMidYMid slice" width="516.783" href="${banner}"/></pattern></defs><path d="M702,211H185.217a112.51,112.51,0,0,0,0-175H702V211Z" transform="translate(-185.217 -36)" fill="url(#a)"/></svg>
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
                <div class="campo0 fNome"><span>Nome</span><br>${nome}</div>
                <div class="campo0 fCla"><span>Clã / KG / HI</span><br>${cla}</div>
                <div class="campo0 fIdade"><span>Idade</span><br>${idade} anos</div>
                <div class="campo0 fNiver"><span>Aniversário</span><br>${niver}</div>
                <div class="campo0 fGenero"><span>Gênero</span><br>${genero}</div>
                <div class="campo0 fTendencia"><span>Tendência</span><br>${tendencia}</div>
                <div class="campo0 fPP"><span>Personagem Base</span><br>${origem}</div>
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
                <div class="campo0 fGraduação"><span>Graduação</span><br>${graduation}</div>
                <div class="campo0 fSpecial"><span>Cargo Especial</span><br>${especial}</div>
                <div class="campo0 fAlcunhaLocal"><span>Alcunha Local</span><br>${alcunhaLocal}</div>
                <div class="campo0 fAlcunhaMundial"><span>Alcunha Mundial</span><br>${alcunhaMundial}</div>
                <div class="campo0 fRep"><span>Reputação</span><br>${rep}</div>
                <div class="campo0 fOrg"><span>Organização / Time</span><br>${time}</div>
                <div class="campo0 fPatente"><span>Profissão e Patente</span><br>${profissao}</div>
                <div class="fMissões"><center><span>Missões</span></center><hr>
                    ${missoes}</div>
            </div>
            <div class="habContent">
                <div class="campo0 fNivel"><span>Nível</span><br>${level}</div>
                <div class="campo0 fExp"><span>Exp</span><br>${exp}</div>
                <div class="campo0 fAssinatura"><span>Técnica Assinatura</span><br>${assinatura}</div>
                <div class="campo0 fIndividualidade"><span>Individualidade</span><br>${individualidade}</div>
                <div class="campo0 fKuchyose"><span>Kuchyose</span><br>${kuchyose}</div>
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
                <div class="fMoney"><span>Dinheiro</span> ${dinheiro} RY$</div>
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
            <div class="fSpoilerContent"${bijuu}></div>
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
            <div class="fSpoilerContent"></div>
        </div>
        <div class="testesSpoiler fSpoiler">
            <div class="fSpoilerTitle">Testes<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent">
                <div class="fReservas">
                    <div class="campo0"><span>Vitalidade</span><br>0</div>
                    <div class="campo0"><span>Chakra</span><br>0</div>
                    <div class="campo0"><span>Saúde Mental</span><br>0</div>
                    <div class="campo0"><span>Stamina</span><br>0</div>
                    <div class="campo0" style="margin-right: 0px;"><span>Vontade</span><br>0</div>
                </div>
                <div class="fTestes">
                    <div class="campo0 campo2"><span>Alcance de Ninjutsu (AN)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade de Ninjutsu (VN)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade de Conjuração (VC)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade de Selos de Mãos (VSM)</span><br>0</div>
                    <div class="campo0 campo2"><span>Dano de Ninjutsu (DN)</span><br>0</div>
                    <div class="campo0 campo2"><span>Alcance de Genjutsu (AG)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade de Expansão de Genjutsu (VEG)</span><br>0</div>
                    <div class="campo0 campo2"><span>Precisão do Genjutsu (PG)</span><br>0</div>
                    <div class="campo0 campo2"><span>Percepção de Genjutsu (PdG)</span><br>0</div>
                    <div class="campo0 campo2"><span>Dano Físico (DF)</span><br>0</div>
                    <div class="campo0 campo2"><span>Dano com Armas (DA)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade de Arremesso (VAR)</span><br>0</div>
                    <div class="campo0 campo2"><span>Precisão de Arremesso (PAR)</span><br>0</div>
                    <div class="campo0 campo2"><span>Defesa Física (DF)</span><br>0</div>
                    <div class="campo0 campo2"><span>Capacidade de Carga (CC)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade do Personagem (VP)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade dos Golpes (VG)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade do Saque (VS)</span><br>0</div>
                    <div class="campo0 campo2"><span>Reflexos (RE)</span><br>0</div>
                    <div class="campo0 campo2"><span>Percepção de Movimentos (PM)</span><br>0</div>
                    <div class="campo0 campo2"><span>Percepção de Mentiras (PMS)</span><br>0</div>
                    <div class="campo0 campo2"><span>Criação de Armadilhas (CDA)</span><br>0</div>
                    <div class="campo0 campo2"><span>Velocidade no Preparo de Armadilhas (VPA)</span><br>0</div>
                    <div class="campo0 campo2"><span>Percepção de Armadilhas (PA)</span><br>0</div>
                    <div class="campo0 campo2 campofinal"><span>Persuasão (PE)</span><br>0</div>
                </div>
            </div>
        </div>
    </div>
    `)


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
});

$('.buttonPerfil').click(function(){
    $('.fichaSecondaryContainer').addClass('perfilContainer');
    $('.buttonPerfil').addClass('bActive');  
});

$('.buttonHab').click(function(){
    $('.fichaSecondaryContainer').addClass('habContainer');
    $('.buttonHab').addClass('bActive');  
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

});
