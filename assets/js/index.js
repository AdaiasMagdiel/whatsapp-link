const link = 'https://api.whatsapp.com/send?phone=NUMERO&text=MENSAGEM';

const vn = new Vue({
	el: '.container',
	data: {
		numero: '',
		mensagem: ''
	},
	methods: {
		get_link() {
			let numero = this.numero.replace(/[(]|[)]|[-]|[ ]/g, '');
			let mensagem = this.fixedEncodeURIComponent(this.mensagem);
			console.log(mensagem);

			let url = `https://api.whatsapp.com/send?phone=55${numero}&text=${mensagem}`;

			var win = window.open(url, '_blank');
			win.focus();
		},
		fixedEncodeURIComponent(str) {
			return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
				return '%' + c.charCodeAt(0).toString(16);
			});
		}
	}
});
