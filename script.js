function agendarWhatsApp() {
    const numero = "5533999067606"; 
    const mensagem = "Olá! Vim pelo site e gostaria de agendar um horário na Barber Shop.";
    
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}