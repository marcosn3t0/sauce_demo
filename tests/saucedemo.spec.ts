import { test, expect } from '../fixture/saucedemo.fixture';
import { todoList } from '../data/todoList.data';

test.use({ useAuth: true });

test.describe('dicionar item ao carrinho de compras Checkout',async()=>{

  test('Adicionar item ao carrinho de compras',{
    tag:['@AddCart'],
  }, async ({ sauceDemoHomePage,sauceDemoCartPage }) => {

    await test.step('Adiciona Produtos ao carrinho de compras',async ()=>{

      await sauceDemoHomePage.navigateToHomePage();

      await sauceDemoHomePage.addProductsByName(todoList);

      console.log(`Products added to cart: ${JSON.stringify(sauceDemoHomePage.cartProducts)}`);

		  expect(sauceDemoHomePage.cartProducts.length).toBeGreaterThanOrEqual(todoList.length);
    });

    await test.step('Verify added Products in the cart',async ()=>{

		  await sauceDemoHomePage.clickOnCartIcon();

		  const cartItems = await sauceDemoCartPage.getCartItems();

      expect(sauceDemoHomePage.cartProducts).toEqual(cartItems)
      
    });
  });

});

test.afterEach(async({page})=>{
  await page.screenshot({ path: 'checkout.png', fullPage: true });
});
