import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import {main,portfolio,resume,testimonials} from './resumeData.json'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: main,
        portfolio: portfolio,
        resume: resume,
        testimonials: testimonials
      }
    }
  }




  render() {
  
    return (
      <div className="App">
        <Header data={main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        {/*<Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
