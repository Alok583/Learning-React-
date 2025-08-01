import axios from "axios"
import { useEffect, useRef, useState } from "react"
export function CarausalDemo (){

const[product, setProduct] = useState({id:100, title:null, des:null, image:null, category:null, price:0, brand:null});

let productid = useRef(100);

       
    function LoadProductManually(id){

        axios.get(`https://fakestoreapiserver.reactbd.org/api/walmartproducts?page=1&perPage=50${id}`)

        .then(response=>{

            setProduct(response.data);

        })

    }

function handleNextClick(){
    productid.current = productid.current + 1;
    LoadProductManually(productid.current);
}
function handlePreviousClick(){
    productid.current = productid.current - 1;
    LoadProductManually(productid.current);
}


function handleSeekbarChange(e){
productid.current = e.target.value;
LoadProductManually(productid.current);
}

useEffect(()=>{
    LoadProductManually(1)
}
)

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card w-100 p-1 mt-1">

            <div className="card-header text-center">
                <div>
                        {product.title}
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePreviousClick} className="btn btn-dark bi bi-chevron-left"></button>
                        </div>

                        <div className="col-10">
                            <img src={product.image} width="100%"height="400"/>
                            <div className="mt-2">
                                <input type="range" onChange={handleSeekbarChange} min="1" max="190" value={productid.current} className="form-range"/>
                            </div>
                            
                        </div>
                        <div  className="col-1 d-flex flex-column justify-content-center align-content-center">
                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-success bi bi-play"></button>
                    <button className="btn btn-danger bi bi-pause"></button>
                </div>
            </div>

            </div>
            
        </div>
    )
}