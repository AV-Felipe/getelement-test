document.getElementById('headTag').innerHTML += `
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Meu Maior Hobby</title>

    <!--OG tags-->
    <meta property="og:title" content="Meu Hobby" />
    <meta
      property="og:description"
      content="Segundo minha esposa, meu maior hobby é fazer bagunça, mas será?"
    />
    <meta
      property="og:image"
      content="https://av-felipe.github.io/resume/assets/images/pictures/og-me.jpg"
    />
    <meta property="og:locale" content="pt-BR" />
    <meta property="og:url" content="https://av-felipe.github.io/resume/" />

    <!--Style-->
    <link rel="stylesheet" href="styles.css" />
`;

document.getElementById('bodyTag').innerHTML = `
<header id="titleBox" role="banner">
        
    </header>

    <main id="mainContent">
      

    </main>
`;

document.getElementById('titleBox').innerHTML = `
<img src="assets/images/pictures/me-profile.jpg" id="pictureOfMeContainer" alt="meu bleo rosto" />

<div id="personalInfo">
  <h1>Biblioteca do Felipe</h1>

  <p>
    Olá, meu nome é Felipe, tenho 35 anos, sou casado e, Segundo minha esposa,
    o que eu mais gosto de fazer no mundo é bagunça.<br />
    Ainda segundo ela, o fim disso é tirar ela do sério. <br />
    Em minha defesa, eu digo que eu amo ler e trazer o que eu aprendo para minha
    vida :)
  </p>
</div>
`;

document.getElementById('mainContent').innerHTML = `<article>
        <h2>Boa companhia</h2>
        <p>
          Eu nunca pude me arrogar de ser uma pessoa popular, com muitos amigos e que sempre é convidada
          para as festas. Mas eu não digo isso em um tom de tristeza, ou lamúria, muito pelo contrário,
          eu nunca fui uma pessoa só (não no sentido Fernando Pessoa, mas no sentido de sozinho).
        </p>
        <p>
          Eu sou um amante de uma boa conversa, adoro escutar uma pessoa que é apaixonada pelo que faz
          falar sobre isso. Minha mãe sempre me criou sob a máxima "palavra tem peso" e essa terminou
          por compor parte do que eu sou hoje. Falar com pessoas que não estão apenas preenchendo o
          espaço com som é um enorme prazer.
        </p>
        <p>
          Ler um bom livro é exatamente isso: é você ser o interlocutor de uma pessoa que fala com compromisso
          (salvo se o compromisso for a falta de compromisso com o que se está falando, mas mesmo aí há um
          compromisso). Eu nunca ando só, como dizia Vinicius de Moraes, eu só ando em boa companhia.
        </p>

        <h2>Meus livros favoritos</h2>

        <ul class="projectsList">

          <li class="projectCard" role="listitem">
                <a href="https://www.amazon.com/Fellowship-Ring-Being-First-Rings/dp/0547928211/ref=pd_sbs_1/143-2046452-6582704?pd_rd_w=ssSAe&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=R4QEXZDBHQTCGXV5XTCV&pd_rd_r=87d80e1d-5f0c-4280-81ee-edfb8dc9be6e&pd_rd_wg=2diS9&pd_rd_i=0547928211&psc=1" target="_blank">
                <img
                  class="projectImage"
                  src="assets/images/pictures/fellowship-of-the-ring.jpg"
                  alt="html 5 logo"
                />
                </a>
                <span class="projectDescription"
                  >A sociedade do anel</span
                >
          </li>

          <li class="projectCard" role="listitem">
            <a href="https://www.amazon.com/Two-Towers-Being-Second-Rings/dp/0547928203/ref=pd_sbs_1/143-2046452-6582704?pd_rd_w=doiJH&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=TESD31QH93D47T30WFYX&pd_rd_r=da363979-b220-40a9-aca2-80dfd75204da&pd_rd_wg=5Pdkg&pd_rd_i=0547928203&psc=1" target="_blank">
            <img
              class="projectImage"
              src="assets/images/pictures/the-two-towers.jpg"
              alt="html 5 logo"
            />
            </a>
            <span class="projectDescription"
              >As duas torres</span
            >
          </li>

          <li class="projectCard" role="listitem">
            <a href="https://www.amazon.com/Return-King-Being-Third-Rings/dp/054792819X/ref=pd_sbs_1/143-2046452-6582704?pd_rd_w=EENRx&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=4042QFP1Q632VZXFV4BE&pd_rd_r=1990e4a0-fa4b-429f-8393-4136f946b7a2&pd_rd_wg=8t9TV&pd_rd_i=054792819X&psc=1" target="_blank">  
            <img
              class="projectImage"
              src="assets/images/pictures/the-return-of-the-king.jpg"
              alt="html 5 logo"
            />
           </a> 
            <span class="projectDescription"
              >O retorno do rei</span
            >
          </li>

          <li class="projectCard" role="listitem">
            <a href="https://www.amazon.com/Ring-Nibelung-P-Craig-Russel/dp/1506709192/ref=sr_1_3?crid=1OZG18KCEM8PL&keywords=the+ring+of+the+nibelung&qid=1637275837&sprefix=the+ring+o%2Caps%2C294&sr=8-3" target="_blank">    
            <img
              class="projectImage"
              src="assets/images/pictures/der-ring.jpg"
              alt="html 5 logo"
            />
            </a>
            <span class="projectDescription"
              >O anel do nibelungo</span
            >
          </li>

        </ul>

      </article>`;
