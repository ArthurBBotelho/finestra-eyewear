// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIWx4L6ZbXTezqV0EeyQwXGRhjbTnKCDI",
  authDomain: "finestra-eyewear-18abf.firebaseapp.com",
  projectId: "finestra-eyewear-18abf",
  storageBucket: "finestra-eyewear-18abf.appspot.com",
  messagingSenderId: "766671048565",
  appId: "1:766671048565:web:2d451cddb1c9b0da378d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db; 

// const produtos = [
//     { id: 1, nome: "Phinet", price: 499, estoque: 10, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/phinet/phinet-front.png?raw=true" },
//     { id: 9, nome: "Malik", price: 389, estoque: 10, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/malik/malik-front.png?raw=true" },
//     { id: 4, nome: "Dominic", price: 559, estoque: 5, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/dominic/dominic-front.png?raw=true" },
//     { id: 5, nome: "Emma", price: 439, estoque: 4, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/emma/emma-front.png?raw=true" },
//     { id: 6, nome: "Frame", price: 599, estoque: 12, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/frame/frame-front.png?raw=true" },
//     { id: 8, nome: "Mac", price: 399, estoque: 3, category: "Oculos de Grau", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mac/mac-front.png?raw=true" },
//     { id: 7, nome: "Lyra", price: 499, estoque: 9, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/lyra/lyra-front.png?raw=true" },
//     { id: 2, nome: "Mirage", price: 439, estoque: 5, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/mirage/mirage-front.png?raw=true" },
//     { id: 3, nome: "Bossa", price: 469, estoque: 6, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/bossa/bossa-front.png?raw=true" },
//     { id: 10, nome: "Maxx", price: 589, estoque: 6, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/maxx/maxx-front.png?raw=true" },
//     { id: 11, nome: "Otto", price: 529, estoque: 10, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/otto/otto-front.png?raw=true" },
//     { id: 12, nome: "Sprint", price: 449, estoque: 2, category: "Oculos de Sol", imagem: "https://github.com/ArthurBBotelho/finestra-eyewear/blob/main/src/imagens/products/sprint/sprint-front.png?raw=true" }
// ]

// produtos.forEach(async(obj) => {
//     const docRef = await addDoc(collection(db, "produtos"), obj);
//       console.log("Document written with ID: ", docRef.id);
//   });