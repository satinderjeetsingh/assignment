import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import 'd3';
import 'nvd3';

@Component({
  selector: 'app-d3-vis',
  templateUrl : 'd3-vis.html',
  styleUrls: [],
})
export class D3VisComponent implements OnInit {


  public options : any;
  public data : any; 
  public hello: any;
  //public urldata: any;

  constructor(public _data: TaskService) {}
  

  ngOnInit() {
     
/**    this._data.getData()
    .subscribe(res => {
      let value = res.map((res:any) => res.value)
      let date = res.map((res:any)=>res.date)
      //console.log(this.value)
      //console.log(this.date)
    })*/       
   
   this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 105
      },
        x: function(d:any){return d.label;},
        y: function(d:any){return d.value;},
        showValues: true,
        valueFormat: function(d:any){
          return (d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Dates'
        },
        yAxis: {
          axisLabel: 'Values'
        }
      }
    }
  /**   let urldata = function(){
     
      let ldate = date;
      let lvalue = value;

      let ourdata = [];
      for(var i=0;i<lvalue.length;i++){
        ourdata.push({
          "label":ldate[i],
          "value":lvalue[i],
          
        })
        }
        console.log(ourdata)
    }*/
    this.data = [
      {
        key: "Cumulative Return",
        values: [{"value":67,"label":"2018-01-01"},
                  {"value":427,"label":"2017-09-01"},
                  {"value":97,"label":"2018-01-11"},
                  {"value":69,"label":"2018-12-21"},
                  {"value":52,"label":"2018-11-11"},
                  {"value":34,"label":"2017-05-11"},
                  {"value":17,"label":"2018-09-17"},
                  {"value":53,"label":"2019-01-11"},
                  {"value":32,"label":"2016-01-21"},
                  {"value":21,"label":"2017-01-19"},
                  {"value":190,"label":"2018-10-11"},
                  {"value":219,"label":"2018-06-13"},
                  {"value":57,"label":"2018-07-12"},
                  {"value":29,"label":"2018-11-11"},
                  {"value":31,"label":"2018-09-22"},
                  {"value":56,"label":"2018-01-31"},
                  {"value":69,"label":"2018-06-21"},
                  {"value":76,"label":"2018-05-15"}]

      }
    ];
  }

    
  //public colors = ['red']
 //public  dataColumns = [1]; // Single Bar Chart
 //public  dataColumns = [3]; // Stacked Bar Chart
//public  dataColumns = [2, 1]; // Multi Stacked Bar Chart

//public barChartData = this.data;
/**  
public barChartData = [{
    key : 'date',
    values : [[this.value,this.date]],
    },
  ]
 */
}
