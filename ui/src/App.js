import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactToPrint from 'react-to-print';
import PrintComponent from './js/PrintComponent';

class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      arr:[],
      asset:undefined,
      price:undefined,
      id:undefined
    }
  }
  
  button=()=>{
    let arr1=this.state.arr;
   let obj={
     data1:this.state.asset,
     data2:this.state.price,
     data3:this.state.id
   }
   arr1.push(obj);
   
  console.log(arr1);
  
  this.setState({arr:arr1})
   /*let arr1=[...this.state.arr];
   arr1.push(obj);
   this.setState({arr:arr1})*/
  }
  onChangeVal=(val,e)=>{
      /*if(val == 'ASSET'){
        this.setState({asset:e.target.value})
      }else if( val == 'PRICE'){
        this.setState({price:e.target.value});
      }else{
        this.setState({id:e.target.value});
        <input type="text" id="asset" onChange={this.onChangeVal.bind(this,'ASSET')}/>
      <input type="text" id="price" onChange={this.onChangeVal.bind(this,'PRICE')} />
      }*/
      let arr=[{
        price:'100',
        id:'ABCD1',
        asset:'LG'
      },
      {
        price:'101',
        id:'ABCD2',
        asset:'SAMSUNG'
      }
    ]
    let newArr=[];
console.log(e.target.value);
   let res= arr.map((value,i)=>{
      if(value.id==e.target.value){
        console.log(value.id);
        newArr.push(arr[i]);
      }else{
        this.setState({asset:undefined});
      this.setState({price:undefined});
      this.setState({id:undefined});
      }
    })
    console.log('result is coming',newArr);
    
    if(newArr.length>0){
     
      let asse=newArr[0].asset;
      let pri=newArr[0].price;
      let idis=newArr[0].id
      console.log(asse+" "+pri+" "+idis);
     this.setState({asset:asse});
      this.setState({price:pri});
      this.setState({id:idis});
    }
      
  
    
  }
  render(){
    
  return (
    <div >
      
       <div style={{display:'flex',width:'30%',marginTop:'20px',marginLeft:'20px'}}>
      <input type="text" id="id"  className="form-control"  onChange={this.onChangeVal.bind(this,'ID')}/>
      <button  onClick={this.button} className="btn btn-primary">Add</button>
      </div>
      <PrintComponent ref={el => (this.componentRef = el)} val={this.state.arr}/>
     
      <ReactToPrint
          trigger={() => <button className="btn btn-success" style={{float:'right',marginRight:'50px'}}>Print this out!</button>}
          content={() => this.componentRef}
        />
        
    </div>
  );
}
}

export default App;
