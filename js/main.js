const botao = document.getElementById('btn');
const imagem = document.getElementById('image');
const som = document.getElementById('sound')

botao.addEventListener('click', () => {
    botao.style.display = 'none';
    imagem.classList.add('pop-in');
    som.currentTime = 0;  
    som.play().catch(err => {

      console.warn('Não foi possível tocar o som:', err);
    });
  });