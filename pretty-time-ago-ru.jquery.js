(function($) {
    if (typeof $ == 'undefined') {
        return;
    }

    $.fn.prettyTimeAgoRu = function() {
        return this.each(function(i, el) {
            var origDate = $(el).text().trim(),
                prettyTime = prettyTimeAgoRu(origDate);

            if (prettyTime) {
                $(el).text(prettyTime);
            }
        });
    };

    $(function() {
        $('.jsPrettyTimeAgoRu').prettyTimeAgoRu();
    });
})(window.jQuery);
