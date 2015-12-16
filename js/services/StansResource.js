'use strict';

app.factory('Stans', function($resource){
	return $resource('http://cabapi.somee.com/api/stan/:id', { id: '@id' }, {
	    update: {
	      method: 'PUT' // this method issues a PUT request
	  	}
    });
});