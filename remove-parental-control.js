(function () {
    'use strict';

    function removeParentalControlBlock() {
        // Удаляем блок родительского контроля в настройках
        $('[data-component="parentcontrol"]').remove();
        // Также попробуем удалить через Lampa.Settings если доступно
        if (Lampa.Settings && Lampa.Settings.main) {
            try {
                var settingsEl = Lampa.Settings.main().render().find('[data-component="parentcontrol"]');
                if (settingsEl && settingsEl.length) {
                    settingsEl.remove();
                    Lampa.Settings.main().update();
                }
            } catch (e) {}
        }
    }

    // Удаляем при загрузке приложения
    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeParentalControlBlock, 100);
        }
    });

    // Удаляем при смене активности
    Lampa.Listener.follow('activity', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeParentalControlBlock, 100);
        }
    });

    // Удаляем при полной загрузке страницы
    Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
            e.object.activity.render().find('[data-component="parentcontrol"]').remove();
        }
    });

    // Специально для настроек
    Lampa.Listener.follow('settings', function (e) {
        if (e.type === 'ready') {
            setTimeout(removeParentalControlBlock, 100);
        }
    });

    // Fallback - если приложение уже готово
    if (window.appready) {
        setTimeout(removeParentalControlBlock, 100);
    }
})(); 