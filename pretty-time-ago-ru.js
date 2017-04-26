/*
 * JavaScript Library: Pretty Time Ago Russian
 * Author: Stanislav Butsenko
 * Based on "JavaScript Pretty Date" library, John Resig, https://johnresig.com/blog/javascript-pretty-date/
 * Licensed under the MIT and GPL licenses.
 */

function prettyTimeAgoRu(time) {
	var isMinutePrecision = /:/.test(time),
		date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g,' ')),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		dayDiff = Math.floor(diff / 86400);

	if (isNaN(dayDiff) || dayDiff < 0) {
        return;
	}

	if (dayDiff >= 7) {
		var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
			month = months[date.getMonth()], // date.toLocaleString('ru-ru', {month: 'short'}) // long, short
            yearDiff = (new Date()).getFullYear() - date.getFullYear();

        prettyTimeAgo = date.getDate() + ' ' + month + (yearDiff > 0 ? ' ' + date.getFullYear() : '');

		return prettyTimeAgo;
	}

    var plural = function(number, one, two, five, returnNumber) {
        number = Math.abs(number);
        number %= 100;

        var prefix = returnNumber ? number + ' ' : '';

        if (number >= 5 && number <= 20) {
            return prefix + five;
        }

        number %= 10;
        if (number == 1) {
            return prefix + one;
        }

        if (number >= 2 && number <= 4) {
            return prefix + two;
        }

        return prefix + five;
    };

    var prettyTimeAgo = dayDiff == 0 && (isMinutePrecision && (
							diff < 60 && 'только что' ||
							diff < 120 && 'минуту назад' ||
							diff < 3600 && plural(Math.floor(diff/60), 'минута', 'минуты', 'минут', true) + ' назад' ||
							diff < 7200 && 'час назад' ||
							diff < 86400 && plural(Math.floor(diff/3600), 'час', 'часа', 'часов', true) + ' назад')
							|| 'сегодня'
						) ||
						dayDiff == 1 && 'вчера' ||
						dayDiff < 7 && plural(dayDiff, 'день', 'дня', 'дней', true) + ' назад';
        				// dayDiff < 31 && Math.ceil(dayDiff / 7) + ' нед. назад'

	return prettyTimeAgo;
}

