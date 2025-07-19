(function () {
    'use strict';

    function removeTorrentsElements() {
        // Удаляем кнопку "Торренты" везде
        $('[data-action="mytorrents"]').remove();
    }

    function removeServerBlock() {
        // Удаляем блок сервера в настройках
        $('[data-component="server"]').remove();
        // Удаляем блок парсера в настройках
        $('[data-component="parser"]').remove();
        // Также попробуем удалить через Lampa.Settings если доступно
        if (Lampa.Settings && Lampa.Settings.main) {
            try {
                var settingsElServer = Lampa.Settings.main().render().find('[data-component="server"]');
                if (settingsElServer && settingsElServer.length) {
                    settingsElServer.remove();
                    Lampa.Settings.main().update();
                }
                var settingsElParser = Lampa.Settings.main().render().find('[data-component="parser"]');
                if (settingsElParser && settingsElParser.length) {
                    settingsElParser.remove();
                    Lampa.Settings.main().update();
                }
            } catch (e) {}
        }
    }

    // Удаляем при загрузке приложения
    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeTorrentsElements, 100);
            setTimeout(removeServerBlock, 200);
        }
    });

    // Удаляем при смене активности
    Lampa.Listener.follow('activity', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeTorrentsElements, 100);
            setTimeout(removeServerBlock, 200);
        }
    });

    // Удаляем при полной загрузке страницы
    Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
            e.object.activity.render().find('[data-action="mytorrents"]').remove();
            e.object.activity.render().find('[data-component="server"]').remove();
            e.object.activity.render().find('[data-component="parser"]').remove();
        }
    });

    // Специально для настроек
    Lampa.Listener.follow('settings', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeServerBlock, 100);
        }
    });

    // Fallback - если приложение уже готово
    if (window.appready) {
        setTimeout(removeTorrentsElements, 100);
        setTimeout(removeServerBlock, 200);
    }
})();