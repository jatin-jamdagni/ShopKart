export async function categoryData() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    console.log("hiiii",json)
    return json;

}
