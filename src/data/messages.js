/**
 * id: string
 * question: string
 * validation: string[]
 */
export const questions = [
  {
    id:"producto",
    question: "¿Digite un producto valido?",
    validation: ["HDD", "SSD", "SSDM2"],
  },
  {
    id:"precio",
    question: "¿Precio del producto?",
    validation: [5000, 18000],
  },
  {
    id:"unidades",
    question: "¿Cantidad de unidades?",
    validation: [1, 50],
  },
  {
    id:"marca",
    question: "¿Seleccione la marca?",
    validation: ["Seagate", "Western Digital", "Kingston"],
  },
  {
    id:"capacidad",
    question: "¿Capacidad de la unidad?",
    validation: ["250Gb", "500Gb", "1Tb", "2Tb"],
  },
];