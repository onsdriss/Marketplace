import React from 'react'

const ProductStatistics = () => {
  return (
    <>
            <div className='col-xl-12 col-lg-12'>
                <div className='card mb-4 shadow-sm'>
                    <article className='card-title'> 
                    
                        <iframe style={{
                            background: "#FFFFFF",
                            border: "none",
                            borderRadius: "2px",
                            
                            width:"95%" ,
                            height:"350px" ,
                        }}
                            src="https://charts.mongodb.com/charts-project-0-pzofh/embed/charts?id=62ee8abc-da79-4d78-8956-438c3eb25728&maxDataAge=3600&theme=light&autoRefresh=true">
                        </iframe> 
                    </article>
                </div>
            </div>
    </>
    
  )
}

export default ProductStatistics