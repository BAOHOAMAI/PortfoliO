
// Textarea Contact Form
const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup',e => {
    textarea.style.height = '76px';
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
}) 
// Validation form

function validator (options) {
    var selectorRules = {};

    function validate (inputElement,rule) {
        var errorMessage;    
        var rules = selectorRules[rule.selector];
        var errorElement = inputElement.parentElement.querySelector('.error-message');

        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i] (inputElement.value)
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            inputElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {

        formElement.onsubmit = function (e) {
            
            e.preventDefault();

            options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            validate (inputElement,rule);
            })
        }

        options.rules.forEach(function (rule) {

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.error-message');

            if (inputElement) {
                inputElement.onblur = function () {
                    validate (inputElement,rule);
                }
                inputElement.oninput = function () {
                    errorElement.innerHTML = '';
                    inputElement.classList.remove('invalid');
                }
            }
        })
        console.log(selectorRules);
    }
}
 
validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : 'This form is required'
        }
    }
}

validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Invalid email format'
        }
    }
}