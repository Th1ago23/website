function toggleLanguage() {
    const language = document.documentElement.lang;

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
        document.querySelector(".collaborators p").textContent = "Colaboradores:";
        document.querySelector(".collaborators ul").innerHTML = `
            <li><a href="https://www.linkedin.com/in/maike-castilho-5161191b1/">Maike Castilho</a></li>
            <li><a href="https://www.linkedin.com/in/ronald-luigi-galv%C3%A3o-b310a9235/">Ronald Galvão</a></li>
            <li><a href="https://www.linkedin.com/in/pablo-pereiraa/">Pablo Pereira</a></li>
        `;
        // **Aqui estão as adições para a seção de contato**
        document.querySelector("#contact h1").textContent = "Contato";
        const socialIcons = document.querySelectorAll(".social-icon p");
        socialIcons[0].textContent = "GitHub"; // GitHub link
        socialIcons[1].textContent = "Email"; // Email link
        socialIcons[2].textContent = "LinkedIn"; // LinkedIn link
        socialIcons[3].textContent = "Currículo"; // Resume link

        document.querySelector("#skills h2").textContent = "Habilidades";
        document.querySelector("#experience h2").textContent = "Experiências";
        document.querySelector("#experience h3").textContent = "Estagiário de TI na CSN";
        document.querySelector(".experience span").textContent = "Maio 2024 - Presente | Volta Redonda, Brasil";
        document.querySelector(".experience p").innerHTML = `
            - Desenvolvi automações com SAP, otimizando a rotina de segunda, quarta e sexta-feira, o que reduziu em 2 horas o tempo de análise para conferência de valores.<br>
            - Criei automações no Excel utilizando VBA para calcular o saldo mensal de projetos, reduzindo significativamente os erros de análise da equipe.<br>
            - Minha experiência inclui a análise de projetos com CAPEX e OPEX, automação do envio de relatórios diários para aprovação do diretor com VBA, economizando mais de 8 horas semanais.<br>
            - Além disso, ministrei treinamento de inteligência artificial para a equipe, visando trazer melhorias e automações para a rotina.<br>
            - Elaborei planilhas de controle de projetos para aumentar a supervisão sobre as tarefas diárias e desenvolvi dashboards em Qlik Sense para migrar o dashboard de CAPEX do Power BI.<br>
            - Minha análise de dados em projetos avaliou status, CAPEX disponível, duração do projeto e requisitos de eventos.<br>
            - Participei de eventos de capacitação em metodologias e tecnologias para aprimorar as habilidades analíticas dos colaboradores em cibersegurança, ministrados pela Fortinet e Rockwell.<br>
            - Verifiquei requisições de compras diárias e enviei relatórios para aprovação do diretor, identifiquei melhorias no sistema financeiro responsável por monitorar todos os projetos da usina, e atualizei controles de projetos e prazos para envio ao planejador.<br>
            - Minhas responsabilidades também incluíram ajustes em hardwares e análise de itens de pagamentos compromissados para projetos em andamento.
        `;
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
        document.querySelector(".collaborators p").textContent = "Collaborators:";
        document.querySelector(".collaborators ul").innerHTML = `
            <li><a href="https://www.linkedin.com/in/maike-castilho-5161191b1/">Maike Castilho</a></li>
            <li><a href="https://www.linkedin.com/in/ronald-luigi-galv%C3%A3o-b310a9235/">Ronald Galvão</a></li>
            <li><a href="https://www.linkedin.com/in/pablo-pereiraa/">Pablo Pereira</a></li>
        `;
        // **Aqui estão as adições para a seção de contato**
        document.querySelector("#contact h1").textContent = "Contact";
        const socialIcons = document.querySelectorAll(".social-icon p");
        socialIcons[0].textContent = "GitHub"; // GitHub link
        socialIcons[1].textContent = "Email"; // Email link
        socialIcons[2].textContent = "LinkedIn"; // LinkedIn link
        socialIcons[3].textContent = "Resume"; // Resume link

        document.querySelector("#skills h2").textContent = "Skills";
        document.querySelector("#experience h2").textContent = "Experiences";
        document.querySelector("#experience h3").textContent = "IT Trainee at CSN";
        document.querySelector(".experience span").textContent = "May 2024 - Present | Volta Redonda, Brazil";
        document.querySelector(".experience p").innerHTML = `
            - I developed automations with SAP, optimizing the routine on Mondays, Wednesdays, and Fridays, which reduced analysis time by 2 hours for value verification.<br>
            - I created Excel automations using VBA to calculate monthly project balances, significantly reducing analysis errors within the team.<br>
            - My experience includes analyzing CAPEX and OPEX projects, automating daily report submissions for director approval with VBA, saving over 8 hours weekly.<br>
            - Additionally, I conducted artificial intelligence training for the team to introduce improvements and automations into their workflow.<br>
            - I designed project control spreadsheets to enhance oversight of daily projects and tasks and developed dashboards in Qlik Sense to migrate the CAPEX dashboard from Power BI.<br>
            - My data analysis on projects assessed status, available CAPEX, project duration, and event requirements.<br>
            - I participated in training events focused on methodologies and technologies to enhance employee analytical skills in cybersecurity, facilitated by Fortinet and Rockwell.<br>
            - I reviewed daily purchase requests and submitted reports for director approval, identified improvements within the financial system responsible for monitoring all projects at the plant, and updated project controls and timelines for submission to the project planner.<br>
            - My responsibilities also included making hardware adjustments and analyzing committed payment items for ongoing projects.
        `;
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
