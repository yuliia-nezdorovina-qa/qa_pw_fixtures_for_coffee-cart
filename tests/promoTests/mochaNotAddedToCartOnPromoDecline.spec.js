import { test } from '../fixtures/fixtures';

// eslint-disable-next-line max-len
test('Assert discounted Mocha not added to the Cart after promo diclining', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoItemIsVisible();
  await cartPage.assertDiscountedMochaItemIsHidden();

  await cartPage.assertCappuccinoItemIsVisible();
  await cartPage.assertAmericanoItemIsVisible();
});
