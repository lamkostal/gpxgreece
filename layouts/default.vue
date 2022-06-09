<template>
  <transition name="fade">
    <div>
        <TheHeader/>
        <Nuxt/>
        <TheFooter/>
    </div>
  </transition>
</template>
<!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script type="text/javascript" async=true>
(function() {
  var host = window.location.hostname;
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://quantcast.mgr.consensu.org'
    .concat('/choice/', 'DcTzhh_qG7hHW', '/', host, '/choice.js')
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, '*');
            }
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
</script>
<!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  transition: 'fade',

components:{
    TheFooter,
    TheHeader
},
mounted(){


  }

}
</script>

<style>

*{
  box-sizing: border-box;
  /* position: relative; */
}
body{
  color:var(--gray-8);
  margin: 0;
  padding: 0;
  
  font-family: 'Commissioner', sans-serif;
  background-color: var(--gray-0);
  overflow-x: hidden;

}
ul{
  list-style: none;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
.container{
  width:1200px;
  width:min(100%,1200px);
  margin-left: auto;
  margin-right: auto;
  
}
.container-fluid{
  width:100%;
}
.flex-row{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap:7px
}
main{
  position: relative;
}
img{
  max-width: 100%;
}
section{
   padding: 6em 0 ;
}
section.hero{
  display: flex;
  padding: 0;
  position: relative;
  margin-top: 100px;
  z-index: 1;

}
section.hero .hero_img{
   object-fit: cover;
   /* width:1900px; */
   width:100%;
   /* height:calc(var(--full-height)-100px); */
   height:90vh;
}
.top-section{
  margin-top: 100px;
}
h1,h2{
  color: var(--gray-7);
  margin-top: 0;
}
h1{
  text-align:center;
   font-size: var(--font-size-6);
   font-weight: var(--font-weight-9);
}
h2{
  font-size: var(--font-size-5);
   font-weight: var(--font-weight-8);
}

a{
  color:var(--gray-2);
  text-decoration: none;
}
h3,h4{
  color: var(--gray-6);
  font-weight: normal;
}
.btn{
  text-align: center;
  position: relative;
  font-weight: var(--font-weight-1);
  display: inline-block;
  margin-top: 5px;
  text-decoration: none;
  background: var(--gray-9);
  color:var(--gray-0);
  padding:15px 20px;
  transition:all 0.3s ease;
  text-transform: uppercase;
}
.btn:after{
  content:url(~/assets/img/caret.svg);
  width:12px;
  position: absolute;
  top:015px;
  opacity:0;
  transition:all 0.3s ease;
  right:12px;
}
.btn:hover{
  background: var(--blue-8);
  padding:15px 35px 15px 20px;
  border: none;
}
.btn:hover::after{
  opacity: 1;
  /* transform: translateX(-15px); */
  right:12px;
}
/* ΦΟΡΜΕΣ */
.align-center {
  text-align: center;
}
.row {
  margin: -20px 0;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row .col {
  padding: 0 20px;
  float: left;
  box-sizing: border-box;
}
.col-right{
  padding: 0 20px;
  float: right;

}
.row .col.x-50 {
  width: 50%;
}
.row .col.x-100 {
  width: 100%;
}

.content-wrapper {
  min-height: 100%;
  position: relative;
}

.contact-form {
  margin-top: 4rem;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
}
.contact-form a{
  color: var(--blue-7);
  font-weight: var(--font-weight-6);
  text-decoration: underline;
}
#checkbox{
  display: inline;
  width: auto;
    height: 13px;
    margin-right: 10px;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: var(--gray-7);
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  background: transparent;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {
  transform: translateY(-24px);
  color: var(--blue-9);
}
.contact-form .label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: var(--gray-5);
  cursor: text;
  transition: transform 0.2s ease-in-out;
}
input[type="submit" i]{
  display: block;
  border:none;
}
input[type="submit" i]:hover{
   padding:15px 20px;
}
.note {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-family: Lusitana, serif;
  font-size: 16px;
  line-height: 21px;
}
.note .link {
  color: #888;
  text-decoration: none;
}
.note .link:hover {
  text-decoration: underline;
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-50px);
}
.hidden{
  visibility: hidden;
}

</style>