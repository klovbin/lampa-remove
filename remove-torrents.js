(function () {
    'use strict';

    Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
            // Удаляем кнопку "Торренты"
            e.object.activity.render().find('[data-action="mytorrents"]').remove();
            // Удаляем блок сервера
            e.object.activity.render().find('[data-component="server"]').remove();
        }
    });
})();