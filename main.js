(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e.renderer,this._cardsContainer=document.querySelector(n)}var n,r;return n=t,(r=[{key:"addItem",value:function(e){this._cardsContainer.prepend(this._renderer(e))}},{key:"rendererCards",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likesCounter=t.likes.length,this._likesCard=t.likes,this._ownerId=t.owner._id,this._cardSelector=n.cardSelector,this._handleCardClick=n.handleCardClick,this._handleDeleteClick=n.handleDeleteClick,this._handleDislikeCard=n.handleDislikeCard,this._handleLikeCard=n.handleLikeCard,this._profileId=n.profileId}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._likeButton=this._element.querySelector(".card__like"),this._deleteButton=this._element.querySelector(".card__delete"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._likeCounter.textContent=this._likesCounter,this._element.querySelector(".card__title").textContent=this._name,this._ownerId!=this._profileId?this._deleteButton.classList.add("card__delete_hide"):this._deleteButton.classList.remove("card__delete_hide"),this._updateLikeButton(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("card__like_active")?e._handleDislikeCard():e._handleLikeCard()})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteClick()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"activeLikes",value:function(e){this._hasLiked(e.likes)&&(this._likeButton.classList.add("card__like_active"),this._likeCounter.textContent=e.likes.length)}},{key:"deactiveLikes",value:function(e){this._hasLiked(e.likes)||(this._likeButton.classList.remove("card__like_active"),this._likeCounter.textContent=e.likes.length)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_openImgPopup",value:function(){openImageFullscreen(this._name,this._link)}},{key:"_updateLikeButton",value:function(){this._hasLiked(this._likesCard)?this._likeButton.classList.add("card__like_active"):this._likeButton.classList.remove("card__like_active")}},{key:"_hasLiked",value:function(e){var t=this;return e.some((function(e){return e._id==t._profileId}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_activateButton",value:function(){null!=this._buttonElement&&(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_deactivateButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._deactivateButton(this._buttonElement):this._activateButton(this._buttonElement)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._deactivateButton(this._buttonElement)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(t),this._buttonCloseElement=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickOverlay",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonCloseElement.addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){return e._handleClickOverlay(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}const _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._figcaption=t._popupElement.querySelector(".popup__figcaption"),t._image=t._popupElement.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){l(h(a.prototype),"open",this).call(this),this._image.src=e.link,this._image.alt=e.name,this._figcaption.textContent=e.name}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFunction=t,n._popupForm=n._popupElement.querySelector(".popup__container"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n._submitButton=n._popupForm.querySelector('[type="submit"]'),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(C(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues())}))}},{key:"close",value:function(){b(C(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setLoadingState",value:function(e){e?(this._submitButton.innerText=this._submitButton.getAttribute("loading-text"),this._submitButton.setAttribute("disabled","true")):(this._submitButton.innerText=this._submitButton.getAttribute("default-text"),this._submitButton.hasAttribute("disabled")&&this._submitButton.removeAttribute("disabled"))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}const I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._confirmButton=t._popupElement.querySelector(".popup__submit_confirm"),t._submitCallback=null,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;O(B(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(t){t.preventDefault(),"function"==typeof e._submitCallback&&e._submitCallback()}))}},{key:"setSubmitCallback",value:function(e){this._submitCallback=e}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t.nameSelector),this._profileDescription=document.querySelector(t.descriptionSelector),this._profileId=null,this._profileAvatar=document.querySelector(t.profileAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,description:this._profileDescription.textContent,profileId:this._profileId,profileAvatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileDescription.textContent=e.description,this._profileId=e.profileId,this._profileAvatar.src=e.profileAvatar}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const q=D;function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const T=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._config={headers:t.headers}}var t,n;return t=e,(n=[{key:"getUserData",value:function(){var e=this;return fetch(this._baseUrl+"/users/me",this._config).then((function(t){return e._getResponseData(t)}))}},{key:"getCards",value:function(){var e=this;return fetch(this._baseUrl+"/cards",this._config).then((function(t){return e._getResponseData(t)}))}},{key:"setUserData",value:function(e){var t=this,n=Object.assign({body:JSON.stringify(e),method:"PATCH"},this._config);return fetch(this._baseUrl+"/users/me",n).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=Object.assign({body:JSON.stringify(e),method:"POST"},this._config);return fetch(this._baseUrl+"/cards",n).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this,n=Object.assign({method:"DELETE"},this._config);return fetch(this._baseUrl+"/cards/".concat(e),n).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this,n=Object.assign({method:"PUT"},this._config);return fetch(this._baseUrl+"/cards/likes/".concat(e),n).then((function(e){return t._getResponseData(e)}))}},{key:"dislikeCard",value:function(e){var t=this,n=Object.assign({method:"DELETE"},this._config);return fetch(this._baseUrl+"/cards/likes/".concat(e),n).then((function(e){return t._getResponseData(e)}))}},{key:"setNewAvatar",value:function(e){var t=this,n=Object.assign({body:JSON.stringify(e),method:"PATCH"},this._config);return fetch(this._baseUrl+"/users/me/avatar",n).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-47",headers:{authorization:"d0ac06bd-d482-4ba5-981e-c7cee51801d4","Content-Type":"application/json"}});function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=document.querySelector(".popup_profile"),V=x.querySelector(".popup__name-input"),N=x.querySelector(".popup__job-input"),F=document.querySelector(".popup_card"),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_update-avatar"),z=document.querySelector(".profile__update-avatar"),$={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},G=new i($,x);G.enableValidation();var K=new i($,F);K.enableValidation();var Q=new i($,M);Q.enableValidation();var W=new _(".popup_image");W.setEventListeners();var X=new E(".popup_profile",(function(e){X.setLoadingState(!0),T.setUserData({name:e.name,about:e.description}).then((function(e){te.setUserInfo({name:e.name,description:e.about,profileId:e._id,profileAvatar:e.avatar}),X.close()})).catch((function(e){console.error(e)})).finally((function(){return X.setLoadingState(!1)}))}));X.setEventListeners();var Y=new E(".popup_card",(function(e){Y.setLoadingState(!0),T.addNewCard(e).then((function(e){ne.addItem(e),Y.close()})).catch((function(e){console.error(e)})).finally((function(){return Y.setLoadingState(!1)}))}));Y.setEventListeners();var Z=new I(".popup_confirm");Z.setEventListeners();var ee=new E(".popup_update-avatar",(function(e){ee.setLoadingState(!0),T.setNewAvatar({avatar:e.avatar}).then((function(e){te.setUserInfo({name:e.name,description:e.about,profileId:e._id,profileAvatar:e.avatar}),ee.close()})).catch((function(e){console.error(e)})).finally((function(){return ee.setLoadingState(!1)}))}));ee.setEventListeners();var te=new q({nameSelector:".profile__name",descriptionSelector:".profile__description",profileAvatar:".profile__avatar"}),ne=new t({renderer:function(e){var t=new r(e,{cardSelector:"#card",handleCardClick:function(){return W.open(e)},handleDeleteClick:function(){return function(e,t){Z.open(),Z.setSubmitCallback((function(){T.deleteCard(e).then((function(){t.deleteCard(),Z.close()})).catch((function(e){console.error(e)}))}))}(e._id,t)},profileId:te.getUserInfo().profileId,handleDislikeCard:function(){return function(e,t){T.dislikeCard(e).then((function(e){t.deactiveLikes(e)})).catch((function(e){console.error(e)}))}(e._id,t)},handleLikeCard:function(){return function(e,t){T.likeCard(e).then((function(e){console.log(e),t.activeLikes(e)})).catch((function(e){console.error(e)}))}(e._id,t)}});return t.generateCard()}},".cards");Promise.all([T.getUserData(),T.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo({name:o.name,description:o.about,profileId:o._id,profileAvatar:o.avatar}),ne.rendererCards(i.reverse())})).catch((function(e){console.log(e)})),J.addEventListener("click",(function(){var e;e=te.getUserInfo(),V.value=e.name,N.value=e.description,X.open(),G.resetValidation()})),H.addEventListener("click",(function(){Y.open(),K.resetValidation()})),z.addEventListener("click",(function(){ee.open(),Q.resetValidation()}))})();