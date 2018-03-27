$(function() {
  var url = 'https://restcountries.eu/rest/v1/name/';
  var countriesList = $('#countries');

  $('#search').click(searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) {
      countryName = 'Poland';
    }
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList,
      error: errorMessage,
    })
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      $('<li>').text(item.name+', ' + item.capital).appendTo(countriesList);
    });
  }
  function errorMessage() {
    countriesList.empty();
    $('<li>').text('There is no country like this.').appendTo(countriesList);
  }
})
