import './toolbar.styl'
import template from './toolbar.template.jade'
import controller from './toolbar.controller'

export default {
  template: template,
  controller: controller,
  bindings: {
    title: '@',
    leftIcon: '@',
    onClickMethod: '@',
    rightMenu: '@',
    rightButtonEnable: '@',
    rightButtonType: '@',
    rightButtonText: '@',
    rightButtonIcon: '@',
    rightButtonIconStyle: '@',
    rightButtonClasses: '@',
    rightButtonOnClickMethod: '&',
  }
}
