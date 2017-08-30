export default function randomText() {
	return fetch('http://www.randomtext.me/api/').then(res => res.json())
}