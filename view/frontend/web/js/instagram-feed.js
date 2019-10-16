define([
    'jquery',
    'instagramFeed'
], function ($) {
    'use strict';

    $.widget('rvs.instagramFeed', {
        options: {
            username: '',
            tag: '',
            display_profile: true,
            display_biography: true,
            display_gallery: true,
            styling: true,
            display_igtv: false,
            items: 6,
            items_per_row: 6
        },

        /**
         * This method constructs a new widget.
         * @private
         */
        _create: function () {
            const config = this.options;
            config.container = this.element;

            if ($(this.element).length && config.username) {
                $.instagramFeed(config);
            }

        }
    });

    return $.rvs.instagramFeed;
});
