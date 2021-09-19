<script>
    import {cart} from '../../store/store'
    let cartArray
    let total = 0

    cart.subscribe(value => cartArray = value)
</script>
<div class="bg-warmGray-700 text-warmGray-200 p-4 rounded absolute whitespace-nowrap right-0 top-14 z-40 shadow-md">
    <div>
        <div class="flex items-center justify-between gap-x-4">
            <span>Product name</span>
            <span>
                x2
                <span class="font-bold text-lime-500">$48</span>
            </span>
        </div>
        <hr class="my-3">
        <div class="font-bold text-lg flex items-center justify-between">
            Total: <span class="font-bold text-lime-500">${total}</span>
        </div>
    </div>
</div>