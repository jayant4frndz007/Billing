import React,{Component} from 'react';

export default class PrintComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.val,
            quantity:1,
            totalAmount:undefined
        }
       this.amount=5;
    }
    quntFunc=(val1,val2,e)=>{
        if(e.target.value>0){
            document.getElementById(val1).innerHTML=val2*e.target.value;
            
        }
    }
    filterData=(data)=>{
        console.log('data',data);
        let setVal=new Map();
        let count=0;
        data.map((val)=>{
            count=setVal.get(val.data3)!= null ?setVal.get(val.data3):0;
            
           setVal.set(val.data3,++count);
        });
        console.log('Set',setVal);
return setVal;
    }
    componentDidMount(){
        console.log('inside did');
    }
getFunData=()=>{
    //e.preventDefault();
    console.log(this.props.val);
    let dupArr=[];
    var totalAmount1=0;
    let countData=this.filterData(this.props.val);
    
let listItems = this.props.val.map((v,i)=>
{
    console.log(dupArr);
    console.log((dupArr).includes(v.data3));
if(!(dupArr).includes(v.data3)){
    console.log(dupArr);
    
dupArr.push(v.data3);
console.log('total amount',totalAmount1);
if(v.data1 != null && v.data1 != undefined){
    totalAmount1=totalAmount1+(v.data2*countData.get(v.data3));
    return  <tr key={v.data3}>
    <td>{i}</td>
    <td>{v.data1}</td>
    <td>{v.data2}</td>
    <td><div id="quant">{countData.get(v.data3)}</div></td>
     <td><div id={v.data3}>{v.data2*countData.get(v.data3)}</div></td>
</tr>
}
}
    
}
)
    console.log('total amount is:'+totalAmount1);
    //this.setState({totalAmount:totalAmount1});
   this.amount=totalAmount1;
    
        return listItems;
}
totalAmountFun=()=>{
    console.log(this.amount);
    return this.amount;
}
    render(){
        const a= this.getFunData();
        return(<div className="container">
           <center><h2>Jay Cyber Cafe</h2></center> 
                <table className="table">
                    <thead>
             <tr>
                 <th>Slno</th>
                 <th>Description</th>
                 <th>Price</th>
                 <th>quantity</th>
                 <th>total</th>
             </tr>
             </thead>
               
           
                {
               a
                }
               
          
            </table>
            
            <hr/>
           <div style={{display:'flex'}}>
            <div style={{fontSize:'20px'}}><b>Total Amount:&nbsp;
            {
              this.totalAmountFun()
          }
          </b>
          </div>
          </div>
            </div>
          );
    }

}