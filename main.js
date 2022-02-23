$(document).ready(function(){
    console.log('Ficha Script 1.3 Running');

    $('.fichaMain').html(`
    <div class="fichaMainContainer verde">
        <div class="bannerFundo"></div><div class="titleFundo"></div><div class="sideFundoFundo"></div><div class="sideFundo"></div><div class="fTexture"></div>
        <svg class="bannerImage" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="516.783" height="175.001" viewBox="0 0 516.783 175.001"><defs><pattern id="a" width="1" height="1" viewBox="0 334.693 516.783 175.001"><image preserveAspectRatio="xMidYMid slice" width="516.783" href="https://preview.redd.it/l4hrb9axe8771.jpg?width=1750&format=pjpg&auto=webp&s=9a9bee4754ad5e947f0ff7b486e60e9da51fae0b"/></pattern></defs><path d="M702,211H185.217a112.51,112.51,0,0,0,0-175H702V211Z" transform="translate(-185.217 -36)" fill="url(#a)"/></svg>
        <div class="perfilImage" style="background-image: url(https://i.imgur.com/9GhsI8l.jpg);"></div>
        <div class="fVila vKonoha"></div><div class="pvp pvpOff"></div>
        <svg class="fLevel" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><defs><style>.a,.c{fill:none;}.b,.d{fill:#eaeade;font-family:Arial-Black, Arial;font-weight:800;letter-spacing:0.087em;}.b{font-size:12px;}.c{stroke:#fff;stroke-width:1.7px;}.d{font-size:27px;}</style></defs><rect class="a" width="50" height="50"/><g transform="translate(-198 -355)"><g transform="translate(200 356)"><text class="b" transform="translate(0 13)"><tspan x="0" y="0">LEVEL</tspan></text></g><line class="c" x2="46" transform="translate(200.5 373)"/><g transform="translate(205 367)"><text class="d" transform="translate(19 30)"><tspan x="-19.183" y="0">49</tspan></text></g></g></svg>
        <div class="bannerName">Sarutobi Ikoma</div><div class="bannerTitle">Alcunha Regional - Alcunha Mundial</div>
        <div class="fichaMenu">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Perfil.svg" class="buttonPerfil bActive">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Reputação.svg" class="buttonRep">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Habilidades.svg" class="buttonHab">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Arsenal.svg" class="buttonArsenal">
            <img src="https://shinobiworldrpg.github.io/Ficha/assets/Extra.svg" class="buttonExtra">
        </div>
        <div class="fichaSecondaryContainer perfilContainer">
            <div class="perfilContent">
                <div class="campo0 fNome"><span>Nome</span><br>Sarutobi Ikoma</div>
                <div class="campo0 fCla"><span>Clã / KG / HI</span><br>Sarutobi</div>
                <div class="campo0 fIdade"><span>Idade</span><br>17 anos</div>
                <div class="campo0 fNiver"><span>Aniversário</span><br>Primavera</div>
                <div class="campo0 fGenero"><span>Gênero</span><br>Masculino</div>
                <div class="campo0 fTendencia"><span>Tendência</span><br>Caçador de Emoções</div>
                <div class="campo0 fPP"><span>Personagem Base</span><br>Ikoma (World Trigger)</div>
                <div class="perfilButtons">
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Defeitos.svg" class="buttonDefeitos"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Historia.svg" class="buttonHistoria"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Desc Fis.svg" class="buttonFisica"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Desc Mental.svg" class="buttonMental"></div>
                    <div class="pButton"><img src="https://shinobiworldrpg.github.io/Ficha/assets/Bijuu.svg" class="buttonBijuu"></div>
                </div>
            </div>
            <div class="repContent">
                <div class="campo0 fVIla"><span>Vila</span><br>Konohagakure</div>
                <div class="campo0 fGraduação"><span>Graduação</span><br>Chunin</div>
                <div class="campo0 fSpecial"><span>Cargo Especial</span><br>N/a</div>
                <div class="campo0 fAlcunhaLocal"><span>Alcunha Local</span><br>N/a</div>
                <div class="campo0 fAlcunhaMundial"><span>Alcunha Mundial</span><br>N/a</div>
                <div class="campo0 fRep"><span>Reputação</span><br>Nv.10 - Ninja Dedicado</div>
                <div class="campo0 fOrg"><span>Organização / Time</span><br>N/a</div>
                <div class="campo0 fPatente"><span>Profissão e Patente</span><br>Herbologista - Auxiliar Experiente</div>
                <div class="fMissões"><center><span>Missões</span></center><hr>
                    RANK S - 00
                    RANK A - 00
                    RANK B - 02
                    RANK C - 05
                    RANK D - 13
                    RANK E - 103
                </div>
            </div>
            <div class="habContent">
                <div class="campo0 fNivel"><span>Nível</span><br>49</div>
                <div class="campo0 fExp"><span>Exp</span><br>5720 / 6040</div>
                <div class="campo0 fAssinatura"><span>Técnica Assinatura</span><br>N/a</div>
                <div class="campo0 fIndividualidade"><span>Individualidade</span><br>Chakra Suppression Technique</div>
                <div class="campo0 fKuchyose"><span>Kuchyose</span><br>N/a</div>
                <div class="fatributos">
                    <div class="attC"><span>Ninjutsu - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Taijutsu - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Genjutsu - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Força - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Destreza - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Constituição - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Inteligência - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Atenção - 3</span><div class="barBar" style="width: 30%;"></div><div class="barOutline"></div></div>
                    <div class="attC"><span>Carisma - 10</span><div class="barBar" style="width: 100%;"></div><div class="barOutline"></div></div>
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
                <div class="fMoney"><span>Dinheiro</span> 5.000.000 RY$</div>
            </div>
        </div>
        <div class="defeitosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Defeitos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="historiaSpoiler fSpoiler">
            <div class="fSpoilerTitle">História<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="fisicaSpoiler fSpoiler">
            <div class="fSpoilerTitle">Descrição Física<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="mentalSpoiler fSpoiler">
            <div class="fSpoilerTitle">Descrição Mental<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="bijuuSpoiler fSpoiler">
            <div class="fSpoilerTitle">Bijuu<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="jutsu1Spoiler fSpoiler">
            <div class="fSpoilerTitle">Jutsus Básicos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="jutsu2Spoiler fSpoiler">
            <div class="fSpoilerTitle">Jutsus Gerais<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="bornalSpoiler fSpoiler">
            <div class="fSpoilerTitle">Bornal<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="edlSpoiler fSpoiler">
            <div class="fSpoilerTitle">EDL<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="claSpoiler fSpoiler">
            <div class="fSpoilerTitle">Descrição de Clã / KG<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="quirkSpoiler fSpoiler">
            <div class="fSpoilerTitle">Individualidades<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="elementosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Elementos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="kuchyoseSpoiler fSpoiler">
            <div class="fSpoilerTitle">Kuchyose no Jutsu<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="relacionamentosSpoiler fSpoiler">
            <div class="fSpoilerTitle">Relacionamentos<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="linksSpoiler fSpoiler">
            <div class="fSpoilerTitle">Links Comprobatórios<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
        </div>
        <div class="notasSpoiler fSpoiler">
            <div class="fSpoilerTitle">Anotações Gerais<img src="https://shinobiworldrpg.github.io/Ficha/assets/CloseButton.png" class="fCloseButton"></div>
            <div class="fSpoilerContent"></div>
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
