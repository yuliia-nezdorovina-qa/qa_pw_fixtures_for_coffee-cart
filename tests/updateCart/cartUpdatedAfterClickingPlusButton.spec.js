import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    await priceFormatStr(coffeePrices.espresso),
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    await priceFormatStr(coffeePrices.espresso * 2),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    await priceFormatStr(coffeePrices.cappuccino),
  );

  await cartPage.clickAddOneCappuccinoButton();

  const newCappuccinoPrice = coffeePrices.cappuccino * 2;
  const newEspressoPrice = coffeePrices.espresso * 2;

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    await priceFormatStr(newCappuccinoPrice),
  );

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    await priceFormatStr(newEspressoPrice),
  );

  await cartPage.assertTotalCheckoutContainsValue(
    await priceFormatStr(newCappuccinoPrice + newEspressoPrice),
  );
});
