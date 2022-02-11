import { LightningElement } from "lwc";

export default class App extends LightningElement {
  nome = "wes"
  telefone = "11980987303"
  cpf = '00000000011'
  idade = '20'
  email = 'weslleyzh@hotmail.com'
  linkedin = "https://www.linkedin.com/in/wesasdev/"
  instagram = 'https://www.instagram.com/zHeroDZN'
  linkedingIMG ="https://cdn-icons-png.flaticon.com/512/174/174857.png"
  instaIMG = "https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-5.png"
  test = true;


  apikey = "6cfb66d4fd4f3f8aada1ae59c45835f5"
  nomeCidade = ''
  temperatura = ''
  urlImg = ''
  desc =''


  trocar =  () =>{

   

    this.test = !this.test
  }

  pegarTempo = async ()=>{
     let cidade = this.template.querySelector('[data-id="cidade"]').value
    console.log(cidade)
    let teste = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${cidade}&lang=pt_br&units=metric&appid=${this.apikey}`).then(res=>{
      let resJ = res.json().then(respostinha=>{
        console.log(respostinha)
        this.temperatura = respostinha.list[0].main.temp
        this.nomeCidade = respostinha.list[0].name
        this.desc = respostinha.list[0].weather[0].description
      })
      
    })
  }

 calc(){
   const value1 = parseInt(this.template.querySelector('[data-id="v1"]').value);
   const value2 = parseInt(this.template.querySelector('[data-id="v2"]').value);
   const result = this.template.querySelector('[data-id="result"]')
   let result2 = value1+value2
   result.innerHTML = result2  
 }
}
