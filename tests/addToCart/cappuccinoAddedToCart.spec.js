import { test } from '../fixtures/fixtures';
import { unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    await unitPriceFormatStr(1, coffeePrices.cappuccino),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    await priceFormatStr(coffeePrices.cappuccino),
  );
});
