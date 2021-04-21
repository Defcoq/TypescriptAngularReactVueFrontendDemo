import { LocalDataSource } from "./data/localDataSource";
//import { DomDisplay } from "./domDisplay";
import { HtmlDisplay } from "./htmlDisplay";
import "bootstrap/dist/css/bootstrap.css";
let ds = new LocalDataSource();
async function displayData(): Promise<HTMLElement> {
   // let display = new DomDisplay();
   let display = new HtmlDisplay();
    display.props = {
       /* products: await ds.getProducts("name"),
        order: ds.order*/
        dataSource: ds
    }
    return display.getContent();
}
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        });
    }
};
