(function () {
    'use strict';

    function removeTorrentsElements() {
        // Удаляем кнопку "Торренты" везде
        $('[data-action="mytorrents"]').remove();
        // Удаляем блок сервера в настройках
        $('[data-component="server"]').remove();
    }

    // Удаляем при загрузке приложения
    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeTorrentsElements, 100);
        }
    });

    // Удаляем при смене активности
    Lampa.Listener.follow('activity', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeTorrentsElements, 100);
        }
    });

    // Удаляем при полной загрузке страницы
    Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
            e.object.activity.render().find('[data-action="mytorrents"]').remove();
            e.object.activity.render().find('[data-component="server"]').remove();
        }
    });

    // Fallback - если приложение уже готово
    if (window.appready) {
        setTimeout(removeTorrentsElements, 100);
    }
})();