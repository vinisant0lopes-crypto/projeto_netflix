const DATA =[
    {
        id: 1,
        nome:'F1',
        nota:'7.6',
        imagem:'https://image.tmdb.org/t/p/w1280/lDhZdEJ4FA6qshezJGDFDSQ20Jw.jpg',
        sinopse: 'Apelidado de “o melhor que nunca existiu”, Sonny Hayes foi o fenômeno mais promissor da Fórmula 1 na década de 1990 até que um acidente na pista quase encerrou sua carreira. Trinta anos depois, ele é um piloto nômade contratado quando é abordado por seu ex-companheiro de equipe Ruben Cervantes, dono de uma equipe de FÓRMULA 1 em dificuldades que está à beira do colapso. Ruben convence Sonny a voltar à FÓRMULA 1 para uma última chance de salvar a equipe e ser o melhor do mundo. Ele pilotará ao lado de Joshua Pearce, o melhor novato da equipe que pretende definir seu próprio ritmo. Mas à medida que os motores rugem, o passado de Sonny o alcança e ele descobre que, na FÓRMULA 1, seu companheiro de equipe é sua competição mais feroz — e o caminho para a redenção não é algo que você possa percorrer sozinho.'
    },
    {
        id: 2,
        nome:'Titanic',
        nota:'8.0',
        imagem:'https://image.tmdb.org/t/p/w1280/As0zX43h3w6kD2NS4uVHu9HKdEh.jpg',
        sinopse:"Jack Dawson (Leonardo DiCaprio) é um jovem aventureiro que, na mesa de jogo, ganha uma passagem para a primeira viagem do transatlântico Titanic. Trata-se de um luxuoso e imponente navio, anunciado na época como inafundável, que parte para os Estados Unidos. Nele está também Rose DeWitt Bukater (Kate Winslet), a jovem noiva de Caledon Hockley (Billy Zane). Rose está descontente com sua vida, já que sente-se sufocada pelos costumes da elite e não ama Caledon. Entretanto, ela precisa se casar com ele para manter o bom nome da família, que está falida. Um dia, desesperada, Rose ameaça se atirar do Titanic, mas Jack consegue demovê-la da ideia. Pelo ato ele é convidado a jantar na primeira classe, onde começa a se tornar mais próximo de Rose. Logo eles se apaixonam, despertando a fúria de Caledon. A situação fica ainda mais complicada quando o Titanic se choca com um iceberg, provocando algo que ninguém imaginava ser possível: o naufrágio do navio."
    },
    {
        id: 3,
        nome:'Viva A Vida É Uma Festa',
        nota:'8.4',
        imagem:'https://image.tmdb.org/t/p/w1280/6oNm06TPz2vGiPc2I52oXW3JwPS.jpg',
        sinopse:"Em Viva - A Vida é uma Festa, Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos. A aventura, com inspiração no feriado mexicano do Dia dos Mortos, acaba gerando uma extraordinária reunião familiar.",
    },
    {
        id: 4,
        nome:'Cruella',
        nota:'7.0',
        imagem:'https://image.tmdb.org/t/p/w1280/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
        sinopse:"Ambientado na Londres dos anos 70 em meio à revolução do punk rock, o filme da Disney mostra a história de uma jovem vigarista chamada Estella (Emma Stone). Inteligente, criativa e determinada a fazer um nome para si através de seus designs, ela acaba chamando a atenção da Baronesa Von Hellman (Emma Thompson), uma lenda fashion que é devastadoramente chique e assustadora. Entretanto, o relacionamento delas desencadeia um curso de eventos e revelações que farão com que Estella abrace seu lado rebelde e se torne a Cruella, uma pessoa má, elegante e voltada para a vingança. "


        
    },
    {
        id: 5,
        nome:'O Rei Leão',
        nota:'8.5',
        imagem:'https://www.themoviedb.org/t/p/w1280/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg',
        sinopse:"Clássico da Disney, a animação acompanha Mufasa (voz de James Earl Jones), o Rei Leão, e a rainha Sarabi (voz de Madge Sinclair), apresentando ao reino o herdeiro do trono, Simba (voz de Matthew Broderick). O recém-nascido recebe a bênção do sábio babuíno Rafiki (voz de Robert Guillaume), mas ao crescer é envolvido nas artimanhas de seu tio Scar (voz de Jeremy Irons), o invejoso e maquiavélico irmão de Mufasa, que planeja livrar-se do sobrinho e herdar o trono."
    },
    {
        id: 6,
        nome:'Vingadores: Guerra Infinita',
        nota:'8.4',
        imagem:'https://www.themoviedb.org/t/p/w1280/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg',
        sinopse:"Em Vingadores: Guerra Infinita, Thanos (Josh Brolin) enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes."
    },
    {
        id: 7,
        nome:'Godzilla: King Of The Monsters',
        nota:'6.0',
        imagem:'https://www.themoviedb.org/t/p/w1280/2umU3r6V4V2gTmSnZJmH61nTorF.jpg',
        sinopse:"Nesta continuação que se passa cinco anos após Godzilla (2014), os integrantes da agência Monarch precisam lidar com a súbita aparição de vários monstros, incluindo Mothra, Rodan e Ghidorah. Enquanto buscam uma aliança com o próprio Godzilla a fim de garantir o equilíbrio da Terra, os humanos acabam fazendo parte de uma grande disputa por poder protagonizada por titãs."
    },
    {
        id: 8,
        nome:'Barbie Em Um Mundo De Videogame',
        nota:'5.0',
        imagem:'https://www.themoviedb.org/t/p/w1280/oG7k645sHlGCvsVGfalFJblIKcv.jpg',
        sinopse:"O jogo favorito da Barbie está em perigo, ele foi dominado pelo vírus emoji. Então a boneca é convidada por Cutie, o tutorial do jogo, para entrar no videogame e vencer todos os níveis até salvá-lo. Tudo começa ainda no Nível 1, com Barbie e seus novos amigos e jogadores, Bella e Kris.E o último nível reserva muitas aventuras. Será que Barbie vai salvar o jogo?"
    },
    {
        id: 9,
        nome:'Gigante De Aço',
        nota:'7.1',
        imagem:'https://www.themoviedb.org/t/p/w1280/pp74uUjwQTknGPqNrerj4FvU0ce.jpg',
        sinopse:"Num futuro não muito distante, as lutas de boxe já não são mais travadas entre seres humanos e sim através de robôs enormes, capazes de desferir golpes ultrapotentes e impactantes no oponente e para o espectador. Neste ambiente, Charlie (Hugh Jackman) é um ex-boxeador falido, que se vira com máquinas obsoletas e, quase sempre, perdedoras. Morando de favor com Bailey (Evangeline Lilly), filha de seu falecido treinador, ele acaba sendo chamado pela Justiça por causa da morte da ex-mulher e a futura guarda do filho deles. O problema é que Max (Dakota Goyo) tem 11 anos, Charlie nunca teve o menor contato com ele e, por isso, prefere que ele fique com a cunhada, mediante o pagamento de uma polpuda 'recompensa'. Mas o garoto é muito esperto e aos poucos vai conquistando o coração do lutador. Para completar, o menino é uma fera nos videos games e tem chances reais de ajudá-lo a treinar uma nova máquina de combate e mudar para sempre o destino deles. Agora, tudo que eles precisam é começar do zero e ir subindo no ranking para enfrentar o campeão dos campeões."
    },
    {
        id: 10,
        nome:'Gente Grande',
        nota:'6.0',
        imagem:'https://www.themoviedb.org/t/p/w1280/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg',
        sinopse:"Em Gente Grande, Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram para curtir um fim de semana juntos com as respectivas famílias, mas o feriado de 4 de Julho em uma casa no lago promete muito mais diversão do que apenas lembranças dos bons momentos. Casados e com várias crianças, os homens de família terão de confrontar o fato de não serem mais tão jovens."
    }

];

export default DATA;