
Feature('Prime Factors kata');

Scenario('We enter a Number and it returns the prime factors', (I) => {
  I.amOnPage('/');
  I.fillField('numberToFactor', 150);
  I.click('Find Factors');
  I.see('2, 3, 5, 5');
  I.dontSee('4');
});
