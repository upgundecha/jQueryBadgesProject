$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/upgundecha.json',
    dataType: 'jsonp',
    success: function(response){
      //console.log('response', response.courses.in_progress);
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {


      var $course = $('<div />', {
        'class' : 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);

    })
  }

});