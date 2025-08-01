import axios from "axios"

import { useEffect, useRef, useState } from "react"





export function CarouselDemoo(){



    const [product, setProduct] = useState({id:0, title:null, description:null, image:null, category:null, price:0, rating:{rate:0, count:0}})



    let productId = useRef(1);



    function LoadProductManually(id){

        axios.get(`https://fakestoreapi.com/products/${id}`)

        .then(response=>{

            setProduct(response.data);

        })

    }



    function handleNextClick(){

        productId.current = productId.current + 1;

        LoadProductManually(productId.current);

    }

    function handPreviousClick(){

        productId.current = productId.current - 1;

        LoadProductManually(productId.current);

    }

    function handleSeekbarChange(e){

         productId.current = e.target.value;

         LoadProductManually(productId.current);

    }



    useEffect(()=>{

        LoadProductManually(1);

    },[])



    return(

        <div className="container-fluid d-flex justify-content-center">

            <div className="card w-50 p-2 mt-4">

                <div className="card-header text-center">

                    <div>{product.title}</div>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">

                            <button onClick={handPreviousClick} className="btn btn-dark bi bi-chevron-left"></button>

                        </div>

                        <div className="col-10">

                            <img src={product.image} width="100%" height="400" />

                            <div className="mt-2">

                                <input type="range" onChange={handleSeekbarChange} min="1" max="20" value={productId.current} className="form-range" />

                            </div>

                        </div>

                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">

                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>

                        </div>

                    </div>

                </div>

                <div className="card-footer text-center">

                    <button className="btn btn-success bi bi-play"></button>

                    <button className="btn btn-danger mx-2 bi bi-pause"></button>

                </div>

            </div>

        </div>

    )

}