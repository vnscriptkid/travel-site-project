import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll {
	constructor(eles, offset) {
		this.itemsToReveal = eles;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		let that = this;
		this.itemsToReveal.each(function() {
			let item = this;
			new Waypoint({
				element: item,
				handler: function() {
					$(item).addClass('reveal-item--is-visible');
				},
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;
