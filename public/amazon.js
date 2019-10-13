{const itemContainerClass = "sg-col-inner";
const imageClass = "s-image";
const titleClass = "a-size-medium a-color-base a-text-normal";
const priceClass = "a-price-whole";
const items = document.getElementsByClassName(itemContainerClass);
const arr = [];

Array.from(items).forEach(item =>{
    const imgs = item.getElementsByClassName(imageClass);
    if(imgs.length === 0) return;
    const img = imgs[0];

    const src = img.dataset.src;
    if(!src) return;

    const title = item.getElementsByClassName(titleClass)[0].textContent;
    const price = item.getElementsByClassName(priceClass)[0].textContent;
    const category = document.title.split("|")[0].trim();

    arr.push({
        src,
        title,
        price,
        category,
    })
})
console.log(JSON.stringify(arr));}
