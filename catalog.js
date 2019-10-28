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

    const app = new Vue ({
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
      },
    });

