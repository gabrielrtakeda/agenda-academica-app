export default class CadastrarUniversidadesController {
  constructor($localStorage, $location, $cookies, auth, universidade) {
    'ngInject'
    this.$localStorage = $localStorage
    this.$location = $location
    this.$cookies = $cookies
    this.authService = auth
    this.universidadeService = universidade
    this.universidadeForm = {}
  }

  submit() {
    let authObject = this.authService.get()
    let data = angular.copy(this.universidadeForm)
    data.codigoUsuario = authObject.id

    this.universidadeService
      .api.root
      .create(data).$promise.then(
        (success) => {
          if (success.$resolved === true) {
            console.log(this.$localStorage.universidades)
            this.$cookies.remove('universidade-entities')
            this.$location.path(`/unidades/cadastro/${success.codigo}`)
          }
        },
        (error) => { console.log(error) }
      )

    return false
  }
}
