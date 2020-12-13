var persistentNotifs = {};

window.addEventListener('message', function (event) {
    ShowNotif(event.data);
});

function CreateNotification(data) {
    var $notification = $(document.createElement('div'));
    $notification.addClass('notification').addClass(data.type);

    if (data.position === "top") {
        document.getElementById("notif-container").style.marginTop = "100px";
    } else if (data.position === "center") {
        document.getElementById("notif-container").style.marginTop = "450px";
    } else if (data.position === 'down-right') {
        document.getElementById("notif-container").style.marginTop = "950px";
    } 

    if (data.type === "success") {
        if (data.title == null) {
            var text = "Success"
        } else {
            var text = data.title
        }
    } else if (data.type === "inform") {
        if (data.title == null) {
            var text = "Information"
        } else {
            var text = data.title
        }
    } else if (data.type === 'error') {
        if (data.title == null) {
            var text = "Error"
        } else {
            var text = data.title
        }
    } else if (data.type === 'white') {
        if (data.title == null) {
            var text = "White"
        } else {
            var text = data.title
        }
    } else if (data.type === 'dark') {
        if (data.title == null) {
            var text = "Dark"
        } else {
            var text = data.title
        }
    } else if (data.type === 'warning') {
        if (data.title == null) {
            var text = "Warning"
        } else {
            var text = data.title
        }
    } else if (data.type === 'purple') {
        if (data.title == null) {
            var text = "Purple"
        } else {
            var text = data.title
        }
    }

    $notification.html('\
    <h3 class="notifheader">' + text + '</h3>\
    <hr style="position: relative; margin-top: -3%;">\
    <p style="margin-top: 3%; font-size: 15px;">' + data.text + '</p>');
    $notification.fadeIn();
    if (data.style !== undefined) {
        Object.keys(data.style).forEach(function(css) {
            $notification.css(css, data.style[css])
        });
    }


    return $notification;
}

function ShowNotif(data) {
    if (data.persist === undefined) {
        var $notification = CreateNotification(data);
        $('.notif-container').append($notification);
        setTimeout(function() {
            $.when($notification.fadeOut()).done(function() {
                $notification.remove()
            });
        }, data.length != null ? data.length : 2500);
    } else {
        if (data.persist.toUpperCase() == 'START') {
            if (persistentNotifs[data.id] === undefined) {
                var $notification = CreateNotification(data);
                $('.notif-container').append($notification);
                persistentNotifs[data.id] = $notification;
            } else {
                let $notification = $(persistentNotifs[data.id])
                $notification.addClass('notification').addClass(data.type);
                $notification.html(data.text);

                if (data.style !== undefined) {
                    Object.keys(data.style).forEach(function(css) {
                        $notification.css(css, data.style[css])
                    });
                }
            }
        } else if (data.persist.toUpperCase() == 'END') {
            let $notification = $(persistentNotifs[data.id]);
            $.when($notification.fadeOut()).done(function() {
                $notification.remove();
                delete persistentNotifs[data.id];
            });
        }
    }
}