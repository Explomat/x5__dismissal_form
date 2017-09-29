export function getUrlParams(url, param) {
	if (!url) return null;

	const vars = {};
	url.replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi,
		function cb(m, key, value) {
			vars[key] = value !== undefined ? value : '';
		}
	);

	if (param) return vars[param];
	return vars;
}

export function toUrlParams(obj){
	const str = Object.keys(obj).reduce((f, s) => {
		return f + `${s}=${obj[s]}&`;
	}, '');
	return str.substring(0, str.length - 1);
}