const projectsData = {
    'Overtime-Request': {
        title: 'OVERTIME REQUEST',
        content: `
            <h3>Sistema de Gestión de Horas Extra</h3>
            <h4>Descripción General</h4>
            <p>Aplicación de apoyo para el área de Recursos Humanos que permite calcular costos en tiempos extra de empleados de planta. 
            <span style="color: #bdc3c7;">OvertimeRequest</span> calcula los costos de comidas, transporte,
            salario y gestiona las paradas de los camiones.</p>
            
            <h4>Características Principales</h4>
            <ul>
                <li>Aplicacion web desarrollada en .NET 8</li>
                <li>Calcula costos en salarios, comidas y transporte</li>
                <li>Hace CRUD completo de usuarios, roles y paradas</li>
                <li>Muestra tablas de datos, permitiendo editar desde el frontend a usuarios con rol administrador</li>
                <li>Integración con sistema de autenticación SSO</li>
                <li>Reportes automáticos de costos por departamento</li>
                <li>Envia actualizaciones automaticas al correo electronico</li>
            </ul>
            
            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Proyecto:</span> .NET Core, .NET 8, Arquitectura
                <span style="text-decoration: underline;">MVC</span></li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Backend:</span> C# y JavaScript</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3, Bootstrap</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Base de Datos:</span> SQL Server</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Autenticación:</span> SSO (Single Sign-On)</li>
            </ul>
            
            <h4>Duración del Proyecto</h4>
            <p>1 año de desarrollo, del cual aporté al mantenimiento durante 3 meses en Daikin Manufacturing Mexico</p>
        `
    },

    'Etiquetas': {
        title: 'ETIQUETAS',
        content: `
            <h3>Aplicación de impresion de etiquetas</h3>

            <h4>Descripción General</h4>
            <p>Aplicacion de escritorio desarrollado para Warehouse area, la aplicación diseña una etiqueta con codigo de barras
            para el facil escaneo del producto que sale. una vez diseñada la etiqueta, esta se envia a imprimir. </p>

            <h4>Funciones Principales</h4>
            <ul>
                <li>Aplicacion de Escritorio</li>
                <li>Busca los datos del supplier part Number y Daikin part number desde Oracle ERP</li>
                <li>Los datos los organiza en formato de etiqueta</li>
                <li>Convierte el supplier Part Number en codigo de barras con ayuda de una tipografia gratuita</li>
                <li>Manda a imprimir a una impresora designada</li>
                <li>En caso de requerirse, los margenes y la impresora asi como las tipografias, se pueden editar desde el .json</li>
            </ul>

            <h4>Tecnologías Usadas</h4>
            <ul>
                <li>Aplicacion Windows C#</li>
                <li>.NET 6</li>
                <li>ORACLE ERP</li>
                <li>Conección con API para consulta de Queries</li>
                <li>Archivos .JSON</li>
            </ul>

            <h4>Duración del Proyecto</h4>
            <p>De 2 a 3 Semanas</p>
        `
    },

    'Portafolio-Web': {
        title: 'PORTAFOLIO WEB',
        content: `
            <h3>Portafolio de desarrollador</h3>
            <h4>Descripción General</h4>
            <p>
            Aplicación web con diseño atractivo con el objetivo de mostrar a empresas y colaboradores las opciones de desarrollo
            manejadas hasta el momento, tecnologias dominadas y proyectos interesantes, ademas de la ruta de conocimientos
            y la trayectoria del desarrollador.
            </p>
            
            <h4>Características Principales</h4>
            <ul>
                <li>Aplicacion web desarrollada en .NET 8</li>
                <li>Muestra correctamente quien soy y en que proyectos he aportado</li>
                <li>Usa interfaz atractiva, minimalista y obscura con animaciones atractivas</li>
                <li>Opcion de crecimiento fácil a futuro </li>
            </ul>
            
            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Proyecto:</span> .NET Core, .NET 8, Arquitectura
                <span style="text-decoration: underline;">MVC</span></li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Backend:</span> JavaScript</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3</li>
            </ul>
            
            <h4>Duración del Proyecto</h4>
            <p>1 Mes</p>
        `
    },

    'Placas': {
        title: 'PLACAS',
        content: `
            <h4>Sistema de Multas en Placas</h4>
            Aplicación escolar de registro de placas en automoviles para la materia de programacion de base de datos.
            La aplicacion permite realizar un CRUD en la base de datos MySQL.

            <h4>Características Principales</h4>
            <ul>
                <li>Pagina web desarrollada completamente en PHP</li>
                <li>Hace correctamente todo el proceso del CRUD e implementa una UX intuitiva</li>
                <li>Conecta a base de datos en XAMPP</li>
            </ul>

            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Backend:</span> PHP</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Base de Datos:</span> XAMPP (MySql)</li>
            </ul>

            <h4>Duración del Proyecto</h4>
            <p>2 Meses</p>
        `
    },

    'Spa-Project': {
        title: 'Spa Project',
        content: `
            <h3>SPA Zahara responsive</h3>
            <p>
                Una pagina web con la que se practico el responsive en diferentes dispositivos, ademas de el diseño UX/UI
                y buenas practicas en diseño inicial en el desarrollo de una web.
            </p>

        <h4>Características Principales</h4>
            <ul>
                <li>Alojada en Github Pages</li>
                <li>Pagina web desarrollada diseñada para ser esteticamente atractiva</li>
                <li>implementacion principalmente de CSS</li>
                <li>Simulación de una landing page para un SPA</li>
            </ul>

            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3</li>
            </ul>

            <h4>Duración del Proyecto</h4>
            <p>3 Semanas</p>

            <h4>Visita la pagina</h4>
            <p><a href="https://ricardoalejandrosantillan.github.io/spaPage/index.html">Click aqui</a> para visitar la pagina del Spa</p>
        `
    },

    'Daikin': {
        title: 'DAIKIN MANUFACTURING MEXICO',
        content: `
            <h3>IT Trainee</h3>
            <h4>Período</h4>
            <p><span style="color: #bdc3c7;">09/2024 - 09/2025</span></p>
            
            <h4>Descripción del Puesto</h4>
            <p>Programa de entrenamiento en el área de Tecnologías de la Información, enfocado en desarrollo 
            de software empresarial y soporte a sistemas internos de la empresa.</p>
            
            <h4>Responsabilidades Principales</h4>
            <ul>
                <li>Mantenimiento y soporte del sistema OvertimeRequest para Recursos Humanos</li>
                <li>Desarrollo de aplicación de escritorio para generación de etiquetas en área de Warehouse</li>
                <li>Integración con Oracle ERP para consulta de datos empresariales</li>
                <li>Implementación de soluciones de automatización de procesos</li>
                <li>Colaboración con equipos multidisciplinarios en proyectos de IT</li>
                <li>Documentación técnica y capacitación a usuarios finales</li>
            </ul>
            
            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Lenguajes:</span> C#, .NET 6/8, JavaScript</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Bases de Datos:</span> SQL Server, Oracle ERP</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frameworks:</span> ASP.NET Core, MVC</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Herramientas:</span> Visual Studio, Git, Oracle SQL Developer</li>
            </ul>
            
            <h4>Logros Destacados</h4>
            <ul>
                <li>Optimización del sistema de cálculo de horas extra, reduciendo tiempos de proceso en 30%</li>
                <li>Implementación exitosa de sistema de etiquetado automático para Warehouse</li>
                <li>Contribución al cumplimiento de estándares ISO en procesos de IT</li>
            </ul>
        `
    },

    'College': {
        title: 'INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN',
        content: `
            <h3>Universidad Tangamanga</h3>
            <h4>Período</h4>
            <p><span style="color: #bdc3c7;">05/2022 - 09/2025</span></p>
            
            <h4>Descripción del Programa</h4>
            <p>Programa de ingeniería enfocado en el desarrollo de soluciones tecnológicas, programación, 
            análisis de sistemas y gestión de proyectos de TI.</p>
            
            <h4>Áreas de Estudio Principales</h4>
            <ul>
                <li>Programación Orientada a Objetos</li>
                <li>Desarrollo Web Frontend y Backend</li>
                <li>Bases de Datos y Análisis de Sistemas</li>
                <li>Arquitectura de Software</li>
                <li>Redes y Seguridad Informática</li>
                <li>Metodologías Ágiles y Gestión de Proyectos</li>
                <li>Matemáticas Aplicadas y Estadística</li>
            </ul>
            
            <h4>Lenguajes y Tecnologías Aprendidas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Lenguajes:</span> C#, Java, Python, PHP, JavaScript, Visual Basic</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frameworks:</span> .NET, ASP.NET Core, Bootstrap</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Bases de Datos:</span> SQL Server, MySQL, Oracle</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Herramientas:</span> Visual Studio, NetBeans, IntelliJ, Git</li>
            </ul>
            
            <h4>Proyectos Académicos Destacados</h4>
            <ul>
                <li>Sistema de gestión de multas vehiculares (PHP + MySQL)</li>
                <li>Aplicaciones web con arquitectura MVC</li>
                <li>Proyectos de análisis de datos con Python</li>
                <li>Sistemas de información empresarial</li>
            </ul>
            
            <h4>Estado Actual</h4>
            <p>Estudiante de último semestre con enfoque en desarrollo de software empresarial y automatización de procesos.</p>
        `
    },

    'Smart-Teaching': {
        title: 'SMART TEACHING',
        content: `
            <h3>Preparación para TOEFL Test B2</h3>
            <h4>Período</h4>
            <p><span style="color: #bdc3c7;">05/2025 - 11/2025</span></p>
            
            <h4>Descripción del Programa</h4>
            <p>Programa intensivo de preparación para el examen TOEFL (Test of English as a Foreign Language) 
            con nivel objetivo B2 del Marco Común Europeo de Referencia para las Lenguas.</p>
            
            <h4>Áreas de Estudio</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Reading:</span> Comprensión de textos académicos y técnicos</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Listening:</span> Comprensión auditiva de conferencias y conversaciones</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Speaking:</span> Expresión oral estructurada y fluida</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Writing:</span> Redacción de ensayos académicos y técnicos</li>
            </ul>
            
            <h4>Competencias Desarrolladas</h4>
            <ul>
                <li>Comunicación técnica en inglés para el ámbito profesional de TI</li>
                <li>Comprensión de documentación técnica internacional</li>
                <li>Participación efectiva en reuniones y presentaciones en inglés</li>
                <li>Redacción de reportes técnicos y correos profesionales</li>
            </ul>
            
            <h4>Aplicación Profesional</h4>
            <p>Esta certificación me permitirá trabajar en entornos internacionales, colaborar con equipos 
            globales de desarrollo y acceder a documentación técnica avanzada en inglés.</p>
            
            <h4>Objetivo</h4>
            <p>Obtener certificación TOEFL B2 para ampliar oportunidades profesionales en el campo de las 
            tecnologías de la información a nivel internacional.</p>
        `
    },

    'Office-Certificate': {
        title: 'MICROSOFT OFFICE SPECIALIST',
        content: `
            <h3>Certificación MOS</h3>
            <h4>Año de Obtención</h4>
            <p><span style="color: #bdc3c7;">2020</span></p>
            
            <h4>Descripción de la Certificación</h4>
            <p>Certificación oficial de Microsoft que valida las competencias en el uso avanzado 
            de las aplicaciones de Microsoft Office Suite.</p>
            
            <h4>Aplicaciones Certificadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Microsoft Word:</span> Procesamiento de textos avanzado</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Microsoft Excel:</span> Análisis de datos y cálculos complejos</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Microsoft PowerPoint:</span> Presentaciones profesionales</li>
            </ul>
            
            <h4>Competencias Validadas</h4>
            <ul>
                <li>Creación y formateo de documentos profesionales</li>
                <li>Análisis de datos con fórmulas y funciones avanzadas</li>
                <li>Creación de gráficos y tablas dinámicas</li>
                <li>Diseño de presentaciones impactantes y profesionales</li>
                <li>Automatización de tareas con macros básicas</li>
                <li>Colaboración y revisión de documentos</li>
            </ul>
            
            <h4>Aplicación Profesional</h4>
            <p>Esta certificación me ha permitido crear reportes técnicos, análisis de datos, 
            documentación de proyectos y presentaciones profesionales en mi experiencia laboral en Daikin.</p>
            
            <h4>Ventajas en el Ámbito IT</h4>
            <ul>
                <li>Documentación técnica clara y profesional</li>
                <li>Análisis de métricas y KPIs de proyectos</li>
                <li>Presentaciones efectivas para stakeholders</li>
                <li>Gestión eficiente de información empresarial</li>
            </ul>
        `
    }
};

/* DOM Elements */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('close-modal');
const cards = document.querySelectorAll('.card, .xp-card');

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