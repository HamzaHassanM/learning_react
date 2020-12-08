import React, { Component } from 'react';
import Headera from '../layouts/header';

class index extends Component{

    constructor(){
        super();
        this.state = {
            isLoaded: false,
            items: [],
            error :'',
        };
    }

    componentDidMount() {
        fetch("https://refugee-news.com/wp-json/wp/v2/posts?per_page=9")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });

              console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (

            


            <div>
                <Headera/>
                <div className="container">
                <div className="row h-100">
                {this.state.items.map(item => (

                    <div key={item.id} className="card col-lg-3 text-center" style={{margin : "1px"}} >
                         <img className="card-img-top" src={item.jetpack_featured_media_url} alt="Card image"/>
                         <div className="card-body">
                        <h4 className="card-title">{item.title.rendered}</h4>
                        <a href={item.guid.rendered} className="btn btn-primary">المزيد</a>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>

            
            </div>
            
          );
        }

    }

}


export default index;