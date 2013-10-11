define([
	"./distance-in-days",
	"./start-of"
], function( datetimeDistanceInDays, datetimeStartOf ) {

	/**
	 * dayOfYear
	 *
	 * Return the distance in days of the date to the begin of the year [0-d].
	 */
	return function( date ) {
		return Math.floor( datetimeDistanceInDays( datetimeStartOf( date, "year" ), date ) );
	};

});
