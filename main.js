(function () {
    'use strict';

    function loadRemoveTorrentsScript() {
        var script = document.createElement('script');
        script.src = 'remove-torrents.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);
        console.log('Remove torrents script loaded');
    }

    function loadAddInterfaceButtonScript() {
        var script = document.createElement('script');
        script.src = 'add-interface-button.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);
        console.log('Add interface button script loaded');
    }

    // Загружаем скрипты после готовности приложения
    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            setTimeout(loadRemoveTorrentsScript, 500);
            setTimeout(loadAddInterfaceButtonScript, 700);
        }
    });

    // Fallback - если приложение уже готово
    if (window.appready) {
        setTimeout(loadRemoveTorrentsScript, 500);
        setTimeout(loadAddInterfaceButtonScript, 700);
    }
})(); 