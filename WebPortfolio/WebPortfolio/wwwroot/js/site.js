const projectsData = {
    'Overtime-Request': {
        title: 'Overtime Request',
        content: `
            <h3>Sistema de Gestión de Horas Extra</h3>
            <h4>Descripción General</h4>
            <p>Aplicación de apoyo para el área de Recursos Humanos que permite calcular costos en tiempos extra de empleados de planta. 
            <span style="color: #bdc3c7;">OvertimeRequest</span> calcula los costos de comidas, transporte, salario y gestiona las paradas de los camiones.</p>
            
            <h4>Características Principales</h4>
            <ul>
                <li>Calcula costos en salarios, comidas y transporte</li>
                <li>Hace CRUD completo de usuarios, roles y paradas</li>
                <li>Muestra tablas de datos, permitiendo editar desde el frontend a usuarios con rol administrador</li>
                <li>Integración con sistema de autenticación SSO</li>
                <li>Reportes automáticos de costos por departamento</li>
            </ul>
            
            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Proyecto:</span> .NET Core, .NET 8, Arquitectura <span style="text-decoration: underline;">MVC</span></li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Backend:</span> C# y JavaScript</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3, Bootstrap</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Base de Datos:</span> SQL Server</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Autenticación:</span> SSO (Single Sign-On)</li>
            </ul>
            
            <h4>Duración del Proyecto</h4>
            <p>1 año de desarrollo, del cual aporté al mantenimiento durante 3 meses en Daikin Manufacturing Mexico</p>
        `
    },
};

/* DOM Elements */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('close-modal');
const cards = document.querySelectorAll('.card, .xp-card'); // Agregué .xp-card para incluir las tarjetas de experiencia

/* Funciones */
function openModal(projectKey) {
    const project = projectsData[projectKey];
    if (project) {
        modalTitle.textContent = project.title;
        modalBody.innerHTML = project.content;
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

/* Event Listeners */
cards.forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        if (projectKey && projectsData[projectKey]) { // Validación adicional
            openModal(projectKey);
        }
    });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});


function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}