let open = {

	element: {

		create: function(type, dest) {

			let newElement = document.createElement(type);
			dest.appendChild(newElement);
			return newElement;

		},
		remove: function(element) {

			element.remove();
			return element;

		},
		read: function(element) {

			return element;

		},
		edit: function(element, attribute, value) {

			element[attribute] = value;
			return element;

		},
		show: function(element) {

			element.classList.remove("hidden");
			return element;

		},
		hide: function(element) {

			element.classList.add("hidden");
			return element;

		},

	},
	array: {

		run: function(array, func) {

			for (let i=0; i<array.length; i++) {

				func(array[i]);

			}

		},
		rel: function(array1, array2, rel) {

			if (array1.length===array2.length) {

				let resultArray = [];

				for (let i=0; i<array1.length; i++) {

					if (array1[i]===true || array1[i]===false) {
						if (array2[i]===true || array2[i]===false) {
							if (rel==="and") {
								if (array1[i]===true && array2[i]===true) {
									resultArray[i] = true;
								} else {
									resultArray[i] = false;
								}
							} else if (rel==="or") {
								if (array1[i]===false && array2[i]===false) {
									resultArray[i] = false;
								} else {
									resultArray[i] = true;
								}
							} else if (rel==="exor") {
								if (array1[i]===array2[i]) {
									resultArray[i] = false;
								} else {
									resultArray[i] = true;
								}

							}
						} else {
							return "invalid parameter";
						}
					} else {
						return "invalid parameter";
					}

					if (i===(array1.length-1)) {
						return resultArray;
					}

				}

			} else {
				return "invalid parameter";
			}

		},

	},
	stylesheet: function() {

		let a = open.element.create("style", document.head);
		a.innerHTML = ".hidden {visibility: hidden; display: none;}";

	},

}




open.stylesheet();
Math.average = function(array) {

	let averageValue = 0;

	for (let i=0; i<array.length; i++) {

		if (Number.isInteger(array[i])) {
			averageValue += array[i];
		}

		if (i===(array.length-1)) {
			return averageValue / array.length;
		}

	}

}
Math.exactRound = function(value, position) {

	if (position>0) {
		position -= 1;
	} else if (position===0) {
		return "invalid position";
	}

	let roundFactor = Math.pow(10, position);
	value = value / roundFactor;
	value = Math.round(value);
	value *= roundFactor;

	return value;

}




class AjaxCall {

	constructor(url) {

		this.url = url;
		this.response = undefined;
		this.call = function() {

			let _this = this;
			let xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function() {

				if (this.readyState==4 && this.status==200) {
					_this.response = JSON.parse(this.responseText);
				}

			}

			xhttp.open("GET", _this.url, true);
			xhttp.send();

		}
		this.call();

	}

}




class Link {

	constructor(url) {

		this.url = url;
		let _this = this;
		this.open = {

			thisTab: function() {

				location.href = _this.url;

			},
			newTab: function() {

				window.open(_this.url);

			},

		}

	}

}