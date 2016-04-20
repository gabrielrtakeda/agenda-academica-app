export default class SignupController {
  constructor($http, $mdDialog, $location, $cookies, moment, crypto, usuario) {
    'ngInject'
    this.$http = $http
    this.$mdDialog = $mdDialog
    this.$location = $location
    this.$cookies = $cookies
    this.crypto = crypto
    this.moment = moment
    this.usuarioService = usuario
  }

  submit() {
    var data = {
      nome: this.nome,
      login: this.login,
      email: this.email,
      celular: this.celular.replace(/\D/g, ''),
      senha: this.crypto.gen(this.senha)
    }

    this.usuarioService.api
      .create(data).$promise.then(
        (success) => {
          if (success.$resolved && success.codigo) {
            delete success.$promise
            delete success.$resolved
            this.$cookies.putObject('auth', success, {
              expires: this.moment().add(1, 'months').toDate()
            })
            this.$location.path('/welcome')
          }
          else
            this.$mdDialog.show(
              this.$mdDialog.alert()
                .title('Errado ):')
                .textContent('Você inseriu um login e/ou senha incorretos.')
                .ok('Ok')
                .targetEvent(this.originatorEv)
            )
        },
        (error) => {
          this.$mdDialog.show(
            this.$mdDialog.alert()
              .title('Erro ):')
              .textContent(`Ops! Algo inesperado aconteceu. Aguarde um instante e
                tente novamente.`)
              .ok('Ok')
              .targetEvent(this.originatorEv)
          )
        }
      )
  }
}
