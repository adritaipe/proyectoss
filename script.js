document.addEventListener('DOMContentLoaded', function () {
    const mostrarMasBtn = document.getElementById('mostrar-mas');
    const mostrarMenosBtn = document.getElementById('mostrar-menos');
    const experienciaSection = document.querySelector('.experiencia');
    const educacionSection = document.querySelector('.educacion');

    // Ocultar secciones de experiencia y educación al cargar la página
    experienciaSection.style.display = 'none';
    educacionSection.style.display = 'none';

    // Mostrar secciones de experiencia y educación al hacer clic en "Mostrar más"
    mostrarMasBtn.addEventListener('click', function () {
        experienciaSection.style.display = 'block';
        educacionSection.style.display = 'block';
        mostrarMasBtn.style.display = 'none';
    });

    // Ocultar secciones de experiencia y educación al hacer clic en "Mostrar menos"
    mostrarMenosBtn.addEventListener('click', function () {
        experienciaSection.style.display = 'none';
        educacionSection.style.display = 'none';
        mostrarMasBtn.style.display = 'block';
    });
});
