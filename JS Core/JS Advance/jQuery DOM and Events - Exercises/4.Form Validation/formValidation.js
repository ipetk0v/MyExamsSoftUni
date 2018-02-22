function validate() {
    $("#userInfo").validate({
        username: {
            minlength: 3,
            maxLength: 20
        }
    });
}
