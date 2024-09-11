window.addEventListener("cart_changed", () => {
  BSS_B2B.cart.fixer(JSON.parse($("#bss-b2b-store-data").html()), false, false);
});

window.onbeforeunload = function () {
  setTimeout(() => {
    BSS_B2B.handleCartCheckoutBtn(BSS_B2B.shopData);
  }, 3000);
};
