import React, { Component } from 'react';


function PortfolioCat(props) {
   let result = props.List.map(function(project){        
      var imageUrl = 'images/portfolio/'+ project.image;
            return( 
               
            <div key={project.title} style={{marginBottom:'0.5rem'}} className="columns portfolio-item">
         <div className="item-wrap">
            <a href={project.url} target="_blank" rel="noopener noreferrer" title="">
               <img alt="" src={imageUrl} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.title}</h5><p>{project.category}</p>
              </div>
               </div>
            </a>
         </div>
     </div>
     )
    });
    
 return ( result.length === 0)? false :(
   <div id={props.Title +'-wrapper'} className="bgrid-thirds s-bgrid-thirds cf">
   <h4 style={{color:'#8bc34a'}}>{props.Title}</h4>
   {result}
   </div>
 );
   }

class Portfolio extends Component {
  render() {
    if(this.props.data){
       var portfolioAngular = this.props.data.projects.filter(p=>{return p.category.includes('Angular')});
       var UI = this.props.data.projects.filter(p=>{return p.category.includes('UI')});
       var portfolioJS = this.props.data.projects.filter(p=>{return p.category.includes('Javascript')});
       var portfolioNode = this.props.data.projects.filter(p=>{return p.category.includes('Node')});
       var AllCat = Array.prototype.concat(portfolioAngular, UI, portfolioJS,portfolioNode);
       var portfolioOther = this.props.data.projects.filter(p => !AllCat.includes(p));
    }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed text-center">
            <h1>Check Out Some of My Skills. ( Uploading... )</h1>
            <PortfolioCat Title={'UI and Mobile Responsive'} List={UI} />
            {/* <PortfolioCat Title={'Angular'} List={portfolioAngular} /> */}
            {/* <PortfolioCat Title={'Javascript'} List={portfolioJS} /> */}
            <PortfolioCat Title={'Back-end Development'} List={portfolioNode} />
            {/* <PortfolioCat Title={'Other'} List={portfolioOther} /> */}
            </div>
         </div>
   </section>
    );
  }
}

export default Portfolio;