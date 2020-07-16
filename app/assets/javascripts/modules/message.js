$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message_data" data-message-id=${message.id}>
          <div class="Message-info">
            <div class="Message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__contents">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
        `<div class="Message_data" data-message-id=${message.id}>
          <div class="Message-info">
            <div class="Message-info__user-name">
              ${message.user_name}
            </div>
            <div class="Message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__contents">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat_main__message_list').append(html)
      $('form')[0].reset();
      $('.Chat_main__message_list').animate({ scrollTop: $('.Chat_main__message_list')[0].scrollHeight});
      $('.submit').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージの送信に失敗しました');
      $('.Form__submit').prop("disabled", false);
    })
  });
});