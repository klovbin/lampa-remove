(function() {
    'use strict';

    function addInterfaceButton() {
        if (
            Lampa.Settings.main &&
            !Lampa.Settings.main().render().find('[data-component="my_interface"]').length
        ) {
            var field = `
                <div class="settings-folder selector" data-component="my_interface" data-static="true">
                    <div class="settings-folder__icon">
                        <svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="6" fill="white"/></svg>
                    </div>
                    <div class="settings-folder__name">Интерфейс</div>
                </div>
            `;
            // Вставляем после server
            Lampa.Settings.main().render().find('[data-component="server"]').after(field);
            Lampa.Settings.main().update();
        }
    }

    // Навешиваем обработчик на открытие настроек
    Lampa.Settings.listener.follow('open', function(e) {
        if (e.name == 'main') {
            e.body.find('[data-component="my_interface"]').on('hover:enter', function() {
                // Пока без контента
            });
        }
    });

    // Добавляем кнопку при готовности приложения
    if (window.appready) addInterfaceButton();
    else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type == 'ready') addInterfaceButton();
        });
    }
})(); 