// Функция для добавления частиц с задержкой
function addParticlesWithDelay(count, delay) {
    const particlesContainer = document.querySelector('.particles');
    let particlesAdded = 0;

    const addParticle = () => {
        if (particlesAdded >= count) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = '100vw'; // Начальная позиция справа
        particle.style.top = `${Math.random() * 500}vh`; // Случайная позиция по вертикали
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Случайная длительность анимации
        particle.style.animationDelay = `${Math.random() * 2}s`; // Случайная задержка анимации
        particlesContainer.appendChild(particle);

        particlesAdded++;
        setTimeout(addParticle, delay); // Рекурсивно добавляем частицы с задержкой
    };

    // Задержка перед началом добавления частиц
    setTimeout(addParticle, 10); // Задержка 3 секунды
}

// Добавляем 100 частиц с задержкой 100 мс между каждой
addParticlesWithDelay(300, 10);