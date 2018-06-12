
Feature('search');

Scenario('test search function', (I) => {
    I.amOnPage('/');
    I.seeInTitle('Poland Weather - AccuWeather.com');
    I.fillField('s', 'Helsinki');
    I.pressKey('Enter');
    I.waitInUrl('/search-locations', 5);
    I.see('Helsinki, Uusimaa, FI', 'em');
});
