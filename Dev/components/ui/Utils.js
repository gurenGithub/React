var Utils = {


	LocalStore: {

		set: function(name, value) {

			localStorage.setItem(name, value)
		},
		rmeove: function(name) {
			localStorage.removeItem(name)
		},
		addEntity: function(entity) {


			for (var item in entity) {

				var value = entity[item];
				this.set(item, value);
			}
		},
		getEntity: function() {


			var entity = {}
			var storage = window.localStorage;

			function showStorage() {
				for (var i = 0; i < storage.length; i++) {
					//key(i)获得相应的键，再用getItem()方法获得对应的值

					var key = storage.key(i);
					var value = storage.getItem(key)

					entity[key] = value;
				}
			}
			return entity;
		}
	}

}

module.exports= Utils