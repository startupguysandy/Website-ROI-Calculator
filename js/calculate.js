$( document ).ready(function() {
  var websiteConversionPercent = 0;

  // 1) How much per session
  var perSessionAmount = 90;

  // 2) Sessions per week
  var sessionsPerWeek = 2;

  // 3) Close rate in percent
  var closeRatePercent = 90;

  // 4) Monthly website visits
  var websiteUniqueVisits = 500;

  function calculateROI() {
    // Calculate website leads by using our website conversion percent by the number of visits the website gets
    var websiteLeads = websiteUniqueVisits * websiteConversionPercent;
    console.log(websiteLeads);

    // Calculate closed sales by using the website leads and their close rate

    // Calculate amount of revenue per month from website by session amount in £ by number of sessions per week

  }
  calculateROI();


});

// TODO: Your website will pay for itself in X months/weeks/days
