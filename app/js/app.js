/** @jsx React.DOM */
(function() {
	'use strict';

	var Quiz = React.createClass({
		render: function() {
			return <div>Test</div>
		}
	});

	React.render(<Quiz data={"foo"} />, 
		document.getElementById('app'));

})();