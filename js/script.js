const btnAbrirConvite = document.getElementById("btnAbrirConvite");
const cartaOverlay = document.getElementById("cartaOverlay");
const siteCasamento = document.getElementById("siteCasamento");

btnAbrirConvite.addEventListener("click", () => {
  cartaOverlay.classList.add("aberta");
  siteCasamento.classList.add("revelado");

  setTimeout(() => {
    cartaOverlay.classList.add("sumir");

    document.body.classList.remove("convite-fechado");
    document.body.classList.add("convite-aberto");
  }, 1700);
});

const fotoViewer = document.getElementById("fotoViewer");
const fotoViewerImg = document.getElementById("fotoViewerImg");
const fotoViewerTitle = document.getElementById("fotoViewerTitle");
const fotoViewerDesc = document.getElementById("fotoViewerDesc");
const fecharFoto = document.getElementById("fecharFoto");

document.body.appendChild(fotoViewer);

document.querySelectorAll(".polaroid-card").forEach((foto) => {
  foto.addEventListener("click", () => {
    fotoViewerImg.src = foto.dataset.img;
    fotoViewerTitle.textContent = foto.dataset.title;
    fotoViewerDesc.textContent = foto.dataset.text;

    fotoViewer.classList.add("ativo");
    document.body.classList.add("sem-scroll");
  });
});

function fecharViewer() {
  fotoViewer.classList.remove("ativo");
  document.body.classList.remove("sem-scroll");
}

fecharFoto.addEventListener("click", fecharViewer);

fotoViewer.addEventListener("click", (event) => {
  if (event.target === fotoViewer) {
    fecharViewer();
  }
});







// Defina aqui a data do seu casamento (Ano, Mês [0-11], Dia, Hora, Minutos)
// Nota: No JavaScript os meses começam no 0 (Janeiro = 0, Novembro = 10)
const dataDoCasamento = new Date(2026, 10, 14, 17, 0, 0).getTime();

const atualizarContador = setInterval(function() {
  const agora = new Date().getTime();
  const diferenca = dataDoCasamento - agora;

  // Cálculos matemáticos para converter milissegundos em Dias, Horas, Minutos e Segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Injeta os valores calculados diretamente no HTML
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;

  // Se a data chegar ao fim, para o contador
  if (diferenca < 0) {
    clearInterval(atualizarContador);
    document.querySelector(".countdown-container").innerHTML = "<h3>É hoje!</h3>";
  }
}, 1000);













// INSIRA A URL DO SEU WEBHOOK AQUI
const URL_WEBHOOK = 'https://n8n-n8n.xwskpb.easypanel.host/webhook/c05b73ea-e6bf-465b-a059-e711c186665c';

// Escuta quando o botão de enviar for clicado
document.getElementById('form-rsvp').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede a página de recarregar

  // Captura as informações de todos os campos juntos
  const dadosDoConvidado = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    presenca: document.querySelector('input[name="presenca"]:checked').value,
    mensagem: document.getElementById('mensagem').value
  };

  // Dispara os dados para o seu Webhook
  fetch(URL_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosDoConvidado) // Transforma as informações em formato de texto JSON
  })
  .then(resposta => {
    if (resposta.ok) {
      alert('Presença confirmada e mensagem enviada com sucesso! ❤️');
      document.getElementById('form-rsvp').reset(); // Limpa o formulário automaticamente
    } else {
      alert('Ops! Ocorreu um erro ao enviar. Tente novamente.');
    }
  })
  .catch(erro => {
    console.error('Erro na requisição:', erro);
    alert('Erro de conexão. Verifique sua internet ou tente mais tarde.');
  });
});




















const musica = document.getElementById('musica-convite');
const btnMusica = document.getElementById('btn-musica');
const iconeMusica = document.getElementById('icone-musica');

btnMusica.addEventListener('click', function() {
  if (musica.paused) {
    musica.play();
    btnMusica.classList.add('playing');
    // Troca o ícone para "Pause" quando estiver tocando
    iconeMusica.className = 'fa-solid fa-pause';
  } else {
    musica.pause();
    btnMusica.classList.remove('playing');
    // Volta o ícone para a nota musical quando pausado
    iconeMusica.className = 'fa-solid fa-music';
  }
});

// BÔNUS ELEGANTE: Tenta tocar a música assim que o convidado clicar 
// em QUALQUER lugar do convite (como ao rolar a página ou clicar nos inputs)
document.addEventListener('click', function() {
  if (musica.paused && !btnMusica.classList.contains('playing')) {
    musica.play().then(() => {
      btnMusica.classList.add('playing');
      iconeMusica.className = 'fa-solid fa-pause';
    }).catch(error => {
      // O navegador bloqueou o autoplay (normal), o usuário precisará clicar no botão redondo.
      console.log("Autoplay bloqueado pelo navegador.");
    });
  }
}, { once: true }); // O '{ once: true }' garante que esse teste só rode no primeiríssimo clique
























// ----------------------------------------------------
// SUPABASE E EXIBIÇÃO DE MENSAGENS
// ----------------------------------------------------
const supabaseUrl = 'https://mfsdmzgwbpakmcncakyc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mc2Rtemd3YnBha21jbmNha3ljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTE2NjYzNCwiZXhwIjoyMDk2NzQyNjM0fQ.D3wnuTIi8N5_KQ6XL9LK3lntcXPqOWaBNRNYwpBBZEc';

// Confirma se a biblioteca do supabase carregou corretamente
if (typeof supabase !== 'undefined') {
  const _supabase = supabase.createClient(supabaseUrl, supabaseKey);
  let todasAsMensagens = [];

  const containerPreview = document.getElementById('container-preview');
  const containerModal = document.getElementById('container-modal');
  const btnVerMais = document.getElementById('btn-ver-mais');
  const modal = document.getElementById('meu-modal');
  const btnFecharModal = document.querySelector('.fechar-modal');

  function criarCardHTML(item) {
      return `
          <div class="card-mensagem">
              <h3>${item.name || 'Anônimo'}</h3>
              <p>"${item.message || item.mensagem}"</p> 
          </div>
      `;
  }

  async function carregarDados() {
      // Se não encontrou onde colocar as mensagens, nem executa
      if (!containerPreview) return; 

      const { data, error } = await _supabase
          .from('wedding_confirmations') 
          .select('*');

      if (error) {
          console.error('Erro ao buscar dados do Supabase:', error);
          return;
      }

      todasAsMensagens = data || [];
      if (todasAsMensagens.length === 0) return;

      const primeirasTres = todasAsMensagens.slice(0, 3);
      containerPreview.innerHTML = primeirasTres.map(item => criarCardHTML(item)).join('');

      if (todasAsMensagens.length > 3 && btnVerMais) {
          btnVerMais.style.display = 'inline-block';
      }
  }

  if (btnVerMais && modal && containerModal) {
    btnVerMais.addEventListener('click', () => {
        containerModal.innerHTML = todasAsMensagens.map(item => criarCardHTML(item)).join('');
        modal.style.display = 'flex'; // Exibe o modal
        document.body.classList.add('sem-scroll'); // Bloqueia rolagem do site atrás
    });
  }

  if (btnFecharModal && modal) {
    btnFecharModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('sem-scroll');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('sem-scroll');
        }
    });
  }

  document.addEventListener('DOMContentLoaded', carregarDados);
}