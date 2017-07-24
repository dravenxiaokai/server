import * as express from 'express'

const app = express();

app.get('/',(req,res) => res.send('这里是首页!!!'))

app.get('/api/stock',(req,res) => {
  res.json(stocks)
})

app.get('/api/stock/:id',(req,res) => {
  res.json(stocks.find((stock) => stock.id == req.params.id))
})

const server = app.listen(8080,'localhost',() => {
  console.log('服务器已启动，地址是http://localhost:8080/')
})

export class Stock{
  constructor(public id:number,
              public name:string,
              public price:number,
              public rating:number,
              public desc:string,
              public categories:Array<string>){

  }
}

const stocks:Stock[] = [
  new Stock(1,'第一只股票',1.99,3.5,'这是我的第一只股票',['IT','互联网']),
  new Stock(2,'第二只股票',2.99,3.5,'这是我的第二只股票',['金融']),
  new Stock(3,'第三只股票',3.99,3.5,'这是我的第三只股票',['IT']),
  new Stock(4,'第四只股票',4.99,3.5,'这是我的第四只股票',['IT','互联网']),
  new Stock(5,'第五只股票',5.99,3.5,'这是我的第五只股票',['互联网']),
  new Stock(6,'第六只股票',6.99,3.5,'这是我的第六只股票',['金融']),
  new Stock(7,'第七只股票',7.99,3.5,'这是我的第七只股票',['IT','互联网'])
]