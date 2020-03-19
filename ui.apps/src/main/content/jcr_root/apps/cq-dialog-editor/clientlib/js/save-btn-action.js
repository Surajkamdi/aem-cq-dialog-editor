$(function(){
    var coral_alert = new Coral.Alert().set({
      size: "L",
      variant: "success",								
      header: {
        innerHTML: "INFO"
      },
      content: {
        innerHTML: "cq:dialog saved successfully."
      }
    });

    $('#suraj-save-btn').click(function() {
       document.body.appendChild(coral_alert);
       setTimeout(function(){
            coral_alert.show();
            coral_alert.remove();
        }, 1000);

    });
});