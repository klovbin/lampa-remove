(function () {
    'use strict';

    function removeTorrServer() {
        var el = Lampa.Settings.main()?.render()?.find('[data-component="server"]');
        if (el && el.length) {
            el.remove();
            Lampa.Settings.main().update();
        }
    }

    function removeTorrentsButton() {
        // Удаление кнопки "Торренты"
        $("[data-action=mytorrents]").eq(0).remove();
    }

    function initializeRemovals() {
        setTimeout(function () {
            removeTorrentsButton();
        }, 100);
        removeTorrServer();
    }

    if (window.appready) {
        initializeRemovals();
    } else {
        Lampa.Listener.follow('app', (e) => {
            if (e.type === 'ready') {
                initializeRemovals();
            }
        });
    }

})();