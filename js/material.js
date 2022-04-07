// import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

// new MDCTextField(document.querySelector('.message-field'));
new MDCRipple(document.querySelector('.send-button'));

const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));
const helperText = new mdc.textField.MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));