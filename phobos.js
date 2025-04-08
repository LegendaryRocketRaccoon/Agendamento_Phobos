const phobosQuestions = [{ question: "O que é você?", answer: "Eu sou o Phobos, um assistente versátil, vou ajudar você com seu agendamento." },
    {question: "Qual sua função?", answer: "Fui integrado neste site como suporte, mas posso ser adaptado para diversas funções educacionais, interativas ou informativas." }, 
    {question: "Como faço um agendamento?", answer: "Para agendar, preencha o formulário acima com o laboratório, data e turno desejados, e clique em 'Adicionar Agendamento'." }, 
    { question: "Posso editar um agendamento depois de feito?", answer: "Sim, é possível editar agendamentos. Localize seu agendamento e selecione a opção 'Editar'." }, 
    { question: "Quais laboratórios estão disponíveis?", answer: "Você pode selecionar entre os laboratórios 1 ao 4 no campo 'Laboratório'." }, 
    { question: "Posso agendar mais de um turno no mesmo dia?", answer: "Sim, desde que o laboratório esteja disponível em ambos os turnos." }];

const container = document.getElementById("phobos-container"); const btn = document.getElementById("phobos-btn");

btn.addEventListener("click", () => { container.innerHTML = "<h5>Dúividas Frequentes</h5>"; phobosQuestions.forEach((q, i) => { const questionBtn = document.createElement("button"); questionBtn.textContent = q.question; questionBtn.className = "btn btn-outline-primary btn-sm d-block w-100 my-1"; questionBtn.onclick = () => { alert(q.answer); }; container.appendChild(questionBtn); }); container.style.display = container.style.display === "none" ? "block" : "none"; });