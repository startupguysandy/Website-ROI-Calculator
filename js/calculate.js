$( document ).ready(function() {
  $('#roiForm').submit(function(e) {
    e.preventDefault();

    // Grab values from form inputs
    var websiteUniqueVisits = $('input[name="website-uniques"]').val(),
        websiteConversionPercent = 3,
        closeRatePercent = $('input[name="close-rate"]').val(),
        sessionsPerWeek = $('input[name="sessions-weekly"]').val(),
        perSessionAmount = $('input[name="per-session-value"]').val();

    // Do math to calculate revenue
    var websiteLeads = websiteUniqueVisits * (websiteConversionPercent / 100),
        closedSales = Math.ceil(websiteLeads * (closeRatePercent / 100)),
        customerValue = Math.round((sessionsPerWeek * 4) * perSessionAmount),
        monthlyWebsiteRevenue = Math.ceil(closedSales * customerValue);

    // Show results and our calculations
    $('#result').text("£"+monthlyWebsiteRevenue+" in new sales, per month, from your website.");

    $('#calculations').html("You should get "+websiteLeads+" good leads from your website."+'<br />'+
                            "Based on your close rate, you should turn "+closedSales+" of those into paying customers."+'<br />'+
                            "Each customer is worth £"+customerValue+" per month, meaning you'll make around £"+monthlyWebsiteRevenue+" from the "+closedSales+" you sell to each month.");
  });
});

// TODO: Your website will pay for itself in X months/weeks
// TODO: Leads from website doesn't mean consultation. Need to factor in how many show up for a consult.

// Nice ref for basic, functional calculator: https://gist.github.com/michaelaguiar/1989078
