const projectsData = {
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

            <div style="background-image: url('/src/Portfolio/portfolio.webp'); background-size: cover; width: 70%; height: 250px; border-radius: 10px;
                cursor: pointer; margin: 25px auto 0 auto;"></div>
            
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

            <div style="width: 100%; height: 35px; display: flex;
                flex-direction: row; gap: 2%; justify-content: center; ">

                    <!-- HTML5 -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6B35" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>

                    <!-- CSS3 -->
                    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#1572B6" d="M8.5 5l2.5 35.5L24 44l13-3.5L39.5 5z"/>
                        <path fill="#33A9DC" d="M24 8v31.5l8.2-2.2 1.8-26.3z"/>
                        <path fill="#FFFFFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"/>
                        <path fill="#EBEBEB" d="M24 13v4h-5l-.3-4zm-5.5 9l.2 4H24v-4zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4z"/>
                    </svg>

                    <!-- JavaScript -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>

                    <!-- GitHub -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
            </div>
            
            <h4>Duración del Proyecto</h4>
            <p>1 Mes</p>
        `
    },

    'Overtime-Request': {
        title: 'OVERTIME REQUEST',
        content: `
            <h3>Sistema de Gestión de Horas Extra</h3>
            <h4>Descripción General</h4>
            <p>Aplicación de apoyo para el área de Recursos Humanos que permite calcular costos en tiempos extra de empleados de planta. 
            <span style="color: #bdc3c7;">OvertimeRequest</span> calcula los costos de comidas, transporte,
            salario y gestiona las paradas de los camiones.</p>

            <div style="display: flex; flex-direction: columns; width: 90%; height: 150px; margin: 20px auto 0 auto; gap: 2%;">
                <div style="aspect-ratio: 1 / 1; background-image: url('./src/OvertimeRequest/3.webp'); background-repeat: no-repeat;
                    background-size: cover; width: 47%; height: 100%; border-radius: 10px; cursor: pointer;"></div>
                <div style="aspect-ratio: 1 / 1; background-image: url('./src/OvertimeRequest/2.webp'); background-repeat: no-repeat;
                    background-size: cover; background-position: center; object-fit: contain; width: 47%; height: 100%; border-radius: 10px;
                    cursor: pointer;"></div>
            </div>
            
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

            <div style="background-image: url('./src/OvertimeRequest/OvertimeRequest.webp'); background-repeat: no-repeat;
                    background-size: contain; background-position: center; object-fit: contain;
                width: 70%; height: 250px; border-radius: 15px; cursor: pointer; margin: 25px auto 0 auto;"></div>
            
            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Proyecto:</span> .NET Core, .NET 8, Arquitectura
                <span style="text-decoration: underline;">MVC</span></li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Backend:</span> C# y JavaScript</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3, Bootstrap</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Base de Datos:</span> SQL Server</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Autenticación:</span> SSO (Single Sign-On)</li>
            </ul>

            <div style="width: 100%; height: 35px; display: flex;
                flex-direction: row; gap: 2%; justify-content: center; ">

                    <!-- HTML5 -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6B35" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>

                    <!-- CSS3 -->
                    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#1572B6" d="M8.5 5l2.5 35.5L24 44l13-3.5L39.5 5z"/>
                        <path fill="#33A9DC" d="M24 8v31.5l8.2-2.2 1.8-26.3z"/>
                        <path fill="#FFFFFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"/>
                        <path fill="#EBEBEB" d="M24 13v4h-5l-.3-4zm-5.5 9l.2 4H24v-4zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4z"/>
                    </svg>

                    <!-- JavaScript -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>

                    <!-- GitHub -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>

                    <!-- SQL -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#00B4DB" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.34 6 3s-2.69 3-6 3-6-1.34-6-3 2.69-3 6-3zM6 9.86c1.22.84 3.11 1.38 5.24 1.51v.01c.27.01.53.02.76.02s.49-.01.76-.02v-.01C14.89 11.24 16.78 10.7 18 9.86V12c0 1.66-2.69 3-6 3s-6-1.34-6-3V9.86zm0 4c1.22.84 3.11 1.38 5.24 1.51v.01c.27.01.53.02.76.02s.49-.01.76-.02v-.01c2.13-.13 4.02-.67 5.24-1.51V16c0 1.66-2.69 3-6 3s-6-1.34-6-3v-2.14z"/>
                    </svg>
            </div>
            
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

            <div style="background-image: url('/src/Etiquetas/etiquetas.webp'); background-size: contain;
                background-repeat: no-repeat; width: 70%; height: 250px; border-radius: 10px; cursor: pointer; margin: 25px auto 0 auto;"></div>

            <h4>Tecnologías Usadas</h4>
            <ul>
                <li>Aplicacion Windows C#</li>
                <li>.NET 6</li>
                <li>ORACLE ERP</li>
                <li>Conección con API para consulta de Queries</li>
                <li>Archivos .JSON</li>
            </ul>

            <div style="width: 100%; height: 35px; display: flex;
                flex-direction: row; gap: 2%; justify-content: center; ">

                    <!-- C# -->
                    
                    <!-- GitHub -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>

                    <!-- Oracle -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF0000" d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.82a7.588 7.588 0 0 0 0-15.176zm-.193 11.27H7.786a3.685 3.685 0 0 1-3.681-3.682 3.684 3.684 0 0 1 3.681-3.682h8.433A3.684 3.684 0 0 1 19.9 12a3.683 3.683 0 0 1-3.681 3.682z"/>
                    </svg>
            </div>

            <h4>Duración del Proyecto</h4>
            <p>De 2 a 3 Semanas</p>
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

            <div style="background-color: grey; width: 70%; height: 250px; border-radius: 10px;
                cursor: pointer; margin: 25px auto 0 auto;"></div>

            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Backend:</span> PHP</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3</li>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Base de Datos:</span> XAMPP (MySql)</li>
            </ul>

            <div style="width: 100%; height: 35px; display: flex;
                flex-direction: row; gap: 2%; justify-content: center; ">

                    <!-- HTML5 -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6B35" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>

                    <!-- CSS3 -->
                    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#1572B6" d="M8.5 5l2.5 35.5L24 44l13-3.5L39.5 5z"/>
                        <path fill="#33A9DC" d="M24 8v31.5l8.2-2.2 1.8-26.3z"/>
                        <path fill="#FFFFFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"/>
                        <path fill="#EBEBEB" d="M24 13v4h-5l-.3-4zm-5.5 9l.2 4H24v-4zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4z"/>
                    </svg>

                    <!-- GitHub -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>

                    <!-- PHP -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8993BE" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.523-.29-1.047-.29z"/>
                    </svg>

                    <!-- SQL -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#00B4DB" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.34 6 3s-2.69 3-6 3-6-1.34-6-3 2.69-3 6-3zM6 9.86c1.22.84 3.11 1.38 5.24 1.51v.01c.27.01.53.02.76.02s.49-.01.76-.02v-.01C14.89 11.24 16.78 10.7 18 9.86V12c0 1.66-2.69 3-6 3s-6-1.34-6-3V9.86zm0 4c1.22.84 3.11 1.38 5.24 1.51v.01c.27.01.53.02.76.02s.49-.01.76-.02v-.01c2.13-.13 4.02-.67 5.24-1.51V16c0 1.66-2.69 3-6 3s-6-1.34-6-3v-2.14z"/>
                    </svg>
            </div>

            <h4>Duración del Proyecto</h4>
            <p>2 Meses</p>
        `
    },

    'Spa-Project': {
        title: 'SPA Zahara',
        content: `
            <h3>SPA Zahara responsive</h3>
            <p>
                Una pagina web con la que se practico el responsive en diferentes dispositivos, ademas de el diseño UX/UI
                y buenas practicas en diseño inicial en el desarrollo de una web.
            </p>

            <div style="background-image: url('./src/SPA Zahara/1.webp'); background-position: center; background-size: cover;
                background-repeat: no-repeat; width: 70%; height: 250px; border-radius: 10px; cursor: pointer; margin: 25px auto 0 auto;"></div>

            <h4>Características Principales</h4>
            <ul>
                <li>Alojada en Github Pages</li>
                <li>Pagina web desarrollada diseñada para ser esteticamente atractiva</li>
                <li>implementacion principalmente de CSS</li>
                <li>Simulación de una landing page para un SPA</li>
            </ul>

            <div style="display: flex; flex-direction: columns; width: 90%; height: 150px; margin: 20px auto 0 auto; gap: 2%;">
                <div style="background-image: url('./src/SPA Zahara/2.webp'); background-position: center; background-size: cover;
                    width: 47%; height: 100%; border-radius: 10px; cursor: pointer;"></div>
                <div style="background-image: url('./src/SPA Zahara/3.webp'); background-size: cover; background-position: center;
                    image-repeat: no-repeat; width: 47%; height: 100%; border-radius: 10px; cursor: pointer;"></div>
            </div>

            <h4>Tecnologías Utilizadas</h4>
            <ul>
                <li><span style="color: #bdc3c7; font-size: 1.2rem;">Frontend:</span> HTML5, CSS3</li>
            </ul>


            <div style="width: 100%; height: 35px; display: flex;
                flex-direction: row; gap: 2%; justify-content: center; ">

                    <!-- HTML5 -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6B35" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>

                    <!-- CSS3 -->
                    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#1572B6" d="M8.5 5l2.5 35.5L24 44l13-3.5L39.5 5z"/>
                        <path fill="#33A9DC" d="M24 8v31.5l8.2-2.2 1.8-26.3z"/>
                        <path fill="#FFFFFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"/>
                        <path fill="#EBEBEB" d="M24 13v4h-5l-.3-4zm-5.5 9l.2 4H24v-4zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4z"/>
                    </svg>

                    <!-- GitHub -->
                    <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
            </div>


            <h4>Duración del Proyecto</h4>
            <p>3 Semanas</p>

            <h4>Visita la pagina</h4>
            <p><a href="https://ricardoalejandrosantillan.github.io/spaPage/index.html">Click aqui</a> para visitar la pagina del Spa</p>
        `
    },

    'Daikin': {
        title: 'DAIKIN MANUFACTURING MEXICO',
        content: `

            <div style="background-image: url('/src/Daikin/logo.webp'); background-size: contain; background-repeat: no-repeat;
                width: 25%; height: 50px; border-radius: 10px; margin: 10px auto 25px 50px;"></div>
            
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

            <!-- Aqui FALTA iconos de las tecnologias usadas-->
            
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

            <div style="background-image: url('/src/College/utan-logo.webp'); background-size: contain; background-repeat: no-repeat;
                margin: 10px 0 10px 25px; width: 40%; height: 75px;"></div>


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
            <div style="background-image: url('/src/Smart_teaching/logo.webp'); background-size: contain; background-repeat: no-repeat;
                margin: 10px 0 10px 25px; width: 40%; height: 75px;"></div>

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

            <!-- Aqui FALTA iconos de los programas usadas-->
            
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