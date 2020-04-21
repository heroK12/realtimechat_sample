import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('live connect');
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("live disconnect")
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#msg').append('<div class="message">'+ data.content + '</div>')
    console.log(data)
  }
})

var submit_messages;

$(document).on('turbolinks:load',function(){
  submit_messages()
})

submit_messages = function(){
  $('#message_content').on('keydown',function(event){
    if(event.keyCode === 13){
      $('input').click()
      event.target.value=''
      event.preventDefault()
    }
  })
}


