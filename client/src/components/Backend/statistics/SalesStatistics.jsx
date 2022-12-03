import React from 'react'

const SalesStatistics = () => {
  return (
    <div className='col-xl-12 col-lg-12'>
        <div className='card mb-4 shadow-sm'>
            <article className='card-title'> 
            
                <iframe style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "2px",
                    //boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                    width:"95%" ,
                    height:"450px" ,
                }}
                    src="https://charts.mongodb.com/charts-project-0-pzofh/embed/charts?id=62ee8773-1798-41ce-8486-f5d5436c011a&maxDataAge=3600&theme=light&autoRefresh=true">
                </iframe> 
            </article>
        </div>
    </div>
  )
}

export default SalesStatistics