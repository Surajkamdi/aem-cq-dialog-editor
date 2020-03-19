$(function() {
	 $('#suraj-save-btn').hide();
    var dialog = new Coral.Dialog().set({
    id: "demoDialog", 
      header: {
       innerHTML: "<b>Create New cq:dialog</b>"
      },
      footer: {
        innerHTML: "<button id='data-suraj-coral-btn' is='coral-button' variant='primary' coral-close=''>Ok</button>"
      }
    });


  $('#create-dialog-btn').click(function() {
      dialog.content.innerHTML = `<div class="coral-Form coral-Form--vertical">
  <section class="coral-Form-fieldset"><div class="coral-Form-fieldwrapper">
      <label class="coral-Form-fieldlabel" id="label-vertical-inputgroup-1">Select the Path to store cq:dialog</label>
    <div class="coral-InputGroup coral-Form-field">
      <input is="coral-textfield" class="coral-InputGroup-input" placeholder="Search">
      <span class="coral-InputGroup-button">
        <button is="coral-button" icon="select" title="Select"></button>
      </span>
    </div>
  </div></section></div>`;
      document.body.appendChild(dialog);
      dialog.show();
  });


    dialog.on('coral-overlay:close', function(e) {
		e.preventDefault();
        e.stopImmediatePropagation();
        var wait = new Coral.Wait().set({
                   size: "L",
            		variant: "dots",
                   centered: true
        });
        document.body.appendChild(wait);
        setTimeout(function(){
            wait.show();
            $('[data-cq-dialog-section]').show();
            wait.remove();
        }, 1000);
        $('#suraj-save-btn').show();
    });
});