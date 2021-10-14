import { Prompt } from "./Prompt.js";
import { questions } from "../data/messages.js";
// import { test } from "../data/test.js";

export class UI {
  // #data = test;
  #data = [];
  #app = document.getElementById("app");

  get data() {
    return this.#data;
  }

  /**
   *
   * @param {number} count cuantos productos vas a agregar?
   */
  QuestionsRender(count = 1) {
    for (let i = 0; i < count; i++) {
      let object = {};
      questions.map((question) => {
        object[question.id] = new Prompt(question).Render(i + 1);
      });
      this.data.push(object);
    }
  }

  /**
 * 
 * @param {string} key 
 * @returns producto: string;
            precio: number;
            unidades: number;
            marca: string;
            capacidad: string;
 */
  HigherValueofProducts(key) {
    return this.#data.sort((a, b) => {
      if (a[key] === b[key]) return 0;
      if (a[key] < b[key]) return -1;
      return 1;
    });
  }

  Render() {
    let precioMayor =
      this.HigherValueofProducts("precio")[this.data.length - 1];
    this.BuildDiv("Producto mas costoso:", precioMayor, "precio");

    let unidadesMayor =
      this.HigherValueofProducts("unidades")[this.data.length - 1];
    this.BuildDiv("Producto con mayor stock:", unidadesMayor, "unidades");
  }

  /**
   *
   * @param {string} titulo
   * @param {Object} ObjProduct
   * @param {string} ObjProduct.producto
   * @param {number} ObjProduct.precio
   * @param {number} ObjProduct.unidades
   * @param {string} ObjProduct.marca
   * @param {string} ObjProduct.capacidad
   * @param {string} key
   */
  BuildDiv(titulo, ObjProduct, key) {
    let {producto,marca} = ObjProduct
    let div = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = titulo;

    let p = document.createElement("p");
    p.textContent = `${marca} ${producto} con un valor: ${ObjProduct[key]}`;

    div.append(h3);
    div.append(p);

    this.#app.appendChild(div);
  }
}