window.addEventListener('load', function() {
    let audio = document.getElementById('myAudio');
    
    // Sesin otomatik olarak çalınması için `muted` olarak başlatılır
    audio.muted = false; // Sesin açılmasını sağlar
    audio.play().catch(function(error) {
        // Oynatma hatası, genellikle kullanıcı etkileşimi gerektiriyorsa
        console.log('Müzik oynatılmadı:', error);
    });
});