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

const CartComponent = {
  template: `<div class="product-in-sc">
                                <a href="single-page.htm" style="float: left; width: 240px;">
                                    <div class="product-in-sc-img" style="background-image: url(img/sc_img1.jpg)">
                                    </div>

                                    <div class="product-in-sc-desc">
                                        <h3 class="h3-sc-name">Rebox Zane</h3>
                                        <div class="sc-rating">
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                            <i class="fas fa-star rat"></i>
                                        </div>
                                        <div class="sc-count">1&nbsp;x $250</div>

                                    </div>
                                </a>
                                <div class="sh__action"><a href="#" class="action"><i
                                        class="far fa-times-circle"></i></a></div>

                            </div>`
};

const CartListComponent = {
    props: [],
    template: `<div class="sh"><a href="shopping-card.htm"><img src="img/Forma_1.svg" alt="basket"
                                                                     class="shopping-cart"></a>
                        <div class="sh-count">5</div>
                        <div class="shopping-cart__drop">
                            <cart-component></cart-component>
                            <div class="product-in-sc"><a href="single-page.htm" style="float: left; width: 240px;">
                                <div class="product-in-sc-img" style="background-image: url(img/sc_img2.jpg)">
                                </div>

                                <div class="product-in-sc-desc">
                                    <h3 class="h3-sc-name">Rebox Zane</h3>
                                    <div class="sc-rating">
                                        <i class="fas fa-star rat"></i>
                                        <i class="fas fa-star rat"></i>
                                        <i class="fas fa-star rat"></i>
                                        <i class="fas fa-star rat"></i>
                                        <i class="fas fa-star rat"></i>
                                    </div>
                                    <div class="sc-count">1&nbsp;x $250</div>

                                </div>
                            </a>
                                <div class="sh__action"><a href="#" class="action"><i
                                        class="far fa-times-circle"></i></a></div>
                            </div>
                            <div class="total">
                                <div>total</div>
                                <div>$500.00</div>
                            </div>
                            <a href="checkout.htm" class="sc-btn">Checkout</a>
                            <a href="shopping-card.htm" class="sc-btn">go&nbsp;to&nbsp;cart</a>
                        </div>
                    </div>`,
    components: {
        'cart-component': CartComponent
    }
};

const app = new Vue({
    el: '#root',
    data: {
        items: [],
    },
    mounted() {
        fetch('/goods')
            .then(response => response.json())
            .then((goods) => {
                this.items = goods;
            });
    },
    components: {
        'catalog-list-component': CatalogListComponent,
        'cart-list-component': CartListComponent
    },
});

