export default class AuthService {
  constructor($q, $location, $cookies) {
    'ngInject'
    this.$cookies = $cookies
    this.keyName = 'auth'
  }

  has() {
    return Object.keys(this.get()).length > 0
  }

  get() {
    return this.$cookies.getObject(this.keyName) || {}
  }

  set(usuarioObject) {
    this.$cookies.putObject(
      this.keyName,
      this.buildAuthObject(usuarioObject)
    )
  }

  destroy() {
    this.$cookies.remove(this.keyName)
  }

  buildAuthObject(usuarioObject) {
    return {
      id: usuarioObject.codigo,
      phone: usuarioObject.celular,
      email: usuarioObject.email,
      login: usuarioObject.login,
      name: usuarioObject.nome,
      password: usuarioObject.senha
    }
  }
}
