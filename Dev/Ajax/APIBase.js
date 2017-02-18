var APIBase = {


	isJson: function(obj) {

		return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
	},
	get: function(url, opts, onSuccess, onError, onBefore) {


		var init = {
			method: 'POST'
		};

		var data = new FormData();

		fetch(url, init).then(response =>
			response.json().then(json => ({
				json,
				response
			}))
		).then((response) => {


		});


	},
	post: function(url, opts, onSuccess, onError, onBefore) {

		var newData = new FormData();

		for (var item in opts) {
			var _data = opts[item];
			newData.append(item, (this.isJson(_data) ? JSON.stringify(_data) : _data));
		}
		var headers = new Headers({});
		headers.append("Content-Type", "application/x-www-form-urlencoded");
		var init = {
			method: 'post',
			mode: 'cors',
			cache: 'reload',
			body:newData
		};
		fetch(url, init).then(response =>
			response.json().then(json => ({
				json,
				response
			}))
		).then(({
			json,
			response
		}) => {
			if (!response.ok) {
				return Promise.reject(json)
			}

			if (onSuccess) {
				onSuccess(json)
			}
		}).catch(error => {

			alert(error)
		});
	}


}
module.exports = APIBase;