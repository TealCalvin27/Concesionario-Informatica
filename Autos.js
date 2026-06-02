function irA(pagina) {
    window.location.href = pagina;
}


function procesarFormulario(event) {
    event.preventDefault();

    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tipo = document.getElementById('tipo').value;
    const mensaje = document.getElementById('mensaje').value;

    
    if (nombre === '' || email === '' || telefono === '' || tipo === '' || mensaje === '') {
        mostrarRespuesta('Por favor, completa todos los campos.', 'error');
        return;
    }

    
    if (!validarEmail(email)) {
        mostrarRespuesta('Por favor, ingresa un correo electrónico válido.', 'error');
        return;
    }

        const accion = tipo === 'comprar' ? 'comprar' : 'vender';
    const mensaje_exito = `¡Gracias ${nombre}! Tu solicitud para ${accion} un auto ha sido registrada. Nos comunicaremos a través de ${email} o al ${telefono} pronto.`;
    
    mostrarRespuesta(mensaje_exito, 'exito');

    
    document.getElementById('formularioAutos').reset();
}

function validarEmail(email) {
    const expresion = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresion.test(email);
}

function mostrarRespuesta(mensaje, tipo) {
    const respuesta = document.getElementById('respuestaFormulario');
    respuesta.textContent = mensaje;
    respuesta.classList.remove('exito', 'error');
    respuesta.classList.add(tipo);
}

window.addEventListener('load', function() {
        const tarjetas = document.querySelectorAll('.tarjeta-auto');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.opacity = '0';
        tarjeta.style.animation = `aparecerTarjeta 0.6s ease forwards`;
        tarjeta.style.animationDelay = (index * 0.1) + 's';
    });
});

const estilo = document.createElement('style');
estilo.textContent = `
    @keyframes aparecerTarjeta {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(estilo);
