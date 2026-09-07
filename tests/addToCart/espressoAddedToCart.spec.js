import { test } from '../fixtures/fixtures';
import { unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    await unitPriceFormatStr(coffeePrices.espresso, 1),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    await priceFormatStr(coffeePrices.espresso),
  );
});
