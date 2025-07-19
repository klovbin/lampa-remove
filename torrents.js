(function () {
    'use strict';	

    Lampa.Listener.follow('app', (e) => {
        if (e.type === 'ready') {
            setTimeout(function () {
                // Удаление кнопки "Торренты"
                $("[data-action=torrents]").eq(0).remove();
            }, 10); 
        }
    });
})(); 