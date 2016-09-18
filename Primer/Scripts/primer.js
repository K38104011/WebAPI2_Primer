var modelData = ko.observable("(Ready)");

var sendRequest = function () {
    $.ajax("/api/pageSize", {
        type: "GET",
        success: function (data) {
            modelData("Response: " + data + " bytes");
        }
    });
}

$(document).ready(function () {
    ko.applyBindings();
});