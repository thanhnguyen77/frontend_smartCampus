import React, { useEffect } from "react";
import axios from 'axios';

import { modelUpload, predictModel } from "../helpers/callApi";
import { data } from "./chart/chartConfig";
import e from "cors";
const pool = require("./conn_db/conn");
var mysql = require('mysql');

function ModelTest() {
  const [fileName, setFileName] = React.useState(
    "Select your JSON model file!"
  );
  const [errMsg, setErrMsg] = React.useState("");
  const [resMsg, setResMsg] = React.useState("");
  const [predictResult, setPredictResult] = React.useState([]);
  const handleSubmitFile = async e => {
    e.preventDefault();
    setErrMsg("");
    setResMsg("");
    if (fileName !== "Select your JSON model file!") {
      const data = new FormData(document.getElementById(`modelForm`));
      try {
        const res = await modelUpload(data);

        setResMsg(res.data.msg);
      } catch (err) {
        console.log(err);
        setErrMsg(err.response.data.msg);
      }
    }
  };

    
  
  const handlePredictModel  = async e => {
    console.log("da vo");
    e.preventDefault();
    const input1 =document.getElementById("hehe").value;
    // const newTest=startLiveUpdate();
    // const input1 = newTest;\


    //console.log(input1+"testtren");
    try {
      if (input1 === "") {
        setErrMsg("Input should not empty");
      } else {
        const res = await predictModel(input1);
        // const res1 =  predictModel(input);
        // console.log(startLiveUpdate.data1+"thu thoi");
       const result1=(res.data[0][1]*100).toFixed(2)
       const result2=(res.data[0][2]*100).toFixed(2)
       const result3=(res.data[0][3]*100).toFixed(2)
       const result4=(res.data[0][4]*100).toFixed(2)
       const result5=(res.data[0][5]*100).toFixed(2)
       const result6=(res.data[0][6 ]*100).toFixed(2)
        setPredictResult(res.data);
        console.log("1:"+result1);
        console.log("2:"+result2);
        console.log("3:"+result3);
        console.log("4:"+result4);
        console.log("5:"+result5);
        console.log("6:"+result6);

      var array=[result1,result2,result3,result4,result5,result6]
      const max_result=Math.max.apply(Math,array);
      console.log("max:"+max_result)

        return console.log(res.data[0][1]);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // function handlePredictModel (input) {
   
  //   // const input1 = e.target.input.value;
  //   // const newTest=startLiveUpdate();
  //   const input1 = input+"";
  //   console.log(input1+"testtren");
  //   try {
  //     if (input1 === "") {
  //       setErrMsg("Input should not empty");
  //     } else {
  //       const res = predictModel(input1);
  //       // const res1 =  predictModel(input);
  //       // console.log(startLiveUpdate.data1+"thu thoi");
  //       console.log(res);
  //       setPredictResult(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleFileChange = e => {
    if (e.target.files.length > 1) {
      setFileName(e.target.files[0].name + "-" + e.target.files[1].name);
    } else {
      setFileName(e.target.files[0].name);
    }
  };

 


//   useEffect(() =>{

//     var url_api = 'http://localhost:8000/api-smart-campus/get-data';

//     function  startLiveUpdate()  {

//          fetch(url_api)
//          .then(response => 
//                response.json()
//          )
//          .then(data1 => {
//           var arr_1 = data1;
//           var arr_2 = arr_1.reverse();
//           // console.log(arr_2);

        
//           // document.getElementById('hao').textContent=data1.data[0].air_temp +" "+data1.data[0].air_humi+" "+data1.data[0].soil_temp+" "+data1.data[0].soil_humi;
//           //  document.getElementById("hehe").value = arr_2[0].PM25+" "+arr_2[0].PM10+" "+arr_2[0].NO2+" "+arr_2[0].CO+" "+arr_2[0].SO2+" "+arr_2[0].O3;
//            data1=arr_2[0].PM25+" "+arr_2[0].PM10+" "+arr_2[0].NO2+" "+arr_2[0].CO+" "+arr_2[0].SO2+" "+arr_2[0].O3;
//             console.log("Get data  :   "+data1); 
//             console.log("--------------"); 
//           //  const res =  predictModel(data1);
//            // console.log(data);
//            // console.log(res);
//            // setPredictResult(res);
//            // return data1;
//            // handlePredictModel(data1);
//            dudoan(data1);
//            // console.log( JSON.stringify(predictResult) );
           
//          })
//          .catch(function(error){
//              console.log(error);
//          });
       

//    // return data2;
//    // console.log(data1+ "t");
//  }
       
//  setInterval(function(){ startLiveUpdate() },1000);
//   document.addEventListener('DOMContentLoaded', function(){
//       startLiveUpdate(); 
//  });





//     async  function dudoan(input1){
//       // let input2 = input1;
//       // const newTest=startLiveUpdate();
//       // const input1 = newTest;
//     //console.log(input2+"testtren");
  
//         if (input1 === "") {
//           setErrMsg("Input should not empty");
//         } else {
//           const res = await predictModel(input1);
        
//           // const res1 =  predictModel(input);
//           // console.log(startLiveUpdate.data1+"thu thoi");
//           //console.log(res);hb
  
  
//           setPredictResult(res.data);
//           var ar =(input1.split(' '));
//           // // ketqua();
//           console.log("Ket qua train:  ");
//           const result1=(res.data[0][1]*100).toFixed(2)
//           const result2=(res.data[0][2]*100).toFixed(2)
//           const result3=(res.data[0][3]*100).toFixed(2)
//           const result4=(res.data[0][4]*100).toFixed(2)
//           const result5=(res.data[0][5]*100).toFixed(2)
//           const result6=(res.data[0][6]*100).toFixed(2)
//            setPredictResult(res.data);
//            console.log("1:"+result1);
//            console.log("2:"+result2);
//            console.log("3:"+result3);
//            console.log("4:"+result4);
//            console.log("5:"+result5);
//            console.log("6:"+result6);
//           console.log("-------------");
//           axios.post(`http://localhost:8000/api-smart-campus/post-data-result`, {PM25: `${ar[0]}`, PM10: `${ar[1]}`, NO2:`${ar[2]}`,CO:`${ar[3]}`, SO2:`${ar[4]}`, O3:`${ar[5]}`,kq1:`${result1}`,kq2:`${result2}`,kq3:`${result3}`,kq4:`${result4}`,kq5:`${result5}`,kq6:`${result6}`})
//             .then(res => {
//               console.log(res);
//               console.log(res.data);
//             }).catch(err=>console.log(err))
           
//           console.log(ar);
     
            

         
//           // JSON.stringify(predictResult);
//           // {JSON.stringify(predictResult)};
//           //   ketqua();
//           //   console.log(JSON.stringify(predictResult) );
            
//         }
     
      
//     }
//   },[]);





  


 

  // function ketqua(){

  //   const kq=JSON.stringify(predictResult) ;
  //   console.log(kq+"oke");
  //   return kq;
    
    
   
  // }      
  

 
  
  
 
      

  // function handlePredictModel (input) {
  //   // e.preventDefault();
  //   // const input1 = e.target.input.value;
  //   // const newTest=startLiveUpdate();
  //   const nb = input;
  //   console.log(nb+"testtren");
  //   try {
  //     if (nb === "") {
  //       setErrMsg("Input should not empty");
  //     } else {
  //       const res = predictModel(nb);

  //       // const res1 =  predictModel(input);
  //       // console.log(startLiveUpdate.data1+"thu thoi");
  //       console.log(res+"hihihihihihi");
  //       // setPredictResult(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="container">
      <div className="card z-depth-3 row">
        <div className="card-content col s12 m12 l12">
          <span className="card-title center">Test your model</span>
          <form
            onSubmit={handleSubmitFile}
            className="row"
            encType="multipart/form-data"
            id="modelForm"
          >
            <div
              className="file-upload-wrapper col s12 m4 l6 offset-l3 mb-20"
              data-text={fileName}
            >
              <input
                type="file"
                name="myFile"
                id="myFile"
                onChange={handleFileChange}
                multiple
              />
            </div>

            <div className="col s12 center">
              <button type="submit" className="btn waves-effect waves-light">
                Upload
              </button>
            </div>
          </form>
          <div className="row">
            {errMsg ? (
              <div className="col s12 center red-text">{errMsg}</div>
            ) : null}
            {resMsg ? (
              <div className="col s12 center green-text">{resMsg}</div>
            ) : null}
          </div>
          <div  className="card-action center">
            
            <form onSubmit={handlePredictModel}  className="row">
             <div name="input" id="hao"></div>
              <div className="input-field col s12 "  > 
              <input type="text" name="input" id="hehe"  />
         
              </div>
              
              <button
                className="btn waves-effect waves-light center purple darken-2"
                name="action"
              >
                
                Predict
              </button>
                  
            </form>
            <div className="row">
              <div className="col s12 center purple-text">
                <div >
                {/* {predictResult.length ? JSON.stringify(predictResult) : null} */}
             
                
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ModelTest;


