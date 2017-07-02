$( document ).ready(function() {
  $('#roiForm').submit(function(e) {
    e.preventDefault();

    // Grab values from form inputs
    var websiteUniqueVisits = $('input[name="website-uniques"]').val(),
        websiteConversionPercent = 3,
        closeRatePercent = $('input[name="close-rate"]').val(),
        sessionsPerWeek = $('input[name="sessions-weekly"]').val(),
        perSessionAmount = $('input[name="per-session-value"]').val();

    var websiteLeads = websiteUniqueVisits * (websiteConversionPercent / 100);
    console.log("Website Leads: "+websiteLeads);

    var closedSales = Math.ceil(websiteLeads * (closeRatePercent / 100));
    console.log("Closed Sales: "+closedSales);

    var customerValue = Math.round((sessionsPerWeek * 4) * perSessionAmount);
    console.log("Average Value of Customer: "+customerValue);

    var monthlyWebsiteRevenue = Math.ceil(closedSales * customerValue);
    $('#result').text("£"+monthlyWebsiteRevenue+" in new sales, per month, from your website");
  });
});

// TODO: Your website will pay for itself in X months/weeks
