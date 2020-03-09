const SCListElement = {
    props: ['id', 'title', 'qty', 'price', 'img', 'color', 'size', 'shipping'],
    template: `<div class="unit-shopping-card">
                    <a href="single-page.htm" class="product-details shopping-card-unit">
                        <div :style="img"
                             class="unit-shopping-card-img"></div>
                        <div class="unit-shopping-card-info">
                            <div class="unit-shopping-card-name">{{title}}</div>
                            <div class="unit-shopping-card-rating">
                                <i class="fas fa-star rat"></i>
                                <i class="fas fa-star rat"></i>
                                <i class="fas fa-star rat"></i>
                                <i class="fas fa-star rat"></i>
                                <i class="fas fa-star rat"></i>
                            </div>
                            <div class="unit-shopping-card-color"><span class="color-size">Color:</span> {{color}}</div>
                            <div class="unit-shopping-card-color"><span class="color-size">Size:</span> {{size}}</div>
                        </div>
                    </a>

                    <div class="flex-shopping-card">
                        <div class="shopping-card-price">$ {{price}}</div>
                        <div><input type="number" :placeholder="qty" class="quanity"></div>
                        <div class="shipping-shopping-card">{{shipping}}</div>
                        <div class="shopping-card-price">$ {{price * qty}}</div>
                        <div><a href="#" class="action"><i class="far fa-times-circle"></i></a></div>
                    </div>
                </div>`
};

const SCListComponent = {
    props: ['items'],
    template: `<div>
            <div class="shopping-card container">
                <div class="header__shopping-card">
                    <div class="product-details">Product Details</div>
                    <div class="flex-shopping-card">
                        <div>unite Price</div>
                        <div>Quantity</div>
                        <div>shipping</div>
                        <div>Subtotal</div>
                        <div>ACTION</div>
                    </div>
                </div>
                <sc-list-element v-for="item in items"
                              :key="item.id"
                              :title="item.title"
                              :id="item.id"
                              :qty="item.qty"
                              :price="item.price"
                              :img="item.cartPageImage"
                              :color="item.color"
                              :size="item.size"
                              :shipping="item.shipping"></sc-list-element>
                <div class="shopping-card-buttons">
                    <div><a href="#" class="btn">cLEAR SHOPPING CART</a></div>
                    <div><a href="checkout.htm" class="btn">cONTINUE sHOPPING</a></div>
                </div>
            </div>
            <div class="container flex">
                <div class="flex-element">
                    <div class="flex-header">Shipping Adress</div>
                    <select name="country" id="country" class="choice-country" title="Choice your country">
                        <option value="bangladesh">Bangladesh</option>
                        <option value="russia">Russia</option>
                    </select>
                    <input type="text" placeholder="State" class="state">
                    <input type="text" placeholder="Postcode/Zip" class="state">
                    <div style="margin-top: 23px;"><a href="#" class="btn">get a&nbsp;quote</a></div>
                </div>
                <div class="flex-element">
                    <div class="flex-header">coupon discount</div>
                    <div class="coupon">Enter your coupon code if&nbsp;you have one</div>
                    <input type="text" placeholder="coupon code" class="coupon-input">
                    <div style="margin-top: 25px;"><a href="#" class="btn">Apply coupon</a></div>
                </div>
                <div class="checkout-panel">
                    <div class="border-checkout">
                        <div class="sub-total">Sub total<span class="sub-total-price">$ {{total}}</span></div>
                        <div class="grand-total">GRAND TOTAL<span class="grand-total-price">$ {{total}}</span></div>
                    </div>
                    <div><a href="checkout.htm" class="check-btn">proceed to&nbsp;checkout</a></div>
                </div>
            </div>
      </div>`,
    computed: {
        total() {
            return this.items.reduce((acc, item) => acc + item.qty * item.price, 0);
        },
    },
    components: {
        'sc-list-element': SCListElement
    }
};

const CartElement = {
    props: ['id', 'title', 'qty', 'price', 'img'],
    template: `<div class="product-in-sc">
                                <a href="single-page.htm" style="float: left; width: 240px;">
                                    <div class="product-in-sc-img" :style="img">
                                    </div>

                                    <div class="product-in-sc-desc">
                                        <h3 class="h3-sc-name">{{title}}</h3>
                                        <div class="sc-rating">
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                        </div>
                                        <div class="sc-count">{{qty}}&nbsp;x $ {{price}}</div>

                                    </div>
                                </a>
                                <div class="sh__action"><a href="#" class="action"><i
                                        class="far fa-times-circle"></i></a></div>

                            </div>`
};

const CartListComponent = {
    props: ['items'],
    template: `<div class="sh"><a href="shopping-card.htm"><img src="img/Forma_1.svg" alt="basket"
                                                                     class="shopping-cart"></a>
                        <div class="sh-count">5</div>
                        <div class="shopping-cart__drop">
                            <cart-element v-for="item in items"
                              :key="item.id"
                              :title="item.title"
                              :id="item.id"
                              :qty="item.qty"
                              :price="item.price"
                              :img="item.cartDropMenuImage">
                            </cart-element>
                            <div class="total">
                                <div>total</div>
                                <div>$ {{total}}</div>
                            </div>
                            <a href="checkout.htm" class="sc-btn">Checkout</a>
                            <a href="shopping-card.htm" class="sc-btn">go&nbsp;to&nbsp;cart</a>
                        </div>
                    </div>`,
    computed: {
        total() {
            return this.items.reduce((acc, item) => acc + item.qty * item.price, 0);
        },
    },
    components: {
        'cart-element': CartElement
    }
};

const CatalogComponent = {
    props: ['id', 'title', 'price', 'img'],
    template: `<div class="catalog-flex">
                        <a href="single-page.htm" class="productUnit">
                            <div class="unit-img" :style="img"></div>
                            <div class="unit-text">
                                <p class="productUnitName">{{title}}</p>
                                <div class="procductUnitPrice">$ {{price}}</div>
                                <div class="rating">
                                    <i class="fas fa-star rat"></i>
                                    <i class="fas fa-star rat"></i>
                                    <i class="fas fa-star rat"></i>
                                    <i class="fas fa-star rat"></i>
                                    <i class="fas fa-star rat"></i>
                                </div>
                            </div>
                        </a>
                        <a href="shopping-card.htm" class="addtocard1">Add to&nbsp;card</a>
                        <a href="#" class="addtocard2"><i class="far fa-heart"></i></a>
                        <a href="#" class="addtocard3"><i class="fas fa-retweet"></i></a>
                    </div>`
};

const CatalogListComponent = {
    props: ['items'],
    template: `<div class="product-catalog">
            <catalog-component 
            v-if="items.length"
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :price="item.price"
            :img="item.img"          
            @buy="handleBuyClick(item)"
            ></catalog-component>            
          </div>`,
    components: {
        'catalog-component': CatalogComponent,
    }
};

const HeaderComponent = {
    props: ['items'],
    template: `<header class="header">
            <div class="container header__flex">
                <div class="header__left">
                    <a class="logo" href="index.htm"><img src="img/logo.png" alt="logo">
                        <div class="brand">BRAN<span class="pink weight">D</span></div>
                    </a>
                    <form class="header__form" action="#">
                        <div class="browse"><a href="#" class="brw">Browse<i class="fas fa-caret-down"></i></a>
                            <div class="drop__browse">
                                <h3 class="drop__header">Women</h3>
                                <ul>
                                    <li><a href="catalog.htm" class="drop__link">Dresses</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Tops</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Sweaters/Knits</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Jackets/Coats</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Blazers</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Denim</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Leggings/Pants</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Skirts/Shorts</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Accessories </a></li>
                                </ul>
                                <h3 style="margin-top: 22px;" class="drop__header">Men</h3>
                                <ul>
                                    <li><a href="catalog.htm" class="drop__link">Tees/Tank tops</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Shirts/Polos</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Sweaters</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Sweatshirts/Hoodies</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Blazers</a></li>
                                    <li><a href="catalog.htm" class="drop__link">Jackets/vests</a></li>
                                </ul>
                            </div>
                        </div>
                        <input type="text" class="search" placeholder="Search for Item...">
                        <button class="search__button"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="header__right">
                    <cart-list-component :items="items"></cart-list-component>
                    <a class="button" href="#">My&nbsp;Account<i class="fas fa-caret-down"></i></a>
                </div>
            </div>
        </header>`,
    components: {
        'cart-list-component': CartListComponent,
    }
};

const NavigationComponent = {
    template: `<nav class="navigation">
            <ul class="container menu">
                <li class="menu-list"><a href="index.htm" class="menu-link">Home</a>
                </li>
                <li class="menu-list menu-list-second"><a href="catalog.htm" class="menu-link">Man</a>
                    <div class="drop">
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                                <li><a href="catalog.htm" class="drop-link">Blazers</a></li>
                                <li><a href="catalog.htm" class="drop-link">Denim</a></li>
                                <li><a href="catalog.htm" class="drop-link">Leggings/Pants</a></li>
                                <li><a href="catalog.htm" class="drop-link">Skirts/Shorts</a></li>
                                <li><a href="catalog.htm" class="drop-link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <h3 class="drop-h3 drop-menu__margin">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <div class="drop-flex-img"><a href="catalog.htm" class="drop-super-sale">Super
                                sale!</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu-list menu-list-third"><a href="catalog.htm" class="menu-link">Women</a>
                    <div class="drop">
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                                <li><a href="catalog.htm" class="drop-link">Blazers</a></li>
                                <li><a href="catalog.htm" class="drop-link">Denim</a></li>
                                <li><a href="catalog.htm" class="drop-link">Leggings/Pants</a></li>
                                <li><a href="catalog.htm" class="drop-link">Skirts/Shorts</a></li>
                                <li><a href="catalog.htm" class="drop-link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <h3 class="drop-h3 drop-menu__margin">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <div class="drop-flex-img"><a href="catalog.htm" class="drop-super-sale">Super
                                sale!</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu-list menu-list-fourth"><a href="catalog.htm" class="menu-link">Kids</a>
                    <div class="drop">
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                                <li><a href="catalog.htm" class="drop-link">Blazers</a></li>
                                <li><a href="catalog.htm" class="drop-link">Denim</a></li>
                                <li><a href="catalog.htm" class="drop-link">Leggings/Pants</a></li>
                                <li><a href="catalog.htm" class="drop-link">Skirts/Shorts</a></li>
                                <li><a href="catalog.htm" class="drop-link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <h3 class="drop-h3 drop-menu__margin">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <div class="drop-flex-img"><a href="catalog.htm" class="drop-super-sale">Super
                                sale!</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu-list menu-list-fifth"><a href="catalog.htm" class="menu-link">Accoseriese</a>
                    <div class="drop">
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                                <li><a href="catalog.htm" class="drop-link">Blazers</a></li>
                                <li><a href="catalog.htm" class="drop-link">Denim</a></li>
                                <li><a href="catalog.htm" class="drop-link">Leggings/Pants</a></li>
                                <li><a href="catalog.htm" class="drop-link">Skirts/Shorts</a></li>
                                <li><a href="catalog.htm" class="drop-link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <h3 class="drop-h3 drop-menu__margin">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <div class="drop-flex-img"><a href="catalog.htm" class="drop-super-sale">Super
                                sale!</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu-list menu-list-pre-last"><a href="catalog.htm" class="menu-link">Featured</a>
                    <div class="drop">
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                                <li><a href="catalog.htm" class="drop-link">Blazers</a></li>
                                <li><a href="catalog.htm" class="drop-link">Denim</a></li>
                                <li><a href="catalog.htm" class="drop-link">Leggings/Pants</a></li>
                                <li><a href="catalog.htm" class="drop-link">Skirts/Shorts</a></li>
                                <li><a href="catalog.htm" class="drop-link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <h3 class="drop-h3 drop-menu__margin">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <div class="drop-flex-img"><a href="catalog.htm" class="drop-super-sale">Super
                                sale!</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu-list menu-list-last"><a href="catalog.htm" class="menu-link">Hot Deals</a>
                    <div class="drop">
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                                <li><a href="catalog.htm" class="drop-link">Blazers</a></li>
                                <li><a href="catalog.htm" class="drop-link">Denim</a></li>
                                <li><a href="catalog.htm" class="drop-link">Leggings/Pants</a></li>
                                <li><a href="catalog.htm" class="drop-link">Skirts/Shorts</a></li>
                                <li><a href="catalog.htm" class="drop-link">Accessories </a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <h3 class="drop-h3 drop-menu__margin">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                            </ul>
                        </div>
                        <div class="drop-flex">
                            <h3 class="drop-h3">Women</h3>
                            <ul>
                                <li><a href="catalog.htm" class="drop-link">Dresses</a></li>
                                <li><a href="catalog.htm" class="drop-link">Tops</a></li>
                                <li><a href="catalog.htm" class="drop-link">Sweaters/Knits</a></li>
                                <li><a href="catalog.htm" class="drop-link">Jackets/Coats</a></li>
                            </ul>
                            <div class="drop-flex-img"><a href="catalog.htm" class="drop-super-sale">Super
                                sale!</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>`
};

const SubscribePanelComponent = {
    template: `<div class="subscribe">
            <div class="container">
                <div class="review">
                    <div class="rev review__rev">
                        <p class="rev-pers">&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,
                            a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum mattis neque sed pretium&raquo;</p>
                        <p class="person-name">Bin Burhan</p>
                        <p class="person-place">Dhaka, Bd</p>
                        <div class="lines">
                            <div class="line checked"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                    </div>

                </div>
                <article class="subs">
                    <h3>Subscribe</h3>
                    <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
                    <form action="#" class="fs">
                        <input type="email" class="form" placeholder="Ener Your Email">
                        <button class="sub-but">Subscribe</button>
                    </form>
                </article>
            </div>
        </div>`
};

const FooterComponent = {
    template: `<footer class="container">
        <div class="info">
            <a class="logo" href="index.htm"><img src="img/logo.png" alt="logo">
                <div class="brand">BRAN<span class="pink weight">D</span></div>
            </a>
            <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
                multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly syndicate an&nbsp;expanded
                array of&nbsp;processes
                and cross-unit partnerships.</p>
            <p>Efficiently plagiarize 24/365 action items and focused infomediaries.
                Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
        </div>
        <nav>
            <h4>COMPANY</h4>
            <ul>
                <li><a href="index.htm">Home</a></li>
                <li><a href="catalog.htm">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">How It&nbsp;Works</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <nav>

            <h4>INFORMATION</h4>
            <ul>
                <li><a href="#">Tearms &amp;&nbsp;Condition</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">How to&nbsp;Buy</a></li>
                <li><a href="#">How to&nbsp;Sell</a></li>
                <li><a href="#">Promotion</a></li>
            </ul>
        </nav>
        <nav>

            <h4>SHOP CATEGORY</h4>
            <ul>
                <li><a href="catalog.htm">Men</a></li>
                <li><a href="catalog.htm">Women</a></li>
                <li><a href="catalog.htm">Child</a></li>
                <li><a href="catalog.htm">Apparel</a></li>
                <li><a href="catalog.htm">Brows All</a></li>
            </ul>
        </nav>

    </footer>`
};

const FooterSocialComponent = {
    template: `<div class="social">
        <div class="container">
            <div class="rights">&copy;&nbsp;2017 Brand All Rights Reserved.</div>
            <div class="icons">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-pinterest-square"></i></a>
                <a href="#"><i class="fab fa-google-plus-square"></i></a>
            </div>
        </div>
    </div>`
};

const BreadcrumbsComponent = {
    template: `<section class="catalog-header">
            <div class="container ch-flex">
                <h1>New Arrivals</h1>
                <nav>
                    <ul>
                        <li><a href="index.htm">Home</a>&nbsp;/</li>
                        <li><a href="catalog.htm">Men</a>&nbsp;/</li>
                        <li><a href="#" class="activate">New Arrivals</a></li>
                    </ul>
                </nav>
            </div>
        </section>`
};

const app = new Vue({
    el: '#root',
    data: {
        items: [],
        cart: [],
    },
    mounted() {
        fetch('/goods')
            .then(response => response.json())
            .then((goods) => {
                this.items = goods;
            });

        fetch('/cart')
            .then(response => response.json())
            .then((cart) => {
                this.cart = cart;
            });
    },
    components: {
        'catalog-list-component': CatalogListComponent,
        'sc-list-component': SCListComponent,
        'header-component': HeaderComponent,
        'navigation-component': NavigationComponent,
        'subscribe-panel-component': SubscribePanelComponent,
        'footer-component': FooterComponent,
        'footer-social-component': FooterSocialComponent,
        'breadcrumbs-component': BreadcrumbsComponent
    },
});

