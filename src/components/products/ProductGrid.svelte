<script>
    import Product from './Product.svelte'
    import {products} from '../../store/store'
    let productsArray

    products.subscribe(arr => productsArray = arr)
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
    <Product/>
    <Product/>
    <Product/>
</div>