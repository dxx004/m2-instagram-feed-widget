define([
    'jquery',
    'instagramFeed'
], function ($) {
    'use strict';

    $.widget('rvs.instagramFeed', {
        options: {
            username: '',
            display_profile: true,
            display_biography: true,
            display_gallery: true,
            styling: true,
            max_items: 6,
            items_per_row: 6
        },

        /**
         * This method constructs a new widget.
         * @private
         */
        _create: function () {
            const config = this.options;

            if ($(this.element).length && config.username) {
                $.instagramFeed({
                    'username': config.username,
                    'container': this.element,
                    'display_profile': config.display_profile,
                    'display_biography': config.display_biography,
                    'display_gallery': config.display_gallery,
                    'callback': null,
                    'styling': config.styling,
                    'items': config.max_items,
                    'items_per_row': config.items_per_row,
                    'margin': 1
                });
            }

        }
    });

    return $.rvs.instagramFeed;
});
