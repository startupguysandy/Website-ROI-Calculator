$( document ).ready(function() {
  var websiteUniqueVisits = 100;
  var websiteConversionPercent = 3;
  var closeRatePercent = 50;
  var sessionsPerWeek = 2;
  var perSessionAmount = 30;

  function calculateROI() {
    // Calculate website leads by using our website conversion percent by the number of visits the website gets
    var websiteLeads = websiteUniqueVisits * (websiteConversionPercent / 100);
    console.log("Website Leads: "+websiteLeads);

    // Calculate closed sales by using the website leads and their close rate
    var closedSales = Math.ceil(websiteLeads * (closeRatePercent / 100));
    console.log("Closed Sales: "+closedSales);

    var customerValue = Math.round((sessionsPerWeek * 4) * perSessionAmount);
    console.log("Average Value of Customer: "+customerValue);

    // Calculate amount of revenue per month from website by session amount in £ by number of sessions per week
    return Math.ceil(closedSales * customerValue);

  }
  console.log(calculateROI());
});

// TODO: Your website will pay for itself in X months/weeks
