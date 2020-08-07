const value = $('.value');
const next1_btn = $('.next1-btn');
const agree = $('.agree');
const club_list = $('.club-list');
const clubs = $('.clubs');
const club_btn = $('.club-btn');
const submit_btn = $('.submit-btn');


next1_btn.on('click', function(res, req) {
    console.log(isNaN(value.val()));
    if (value.val() === '' || value.val() == ' ') {
        alert('Please estimate the value of your bike.')
    }
    if (isNaN(value.val())) {
        alert('Estimated value must be a numerical value.')
    }
    if (!agree.is(':checked')) {
        alert('You must agree to the Terms of Service & Privacy Policy to proceed.');
    }
    if (!isNaN(value.val()) && value.val() != '' && value.val() != ' ' && agree.is(':checked')) {
        location.href = 'signup2.html';
    }
});

$('.light', '.med', '.heavy').on('click', function(event) {
    event.preventDefault();
    $('.active1').removeClass('active1');
    $(this).addClass('active1');
})

$('.up, .down').on('click', function(event) {
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
});

club_btn.on('click', function(event) {
    event.preventDefault();
    const list_item = clubs.value();
    club_list.append('<li>' + list_item + '</li>');
    clubs.clear();
});

submit_btn.on('click', function(event) {
    event.preventDefault();
    alert('Coming Soon!');
});

