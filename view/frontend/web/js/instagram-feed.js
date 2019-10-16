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
            const config = {
                display_profile: this.options.display_profile,
                display_biography: this.options.display_biography,
                display_gallery: this.options.display_gallery,
                styling: this.options.styling,
                display_igtv: this.options.display_igtv,
                items: this.options.items,
                items_per_row: this.options.items_per_row,
                container: this.element
            };

            if (this.options.tag.length) {
                config.tag = this.options.tag;
            } else {
                config.username = this.options.username;
            }

            if ($(this.element).length && (config.username || config.tag)) {
                $.instagramFeed(config);
            }

        }
    });

    return $.rvs.instagramFeed;
});
