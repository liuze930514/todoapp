$(function() {
  $("header").on("submit", function() {
    var item = $("form input");
    var todo = { item: item.val() };

    if (todo.item == "") {
      alert("内容不能为空，请重新输入");
      return;
    }

    $.ajax({
      type: "POST",
      url: "/todo",
      data: todo,
      success: function(data) {

      }
    });
  })

  $(".container").on("click", ".remove", function () {
      var item = $.trim($(this).parent().parent().children("span").text());
      // console.log(item);
      $.ajax({
          type: "DELETE",
          url: "/todo/" + item,
          success: function (data) {
              location.reload();
          }
      })
  })
});
