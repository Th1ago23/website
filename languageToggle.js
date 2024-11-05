function toggleLanguage() {
    const language = document.documentElement.lang;

    // Se a linguagem for "en", troque para "pt-BR", caso contrário, troque para "en"
    if (language === "en") {
        document.documentElement.lang = "pt-BR";
        
        // Atualize o conteúdo para português
        document.querySelector(".hero-content h1").innerHTML = "Olá.<br> Eu sou <br> <span class='highlight'>Thiago</span>";
        document.querySelector(".hero-content p").textContent = "Desenvolvedor FullStack";
        
        // Links na barra de navegação social
        document.querySelector(".social a[href='#projects']").textContent = "Projetos";
        document.querySelector(".social a[href='#about-me']").textContent = "Sobre Mim";
        document.querySelector(".social a[href='#contact']").textContent = "Contato";
        document.querySelector(".social a[href='#experience']").textContent = "Experiências";
        
        document.querySelector("#projects h2").textContent = "Meus Projetos";
        document.querySelector("#about-me h2").textContent = "Sobre Mim";
        document.querySelector("#about-me p").textContent = "Olá, meu nome é Thiago e tenho 23 anos. Sou um desenvolvedor full stack que trabalha com Java, Spring, JavaScript, React e Angular. Estou cursando Sistemas de Informação na UniFOA e atualmente estou no sexto semestre. Gosto de desenvolver projetos no meu tempo livre e também de passar tempo com a família e amigos. Espero que goste do meu site! Obrigado pelo seu tempo 💙";
        document.querySelector("#contact h1").textContent = "Contato";
        document.querySelector("#skills h2").textContent = "Habilidades";
        document.querySelector("#experience h2").textContent = "Experiências";
        document.querySelector("#experience h3").textContent = "Estagiário de TI na CSN";
        document.querySelector(".experience span").textContent = "Maio 2024 - Presente | Volta Redonda, Brasil";
        document.querySelector(".experience p").textContent = "Desenvolvi automações com VB para melhorar e expandir a margem de produção do dia a dia da equipe. Consegui ajudar a aumentar a produção das atividades em 20% ao automatizar planilhas e controles dentro do sistema financeiro. Fui parte da metodologia ágil do dia a dia (Scrum), bem como reuniões diárias e cooperação na melhoria dos relatórios da equipe.";
        document.querySelector(".footer-content p").textContent = "© 2024 Thiago Peixoto dos Santos. Todos os direitos reservados.";
        document.querySelector("#language-toggle").textContent = "English";
    } else {
        document.documentElement.lang = "en";
        
        // Atualize o conteúdo para inglês
        document.querySelector(".hero-content h1").innerHTML = "Hello.<br> I am <br> <span class='highlight'>Thiago</span>";
        document.querySelector(".hero-content p").textContent = "FullStack Developer";
        
        // Links na barra de navegação social
        document.querySelector(".social a[href='#projects']").textContent = "Projects";
        document.querySelector(".social a[href='#about-me']").textContent = "About Me";
        document.querySelector(".social a[href='#contact']").textContent = "Contact";
        document.querySelector(".social a[href='#experience']").textContent = "Experiences";
        
        document.querySelector("#projects h2").textContent = "My Projects";
        document.querySelector("#about-me h2").textContent = "About Me";
        document.querySelector("#about-me p").textContent = "Hello, my name is Thiago and I'm 23 years old. I'm a full stack developer working with Java, Spring, JavaScript, React, and Angular. I'm studying Information Systems at UniFOA and I'm currently in my sixth semester. I enjoy developing projects in my spare time and also spending time with family and friends. I hope you like my site! Thanks for your time 💙";
        document.querySelector("#contact h1").textContent = "Contact";
        document.querySelector("#skills h2").textContent = "Skills";
        document.querySelector("#experience h2").textContent = "Experiences";
        document.querySelector("#experience h3").textContent = "IT Trainee at CSN";
        document.querySelector(".experience span").textContent = "May 2024 - Present | Volta Redonda, Brazil";
        document.querySelector(".experience p").textContent = "I developed automations with VB to improve and expand the team's day-to-day production margin. I was able to help increase the production of activities by 20% by automating spreadsheets and controls within the financial system. I was part of a day-to-day agile methodology (Scrum) as well as daily meetings and cooperation in improving the team's reports.";
        document.querySelector(".footer-content p").textContent = "© 2024 Thiago Peixoto dos Santos. All rights reserved.";
        document.querySelector("#language-toggle").textContent = "Português";
    }
}

// Defina a linguagem inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Defina a linguagem padrão para inglês
    if (!document.documentElement.lang) {
        document.documentElement.lang = "en"; // Definindo a linguagem inicial como inglês
    } else if (document.documentElement.lang === "pt-BR") {
        toggleLanguage(); // Chama a função para trocar o conteúdo para português se a linguagem for pt-BR
    }
});
