import React, {useState, useEffect} from 'react'

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async() =>{
            setLoading(true);
            const response =await fetch("http://localhost:8000/honda");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () =>{
                componentMounted =false;
            }
        }
      getProducts();
    
     
    }, []);
    
    const Loading = () =>{
        return (
            <>
            Loading...
            </>
        )
    }
    const ShowProducts =() =>{
        return(
            <>
            {filter.map((product) =>{
                return(
                    <>
                    <div className="col-md-3 ">
                    <div class="card">
                    <a href={product.to}>
                        <img src={product.image} class="card-img-top h-200 w-200" alt={product.title} />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">{product.price}</p>
                            <a href={product.to} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })}
            </>
        )
    }

  return (
    <div>
        <div className="container my-4 py-5">
            <div className="row ">
                <div className="col-12 mb-4">
                    <h1 className='display-6 fw-bolder text-center'>Sản Phẩm</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                { loading ?<Loading/> :<ShowProducts/>}
            </div>
        </div>

    </div>
  )
}
